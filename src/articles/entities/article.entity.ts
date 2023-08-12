import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 3 })
  title: string;

  @Column()
  lead: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  photoId: number;
}