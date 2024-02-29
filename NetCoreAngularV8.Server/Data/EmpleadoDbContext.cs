using NetCoreAngularV8.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace NetCoreAngularV8.Server.Data;

public class EmpleadoDbContext(DbContextOptions<EmpleadoDbContext> options) : DbContext(options)
{
    public DbSet<Empleado> Empleados { get; set; } = null!;
}
