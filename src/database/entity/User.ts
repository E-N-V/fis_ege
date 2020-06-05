import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    login!: string

    @Column()
    password!: string

    @Column()
    f_name!: string

    @Column()
    s_name!: string

    @Column()
    t_name!: string

    @Column({
        default: "test_token"
    })
    token!: string
}