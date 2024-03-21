using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface ImaquinariasRepositorio
    {
        public IEnumerable<MaquinariasDTO> GetMaquinarias();
    }
}
