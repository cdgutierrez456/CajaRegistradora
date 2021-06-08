import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FacturaComponent } from './components/factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
