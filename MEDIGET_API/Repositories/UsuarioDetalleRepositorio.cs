using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using System.Data;
using System.Reflection.Metadata;

namespace MEDIGET_API.Repositories
{
    public class UsuarioDetalleRepositorio : IUsuaroDetalleRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public UsuarioDetalleRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<UsuarioDetalleDTO> GetUsuaros()
        {
            string query = "dbo.ObtenerUsuariosConDetalle";  //nombre del procedimiento a ejecutor
            var resultSet = _conexionDB.GetConnection(_configuration).Query<UsuarioDetalleDTO>(query, commandType: CommandType.StoredProcedure);
            return resultSet.ToList();
        }

        public string InsertarUsuario(Usuario usuario)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // 1 - Insertar en la tabla Usuarios:
                int userIdInsertado = connection.ExecuteScalar<int>("dbo.CrearUsuario", 
                    new {
                        usuario.NombreUsuario,
                        usuario.Correo,
                        usuario.Contraseña,
                        usuario.IdEmpleado,
                        usuario.IdCreadoPor,
                    }, transaction, commandType: CommandType.StoredProcedure);

                // 2 - Recorrer el array de RolesIds Seleccionados en el form:
                // Recorrer el arreglo de Roles que se seleccionaron el form al crear el usuario:
                foreach (var idRol in usuario.RolesIds)
                {
                    // Por cada RolId Se hace un insert en la tabla UsuariosRoles:
                    string procInsertUsuarioRol = "InsertarUsuariosRoles";
                    connection.Execute(procInsertUsuarioRol,
                        new
                        {
                            IdUsuario = userIdInsertado,
                            IdRol = idRol,
                            usuario.IdCreadoPor
                        }, transaction, commandType: CommandType.StoredProcedure);
                }


                transaction.Commit();
                connection.Close();

                return usuario.NombreUsuario;
            }

            catch (Exception ex)
            {
                transaction.Rollback();
                connection.Close();
                throw ex;
            }
        }
    }
}
