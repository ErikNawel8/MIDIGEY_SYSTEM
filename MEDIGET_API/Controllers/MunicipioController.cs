using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("Municipios")]
    [ApiController]
    [Authorize]
    public class MunicipioController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IMunicipioRepositorio _municipioRepositorio;

        public MunicipioController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _municipioRepositorio = new MunicipioRepositorio(_configuration);
        }

        // .A.C.C.I.O.N -- Para obtener la lista de Municipios: --------------------------------------------
        [Authorize]
        [Route("GetMunicipiosForSO")]
        [HttpGet]
        public IActionResult getRegiones()
        {
            try
            {
                var listaMun = _municipioRepositorio.GetMunicipios();
                _respuesta.Result = listaMun;
                _respuesta.DisplayMessage = "Listado de municipios obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de municipios";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
