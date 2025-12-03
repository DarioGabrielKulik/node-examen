class Producto {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }

  toFirestore() {
    return {
      nombre: this.nombre,
      precio: this.precio,
      imagen: this.imagen
    };
  }
}

export default Producto;