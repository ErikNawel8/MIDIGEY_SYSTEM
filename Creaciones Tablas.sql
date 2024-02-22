CREATE DATABASE BD_MAQUINARIAS_VI6
GO
USE BD_MAQUINARIAS_VI6
GO


-- CREACION DE LA TABLA ESTADOS_REGISTROS
Create table EstadosRegistros
(
    IdEstadoRegistro int identity constraint PK_IdEstadoRegistro primary key,
    NombreEstado varchar(15),
    IdEstadoRegistro_fk int constraint Fk_IdEstadoRegistro foreign Key references EstadosRegistros(IdEstadoRegistro)
);
GO


-- CREACION DE LA TABLA ROLES:
Create table Roles
(
    IdRol int identity constraint PK_IdRol primary key,
    NombreRol varchar(40),
    Valoracion INT,
    -- Valoracion de 1 en adelante
    IdEstadoRegistro int constraint Fk_Roles_IdEstadoRegistro foreign Key references EstadosRegistros(IdEstadoRegistro)
);


GO
-- CREACION DE LA TABLA USUARIOS:
Create table Usuarios
(
    IdUsuario int identity constraint PK_IdUsuario primary key,
    NombreUsuario varchar(30),
    Correo varchar(60),
    Contraseña varchar(MAX),
    IdRol int constraint Fk_UsuarioIdRol foreign Key references Roles(IdRol),
    --
    IdCreadoPor int constraint Fk_Usuario_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_Usuario_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_Usuario_IdEstado foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


-- CREACION DE LA TABLA USUARIOSROLES:
Create table UsuariosRoles
(
    IdUsuarioRol int identity constraint PK_IdUsuarioRol primary key,
    IdUsuario int constraint Fk_Roles_IdUsuario foreign Key references Usuarios(IdUsuario),
    IdRol int constraint Fk_Roles_IdRol foreign Key references Roles(IdRol),
    --
    IdCreadoPor int constraint Fk_UsuariosRoles_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_UsuariosRoles_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_UsuariosRoles_IdEstado foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


/* ---A--- ALTER TABLE NECESARIOS: ---A--- */

-- Alter table a la tabla EstadosRegistros:
ALTER TABLE EstadosRegistros
  ADD IdCreadorPor INT;
GO
--
ALTER TABLE EstadosRegistros
  ADD FechaCreacion DATETIME;
GO
--
ALTER TABLE EstadosRegistros
  ADD IdModificadoPor INT;
GO
--
ALTER TABLE EstadosRegistros
  ADD FechaModificacion DATETIME;
GO
--
ALTER TABLE EstadosRegistros ADD CONSTRAINT FK_EstadosRIdCreadorPor
  FOREIGN KEY (IdCreadorPor) REFERENCES Usuarios(IdUsuario);
GO
--
ALTER TABLE EstadosRegistros ADD CONSTRAINT FK_EstadosRIdModificadoPor
  FOREIGN KEY (IdModificadoPor) REFERENCES Usuarios(IdUsuario);
GO

-- Alter table a la tabla Roles:
ALTER TABLE Roles
  ADD IdCreadorPor INT;
GO

ALTER TABLE Roles
  ADD FechaCreacion DATETIME;
GO

ALTER TABLE Roles
  ADD IdModificadoPor INT;
GO

ALTER TABLE Roles
  ADD FechaModificacion DATETIME;
GO

ALTER TABLE Roles ADD CONSTRAINT FK_RolesIdCreadorPor
  FOREIGN KEY (IdCreadorPor) REFERENCES Usuarios(IdUsuario);
GO

ALTER TABLE Roles ADD CONSTRAINT FK_RolesIdModificadoPor
  FOREIGN KEY (IdModificadoPor) REFERENCES Usuarios(IdUsuario);
GO


--CREACION DE LA TABLA SEXOS
Create table Sexos
(
    IdSexo int identity constraint PK_IdSexo primary key,
    SexoNombre varchar(40),
    --
    IdCreadoPor int constraint Fk_SexosIdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_SexosIdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_SexosIdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


--CREACION DE LA TABLA PAISES:
Create Table Paises
(
    IdPais int identity constraint PK_IdPais primary key,
    PaisNombre varchar(40),
    --
    IdCreadoPor int constraint Fk_PaisesIdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_PaisesIdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_PaisesIdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


--CREACION DE LA TABLA CIUDADES:
Create Table Ciudades
(
    IdCiudad int identity constraint PK_IdCiudad primary key,
    CiudadNombre varchar(40),
    IdPais int constraint Fk_IdPaisCiudad foreign Key references Paises(IdPais),
    --
    IdCreadoPor int constraint Fk_CiudadesIdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_CiudadesIdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_CiudadesIdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);


GO
--CREACION DE LA TABLA Empleados:
CREATE TABLE [dbo].[Empleados](
	[IdEmpleado] int identity constraint PK_Empleado_IdCiudad primary key,
	[NombreEmpleado] [varchar](60) NULL,
	[ApellidoEmpleado] [varchar](60) NULL,
	[Direccion] [varchar](255) NULL,
	[Identificacion] [varchar](11) NULL,
	[Email] [varchar](255) NULL,
)


/* ---A--- ALTER TABLE NECESARIOS: ---A--- */

-- Alter table a la tabla Usuarios:
ALTER TABLE Usuarios
  ADD IdEmpleado INT;
GO
--
ALTER TABLE Usuarios ADD CONSTRAINT FK_UsuariosIdEmpleado
  FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado);
GO


CREATE TABLE Cargos
(
    IdCargo INT IDENTITY CONSTRAINT Pk_IdCargo PRIMARY KEY,
    NombreCargo VARCHAR(40),
    --
    IdCreadoPor int constraint Fk_CargosIdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_CargosIdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_CargosIdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


-- CREACION DE LA TABLA CARGOS:
CREATE TABLE EmpleadosCargos
(
    IdEmpleado INT,
    IdCargo INT,
    Descripcion VARCHAR(255),
    CONSTRAINT Fk_CargoIdEmpleado FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado),
    CONSTRAINT Fk_CargoIdCargo FOREIGN KEY (IdCargo) REFERENCES Cargos(IdCargo),
    --
    IdCreadoPor int constraint Fk_EC_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_EC_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_EC_IdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO

-- CREACION DE LA TABLA UnidadesDeMedida:
CREATE TABLE UnidadesDeMedida
(
    IdUnidadDeMedida INT IDENTITY CONSTRAINT Pk_IdUnidadDeMedida PRIMARY KEY,
    UnidadNombre VARCHAR(255),
    --
    IdCreadoPor int constraint Fk_UM_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_UM_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_UM_IdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO

-- CREACION DE LA TABLA EstadosMateriales:
CREATE TABLE EstadosMateriales
(
    IdEstadoMaterial INT IDENTITY CONSTRAINT Pk_IdEstadoProducto PRIMARY KEY,
    EstadoMaterial VARCHAR(255),
    --
    IdCreadoPor int constraint Fk_EstadosProductos_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_EstadosProductos_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_EstadosProductos_IdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO


-- CREACION DE LA TABLA Materiales:
CREATE TABLE Materiales
(
    IdMaterial INT IDENTITY CONSTRAINT PK_IdMaterial PRIMARY KEY,
    Nombre VARCHAR(255),
    Codigo VARCHAR(7) CONSTRAINT UQ_CodigoProducto UNIQUE,
    Descripcion VARCHAR(255),
    Modelo VARCHAR(50),
    TieneVencimiento BIT,
    IdUnidadDeMedida INT CONSTRAINT FK_IdUnidadDeMedida_UNDM FOREIGN KEY REFERENCES UnidadesDeMedida(IdUnidadDeMedida),
    IdEstado INT,
    CONSTRAINT Fk_ProductosIdEstado FOREIGN KEY (IdEstado) REFERENCES EstadosMateriales(IdEstadoMaterial),
    --
    IdCreadoPor int constraint Fk_Productos_IdCreadoPor foreign Key references Usuarios(IdUsuario),
    FechaCreacion Datetime,
    IdModificadoPor int constraint Fk_Productos_IdModificadoPor foreign Key references Usuarios(IdUsuario),
    FechaModificacion Datetime,
    IdEstadoRegistro int constraint Fk_Productos_IdEstadoR foreign Key references EstadosRegistros(IdEstadoRegistro),
);
GO