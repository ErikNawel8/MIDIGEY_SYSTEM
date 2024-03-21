using Dapper;
using MEDIGET_API.DTO;
using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using System.Data;
using static System.Net.Mime.MediaTypeNames;

namespace MEDIGET_API.Repositories
{
    public class HospitalRepositorio : IHospitalRepositorio
    {
        private readonly IConfiguration _configuration;
        private readonly ConexionDB _conexionDB;

        public HospitalRepositorio(IConfiguration configuration)
        {
            _configuration = configuration;
            _conexionDB = new ConexionDB();
        }

        public IEnumerable<HospitalDTO> GetHospitales()
        {
            // Nombre del proceimiento a ejecutar
            string query = "dbo.ObtenerListaHospitales";

            //Ejecucion:
            var resultSet = _conexionDB.GetConnection(_configuration).Query<HospitalDTO>(query, commandType: CommandType.StoredProcedure);

            return resultSet.ToList();
        }

        // METODO PARA INSERTAR HOSPITAL
        public string InsertarHospital(Hospital hospital)
        {
            var connection = _conexionDB.GetConnection(_configuration);
            connection.Open();
            var transaction = connection.BeginTransaction();

            try
            {
                connection.Execute("dbo.InsertarHospital",
                    new
                    {
                        hospital.Nombre,
                        hospital.Codigo,
                        hospital.IdMunicipio,
                        hospital.Telefono1,
                        hospital.Telefono2,
                        hospital.Descripcion,
                        hospital.Email,
                        hospital.Direccion,
                        hospital.IdCreadoPor,
                        hospital.IdEstadoRegistro,
                    }, transaction, commandType: CommandType.StoredProcedure);

                //
                transaction.Commit();
                connection.Close();

                return hospital.Nombre;
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
