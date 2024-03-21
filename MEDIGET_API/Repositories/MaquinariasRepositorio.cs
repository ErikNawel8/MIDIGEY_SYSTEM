using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class MaquinariasRepositorio : ImaquinariasRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;
        private IConfiguration configuration;

        public MaquinariasRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<MaquinariasDTO> GetMaquinarias()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.ObtenerListaMaquinarias";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<MaquinariasDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }
    }
}
