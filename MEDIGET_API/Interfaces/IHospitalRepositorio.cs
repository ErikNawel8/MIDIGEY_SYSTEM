using MEDIGET_API.DTO;
using MEDIGET_API.Models;

namespace MEDIGET_API.Interfaces
{
    public interface IHospitalRepositorio
    {
        public IEnumerable<HospitalDTO> GetHospitales();

        public string InsertarHospital(Hospital hospital);
    }
}
