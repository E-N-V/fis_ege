import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Specialty extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	code!: string;

	@Column()
	name!: string;

	@Column({
		nullable: true,
	})
	cvalificacia!: string;

	@Column()
	forma_obychenia!: string;

	@Column({
		nullable: true,
	})
	base_9!: string;

	@Column({
		nullable: true,
	})
	base_11!: string;

	@Column({
		nullable: true,
	})
	amount!: number;
}
