import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Entry } from './entry.entity';
import { TABLE_NAME_EXAMPLES } from './constants';

@Entity({ name: TABLE_NAME_EXAMPLES })
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
