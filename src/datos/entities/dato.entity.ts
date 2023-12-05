import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Dato {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre: string
    
    @Column()
    apellido: string
    
    @Column()
    empresa: string
    
    @Column()
    cargo: string
    
    @Column({default: 0})
    telefonos: number
    
    @Column()
    acciones: string

    constructor(nombre:string, apellido:string, empresa:string, cargo:string, telefonos:number, acciones: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.cargo = cargo;
        this.telefonos = telefonos;
        this.acciones = acciones;
    }
    public getIdDato(): number{
        return this.id;
    }
    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    public setApellido(apellido:string){
        this.apellido = apellido;
    }
    public setAcciones(acciones:string){
        this.acciones = acciones;
    }
    public setEmpresa(empresa:string){
        this.empresa = empresa;
    }
    public setCargo(cargo:string){
        this.cargo = cargo;
    }
    public setTelefonos(telefonos:number){
        this.telefonos = telefonos;
    }
}
