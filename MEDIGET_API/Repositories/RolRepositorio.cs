using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class RolRepositorio : IRolRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public RolRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        class IdsVistaModulo
        {
            public int IdVistaModulo { get; set; }
        }

        public IEnumerable<RolesDTO> GetListaRoles()
        {
            string query = "dbo.GetListaRoles";
            var resultSet = _conexionDB.GetConnection(_configuration).Query<RolesDTO>(query, commandType: CommandType.StoredProcedure);
            return resultSet.ToList();
        }

        public IEnumerable<RolListaDTO> GetRolesListaPrincipal()
        {
            string query = "dbo.GetListaPrincipalRoles";
            var resultSet = _conexionDB.GetConnection(_configuration).Query<RolListaDTO>(query, commandType: CommandType.StoredProcedure);

            foreach (var rol in resultSet)
            {
                // obtengo los IdsVistas a los que tiene acceso el rol:
                string query2 = "dbo.GetIdsVistasModulosPorRolId";
                var rolesResultSet = _conexionDB.GetConnection(_configuration).Query<IdsVistaModulo>(query2, new { RolId = rol.IdRol }, commandType: CommandType.StoredProcedure);

                //Asigno una lista de enteros a IdsVistasRoles:
                List<int> listaEnteros = rolesResultSet.ToList().Select(rol => rol.IdVistaModulo).ToList();
                rol.IdsVistasModulosRoles = listaEnteros;
            }

            return resultSet.ToList();
        }

        public string EditarRol(Rol rol)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // 1 - Edito en la tabla Roles:
                connection.Execute("dbo.EditarRol",
                    new
                    {
                        rol.IdRol,
                        rol.Descripcion,
                        rol.NombreRol,
                        rol.IdModificadoPor,
                    }, transaction, commandType: CommandType.StoredProcedure);

                // 1 - Edito en la tabla VistasModulosRoles:
                // 1.1 Inserto los nuevos VistasModulosRoles (los nuevos que vienen en la data y que no estan en la BD):
                // 1.2 Elimino los que no vienen en la data pero que si estan en la BD
                // 1.3 Dejo tal cual los que vienen en la data y estan en la bd

                //
                string IdsCadena = string.Join(",", rol.IdsVistasModulosRoles);

                connection.ExecuteScalar<int>("dbo.ActualizarVistasModulosRoles",
                    new
                    {
                        IdsCadena,
                        rol.IdRol,
                        IdUsuario = rol.IdModificadoPor,
                    }, transaction, commandType: CommandType.StoredProcedure);

                transaction.Commit();
                connection.Close();

                return rol.NombreRol;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                connection.Close();
                throw ex;
            }
        }

        public string InsertarRol(Rol rol)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // 1 - Edito en la tabla Roles:
                int idRolInsertado = connection.ExecuteScalar<int>("dbo.InsertarRol",
                    new
                    {
                        rol.NombreRol,
                        rol.Descripcion,
                        rol.IdCreadoPor,
                    }, transaction, commandType: CommandType.StoredProcedure);

                // 1 - Insertar en la tabla VistasModulosRoles:

                string IdsCadena = string.Join(",", rol.IdsVistasModulosRoles);

                connection.Execute("dbo.InsertarVistasModuloRoles",
                    new
                    {
                        IdRol = idRolInsertado,
                        NumerosCadena = IdsCadena,
                        rol.IdCreadoPor,
                    }, transaction, commandType: CommandType.StoredProcedure);

                transaction.Commit();
                connection.Close();

                return rol.NombreRol;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                connection.Close();
                throw ex;
            }
        }

        public int CambiarEstadoRol(RolEstado rolEstado)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                // 1 - Edito en la tabla Roles:
                connection.Execute("dbo.CambiarEstadoRol",
                    new
                    {
                        rolEstado.IdRol,
                        rolEstado.IdEstado,
                        rolEstado.IdModificadoPor
                    }, transaction, commandType: CommandType.StoredProcedure);

                transaction.Commit();
                connection.Close();

                return rolEstado.IdRol;
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
