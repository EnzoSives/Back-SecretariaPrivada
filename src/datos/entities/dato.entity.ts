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
    dni:number
    
    @Column()
    empresa: string
    
    @Column()
    cargo: string
    
    @Column({default: 0})
    telefonos: number
    
    @Column()
    acciones: string

    @Column()
    auditar:boolean

    constructor(nombre:string, apellido:string,dni:number, empresa:string, cargo:string, telefonos:number, acciones: string, auditar:boolean){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.empresa = empresa;
        this.cargo = cargo;
        this.telefonos = telefonos;
        this.acciones = acciones;
        this.auditar = auditar;
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
    public setDni(dni:number){
        this.dni = dni;
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
    public setAuditar(auditar:boolean){
        this.auditar = auditar;
    }
}
