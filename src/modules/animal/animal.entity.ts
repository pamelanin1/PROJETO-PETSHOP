import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animal')
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  nome!: string;

  @Column({ type: 'varchar', length: 100 })
  raca!: string;

  @Column({ type: 'varchar', length: 30 })
  porte!: string;

  @Column({ type: 'varchar', length: 50 })
  especie!: string;

  @Column({ type: 'varchar', length: 20 })
  sexo!: string;

  @Column({ type: 'int' })
  idade!: number;
}
