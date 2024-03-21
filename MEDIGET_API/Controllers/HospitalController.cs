using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("Hospitales")]
    [ApiController]
    [Authorize]
    public class HospitalController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IHospitalRepositorio _hospitalRepositorio;

        public HospitalController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _hospitalRepositorio = new HospitalRepositorio(_configuration);
        }

        // .A.C.C.I.O.N -- Para obtener la lista de Hospitales: --------------------------------------------
        [Authorize]
        [Route("ObtenerHospitales")]
        [HttpGet]
        public IActionResult getHospitales()
        {
            try
            {
                var listaHospitales = _hospitalRepositorio.GetHospitales();
                _respuesta.Result = listaHospitales;
                _respuesta.DisplayMessage = "Listado de hospitales obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de hospitales";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }

        // .A.C.C.I.O.N -- Para Insertar un hospital: --------------------------------------------
        [Authorize]
        [Route("InsertarHospital")]
        [HttpPost]
        public IActionResult insertarHospitals(Hospital hospital)
        {
            try
            {
                //
                hospital.IdCreadoPor = 1;
                //
                var resultInsertHospital = _hospitalRepositorio.InsertarHospital(hospital);
                _respuesta.Result = resultInsertHospital;
                _respuesta.DisplayMessage = "Hospital insertado con exito";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al insertar el hospital";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}