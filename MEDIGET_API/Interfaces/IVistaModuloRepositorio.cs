using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface IVistaModuloRepositorio
    {
        public IEnumerable<VistaModuloDTO> GetVistasModulos();
        public List<VistaModuloValuesConfiguracion> GetVistasModulosValuesConfiguracion();
    }
}
