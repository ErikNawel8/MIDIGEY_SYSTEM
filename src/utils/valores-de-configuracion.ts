interface IVistasModulosValues {
  Inicio: number
  Hospitales: number
  Administrar_maquinarias: number
  Administrar_suministros: number
  Control_de_usuario: number
  Gestionar_roles: number
  Gestionar_proveedores: number
  Gestionar_empleados: number
  Gestionar_reportes: number
}

interface IConfiguracionValores {
  VistasModulosIds: IVistasModulosValues
}

export const ObtenerValoresConfiguracion = (): IConfiguracionValores => {
  const vistasModulosIds: IVistasModulosValues = {
    Inicio: 1,
    Hospitales: 2,
    Administrar_maquinarias: 3,
    Administrar_suministros: 4,
    Control_de_usuario: 5,
    Gestionar_roles: 6,
    Gestionar_proveedores: 7,
    Gestionar_empleados: 8,
    Gestionar_reportes: 9,
  }

  const ConfiguracionesValores: IConfiguracionValores = {
    VistasModulosIds: vistasModulosIds,
  }

  return ConfiguracionesValores
}
