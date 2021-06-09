import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  @Input() arrProductos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal() {
    let resultado = 0;

    for (let producto of this.arrProductos) {
      resultado += producto.precio;
    }

    return resultado;
  }

  onClickBorrar(indice) {
    this.arrProductos.splice(indice, 1);
  }

}
