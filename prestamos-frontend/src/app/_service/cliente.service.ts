import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HOST } from '../_shared/var.constant';
import { Subject } from 'rxjs';
import { Cliente } from '../_model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = `${HOST}/clientes`
  pacienteCambio = new Subject<Cliente[]>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(this.url);
  }

  listarPacientePorId(id: number){
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  registar(Cliente: Cliente){
    return this.http.post(this.url, Cliente);
  }

  modificar(Cliente: Cliente){
    return this.http.put(this.url, Cliente);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
