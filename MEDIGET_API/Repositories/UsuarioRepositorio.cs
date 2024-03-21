﻿using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using System;
using System.Data;
using System.Runtime.InteropServices;
using System.Transactions;
using System;
using System.Data;
using System.Collections.Generic;

namespace MEDIGET_API.Repositories
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public UsuarioRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        // REPOSITORIO--A-P-I----P-R-O-Y-E-N-E-T-T ------ (Metodo para DEVOLVER una LISTA de Usuario):
        public IEnumerable<UsuarioDTO> getUsuario()
        {
            string query = "Execute dbo.ListaUsuario";
            var resultSet = _conexionDB.GetConnection(_configuration).Query<UsuarioDTO>(query);
            return resultSet.ToList();
        }

        // REPOSITORIO--A-P-I----P-R-O-Y-E-N-E-T-T ------ (Metodo para INSERTAR USUARIO):
        public string  InsertarUsuario(Usuario usuario)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();

            try
            {
                // -
                // - ..I.N.S.E.R.T.. Insertando en la tabla usuario: ........................................
                string usuarioInsert = "dbo.InsertarUsuario";
                var data = new
                {
              
                    usuario.NombreUsuario,
                    usuario.Correo,
                    usuario.Contraseña,
                    usuario.IdEmpleado,
                    usuario.IdCreadoPor,

                };
                var userIdInsertado = connection.ExecuteScalar<string>(usuarioInsert, data, commandType: CommandType.StoredProcedure);

                // Recorrer el arreglo de Roles que se seleccionaron el form al crear el usuario:
                foreach (var idRol in usuario.RolesIds)
                {
                    string procInsertUsuarioRol = "InsertarUsuariosRoles";
                    connection.Execute(procInsertUsuarioRol, 
                        new { 
                            IdUsuario = userIdInsertado,
                            IdRol = idRol,
                            usuario.IdCreadoPor
                        }, commandType: CommandType.StoredProcedure);
                }
                
                return userIdInsertado;
            }
            catch (Exception ex)
            {
      
                connection.Close();
                throw ex;
            }
            connection.Close();
        }

        // REPOSITORIO--A-P-I----P-R-O-Y-E-N-E-T-T ------ (Metodo para actualizar USUARIO):
        public void ActualizarUsuario(Usuario usuario)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();


            try
            {
                // -
                // - ..I.N.S.E.R.T.. Actualizar en la tabla usuario: ........................................
                string usuarioActualizar = "dbo.ActualizarUsuario";
                var data = new
                {
                    IdUsuario = usuario.IdUsuario,
                    NombreUsuario = usuario.NombreUsuario,
                    Correo = usuario.Correo,
                    Contraseña = Segurity.Segurity.HashPassword(usuario.Contraseña).ToString(),
                    IdEmpleado = usuario.IdEmpleado,
                    IdCreadoPor = usuario.IdCreadoPor,

                };
                connection.Execute(usuarioActualizar, data, commandType: CommandType.StoredProcedure);
            }
            catch (Exception ex)
            {

                connection.Close();
                throw ex;
            }
            connection.Close();
        }


        public InfoPerfilDTO GetInfoPerfil(int idUsuario)
        {
            string procedure = "dbo.InformacionBasicaUsuario_ByIdUsuario";
            var resultSet = _conexionDB.GetConnection(_configuration).Query(procedure, new { IdUsuario = idUsuario }, commandType: CommandType.StoredProcedure).ToList();

            InfoPerfilDTO infoPerfil = new InfoPerfilDTO();

            infoPerfil.IdUsuario = resultSet[0].IdUsuario;
            infoPerfil.NombreUsuario = resultSet[0].NombreUsuario;
            infoPerfil.Correo = resultSet[0].Correo;
            infoPerfil.NombreRol = resultSet[0].NombreRol;
            infoPerfil.IdRol = resultSet[0].IdRol;
            infoPerfil.IdEmpleado = resultSet[0].IdEmpleado;
            infoPerfil.Nombres = resultSet[0].Nombres;
            infoPerfil.Apellidos = resultSet[0].Apellidos;
            infoPerfil.Cedula = resultSet[0].Cedula;
            infoPerfil.Direccion = resultSet[0].Direccion;
            infoPerfil.Edad = resultSet[0].Edad;
            infoPerfil.FechaDeNacimiento = resultSet[0].FechaDeNacimiento;

            string procedure2 = "dbo.CargosEmpleado_ByEmpleadoId";
            var resultSet2 = _conexionDB.GetConnection(_configuration).Query(procedure2, new { IdEmpleado = infoPerfil.IdEmpleado }, commandType: CommandType.StoredProcedure).ToList();

            foreach (var result in resultSet2)
            {
                CargoDTO newCargo = new CargoDTO();
                newCargo.IdCargo = result.IdCargo;
                newCargo.NombreCargo = result.NombreCargo;
                infoPerfil.Cargos.Add(newCargo);
            }

            return infoPerfil;
        }

       
        public UsuarioDTO GetUsuarioLogin(string NombreUsuario, string Contraseña)
        {
            // Obtengo el usuario:
            UsuarioDTO usuario = _conexionDB.GetConnection(_configuration).QueryFirstOrDefault<UsuarioDTO>("dbo.GetUsuarioLogin",
                new { NombreUsuario, Contraseña },
                commandType: CommandType.StoredProcedure);

            
            if (usuario != null)
            {
                // Obtengo los roles del usuario: GetRolesByUsuarioId
                var roles = _conexionDB.GetConnection(_configuration).Query<Rol>("dbo.GetRolesByUsuarioId", new { usuario.IdUsuario }, commandType: CommandType.StoredProcedure).ToList();
                usuario.Roles = roles;
            }

            return usuario;
        }




        //
        // REPOSITORIO--A-P-I----P-R-O-Y-E-N-E-T-T ------ (Metodo para DESACTIVAR/ELIMINAR CLIENTES):
        public void EliminarUsuario(int IdUsuario)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // - Eliminando en la tabla
                connection.Execute("dbo.DesactivarUsuario", new { IdUsuario }, transaction,
                    commandType: CommandType.StoredProcedure);

                transaction.Commit();
            }

            catch (Exception ex)
            {
                transaction.Rollback();
                connection.Close();
                throw ex;
            }
            connection.Close();
        }


        //
        // REPOSITORIO--A-P-I----P-R-O-Y-E-N-E-T-T ------ (Metodo para ACTIVAR/ELIMINAR CLIENTES):
        public void ActivarUsuario(int IdUsuario)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // - ACTIVANDO/RESTAURANDO
                connection.Execute("dbo.RestaurarUsuario", new { IdUsuario }, transaction,
                    commandType: CommandType.StoredProcedure);

       

                transaction.Commit();
            }

            catch (Exception ex)
            {
                transaction.Rollback();
                connection.Close();
                throw ex;
            }
            connection.Close();
        }
    }
}
