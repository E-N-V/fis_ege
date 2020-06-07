import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Applicant from "./Applicant";

Entity();
export default class Request_Applicant extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne((type) => Applicant)
	id_aplicant!: Applicant;

	@Column()
	name_spec!: number;

	@Column()
	priority!: number;
}
