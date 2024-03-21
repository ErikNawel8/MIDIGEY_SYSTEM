using MEDIGET_API.Interfaces;
using MEDIGET_API.Models;
using MEDIGET_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectNettApi.Repositories;

namespace MEDIGET_API.Controllers
{
    [Route("UsuarioDetalle")]
    [ApiController]
    public class UsuarioDetalleController : ControllerBase
    {
        protected Respuesta _respuesta;
        private readonly IConfiguration _configuration;
        private readonly IUsuaroDetalleRepositorio _usuaroDetalleRepositorio;
        private readonly InfoUserByToken _infoUser;

        public UsuarioDetalleController(IConfiguration configuration)
        {
            _respuesta = new Respuesta();
            _configuration = configuration;
            _usuaroDetalleRepositorio = new UsuarioDetalleRepositorio(_configuration);
        }

        [Authorize]
        [Route("ObtenerListaUsuarios")]
        [HttpGet]
        public IActionResult getHospitales()
        {
            try
            {
                var listaHospitales = _usuaroDetalleRepositorio.GetUsuaros();
                _respuesta.Result = listaHospitales;
                _respuesta.DisplayMessage = "Listado de usuarios obtenido con exito:";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al solicitar la lista de usuarios";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }


        [Authorize]
        [Route("CrearUsuario")]
        [HttpPost]
        public IActionResult CrearUsuario(Usuario usuario)
        {
            try
            {
                // string token = HttpContext.Request.Headers["Authorization"];
                // usuario.IdCreadoPor = _infoUser.getUsuarioIdByToken(token);
                usuario.IdCreadoPor = 1;

                var executeCrearUsuario = _usuaroDetalleRepositorio.InsertarUsuario(usuario);
                _respuesta.Result = executeCrearUsuario;
                _respuesta.DisplayMessage = "Usuario creado correctamente";
                return Ok(_respuesta);
            }
            catch (Exception ex)
            {
                _respuesta.IsSuccess = false;
                _respuesta.DisplayMessage = "Error al crear el usarios";
                _respuesta.ErrorMessages = new List<string> { ex.ToString() };
                return StatusCode(500, _respuesta);
            }
        }
    }
}
