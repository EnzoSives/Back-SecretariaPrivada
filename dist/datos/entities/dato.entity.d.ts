export declare class Dato {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    direccion: string;
    cargo: string;
    telefonos: number;
    acciones: string;
    auditar: boolean;
    nSolicitud: number;
    fecha: Date;
    temaAudiencia: string;
    terreno: boolean;
    anotado: boolean;
    año: number;
    tieneCasa: boolean;
    dondeAlquila: string;
    tienetrabajo: boolean;
    dondeTrabaja: string;
    motivoConsulta: string;
    recibioASocial: boolean;
    barrioASocial: string;
    cuandoASocial: Date;
    recibeASocial: boolean;
    contraprestacion: string;
  
    constructor(nombre: string, apellido: string, dni: number, direccion: string, cargo: string, telefonos: number, acciones: string, auditar: boolean, nSolicitud: number, fecha: Date, temaAudiencia: string, terreno: boolean, anotado: boolean, año: number, tieneCasa: boolean, dondeAlquila: string, tieneTrabajo: boolean, dondeTrabaja: string, motivoConsulta: string, recibioASocial: boolean, barrioASocial: string, cuandoASocial: Date, recibeASocial: boolean, contraprestacion: string);


    getIdDato(): number;
    setNombre(nombre: string): void;
    setApellido(apellido: string): void;
    setDni(dni: number): void;
    setAcciones(acciones: string): void;
    setdireccion(direccion: string): void;
    setCargo(cargo: string): void;
    setTelefonos(telefonos: number): void;
    setAuditar(auditar: boolean): void;
}
