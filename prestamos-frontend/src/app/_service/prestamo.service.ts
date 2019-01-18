import { Injectable } from '@angular/core';
import { Prestamo } from '../_model/Prestamo';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HOST } from '../_shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url: string = `${HOST}/prestamos`
  medicoCambio = new Subject<Prestamo[]>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Prestamo[]>(this.url);
  }

  listarMedicoPorId(id: number){
    return this.http.get<Prestamo>(`${this.url}/${id}`);
  }

  registar(Prestamo: Prestamo){
    return this.http.post(this.url, Prestamo);
  }

  modificar(Prestamo: Prestamo){
    return this.http.put(this.url, Prestamo);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
