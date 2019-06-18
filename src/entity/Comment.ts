import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Review} from "./Review";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    review_id: number;

    @Column()
    user_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(type => User, user => user.comments)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Review, review => review.comments)
    @JoinColumn({name: "review_id"})
    review: Review

}
