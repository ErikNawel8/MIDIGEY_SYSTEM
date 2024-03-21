using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class VIstaModuloRepositorio : IVistaModuloRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public VIstaModuloRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<VistaModuloDTO> GetVistasModulos()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.GetVistasModulosParaSO";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<VistaModuloDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }

        public List<VistaModuloValuesConfiguracion> GetVistasModulosValuesConfiguracion()
        {
            //Obtengo las vistas modulos:
            string query = "dbo.GetVistasModulosParaConfiguracion";
            var vistasModulos = _conexionDB.GetConnection(_configuration).Query<VistaModuloDTO>(query, commandType: CommandType.StoredProcedure);

            List<VistaModuloValuesConfiguracion> VistasMVsConfiguracion = new List<VistaModuloValuesConfiguracion>();

            //Por cada vista modulo obtengo cuales roles tienen acceso a esa vistamodulo:
            foreach (var vistaModulo in vistasModulos)
            {
                VistaModuloValuesConfiguracion vMVConfiguracion = new VistaModuloValuesConfiguracion();
                vMVConfiguracion.IdVistaModulo = vistaModulo.IdVistaModulo;
                vMVConfiguracion.NombreVistaModulo = vistaModulo.NombreVistaModulo;
                VistasMVsConfiguracion.Add(vMVConfiguracion);

                //Obtengo las vistas modulos:
                string query2 = "dbo.GetRolesIdsPorIdVistaModulo";
                var rolesIds = _conexionDB.GetConnection(_configuration).Query<VistaModuloRolDTO>(query2, new { vistaModulo.IdVistaModulo },
                    commandType: CommandType.StoredProcedure).ToList();

                //Asignar los roles con acceso a la vista:
                if (rolesIds.Count > 0)
                {
                    List<int> listaEnteros = rolesIds.Select(v => v.IdRol).ToList();
                    vMVConfiguracion.RolesConAcceso = listaEnteros;
                }
            }
            return VistasMVsConfiguracion.ToList();
        }
    }
}