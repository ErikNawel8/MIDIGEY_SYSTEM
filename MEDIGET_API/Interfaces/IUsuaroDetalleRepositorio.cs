using MEDIGET_API.DTO;
using MEDIGET_API.Models;

namespace MEDIGET_API.Interfaces
{
    public interface IUsuaroDetalleRepositorio
    {
        public IEnumerable<UsuarioDetalleDTO> GetUsuaros();

        public string InsertarUsuario(Usuario usuario);
    }
}
