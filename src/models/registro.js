class Registro {
  constructor(email, nombre, password) {
    this.email = email;
    this.nombre = nombre;
    this.password = password;
 
  }

  toFirestore() {
    return {
      email: this.email, 
      nombre: this.nombre,
      password: this.password
    };
  }
}

export default Registro;