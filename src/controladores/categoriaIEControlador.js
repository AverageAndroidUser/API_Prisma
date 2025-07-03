import prisma from "../prismaClient.js";

export const verCategoriaIng = async (req, res) => {
    try {
        const categorias = await prisma.categoriaIEGreso.findMany({
            where: {TipoIEgreso: true}
        });
        res.json(categorias);
    } catch (error) {
        res.status(400).json({error: "Categoría de ingreso no encontrada"});
    }
}

export const verCategoriaEgr = async (req, res) => {
    try {
        const categorias = await prisma.categoriaIEGreso.findMany({
            where: {TipoIEgreso: false}
        });
        res.json(categorias);
    } catch (error) {
        res.status(400).json({error: "Categoría de egreso no encontrada"});
    }
}