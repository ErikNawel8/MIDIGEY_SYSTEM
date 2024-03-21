using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    // .A.C.C.I.O.N -- Para Insertar un hospital: --------------------------------------------
    [Authorize]
    [Route("Maquinarias")]
    [ApiController]
    public class MaquinariasController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly ImaquinariasRepositorio _MaquinariasRepositorio;

        public MaquinariasController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _MaquinariasRepositorio = new MaquinariasRepositorio(_configuration);
        }

        // .A.C.C.I.O.N -- Para obtener la lista de Hospitales: --------------------------------------------
        [Authorize]
        [Route("ObtenerMaquinas")]
        [HttpGet]
        public IActionResult getMaquinarias()
        {
            try
            {
                var listaMaquinarias = _MaquinariasRepositorio.GetMaquinarias();
                _respuesta.Result = listaMaquinarias;
                _respuesta.DisplayMessage = "Listado de Maquinas obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de Maquinas";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
