import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Property} from "./Property";
import {Comment} from "./Comment";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    rating: number;

    @Column()
    user_id: number;

    @Column()
    property_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => User, user => user.reviews)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Property, property => property.reviews)
    @JoinColumn({name: "property_id"})
    property: Property

    @OneToMany(type => Review, review => review.comments)
    comments: Comment[]

}
