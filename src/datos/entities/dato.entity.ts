import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Dato {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: "Sin completar" })
    nombre: string

    @Column({ default: "Sin completar" })
    apellido: string

    @Column({ default: 0 })
    dni: number

    @Column({ default: "Sin completar" })
    direccion: string

    @Column({ default: "Sin completar" })
    cargo: string

    @Column({ default: 0 })
    telefonos: number

    @Column({ default: "Sin completar" })
    acciones: string

    @Column()
    auditar: boolean

    @Column({ default: 0 })
    nSolicitud: number

    @Column()
    fecha: Date;

    @Column({ default: "Sin completar" })
    temaAudiencia: string

    @Column()
    terreno: boolean

    @Column()
    anotado: boolean

    @Column({ default: 0 })
    año: number

    @Column()
    tieneCasa: boolean

    @Column({ default: "No Alquila" })
    dondeAlquila: string

    @Column()
    tienetrabajo: boolean

    @Column({ default: "Sin completar" })
    dondeTrabaja: string

    @Column({ default: "Sin completar" })
    motivoConsulta: string

    @Column()
    recibioASocial: boolean

    @Column({ default: "Sin completar" })
    barrioASocial: string

    @Column()
    cuandoASocial: Date

    @Column()
    recibeASocial: boolean

    @Column({ default: "Sin completar" })
    contraprestacion: string



    constructor(nombre: string, apellido: string, dni: number, direccion: string, cargo: string, telefonos: number, acciones: string, auditar: boolean, nSolicitud: number,
        fecha: Date,
        temaAudiencia: string,
        terreno: boolean,
        anotado: boolean,
        año: number,
        tieneCasa: boolean,
        dondeAlquila: string,
        tieneTrabajo: boolean,
        dondeTrabaja: string,
        motivoConsulta: string,
        recibioASocial: boolean,
        barrioASocial: string,
        cuandoASocial: Date,
        recibeASocial: boolean,
        contraprestacion: string,
        ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.direccion = direccion;
        this.cargo = cargo;
        this.telefonos = telefonos;
        this.acciones = acciones;
        this.auditar = auditar;
        this.nSolicitud = nSolicitud;
        this.fecha = fecha;
        this.temaAudiencia = temaAudiencia;
        this.terreno = terreno;
        this.anotado = anotado;
        this.año = año;
        this.tieneCasa = tieneCasa;
        this.dondeAlquila = dondeAlquila;
        this.tienetrabajo = tieneTrabajo;
        this.dondeTrabaja = dondeTrabaja;
        this.motivoConsulta = motivoConsulta;
        this.recibioASocial = recibioASocial;
        this.barrioASocial = barrioASocial;
        this.cuandoASocial = cuandoASocial;
        this.recibeASocial = recibeASocial;
        this.contraprestacion = contraprestacion;
    }
    public getIdDato(): number {
        return this.id;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setApellido(apellido: string) {
        this.apellido = apellido;
    }
    public setDni(dni: number) {
        this.dni = dni;
    }
    public setAcciones(acciones: string) {
        this.acciones = acciones;
    }
    public setdireccion(direccion: string) {
        this.direccion = direccion;
    }
    public setCargo(cargo: string) {
        this.cargo = cargo;
    }
    public setTelefonos(telefonos: number) {
        this.telefonos = telefonos;
    }
    public setAuditar(auditar: boolean) {
        this.auditar = auditar;
    }
}
