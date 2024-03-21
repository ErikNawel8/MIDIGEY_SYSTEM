using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class RegionRepositorio : IRegionRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public RegionRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<RegionDTO> GetRegiones()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.GetRegionesForSelectOp";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<RegionDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }
    }
}
