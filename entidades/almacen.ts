import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

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

    
}