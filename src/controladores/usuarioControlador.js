import prisma from "../prismaClient.js";

export const verUsuario = async (req, res) => {
    const {id} = req.params;
    try {
        const usuario = await prisma.usuario.findUnique({
            where: {ID_Usuario: parseInt(id)},
            include: {
                Ciudad: {
                    include: {
                        EstadoDepartamento: {
                            include:{
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
        });
        res.json(usuario);
    } catch (error) {
        res.status(400).json({error: "Usuario no encontrado"});
    }
}

export const actualizarUsuario = async (req, res) => {
    const {id} = req.params;
    
    const Campos = ["Nombre", "Apellido", "Correo", "Contraseña", "FechaNacimiento", "FechaIngreso", "ID_Ciudad"];
    const data = {};

    Campos.forEach((campo) => {
        if(req.body[campo] !== undefined){
            data[campo] = req.body[campo];
        }
    });

    try {
        const usuario = await prisma.usuario.update({
            where: {ID_Usuario: parseInt(id)},
            data: data,
        });
        res.json(usuario);
    } catch (error) {
        res.status(400).json({error: "Usuario no encontrado"});
    }
}