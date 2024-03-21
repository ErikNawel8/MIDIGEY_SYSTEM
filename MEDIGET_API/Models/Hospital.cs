namespace MEDIGET_API.Models
{
    public class Hospital
    {
        public int IdHospital { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public int IdMunicipio { get; set; }
        public string Telefono1 { get; set; }
        public string Telefono2 { get; set; }
        public string Descripcion { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
        public int? IdCreadoPor { get; set; }
        public DateTime? FechaCreacion { get; set; }
        public int? IdModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public int IdEstadoRegistro { get; set; }
    }
}
