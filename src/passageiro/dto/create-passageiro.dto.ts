import { 
    IsBoolean, 
    IsString, 
    IsDate, 
    IsInt, 
    IsNumber 
} from 'class-validator'

//objeto que vai ser trafegado no payload das requisições

export class CreatePassageiroDto {
    @IsString()
    nome: string;

    @IsString()
    cpf: string;

    @IsString()
    senha: string;
    
    @IsString()
    cep: string;

    @IsString()
    rua: string;

    @IsString()
    contato: string;

    @IsDate()
    horario_embarque: Date;

    @IsString()
    id_motorista: string;

    @IsBoolean()
    ativo: boolean;
}
