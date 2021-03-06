import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from "typeorm";
import Admission from "./Admission";
import RequestApplicant from "./RequestApplicant";

@Entity()
export default class Applicant extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	date_zayv!: string;

	@Column()
	fio!: string;

	@Column()
	forma_poluch_obraz!: string;

	@Column()
	nomer_lichnoe_delo!: string;

	@Column()
	nomer_ekz_lista!: string;

	@Column()
	osnova_obych!: string;

	@Column()
	obshaga!: string;

	@Column()
	sex!: string;

	@Column()
	birthday!: string;

	@Column()
	grazhdanstvo!: string;

	@Column()
	addres_mesto_zitelstva!: string;

	@Column()
	oblast!: string;

	@Column()
	passport!: string;

	@Column()
	tel!: string;

	@Column()
	soc_category!: string;

	@Column()
	SPO_vpervie_nevpervie!: string;

	@Column()
	lvl_obraz!: string;

	@Column()
	god_okonchania!: string;

	@Column()
	osobie_yspexi_v_echebe!: string;

	@Column()
	orig_doc_obraz!: string;

	@Column()
	vstup_ispitanie_1!: string;

	@Column()
	avg_ball_obrazovanie_2!: string;

	@Column()
	reshenie_komissi!: string;

	@OneToOne((type) => Admission, (admission) => admission.id_applicant)
	admission!: Admission;

	@OneToOne((type) => RequestApplicant, (request) => request.id_aplicant)
	request!: RequestApplicant;
}
