using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("VistasModulos")]
    [ApiController]
    [Authorize]
    public class VistaModuloController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IVistaModuloRepositorio _vistaModuloRepositorio;

        public VistaModuloController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _vistaModuloRepositorio = new VIstaModuloRepositorio(_configuration);
        }

        // .A.C.C.I.O.N -- Para obtener la lista de VistasModulos: --------------------------------------------
        [Authorize]
        [Route("GetVistasModulosParaSO")]
        [HttpGet]
        public IActionResult getVistasMOdulos()
        {
            try
            {
                var listaVistas = _vistaModuloRepositorio.GetVistasModulos();
                _respuesta.Result = listaVistas;
                _respuesta.DisplayMessage = "Listado de vistas modulos obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de vistas modulos";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }


        // .A.C.C.I.O.N -- Para obtener la lista de VistasMVsConfiguracion: --------------------------------------------
        [Authorize]
        [Route("VistasModulosValoresConfiguracion")]
        [HttpGet]
        public IActionResult GetVistasMVsConfiguracion()
        {
            try
            {
                var listaVistas = _vistaModuloRepositorio.GetVistasModulosValuesConfiguracion();
                _respuesta.Result = listaVistas;
                _respuesta.DisplayMessage = "Listado de valores config obteido:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de valores config";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
