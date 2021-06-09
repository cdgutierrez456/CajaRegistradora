import { Component } from '@angular/core';
import { Producto } from './models/producto.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {

    this.productosSeleccionados = [];

    this.arrComida = [
      new Producto('Bayas', 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg', 5000),
      new Producto('Fresas', 'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg', 3500),
      new Producto('Hamburguesa', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg', 15000),
      new Producto('Pizza', 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg', 20000),
      new Producto('Sushi', 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg', 15000)
    ]
    this.arrBebida = [
      new Producto('Coca Cola', 'https://cdn.pixabay.com/photo/2015/06/25/16/56/coca-cola-821512_960_720.jpg', 3000),
      new Producto('Café', 'https://cdn.pixabay.com/photo/2015/03/26/09/40/coffee-690054_960_720.jpg', 3000),
      new Producto('Cerveza', 'https://cdn.pixabay.com/photo/2015/09/24/20/36/beer-barrel-956322_960_720.jpg', 23000),
      new Producto('Cockteles', 'https://cdn.pixabay.com/photo/2016/11/19/13/53/margarita-1839361_960_720.jpg', 30000)
    ]
  }

  onProductoSeleccionado($event) {
    this.productosSeleccionados.push($event);
  }

}
