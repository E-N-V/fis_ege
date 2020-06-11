import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Applicant from "./Applicant";

@Entity()
export default class RequestApplicant extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@OneToOne((type) => Applicant)
	@JoinColumn()
	id_aplicant!: Applicant;

	@Column()
	name_spec_1!: string;

	@Column({ nullable: true })
	name_spec_2!: string;

	@Column({ nullable: true })
	name_spec_3!: string;
}
