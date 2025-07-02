import prisma from "../prismaClient.js";

//Crear
export const crearMoneda = async (req, res) => {
  const {Nombre, Codigo, Simbolo } = req.body;
  try {
    const moneda = await prisma.moneda.create({
      data: { ID_Moneda, Nombre, Codigo, Simbolo },
    });
    res.json(moneda);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("-----Error al crear Pasi---- ", error);
  }
};

//Optener

export const verMonedas = async (req, res) => {
  try {
    const monedas = await prisma.moneda.findMany({});
    res.json(monedas);
  } catch (error) {
    res.status(500).json({});
  }
};
