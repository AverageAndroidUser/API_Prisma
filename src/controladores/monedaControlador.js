import prisma from "../prismaClient.js";

//Crear
export const crearMoneda = async (req, res) => {
  const data = req.body;
  try {
    let resultado;
    if (Array.isArray(data)) {
      // Si es un array: crear varias monedas
      resultado = await prisma.moneda.createMany({
        data: data,
      });

      res.json({
        message: `${resultado.count} monedas creadas.`,
      });

    } else {
      // Si es un objeto: crear una sola moneda
      const { Nombre, Codigo, Simbolo } = data;

      resultado = await prisma.moneda.create({
        data: { Nombre, Codigo, Simbolo },
      });

      res.json(resultado);
    }

  } catch (error) {
    console.error("-----Error al crear Moneda(s)---- ", error);
    res.status(400).json({ error: error.message });
  }
};


//Obtener
export const verMonedas = async (req, res) => {
  try {
    const monedas = await prisma.moneda.findMany({});
    res.json(monedas);
  } catch (error) {
    res.status(500).json({});
  }
};

//Actualizar
export const actualizarMonedas = async (req, res) => {
  const {id} = req.params;

  const Campos = [ "Nombre", "Codigo", "Simbolo" ];
  const data = {};

  Campos.forEach((campo) => {
    if (req.body[campo] !== undefined) {
      data[campo] = req.body[campo];
    }
  });
  try {
    const moneda = await prisma.moneda.update({
      where: { ID_Moneda: parseInt(id)},
      data: data,
    });
    res.json(moneda);
  } catch (error) {
    res.status(400).json({ error: "Moneda no encontrada" });
  }
}

//Eliminar
export const eliminarMonedas = async (req, res) => {
  const {id} = req.params;
  try {
    const moneda = await prisma.moneda.delete({
      where: {ID_Moneda: parseInt(id)}
    });
    res.json({message: "Moneda eliminada"});
  } catch (error) {
    res.status(400).json({ error: "Moneda no encontrada" });
  }
}
