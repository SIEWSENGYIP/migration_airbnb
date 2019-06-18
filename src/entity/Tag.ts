import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Property_Tag} from "./PropertyTag";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(type => Tag, tag => tag.property_tags)
    property_tags: Property_Tag[]

}
