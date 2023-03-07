import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { TestimoniosComponent } from './inicio/testimonios/testimonios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InteligenciaComponent } from './servicios/inteligencia/inteligencia.component';
import { ExpansionComponent } from './servicios/expansion/expansion.component';
import { MarcaComponent } from './servicios/marca/marca.component';
import { InmobiliarioComponent } from './servicios/inmobiliario/inmobiliario.component';
import { RetailComponent } from './servicios/retail/retail.component';

const routes: Routes = [
 {path:'', component: InicioComponent},
 {path:'clientes', component: ClientesComponent},
 {path:'servicios', component:ServiciosComponent},
 {path:'conferencias', component:ConferenciasComponent},
 {path:'testimonios', component: TestimoniosComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'inteligencia',component:InteligenciaComponent},
 {path:'expansion',component:ExpansionComponent},
 {path:'marca',component:MarcaComponent},
 {path:'inmobiliario',component:InmobiliarioComponent},
 {path:'retail',component:RetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
