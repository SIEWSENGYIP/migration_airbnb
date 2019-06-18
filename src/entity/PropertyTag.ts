import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Property} from "./Property";
import {Tag} from "./Tag";

@Entity()
export class Property_Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag_id: number;

    @Column()
    property_id: number;

    @ManyToOne(type => Property, property => property.property_tags)
    @JoinColumn({name: "property_id"})
    property: Property

    @ManyToOne(type => Tag, tag => tag.property_tags)
    @JoinColumn({name: "tag_id"})
    tag: Tag

}
