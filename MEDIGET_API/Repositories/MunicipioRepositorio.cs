using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using System.Data;

namespace MEDIGET_API.Repositories
{
    public class MunicipioRepositorio : IMunicipioRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public MunicipioRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }


        public IEnumerable<MunicipioDTO> GetMunicipios()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.GetMunicipiosForSelectOp";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<MunicipioDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }
    }
}
