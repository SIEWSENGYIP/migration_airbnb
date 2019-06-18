import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {User} from "./User";
import {Property} from "./Property";
import {Payment} from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    property_id: number;

    @Column()
    price: number;

    @Column()
    booking_date: Date;

    @Column()
    user_id: number;

    @Column()
    check_in: Date;

    @Column()
    check_out: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => User, user => user.bookings)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Property, property => property.bookings)
    @JoinColumn({name: "property_id"})
    property: Property

    @OneToMany(type => Booking, booking => booking.payments)
    payments: Payment[]

}
