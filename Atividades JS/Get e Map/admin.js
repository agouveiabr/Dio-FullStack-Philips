function getAdmins(map) {
  let admin = [];
  for ([key, value] of map) {
    if (value == "admin") {
      admin.push(key);
    }
  }
  return admin;
}

const usuarios = new Map();
usuarios.set("Luiz", "admin");
usuarios.set("Luisa", "admin");
usuarios.set("Lucas", "admin");
usuarios.set("Luisinho", "guest");
usuarios.set("Lula", "admin");

console.log(getAdmins(usuarios));

let valoresUnicos = new Set([30, 30, 40, 5, 223, 2049, 3034, 5]);

arrUnico = [...valoresUnicos];

console.log(valoresUnicos, arrUnico);
