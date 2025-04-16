import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity('usuarios')
export class User {
    @PrimaryColumn('varchar')
    id?: string;

    @Column('varchar')
    name!: string;

    @Column('varchar')
    email!: string;

    @Column('varchar')
    password!: string;

}

