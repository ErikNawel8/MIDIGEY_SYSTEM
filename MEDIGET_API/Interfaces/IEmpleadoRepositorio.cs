using MEDIGET_API.DTO;

namespace MEDIGET_API.Interfaces
{
    public interface IEmpleadoRepositorio
    {
        public IEnumerable<EmpleadoDTOVAA> GetEmpleado();
        public IEnumerable<EmpleadoSelectOptionDTO> GetEmpleadosForSelectOption();
    }
}
