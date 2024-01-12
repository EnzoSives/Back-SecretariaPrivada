import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Dato {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    dni: number

    @Column()
    empresa: string

    @Column()
    cargo: string

    @Column({ default: 0 })
    telefonos: number

    @Column()
    acciones: string

    @Column()
    auditar: boolean

    @Column()
    nSolicitud: number

    @Column()
    fecha: Date;

    @Column()
    temaAudiencia: string

    @Column()
    terreno: boolean

    @Column()
    anotado: boolean

    @Column()
    año: number

    @Column()
    tieneCasa: boolean

    @Column({ default: "No Alquila" })
    dondeAlquila: string

    @Column()
    tienetrabajo: boolean

    @Column()
    dondeTrabaja: string

    @Column()
    motivoConsulta: string

    @Column()
    recibioASocial: boolean

    @Column()
    barrioASocial: string

    @Column()
    cuandoASocial: Date

    @Column()
    recibeASocial: boolean

    @Column()
    contraprestacion: string

    @Column()
    observaciones: string

    constructor(nombre: string, apellido: string, dni: number, empresa: string, cargo: string, telefonos: number, acciones: string, auditar: boolean, nSolicitud: number,
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
        observaciones: string,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.empresa = empresa;
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
        this.observaciones = observaciones;
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
    public setEmpresa(empresa: string) {
        this.empresa = empresa;
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
