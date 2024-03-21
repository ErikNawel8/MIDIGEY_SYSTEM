using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface IProvinciaRepositorio
    {
        public IEnumerable<ProvinciaDTO> GetProvincias();
    }
}
