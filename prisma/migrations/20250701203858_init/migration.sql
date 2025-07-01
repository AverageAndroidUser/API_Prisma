-- CreateTable
CREATE TABLE "Moneda" (
    "ID_Moneda" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Codigo" TEXT NOT NULL,
    "Simbolo" TEXT NOT NULL,

    CONSTRAINT "Moneda_pkey" PRIMARY KEY ("ID_Moneda")
);

-- CreateTable
CREATE TABLE "Pais" (
    "ID_Pais" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "ID_Moneda" INTEGER NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("ID_Pais")
);

-- AddForeignKey
ALTER TABLE "Pais" ADD CONSTRAINT "Pais_ID_Moneda_fkey" FOREIGN KEY ("ID_Moneda") REFERENCES "Moneda"("ID_Moneda") ON DELETE RESTRICT ON UPDATE CASCADE;
