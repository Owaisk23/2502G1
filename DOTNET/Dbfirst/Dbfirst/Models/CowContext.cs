using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Dbfirst.Models;

public partial class CowContext : DbContext
{
    public CowContext()
    {
    }

    public CowContext(DbContextOptions<CowContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cow> Cows { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source=.;initial catalog=cow;user id=sa;password=aptech; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cow>(entity =>
        {
            entity.HasKey(e => e.CowId).HasName("PK__cow__96D3858612A9E6CD");

            entity.ToTable("cow");

            entity.Property(e => e.CowId).HasColumnName("cowId");
            entity.Property(e => e.CowDesc).HasColumnName("cowDesc");
            entity.Property(e => e.CowName)
                .HasMaxLength(50)
                .HasColumnName("cowName");
            entity.Property(e => e.CowPrice).HasColumnName("cowPrice");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
