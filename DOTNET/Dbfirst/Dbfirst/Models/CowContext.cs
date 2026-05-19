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

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Cow> Cows { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source=.;initial catalog=cow;user id=sa;password=aptech; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CatId).HasName("PK__category__17B6DD06CFFEFD28");

            entity.ToTable("category");

            entity.Property(e => e.CatId).HasColumnName("catId");
            entity.Property(e => e.CatName)
                .HasMaxLength(50)
                .HasColumnName("catName");
        });

        modelBuilder.Entity<Cow>(entity =>
        {
            entity.HasKey(e => e.CowId).HasName("PK__tmp_ms_x__96D38586453ADDF0");

            entity.ToTable("cow");

            entity.Property(e => e.CowId).HasColumnName("cowId");
            entity.Property(e => e.CatId).HasColumnName("catId");
            entity.Property(e => e.CowDesc).HasColumnName("cowDesc");
            entity.Property(e => e.CowImage).HasColumnName("cowImage");
            entity.Property(e => e.CowName)
                .HasMaxLength(50)
                .HasColumnName("cowName");
            entity.Property(e => e.CowPrice).HasColumnName("cowPrice");

            entity.HasOne(d => d.Cat).WithMany(p => p.Cows)
                .HasForeignKey(d => d.CatId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_cow_ToTable");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
