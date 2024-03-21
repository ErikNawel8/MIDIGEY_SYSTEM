namespace MEDIGET_API.DTO
{
    public class VistaModuloDTO
    {
        public int IdVistaModulo { get; set; }
        public string NombreVistaModulo { get; set; }
    }

    public class VistaModuloRolDTO
    {
        public int IdVistaModulo { get; set; }
        public int IdRol { get; set; }
    }

    public class VistaModuloValuesConfiguracion
    {
        public int IdVistaModulo { get; set; }
        public string NombreVistaModulo { get; set; }

        public List<int>? RolesConAcceso { get; set; }
    }
}
