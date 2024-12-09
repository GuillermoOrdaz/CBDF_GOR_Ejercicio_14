import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {

  usuarioLogueado = true

  usuarios = [
    {
      id:1,
      nombre:"Jose",
      sueldo:8600,
      activo:true
    },
    {
      id:2,
      nombre:"Fausto",
      sueldo:9600,
      activo:true
    },
    {
      id:3,
      nombre:"Meliodas",
      sueldo:10600,
      activo:true
    },
    {
      id:4,
      nombre:"Raul",
      sueldo:11000,
      activo:true
    },
    {
      id:5,
      nombre:"Alonso",
      sueldo:100000,
      activo:true
    },
    {
      id:6,
      nombre:"Miguel",
      sueldo:100000,
      activo:true
    },
    {
      id:7,
      nombre:"Artemisa",
      sueldo:12000,
      activo:true
    },
    {
      id:8,
      nombre:"Andrea",
      sueldo:9000,
      activo:false
    },
    {
      id:9,
      nombre:"Marcela",
      sueldo:12000,
      activo:true
    },
    {
      id:10,
      nombre:"Paola",
      sueldo:12000,
      activo:true
    }
  ]

}
