-- CreateTable
CREATE TABLE "EstadoDepartamento" (
    "ID_EstadoDepartamento" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "ID_Pais" INTEGER NOT NULL,

    CONSTRAINT "EstadoDepartamento_pkey" PRIMARY KEY ("ID_EstadoDepartamento")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "ID_Ciudad" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "ID_EstadoDepartamento" INTEGER NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("ID_Ciudad")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "ID_Usuario" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Contraseña" TEXT NOT NULL,
    "FechaNacimiento" TIMESTAMP(3) NOT NULL,
    "FechaIngreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ID_Ciudad" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("ID_Usuario")
);

-- CreateTable
CREATE TABLE "CategoriaIEGreso" (
    "ID_CategoriaIEgreso" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,

    CONSTRAINT "CategoriaIEGreso_pkey" PRIMARY KEY ("ID_CategoriaIEgreso")
);

-- CreateTable
CREATE TABLE "IEGreso" (
    "ID_IEgreso" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT,
    "FechaIEGreso" TIMESTAMP(3) NOT NULL,
    "FechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FechaModificacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Monto" DOUBLE PRECISION NOT NULL,
    "TipoIEgreso" BOOLEAN NOT NULL,
    "ID_CategoriaIEgreso" INTEGER NOT NULL,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "IEGreso_pkey" PRIMARY KEY ("ID_IEgreso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Correo_key" ON "Usuario"("Correo");

-- AddForeignKey
ALTER TABLE "EstadoDepartamento" ADD CONSTRAINT "EstadoDepartamento_ID_Pais_fkey" FOREIGN KEY ("ID_Pais") REFERENCES "Pais"("ID_Pais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciudad" ADD CONSTRAINT "Ciudad_ID_EstadoDepartamento_fkey" FOREIGN KEY ("ID_EstadoDepartamento") REFERENCES "EstadoDepartamento"("ID_EstadoDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ID_Ciudad_fkey" FOREIGN KEY ("ID_Ciudad") REFERENCES "Ciudad"("ID_Ciudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IEGreso" ADD CONSTRAINT "IEGreso_ID_CategoriaIEgreso_fkey" FOREIGN KEY ("ID_CategoriaIEgreso") REFERENCES "CategoriaIEGreso"("ID_CategoriaIEgreso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IEGreso" ADD CONSTRAINT "IEGreso_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
