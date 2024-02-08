import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  MelingoID: number;

  @Column()
  Text: string;
}
