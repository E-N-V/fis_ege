import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Applicant from "./Applicant";

@Entity()
export default class Admission extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne((type) => Applicant)
	@JoinColumn()
	id_applicant!: Applicant;

	@Column()
	number!: number;

	@Column()
	date!: Date;
}
