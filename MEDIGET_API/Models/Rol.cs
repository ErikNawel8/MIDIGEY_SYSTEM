namespace MEDIGET_API.Models
{
    public class Rol
    {
        public int IdRol { get; set; }
        public string NombreRol { get; set; }
        public string Descripcion { get; set; }
        public int Valoracion { get; set; }
        public int IdEstadoRegistro { get; set; }
        public int? FechaCreacion { get; set; }
        public int? IdCreadoPor { get; set; }
        public int? FechaModificacion { get; set; }
        public int? IdModificadoPor { get; set; }
        public List<int> IdsVistasModulosRoles { get; set; }
    }


    public class RolEstado
    {
        public int IdRol { get; set; }
        public int IdEstado { get; set; }
        public int? IdModificadoPor { get; set; }
    }
}
