import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity()
export default class Student {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}