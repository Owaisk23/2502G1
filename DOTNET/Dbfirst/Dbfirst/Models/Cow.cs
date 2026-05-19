using System;
using System.Collections.Generic;

namespace Dbfirst.Models;

public partial class Cow
{
    public int CowId { get; set; }

    public string CowName { get; set; } = null!;

    public string CowDesc { get; set; } = null!;

    public string CowImage { get; set; } = null!;

    public int CowPrice { get; set; }

    public int CatId { get; set; }

    public virtual Category Cat { get; set; } = null!;
}
