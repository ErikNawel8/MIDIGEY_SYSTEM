using MEDIGET_API.Models;

namespace MEDIGET_API.DTO
{
    public class UsuarioDTO
    {
        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Contraseña { get; set; }
        public string Correo { get; set; }
        public string NombreEstado { get; set; }
        public int IdEstadoRegistro { get; set; }
        public int IdEmpleado { get; set; }
        public string Empleado { get; set;}

        public List<Rol> Roles { get; set; }


    }
}
