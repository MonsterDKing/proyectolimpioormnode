import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
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

    @ManyToOne(type => Almacen, almacen => almacen.producto)
    almacen:Almacen;
    
}