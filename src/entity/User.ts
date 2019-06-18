import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Booking} from "./Booking";
import {Review} from "./Review";
import {Comment} from "./Comment";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => User, user => user.bookings)
    bookings: Booking[]

    @OneToMany(type => User, user => user.reviews)
    reviews: Review[]

    @OneToMany(type => User, user => user.comments)
    comments: Comment[]

}
