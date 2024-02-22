USE BD_MAQUINARIAS_VI6
GO

-- Nueva

-- Insertar datos en la tabla EstadosRegistros:
INSERT INTO EstadosRegistros
  (NombreEstado)
VALUES
  /*1*/
  ('Activo'),
  /*2*/
  ('Inactivo'),
  /*3*/
  ('Borrador');
-- Select * From EstadosRegistros


GO
-- Insertar datos en la tabla Roles
INSERT INTO Roles
  (NombreRol, IdEstadoRegistro, Valoracion)
VALUES
  /*1*/
  ('Administrador', 1, 4),
  /*2*/
  ('Administrador de centro', 1, 3),
  /*3*/
  ('Administrador de inventario', 1, 2),
  /*4*/
  ('Asistente', 1, 1);
-- Select * FROM Roles


GO
-- Insertar datos en la tabla Usuarios
INSERT INTO Usuarios
  (NombreUsuario, Correo, IdRol, Contraseña, IdCreadoPor, FechaCreacion, IdEstadoRegistro)
VALUES
  /*1*/
  ('castronawel', 'eriknawel@gestnett.com', 1, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, GETDATE(), 1),
  /*2*/
  ('emelynt', 'emelyn@gestnett.com', 2, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, GETDATE(), 1),
  /*3*/
  ('ronald', 'ronald@gestnett.com', 3, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, GETDATE(), 1);
-- Select * FROM Usuarios


-- GO
-- CREACION DE LA TABLA USUARIOSROLES:
-- INSERT INTO UsuariosRoles
--   (IdUsuario, IdRol, IdCreadoPor, FechaCreacion)
-- VALUES
--   /*gregory01------*/(1, 1, 1, GETDATE()),
--   /*carlos01-------*/(2, 1, 1, GETDATE()),
--   /*joselo01-------*/(2, 1, 1, GETDATE()),
--   /*cristian01-----*/(3, 1, 1, GETDATE()),
--   /*pedro01--------*/(4, 1, 1, GETDATE()),
--   /*juan01andres---*/(1, 1, 1, GETDATE());
--                    -- Select * FROM UsuariosRoles


GO
-- Insertar datos en la tabla Sexos
INSERT INTO Sexos
  (SexoNombre, IdCreadoPor, FechaCreacion)
VALUES
  /*1*/
  ('Masculino', 1, GETDATE()),
  /*2*/
  ('Femenino', 1, GETDATE());
-- Select * FROM Sexos


GO
-- Insertar datos en la tabla Paises
INSERT INTO Paises
  (PaisNombre, IdCreadoPor, FechaCreacion)
VALUES
  ('República Dominicana', 1, GETDATE());
-- Select * FROM Paises


