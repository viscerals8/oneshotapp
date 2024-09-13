import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

interface Categoria {
  nombre: string;
  productos: Producto[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  categorias: Categoria[] = [
    {
      nombre: 'Imperio',
      productos: [
        { nombre: 'Marine Espacial', descripcion: 'Guerreros de élite del Imperio.', precio: 25, imagen: 'assets/marineSpacial.jpg' },
        { nombre: 'Guardia Imperial', descripcion: 'Infantería básica del Imperio.', precio: 15, imagen: 'assets/guardiaImperial.jpg' },
        { nombre: 'Inquisidor', descripcion: 'Defensor de la fe del Emperador.', precio: 35, imagen: 'assets/inquizidor.jpg' },
        { nombre: 'Tanque Leman Russ', descripcion: 'Vehículo blindado del Imperio.', precio: 50, imagen: 'assets/leman.jpeg' },
        { nombre: 'Dreadnought', descripcion: 'Máquina de guerra caminante.', precio: 60, imagen: 'assets/dreadth.jpg' }
      ]
    },
    {
      nombre: 'Caos',
      productos: [
        { nombre: 'Señor del Caos', descripcion: 'Campeón de los dioses oscuros.', precio: 30, imagen: 'assets/chaos.jpeg' },
        { nombre: 'Cultistas del Caos', descripcion: 'Seguidores fanáticos del Caos.', precio: 20, imagen: 'assets/cultis.jpg' },
        { nombre: 'Helbrute', descripcion: 'Máquina de guerra del Caos.', precio: 45, imagen: 'assets/is-this-hellbrute-.jpg' },
        { nombre: 'Havocs', descripcion: 'Guerreros del Caos con armas pesadas.', precio: 35, imagen: 'assets/havoc.jpg' },
        { nombre: 'Tanque del Caos', descripcion: 'Vehículo blindado corrupto.', precio: 55, imagen: 'assets/tanque chaos.jpeg' }
      ]
    },
    {
      nombre: 'Necrones',
      productos: [
        { nombre: 'Necron Overlord', descripcion: 'Gobernante inmortal de las legiones Necron.', precio: 28, imagen: 'assets/necron overlord.jpeg' },
        { nombre: 'Guerrero Necrón', descripcion: 'Infantería Necrón.', precio: 18, imagen: 'assets/guerrero .jpeg' },
        { nombre: 'Destructor Necrón', descripcion: 'Unidad de ataque rápido.', precio: 40, imagen: 'assets/destructor.jpg' },
        { nombre: 'Monolito Necrón', descripcion: 'Vehículo flotante.', precio: 65, imagen: 'assets/monolito.jpg' },
        { nombre: 'Escarabajos Canópticos', descripcion: 'Unidades de enjambre pequeñas.', precio: 10, imagen: 'assets/escarabajos.jpeg' }
      ]
    }
  ];

  carrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }

  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  vaciarCarrito() {
    this.carrito = [];
  }

  comprar() {
    alert('Procediendo a la compra...');
  }
}
