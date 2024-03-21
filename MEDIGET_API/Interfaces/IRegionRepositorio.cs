using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface IRegionRepositorio
    {
        public IEnumerable<RegionDTO> GetRegiones();
    }
}
