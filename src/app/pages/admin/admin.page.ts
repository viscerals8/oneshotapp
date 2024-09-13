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
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  categorias: Categoria[] = [
    
  ];

  carrito: Producto[] = [];
  productoEnEdicion: Producto | null = null;
  nuevaCategoria: string = '';  
  nuevoProducto: Producto = { nombre: '', descripcion: '', precio: 0, imagen: '' };

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

  agregarProducto() {
    if (this.nuevaCategoria && this.nuevoProducto.nombre) {
      const categoria = this.categorias.find(c => c.nombre === this.nuevaCategoria);
      if (categoria) {
        categoria.productos.push(this.nuevoProducto);
      } else {
        this.categorias.push({ nombre: this.nuevaCategoria, productos: [this.nuevoProducto] });
      }
      this.nuevaCategoria = '';
      this.nuevoProducto = { nombre: '', descripcion: '', precio: 0, imagen: '' };
    }
  }

  eliminarProducto(categoriaNombre: string, index: number) {
    const categoria = this.categorias.find(c => c.nombre === categoriaNombre);
    if (categoria) {
      categoria.productos.splice(index, 1);
    }
  }

  modificarProducto(categoriaNombre: string, index: number, productoModificado: Producto) {
    const categoria = this.categorias.find(c => c.nombre === categoriaNombre);
    if (categoria) {
      categoria.productos[index] = productoModificado;
    }
  }

  seleccionarProducto(producto: Producto) {
    this.productoEnEdicion = { ...producto };
  }

  guardarProducto() {
    if (this.productoEnEdicion) {
      const categoria = this.categorias.find(c => c.productos.includes(this.productoEnEdicion!));
      const index = categoria?.productos.indexOf(this.productoEnEdicion!);
      if (categoria && index !== undefined && index >= 0) {
        this.modificarProducto(categoria.nombre, index, this.productoEnEdicion);
        this.productoEnEdicion = null;
      }
    }
  }
}
