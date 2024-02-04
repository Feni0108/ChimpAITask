using ChimpAITask.Models;
using Microsoft.EntityFrameworkCore;

namespace ChimpAITask.Data;

public class DataContext : DbContext
{
   public DataContext(DbContextOptions<DataContext> options) : base(options)
   {
      
   }
   
   public DbSet<Address> Address { get; set; }
   public DbSet<Product> Product { get; set; }
}