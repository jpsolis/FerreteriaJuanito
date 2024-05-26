import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  

  private productos: Producto[] = [

    {
      id: 1,
      descripcion: "Clavos",
      precio: 100
    },
    {
      id: 2,
      descripcion: "Martillo",
      precio: 5000
      
    },
    {
      id: 3,
      descripcion: "Destornillador Cruz",
      precio: 3000  
    }
  ];
  constructor() { }

  findAll(): Observable<Producto[]>{
    return of(this.productos);
  }
}
