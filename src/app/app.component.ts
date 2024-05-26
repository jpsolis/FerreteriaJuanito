import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from "./productos/components/productos.component";
import { CommonModule } from '@angular/common';
import { CarrocomprasComponent } from './carrocompras/components/carrocompras.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductosComponent, CarrocomprasComponent]
})
export class AppComponent {
  title = 'FerreteriaJuanito';
}
