import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marca{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'varchar',
        nullable:false,
        length:50
    })
    nombre:string;

    @Column({
        type:'varchar',
        nullable:true,
        length:50
    })
    comentario:string;

    
}
