namespace MEDIGET_API.DTO
{
    public class HospitalDTO
    {
        public int IdHospital { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }
        public int IdMunicipio { get; set; }
        public string NombreMunicipio { get; set; }
        public int IdProvincia { get; set; }
        public string NombreProvincia { get; set; }
        public int IdRegion { get; set; }
        public string NombreRegion { get; set; }
        public string Telefono1 { get; set; }
        public string Telefono2 { get; set; }
        public string Descripcion { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
    }
}