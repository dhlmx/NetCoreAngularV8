namespace NetCoreAngularV8.Server.Models;

public class Empleado
{
    public int Id { get; set; } = 0;
    public string? Fotografia { get; set; } = string.Empty;
    public string Nombre { get; set; } = string.Empty;
    public string Apellido { get; set; } = string.Empty;
    public string Puesto {  get; set; } = string.Empty;
    public DateTime FechaNacimiento { get; set; } = DateTime.Now;
    public DateTime FechaContratacion { get; set; } = DateTime.Now;
    public string Direccion { get; set; } = string.Empty;
    public string Telefono { get; set; } = string.Empty;
    public string CorreoElectronico { get; set; } = string.Empty;
    public bool Estado { get; set; } = false;
    public string JefeDirecto { get; set; } = string.Empty;
}
