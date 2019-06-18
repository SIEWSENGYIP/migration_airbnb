import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Owner} from "./Owner";
import {Booking} from "./Booking";
import {Property_Tag} from "./PropertyTag";
import {Review} from "./Review";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    owner_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => Owner, owner => owner.properties)
    @JoinColumn({name: "owner_id"})
    owner: Owner

    @OneToMany(type => Property, property => property.bookings)
    bookings: Booking[]

    @OneToMany(type => Property, property => property.property_tags)
    property_tags: Property_Tag[]

    @OneToMany(type => Property, property => property.reviews)
    reviews: Review[]

}
