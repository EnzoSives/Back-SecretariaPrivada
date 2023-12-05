export declare class Dato {
    id: number;
    nombre: string;
    apellido: string;
    empresa: string;
    cargo: string;
    telefonos: number;
    acciones: string;
    constructor(nombre: string, apellido: string, empresa: string, cargo: string, telefonos: number, acciones: string);
    getIdDato(): number;
    setNombre(nombre: string): void;
    setApellido(apellido: string): void;
    setAcciones(acciones: string): void;
    setEmpresa(empresa: string): void;
    setCargo(cargo: string): void;
    setTelefonos(telefonos: number): void;
}
