using Microsoft.EntityFrameworkCore;

namespace ChimpAITask;

public static class DependencyInjection
{
    public static void AddInfrastructureApi(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");
        services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
    }
}