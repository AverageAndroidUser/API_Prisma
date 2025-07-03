import prisma  from "../prismaClient.js";

const idUsuario = 1;

export const verIEGresoInf = async (req, res) => {
    const {id} = req.params;
    try {
        const iegreso = await prisma.iEGreso.findUnique({
            where: {ID_IEgreso: parseInt(id)},
        });
        res.json(iegreso);
    } catch (error) {
        res.status(400).json({error: "IEgreso no encontrado"});
    }
}

export const verIngresos = async (req, res) => {
    try {
        const ingresos = await prisma.iEGreso.findMany({
            where: {TipoIEgreso: true, ID_Usuario: idUsuario},
            include: {
                CategoriaIEgreso: true,
                Usuario: {
                    include: {
                        Ciudad: {
                            include: {
                                EstadoDepartamento: {
                                    include: {
                                        Pais: {
                                            include: {
                                                Moneda: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        res.json(ingresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const verEgresos = async (req, res) => {
    try {
        const egresos = await prisma.iEGreso.findMany({
            where: {TipoIEgreso: false, ID_Usuario: idUsuario},
            include: {
                CategoriaIEgreso: true,
                Usuario: {
                    include: {
                        Ciudad: {
                            include: {
                                EstadoDepartamento: {
                                    include: {
                                        Pais: {
                                            include: {
                                                Moneda: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        res.json(egresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const verIEGresos = async (req, res) => {
    try {
        const IEGresos = await prisma.iEGreso.findMany({
            where: {ID_Usuario: idUsuario},
            include: {
                CategoriaIEgreso: true,
                Usuario: {
                    include: {
                        Ciudad: {
                            include: {
                                EstadoDepartamento: {
                                    include: {
                                        Pais: {
                                            include: {
                                                Moneda: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        res.json(IEGresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const crearIngreso = async (req, res) => {
  const data = req.body;

  try {
    let resultado;

    if (Array.isArray(data)) {
      const ingresos = data.map(ingreso => ({
        Nombre: ingreso.Nombre,
        Descripcion: ingreso.Descripcion,
        FechaIEGreso: new Date(ingreso.FechaIEGreso),
        Monto: ingreso.Monto,
        TipoIEgreso: true,
        ID_CategoriaIEgreso: ingreso.ID_CategoriaIEgreso,
        ID_Usuario: ingreso.ID_Usuario || idUsuario 
      }));

      resultado = await prisma.iEGreso.createMany({
        data: ingresos,
      });

    } else {
      resultado = await prisma.iEGreso.create({
        data: {
          Nombre: data.Nombre,
          Descripcion: data.Descripcion,
          FechaIEGreso: new Date(data.FechaIEGreso),
          Monto: data.Monto,
          TipoIEgreso: true,
          ID_CategoriaIEgreso: data.ID_CategoriaIEGreso,
          ID_Usuario: data.ID_Usuario || 1,
        },
      });
    }

    res.status(201).json(resultado);

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al crear el ingreso" });
  }
};



export const crearEgreso = async (req, res) => {
  const data = req.body;

  try {
    let resultado;

    if (Array.isArray(data)) {
      // Si es un array, crea varios
      const egresos = data.map(egreso => ({
        Nombre: egreso.Nombre,
        Descripcion: egreso.Descripcion,
        FechaIEGreso: new Date(egreso.FechaIEGreso),
        Monto: egreso.Monto,
        TipoIEgreso: false,
        ID_CategoriaIEgreso: egreso.ID_CategoriaIEgreso,
        ID_Usuario: egreso.ID_Usuario || idUsuario  // Default si no mandan usuario
      }));

      resultado = await prisma.iEGreso.createMany({
        data: egresos,
      });

    } else {
      // Si es un solo objeto, crea uno
      resultado = await prisma.iEGreso.create({
        data: {
          Nombre: data.Nombre,
          Descripcion: data.Descripcion,
          FechaIEGreso: new Date(data.FechaIEGreso),
          Monto: data.Monto,
          TipoIEgreso: false,
          ID_CategoriaIEgreso: data.ID_CategoriaIEgreso,
          ID_Usuario: data.ID_Usuario || idUsuario,
        },
      });
    }

    res.status(201).json(resultado);

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al crear el egreso" });
  }
};


export const eliminarIEGreso = async (req, res) => {
    const {id} = req.params;
    try {
        const iEGreso = await prisma.iEGreso.delete({
            where: {ID_IEgreso: parseInt(id)}
        });
        res.json({message: "IEgreso eliminado"});
    } catch (error) {
        res.status(400).json({error: "IEgreso no encontrado"});
    }
}

export const actualizarIEGreso = async (req, res) => {
    const {id} = req.params;
    const Campos = ["Nombre", "Descripcion", "FechaIEGreso", "Monto", "ID_CategoriaIEgreso", "TipoIEgreso"];
    const data = {};
    Campos.forEach((campo) => {
        if (req.body[campo] !== undefined) {
            data[campo] = req.body[campo];
        }
    });
    try {
        const IEgreso = await prisma.iEGreso.update({
            where: {ID_IEgreso: parseInt(id)},
            data: data,
        });
        res.json(IEgreso);
    } catch (error) {
        res.status(400).json({error: "IEgreso no encontrado"});
    }
}