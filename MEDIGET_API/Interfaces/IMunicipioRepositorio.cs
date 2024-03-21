using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface IMunicipioRepositorio
    {
        public IEnumerable<MunicipioDTO> GetMunicipios();
    }
}
