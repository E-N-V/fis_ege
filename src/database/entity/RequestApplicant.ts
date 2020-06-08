import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Applicant from "./Applicant";

@Entity()
export default class RequestApplicant extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne((type) => Applicant)
	id_aplicant!: Applicant;

	@Column()
	name_spec!: number;

	@Column()
	priority!: number;
}
