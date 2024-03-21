using System.ComponentModel.DataAnnotations;

namespace MEDIGET_API.Models
{
    public class Usuario
    {
        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Correo { get; set; }
        public string Contraseña { get; set; }
        public int IdEmpleado { get; set; }
        public int IdCreadoPor { get; set; }
        public List<Rol>? Roles { get; set; }
        public List<int>? RolesIds { get; set; }
    }
}
