using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class ProvinciaRepositorio : IProvinciaRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public ProvinciaRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<ProvinciaDTO> GetProvincias()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.GetProvinciasForSelectOp";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<ProvinciaDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }
    }
}
