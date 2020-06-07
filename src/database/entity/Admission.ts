import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Applicant from "./Applicant";

@Entity()
export default class Admission extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne((type) => Applicant)
	id_applicant!: Applicant;

	@Column()
	number!: number;

	@Column()
	date!: Date;
}
