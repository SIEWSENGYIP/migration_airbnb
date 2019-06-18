import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Booking} from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    amount: number;

    @Column()
    booking_id: number;

    @ManyToOne(type => Booking, booking => booking.payments)
    @JoinColumn({name: "booking_id"})
    booking: Booking

}
