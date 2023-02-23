import { Component } from '@angular/core';
import { faCoffee, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  faCoffee = faCoffee;
  faChartBar = faChartBar;
}
