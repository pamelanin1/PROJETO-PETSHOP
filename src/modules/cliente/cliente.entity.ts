import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animal/animal.entity';


@Entity('cliente')
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'clienteID' })
  clienteID!: number;

  @Column({ type: 'varchar', length: 100 })
  nome!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefone!: string | null;

  @Column({ type: 'varchar', length: 14, unique: true })
  cpf!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco!: string | null;

  @OneToMany(() => Animal, (animal) => animal.cliente)
  animais!: Animal[];
}
