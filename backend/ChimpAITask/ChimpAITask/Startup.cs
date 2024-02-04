namespace ChimpAITask;

using Microsoft.Extensions.DependencyInjection;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("ReactPolicy",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000") // Add the origin of your React app
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
    }

    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
        app.UseCors("ReactPolicy");
    }

}