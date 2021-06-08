import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

}
