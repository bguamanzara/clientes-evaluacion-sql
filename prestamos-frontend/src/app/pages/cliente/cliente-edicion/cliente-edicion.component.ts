import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Cliente } from 'src/app/_model/cliente';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { ClienteService } from 'src/app/_service/cliente.service';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-edicion',
  templateUrl: './cliente-edicion.component.html',
  styleUrls: ['./cliente-edicion.component.css']
})
export class ClienteEdicionComponent implements OnInit {

//   form: FormGroup;
//   id: number;
//   edicion: boolean = false;
//   Cliente: Cliente;

//   constructor(private route: ActivatedRoute, private router: Router, private pacienteService: ClienteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
//     this.form = new FormGroup({
//       'id' : new FormControl(0),
//       'nombres' : new FormControl(''),
//       'apellidos' : new FormControl(''),
//       'dni' : new FormControl(''),
//       'direccion' : new FormControl(''),
//       'telefono' : new FormControl(''),
//       'email' : new FormControl('')
//     });

//     this.Cliente = new Cliente();
    
//     this.route.params.subscribe((params: Params) => {
//       this.id = params['id'];
//     });

//     this.edicion = this.id != null;

//     this.initForm();
  }

//   initForm(){
//     if(this.edicion){
//       this.pacienteService.listarPacientePorId(this.id).subscribe(data => {
//         this.form = new FormGroup({
//           'id' : new FormControl(data.idPaciente),
//           'nombres' : new FormControl(data.nombres),
//           'apellidos' : new FormControl(data.apellidos),
//           'dni' : new FormControl(data.dni),
//           'direccion' : new FormControl(data.direccion),
//           'telefono' : new FormControl(data.telefono),
//           'email' : new FormControl(data.email)
//         });        
//       });
//     }
//   }

//   operar(){
//     this.Cliente.idPaciente = this.form.value['id'];
//     this.Cliente.nombres = this.form.value['nombres'];
//     this.Cliente.apellidos = this.form.value['apellidos'];
//     this.Cliente.dni = this.form.value['dni'];
//     this.Cliente.direccion = this.form.value['direccion'];
//     this.Cliente.telefono = this.form.value['telefono'];
//     this.Cliente.email = this.form.value['email'];

//     if(this.edicion){
//       this.pacienteService.modificar(this.Cliente).subscribe(data => {
//         this.pacienteService.listar().subscribe(pacientes => {
//           this.pacienteService.pacienteCambio.next(pacientes);
//           this.pacienteService.mensajeCambio.next("Se modifico");
//         });
//       });
//     }else{
//       this.pacienteService.registar(this.Cliente).subscribe(data => {
//         this.pacienteService.listar().subscribe(pacientes => {
//           this.pacienteService.pacienteCambio.next(pacientes);
//           this.pacienteService.mensajeCambio.next("Se registro");
//         });
//       });
//     }
    
//     this.router.navigate(['Cliente']);
//   }

}