-- Insertar datos en la tabla Ciudades
/*PROVINCIAS DE REPUBLICA DOMINICANA*/
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Santo Domingo', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Santiago', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('San Pedro de Macorís', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('La Romana', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Puerto Plata', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Higuey', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Mao', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
------
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Monte Cristi', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Azua', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('San Francisco de Macorís', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('San Juan de la Maguana', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('La Vega', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Hato Mayor', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('San Cristóbal', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Barahona', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Bonao', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Neiba', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Moca', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Samana', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Elias piña', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('San José de Ocoa', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('El Seibo', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Dajabón', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Monte Plata', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Jimaní', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Pedernales', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Cotuí', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Jarabacoa', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Sánchez Ramírez', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Santiago Rodríguez', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
----
INSERT INTO Ciudades
  (CiudadNombre, IdPais, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  ('Espaillat', 1, 1, GETDATE(), 1, GETDATE(), 1);
GO
-- Select * FROM Ciudades



INSERT INTO Empleados (NombreEmpleado, ApellidoEmpleado, Direccion, Identificacion, Email)
VALUES ('Erik Nawel', 'Castro Villa', 'Calle 123', '1234567890', 'erik@example.com');

INSERT INTO Empleados (NombreEmpleado, ApellidoEmpleado, Direccion, Identificacion, Email)
VALUES ('Emelyn T', 'Teens', 'Avenida 456', '0987654321', 'rme@example.com');

INSERT INTO Empleados (NombreEmpleado, ApellidoEmpleado, Direccion, Identificacion, Email)
VALUES ('Ronald', 'Castro', 'Carrera 789', '1112223334', 'ronald@example.com');
-- Select * FROM Empleados


GO
-- Asignar Usuarios a los Empleados:
Update Usuarios set IdEmpleado = 1 WHERE IdUsuario = 1
GO
Update Usuarios set IdEmpleado = 2 WHERE IdUsuario = 2
GO
Update Usuarios set IdEmpleado = 3 WHERE IdUsuario = 3


GO
--  Insertar datos en la tabla Cargos:
INSERT INTO Cargos
  (NombreCargo, IdCreadoPor, FechaCreacion, IdEstadoRegistro)
VALUES
  /*1*/('Medico General', 1, GETDATE(), 1),
  /*2*/('Enfermero', 1, GETDATE(), 1),
  /*3*/('Visitador', 1, GETDATE(), 1);
-- Select * FROM Cargos


GO
--  Insertar datos en la tabla EmpleadosCargos:
INSERT INTO EmpleadosCargos
  (IdEmpleado, IdCargo, Descripcion, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES
  (1, 1, 'Encargado de atender pacientes', 1, GETDATE(), 1, GETDATE(), 1),
  (2, 2, 'Dar asistencia al medico', 1, GETDATE(), 1, GETDATE(), 1),
  (3, 3, 'Visitar enfermos', 1, GETDATE(), 1, GETDATE(), 1);
-- Select * from EmpleadosCargos


GO
-- Insertar datos en la tabla EstadosProductos:
INSERT INTO EstadosProductos (EstadoNombre, IdCreadoPor, FechaCreacion, IdEstadoRegistro)
VALUES
  /*1*/('Sin adquisiciones', 1, GETDATE(), 1),
  /*2*/('Existente', 1, GETDATE(), 1),
  /*3*/('Agotado', 1, GETDATE(), 1);
-- Select * FROM EstadosProductos


GO
-- Insertar datos en la tabla Unidades de Medida:
INSERT INTO UnidadesDeMedida
  (UnidadNombre, IdCreadoPor, FechaCreacion, IdEstadoRegistro)
VALUES
  /*1*/('Litros', 1, GETDATE(), 1),
  /*2*/('Metros', 1, GETDATE(), 1),
  /*3*/('Cajas', 1, GETDATE(), 1);
-- Select * FROM UnidadesDeMedida


GO
-- INSETAR EN LA TABLA PRODUCTOS
-- Insertar registros en la tabla Materiales
INSERT INTO Materiales (Nombre, Codigo, Descripcion, Modelo, TieneVencimiento, IdUnidadDeMedida, IdEstado, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES ('Guantes de látex', 'G01', 'Guantes de látex desechables para procedimientos médicos', 'Talla M', 1, 3, 1, 1, GETDATE(), 1, GETDATE(), 1);

INSERT INTO Materiales (Nombre, Codigo, Descripcion, Modelo, TieneVencimiento, IdUnidadDeMedida, IdEstado, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES ('Jeringas de 5ml', 'JE01', 'Jeringas estériles de 5ml para administración de medicamentos', 'Estándar', 0, 3, 1, 1, GETDATE(), 1, GETDATE(), 1);

INSERT INTO Materiales (Nombre, Codigo, Descripcion, Modelo, TieneVencimiento, IdUnidadDeMedida, IdEstado, IdCreadoPor, FechaCreacion, IdModificadoPor, FechaModificacion, IdEstadoRegistro)
VALUES ('Gasas estériles', 'G01', 'Gasas estériles para limpieza y curación de heridas', '10x10 cm', 0, 3, 1, 1, GETDATE(), 1, GETDATE(), 1);


-- Select * FROM Materiales