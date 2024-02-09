import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Example } from './example.entity';

@Entity()
export class Entry {
  @PrimaryColumn()
  id: number;

  @Column()
  pos: number;

  @Column()
  entry: string;

  @Column()
  translationFull: string;

  @OneToMany(() => Example, (example) => example.melingo)
  examples: Example[];
}
