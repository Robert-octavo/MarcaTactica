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

const routes: Routes = [
 {path:'', component: InicioComponent},
 {path:'clientes', component: ClientesComponent},
 {path:'servicios', component:ServiciosComponent},
 {path:'conferencias', component:ConferenciasComponent},
 {path:'testimonios', component: TestimoniosComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'inteligencia',component:InteligenciaComponent},
 {path:'expansion',component:ExpansionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
