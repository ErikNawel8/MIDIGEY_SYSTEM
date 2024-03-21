using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("Provincias")]
    [ApiController]
    [Authorize]
    public class ProvinciaControllerr : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IProvinciaRepositorio _provinciaRepositorio;

        public ProvinciaControllerr(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _provinciaRepositorio = new ProvinciaRepositorio(_configuration);
        }


        // .A.C.C.I.O.N -- Para obtener la lista de Provincias: --------------------------------------------
        [Authorize]
        [Route("GetProvinciasForSO")]
        [HttpGet]
        public IActionResult getRegiones()
        {
            try
            {
                var listaProvincias = _provinciaRepositorio.GetProvincias();
                _respuesta.Result = listaProvincias;
                _respuesta.DisplayMessage = "Listado de provinciass obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de provincias";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }

    }
}
