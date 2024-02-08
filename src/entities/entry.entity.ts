import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EntryEntity {
  @PrimaryGeneratedColumn()
  Melingoid: number;

  @Column()
  Pos: number;

  @Column()
  Entry: string;

  @Column()
  TranslationFull: string;
}
