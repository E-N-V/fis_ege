import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export default class Abbiturient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    p_p!: string

    @Column()
    date_zayv!: string

    @Column()
    fio!: string

    @Column()
    forma_poluch_obraz!: string

    @Column()
    specialnost!: string

    @Column()
    prioritet!: string

    @Column()
    nomer_lichnoe_delo!: string

    @Column()
    nomer_ekz_lista!: string

    @Column()
    osnova_obych!: string

    @Column()
    obshaga!: string

    @Column()
    sex!: string

    @Column()
    birthday!: string

    @Column()
    grazhdanstvo!: string

    @Column()
    addres_mesto_zitelstva!: string

    @Column()
    oblast!: string

    @Column()
    pasport!: string

    @Column()
    tel!: string

    @Column()
    soc_category!: string

    @Column()
    SPO_vpervie_nevpervie!: string

    @Column()
    lvl_obraz!: string

    @Column()
    god_okonchania!: string

    @Column()
    osobie_yspexi_v_echebe!: string

    @Column()
    orig_doc_obraz!: string

    @Column()
    copy_doc_obraz!: string

    @Column()
    vstup_ispitanie_1!: string

    @Column()
    avg_ball_obrazovanie_2!: string

    @Column()
    reshenie_komissi!: string

    @Column()
    nomer_i_data_prikaza_o_zachislenie!: string

    @Column()
    prioritet_vid_orig_atestata!: string
}