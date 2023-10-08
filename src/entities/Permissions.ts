import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("permitions") 
export class Permission {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: 'text'})
    description: string
}