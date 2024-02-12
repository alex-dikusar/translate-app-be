import { Entity, Column, Index, PrimaryColumn, OneToMany } from 'typeorm';
import { Example } from './example.entity';
import { TABLE_ENTRIES_INDEX, TABLE_NAME_ENTRIES } from './constants';

@Entity({ name: TABLE_NAME_ENTRIES })
export class Entry {
  @PrimaryColumn()
  id: number;

  @Column()
  pos: number;

  @Column()
  @Index(TABLE_ENTRIES_INDEX)
  entry: string;

  @Column()
  translationFull: string;

  @OneToMany(() => Example, (example) => example.melingo)
  examples: Example[];
}
