import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/_service/cliente.service';
import { Cliente } from 'src/app/_model/cliente';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  dataSource: MatTableDataSource<Cliente>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['idCliente', 'cedula', 'nombre', 'acciones'];
  // clientes: cliente[] = [];

  constructor(private clienteService: ClienteService, private snacBar: MatSnackBar) { }

  ngOnInit() {
    this.clienteService.pacienteCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.clienteService.mensajeCambio.subscribe(data => {
      this.snacBar.open(data, 'AVISO', {
        duration: 2000
      })
    });

    this.clienteService.listar().subscribe(resp => {
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  eliminar(idPaciente: number){
    this.clienteService.eliminar(idPaciente).subscribe(data => {
      this.clienteService.listar().subscribe(clientes => {
        this.clienteService.pacienteCambio.next(clientes);
        this.clienteService.mensajeCambio.next("Se elimino");
      });
    });
  }

}
