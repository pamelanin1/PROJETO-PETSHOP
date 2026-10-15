import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';


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

  
  @Column({ type: 'int', name: 'FK_clienteID', nullable: true })
  FK_clienteID!: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.animais, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'FK_clienteID', referencedColumnName: 'clienteID' })
  cliente!: Cliente | null;
}
