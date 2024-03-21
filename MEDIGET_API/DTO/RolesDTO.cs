namespace MEDIGET_API.DTO
{
    public class RolesDTO
    {
        public int IdRol { get; set; }
        public string NombreRol { get; set; }
    }

    public class RolListaDTO
    {
        public int IdRol { get; set; }
        public string NombreRol { get; set; }
        public string Descripcion { get; set; }
        public int IdEstadoRegistro { get; set; }
        public string NombreEstado { get; set; }
        public int IdCreadoPor { get; set; }
        public string NombreUsuarioCreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public List<int> IdsVistasModulosRoles { get; set; }
    }
}
