USE BD_MAQUINARIAS_VI6

GO

GO
--
--
--.P.R.O.C.E.D.U.R.E.......P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P.P Procedimiento almacenado para hacer Login: --
GO
-- Procedimiento para Obtener usuario y loguear:
CREATE OR ALTER PROCEDURE dbo.GetUsuarioLogin
    @NombreUsuario varchar(30),
    @Contraseña varchar(MAX)
AS
BEGIN
    SET NOCOUNT ON
    SELECT IdUsuario, NombreUsuario, Correo, Contraseña, NombreRol
    FROM Usuarios U INNER JOIN Roles R ON U.IdRol = R.IdRol
    WHERE NombreUsuario = @NombreUsuario AND Contraseña = @Contraseña AND u.IdEstadoRegistro = 1
END
--- EXEC dbo.GetUsuarioLogin @
GO

