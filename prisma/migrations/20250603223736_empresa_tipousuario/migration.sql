-- CreateTable
CREATE TABLE "Empresa" (
    "id" TEXT NOT NULL,
    "fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoUsuario" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "TipoUsuario_pkey" PRIMARY KEY ("id")
);
