import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/_model/cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClienteService } from 'src/app/_service/cliente.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-edicion',
  templateUrl: './cliente-edicion.component.html',
  styleUrls: ['./cliente-edicion.component.css']
})
export class ClienteEdicionComponent implements OnInit {

  form: FormGroup;
  id: number;
  edicion: boolean = false;
  Cliente: Cliente;

  constructor(private route: ActivatedRoute, private router: Router, private pacienteService: ClienteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      'id' : new FormControl(0),
      'cedula' : new FormControl(''),
      'nombre' : new FormControl('')
    });

    this.Cliente = new Cliente();
    
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.edicion = this.id != null;

    this.initForm();
  }

  initForm(){
    if(this.edicion){
      this.pacienteService.listarClientePorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id' : new FormControl(data.idCliente),
          'cedula' : new FormControl(data.cedula),
          'nombre' : new FormControl(data.nombre)
      });
    });
    }
  }

  operar(){
    this.Cliente.idCliente = this.form.value['id'];
    this.Cliente.cedula = this.form.value['cedula'];
    this.Cliente.nombre = this.form.value['nombre'];

    if(this.edicion){
      this.pacienteService.modificar(this.Cliente).subscribe(data => {
        this.pacienteService.listar().subscribe(pacientes => {
          this.pacienteService.pacienteCambio.next(pacientes);
          this.pacienteService.mensajeCambio.next("Se modifico");
        });
      });
    }else{
      this.pacienteService.registar(this.Cliente).subscribe(data => {
        this.pacienteService.listar().subscribe(pacientes => {
          this.pacienteService.pacienteCambio.next(pacientes);
          this.pacienteService.mensajeCambio.next("Se registro");
        });
      });
    }
    
    this.router.navigate(['']);
  }

}
