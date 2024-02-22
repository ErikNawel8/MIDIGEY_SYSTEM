using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;

namespace MEDIGET_API.Controllers
{
    [Route("Empleados")]
    [ApiController]
    //[Authorize]
    public class EmpleadoController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IEmpleadoRepositorio _empleadoRepositorio;

        public EmpleadoController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _empleadoRepositorio = new EmpleadoRepositorio(_configuration);
        }


        // .A.C.C.I.O.N -- Para obtener la lista basica de Emepleado: --------------------------------------------
        //[Authorize]
        [Route("obtenerEmpleados")]
        [HttpGet]
        public IActionResult getEmpleado()
        {
            try
            {
                var listaEmpleado = _empleadoRepositorio.GetEmpleado();
                _respuesta.Result = listaEmpleado;
                _respuesta.DisplayMessage = "Listado de empleado obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de Empleado";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
   
        }

    }

}
