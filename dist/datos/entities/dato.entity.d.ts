export declare class Dato {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    empresa: string;
    cargo: string;
    telefonos: number;
    acciones: string;
    auditar: boolean;
    constructor(nombre: string, apellido: string, dni: number, empresa: string, cargo: string, telefonos: number, acciones: string, auditar: boolean);
    getIdDato(): number;
    setNombre(nombre: string): void;
    setApellido(apellido: string): void;
    setDni(dni: number): void;
    setAcciones(acciones: string): void;
    setEmpresa(empresa: string): void;
    setCargo(cargo: string): void;
    setTelefonos(telefonos: number): void;
    setAuditar(auditar: boolean): void;
}
