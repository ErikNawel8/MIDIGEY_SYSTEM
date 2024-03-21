namespace MEDIGET_API.DTO
{
    public class MaquinariasDTO
    {
        public int IdMaquinaria { get; set; }
        public string NombreMaquinaria { get; set; }
        public string DescripcionMaquinaria { get; set; }
        public string NombreProveedor { get; set; }
        public string ApellidoProveedor { get; set; }
        public string NumeroSerie { get; set; }
        public string Modelo { get; set; }
        public string Estado { get; set; }
        public decimal PrecioCosto { get; set; }
        public long TiempoVidaUtil { get; set; }
        public int TiempoEnUsoParaMant { get; set; }
        public DateTime? FechaInicioUso { get; set; }
        public DateTime? FechaFinUso { get; set; }
        public DateTime? FechaInicioMantenimiento { get; set; }
        public DateTime? FechaFinMantenimiento { get; set; }
        public string DescripcionMantenimiento { get; set; }
        public string EstadoRegistro { get; set; }
    }
}
