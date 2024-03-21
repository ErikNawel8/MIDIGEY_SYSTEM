using MEDIGET_API.Interfaces;
using Dapper;
using Microsoft.Data.SqlClient;
using MEDIGET_API.DTO;
using MEDIGET_API.Models;
using System.Data;
using Newtonsoft.Json;

namespace MEDIGET_API.Repositories
{
    public class EmpleadoRepositorio : IEmpleadoRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public EmpleadoRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        //
        IEnumerable<EmpleadoDTOVAA> IEmpleadoRepositorio.GetEmpleado()
        {
            string query = "dbo.ObtenerListaEmpleados";
            var resultSet = _conexionDB.GetConnection(_configuration).Query<EmpleadoDTOVAA>(query, commandType: CommandType.StoredProcedure);
            return resultSet.ToList();
        }

        //

        public IEnumerable<EmpleadoSelectOptionDTO> GetEmpleadosForSelectOption()
        {
            string query = "dbo.GetListaEmpleadosParaSelectOption";
            var resultSet = _conexionDB.GetConnection(_configuration).Query<EmpleadoSelectOptionDTO>(query, commandType: CommandType.StoredProcedure);
            return resultSet.ToList();
        }
    }
}
