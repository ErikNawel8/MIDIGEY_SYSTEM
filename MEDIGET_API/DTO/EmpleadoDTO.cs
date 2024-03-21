using Dapper.Contrib.Extensions;
using Newtonsoft.Json;

namespace MEDIGET_API.DTO
{
    public class EmpleadoDTOVAA
    {
        public int IdEmpleado { get; set; }
        public string NombreEmpleado { get; set; }
        public string ApellidoEmpleado { get; set; }
        public string Direccion { get; set; }
        public string Identificacion { get; set; }
        public string Email { get; set; }
    }

    public class EmpleadoSelectOptionDTO
    {
        public int IdEmpleado { get; set; }
        public string NombreCompleto { get; set; }
        public bool YaTieneUsuario { get; set; }
    }
}