import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Almacen } from "./almacen";

@Entity()
export class Producto{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'varchar',
        nullable:false,
        unique:true,
        length:50
    })
    nombre:string;

    @OneToOne(type => Almacen)
    @JoinColumn()
    almacen:Almacen;
    
}