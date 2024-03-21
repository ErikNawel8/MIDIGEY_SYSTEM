using MEDIGET_API.DTO;
using MEDIGET_API.Models;

namespace MEDIGET_API.Interfaces
{
    public interface IRolRepositorio
    {
        public IEnumerable<RolesDTO> GetListaRoles();

        public IEnumerable<RolListaDTO> GetRolesListaPrincipal();

        public string EditarRol(Rol rol);

        public string InsertarRol(Rol rol);

        public int CambiarEstadoRol(RolEstado rolEstado);
    }
}
