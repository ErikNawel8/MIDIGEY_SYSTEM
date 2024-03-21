using MEDIGET_API.DTO;
using MEDIGET_API.Models;

namespace MEDIGET_API.Repositories
{
    public interface IUsuarioRepositorio
    {
        void ActivarUsuario(int IdUsuario);
        void ActualizarUsuario(Usuario usuario);
        void EliminarUsuario(int IdUsuario);
        InfoPerfilDTO GetInfoPerfil(int idUsuario);
        IEnumerable<UsuarioDTO> getUsuario();
        UsuarioDTO GetUsuarioLogin(string nombreUsuario, string contraseña);
        string InsertarUsuario(Usuario usuario);
    }
}