import { Entity, Column } from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Dependiente extends Cliente {

    @Column()
    salario: number;
}