import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Permission } from "./Permissions";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({type: 'text'})
    description: string

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "pivot-permissions",
        joinColumns: [{name: "role_id"}],
        inverseJoinColumns: [{name: "permission_id"}],
    })
    permission: Permission[]
}