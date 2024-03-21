namespace MEDIGET_API.DTO
{
    public class UsuarioDetalleDTO
    {
        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string Correo { get; set; }
        public string Rol { get; set; }
        public int IdRol { get; set; }
        public string NombreCompletoEmpleado { get; set; }
        public int IdEmpleado { get; set; }
        public string DireccionEmpleado { get; set; }
        public string IdentificacionEmpleado { get; set; }
        public string EmailEmpleado { get; set; }
        public string Cargo { get; set; }
        public string Sexo { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaModificacion { get; set; }
    }
}
