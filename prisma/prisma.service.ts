import { OnModuleInit, OnModuleDestroy, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit(){ //interface -> é obrigatório ter algo dentro
        await this.$connect(); //conecta com o banco
    }

    async onModuleDestroy(){ //interface -> é obrigatório ter algo dentro
        await this.$disconnect(); //disconecta o banco
    }
}