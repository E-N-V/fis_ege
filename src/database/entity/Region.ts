import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Region extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
}