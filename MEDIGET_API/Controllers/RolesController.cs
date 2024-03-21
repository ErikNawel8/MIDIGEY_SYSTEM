using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MEDIGET_API.Controllers
{
    [Route("Roles")]
    [ApiController]
    [Authorize]
    public class RolesController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IRolRepositorio _rolRepositorio;

        public RolesController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _rolRepositorio = new RolRepositorio(_configuration);
        }

        [Authorize]
        [Route("ObtenerRoles")]
        [HttpGet]
        public IActionResult GetListaRoles()
        {
            try
            {
                var listaRoles = _rolRepositorio.GetListaRoles();
                _respuesta.Result = listaRoles;
                _respuesta.DisplayMessage = "Listado de Roles obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de Roles";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }

        [Authorize]
        [Route("ObtenerListaPrincipalRoles")]
        [HttpGet]
        public IActionResult GetListaPrincipalRoles()
        {
            try
            {
                var listaRoles = _rolRepositorio.GetRolesListaPrincipal();
                _respuesta.Result = listaRoles;
                _respuesta.DisplayMessage = "Listado de Roles obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de Roles";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }


        [Authorize]
        [Route("EditarRol")]
        [HttpPost]
        public IActionResult EditarRol(Rol rol)
        {
            try
            {
                // string token = HttpContext.Request.Headers["Authorization"];
                // usuario.IdCreadoPor = _infoUser.getUsuarioIdByToken(token);
                rol.IdModificadoPor = 1;

                var executeEditRol = _rolRepositorio.EditarRol(rol);
                _respuesta.Result = executeEditRol;
                _respuesta.DisplayMessage = "Rol editado correctamente";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al editar el rol";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }


        [Authorize]
        [Route("InsertarRol")]
        [HttpPost]
        public IActionResult InsertarRol(Rol rol)
        {
            try
            {
                rol.IdCreadoPor = 1;

                var executeCreateRol = _rolRepositorio.InsertarRol(rol);
                _respuesta.Result = executeCreateRol;
                _respuesta.DisplayMessage = "Rol insertado correctamente";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al insertar el rol";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }


        [Authorize]
        [Route("CambiarEstadoRol")]
        [HttpPost]
        public IActionResult CambiarEstado(RolEstado rolEstado)
        {
            try
            {
                rolEstado.IdModificadoPor = 1;

                var executeCreateRol = _rolRepositorio.CambiarEstadoRol(rolEstado);
                _respuesta.Result = executeCreateRol;
                _respuesta.DisplayMessage = "Estado del rol modificado correctamente";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al modificar el estado el rol";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
