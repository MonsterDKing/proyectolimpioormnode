import { Entity, PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Producto } from "./producto";

@Entity()
export class Almacen{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:"varchar",
        nullable:false,
        length:50
    })
    nommbre:string;

    @OneToMany(type => Producto, producto => producto.almacen)
    producto:Producto[];

    
}