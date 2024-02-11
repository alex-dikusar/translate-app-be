import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Entry } from './entry.entity';

@Entity()
export class Example {
  @PrimaryColumn()
  id: number;

  @Column()
  melingoId: number;

  @Column()
  text: string;

  @ManyToOne(() => Entry, (entry) => entry.examples)
  melingo: Entry;
}
