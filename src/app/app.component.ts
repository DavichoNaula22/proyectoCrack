import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponentComponent } from './Components/interpolation-component/interpolation-component.component';
import { PropertyBindingComponent } from './Components/property-binding/property-binding.component';
import { EventComponent } from './Components/event/event.component';
import { StyleComponent } from './Components/style/style.component';
import { RegistroComponent } from './Components/registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolationComponentComponent, PropertyBindingComponent, EventComponent, StyleComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCrack';
}
