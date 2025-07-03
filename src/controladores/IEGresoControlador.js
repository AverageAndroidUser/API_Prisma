import prisma  from "../prismaClient.js";

export const verIngresos = async (req, res) => {
    try {
        const ingresos = await prisma.iEGreso.findMany({
            where: {TipoIEgreso: true, ID_Usuario: 2}
        });
        res.json(ingresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const verEgresos = async (req, res) => {
    try {
        const egresos = await prisma.iEGreso.findMany({
            where: {TipoIEgreso: true, ID_Usuario: 2}
        });
        res.json(egresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const verIEGresos = async (req, res) => {
    try {
        const IEGresos = await prisma.iEGreso.findMany({
            where: {ID_Usuario: 2}
        });
        res.json(IEGresos);
    } catch (error) {
        res.status(400).json({error: "Ingresos no encontrados"});
    }
}

export const crearIngreso = async (req, res) => {
    const {Nombre, Descripcion, FechaIEGreso, Monto, ID_CategoriaIEgreso} = req.body;
    try {
        const nuevoIEgreso = await prisma.iEGreso.create({
            data: {
                Nombre,
                Descripcion,
                FechaIEGreso,
                Monto,
                TipoIEgreso: true,
                ID_CategoriaIEgreso,
                ID_Usuario: 2
            }
        });
        res.status(201).json(nuevoIEgreso);
    } catch (error) {
        res.status(400).json({error: "Error al crear el ingreso"});
    }
}

export const crearEgreso = async (req, res) => {
    const {Nombre, Descripcion, FechaIEGreso, Monto, ID_CategoriaIEgreso} = req.body;
    try {
        const nuevoIEgreso = await prisma.iEGreso.create({
            data: {
                Nombre,
                Descripcion,
                FechaIEGreso,
                Monto,
                TipoIEgreso: true,
                ID_CategoriaIEgreso,
                ID_Usuario: 2
            }
        });
        res.status(201).json(nuevoIEgreso);
    } catch (error) {
        res.status(400).json({error: "Error al crear el egreso"});
    }
}

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