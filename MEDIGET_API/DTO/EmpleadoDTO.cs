using Dapper.Contrib.Extensions;
using Newtonsoft.Json;

namespace MEDIGET_API.DTO
{
    public class EmpleadoDTO
    {
        public int IdEmpleado { get; set; }
        public int IdPersona { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Telefono1 { get; set; }
        public string Telefono2 { get; set; }
        public string Direccion { get; set; }
        public string Correo { get; set; }
        public DateTime FechaDeNacimiento { get; set; }
        public DateTime FechadDeContratación { get; set; }
        public string Cedula { get; set; }
        public int IdSexo { get; set; }
        public int IdCiudad { get; set; }
        public int IdPais { get; set; }
        public string SexoNombre { get; set; }
        public string CiudadNombre { get; set; }
        public string PaisNombre { get; set; }
        public string NombreEstado { get; set; }
        public int IdEstadoRegistro { get; set; }

        //[JsonIgnore]
        internal string? CargoEmpleadoDTOsJson { get; set; }

        // Propiedad para deserializar la cadena JSON a lista de objetos CargoEmpleadoDTO
        [JsonIgnore]
        public List<CargoEmpleadoDTO> CargoEmpleadoDTOs
        {
            get
            {
                if (CargoEmpleadoDTOsJson == null)
                {
                    return new List<CargoEmpleadoDTO>(); // O puedes devolver null, dependiendo de tus necesidades.
                }

                return JsonConvert.DeserializeObject<List<CargoEmpleadoDTO>>(CargoEmpleadoDTOsJson);
            }
            set { CargoEmpleadoDTOsJson = JsonConvert.SerializeObject(value); }
        }

    }


    public class EmpleadoDTO2
    {
        public int IdEmpleado { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }

    }

    public class EmpleadoDTOVAA
    {
        public int IdEmpleado { get; set; }
        public string NombreEmpleado { get; set; }
        public string ApellidoEmpleado { get; set; }
        public string Direccion { get; set; }
        public string Identificacion { get; set; }
        public string Email { get; set; }
    }
}