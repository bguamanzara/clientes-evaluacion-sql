import { Cliente } from './cliente';

export class Prestamo {
    idPrestamo: number;
    cliente: Cliente;
    fecha: Date;
    monto: number;
}