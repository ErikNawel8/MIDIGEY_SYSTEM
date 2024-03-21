using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("Regiones")]
    [ApiController]
    [Authorize]
    public class RegionControllerr : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IRegionRepositorio _regionRepositorio;

        public RegionControllerr(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _regionRepositorio = new RegionRepositorio(_configuration);
        }

        // .A.C.C.I.O.N -- Para obtener la lista de Regiones: --------------------------------------------
        [Authorize]
        [Route("GetRegionesForSO")]
        [HttpGet]
        public IActionResult getRegiones()
        {
            try
            {
                var listaRegiones = _regionRepositorio.GetRegiones();
                _respuesta.Result = listaRegiones;
                _respuesta.DisplayMessage = "Listado de regiones obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de regiones";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
