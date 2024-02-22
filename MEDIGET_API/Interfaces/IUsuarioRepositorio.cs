using MEDIGET_API.DTO;
using MEDIGET_API.Models;

namespace MEDIGET_API.Interfaces
{
    public interface IUsuarioRepositorio
    {
        public UsuarioDTO GetUsuarioLogin(string NombreUsuario, string Contraseña);
        public InfoPerfilDTO GetInfoPerfil(int usuarioId);
        public IEnumerable<UsuarioDTO> getUsuario();
        public IEnumerable<EmpleadoDTO> GetEmpleadoParaUsuario();
        public string InsertarUsuario(Usuario usuario);
        public void ActualizarUsuario(Usuario usuario);
        public void ActivarUsuario(int IdUsuario);
        public void EliminarUsuario(int IdUsuario);
    }
}
