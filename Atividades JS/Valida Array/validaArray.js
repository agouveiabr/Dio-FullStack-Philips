function validaArray(arr, num) {
  try {
    if (!arr || !num) throw ReferenceError("parameters expected");
    if (!(arr instanceof Object)) throw new TypeError("arr must be an object");
    if (!Number(num)) throw new TypeError("num must be a number");
    if (arr.length != num)
      throw new RangeError("arr length must be equal to num");

    return arr;
  } catch (e) {
    if (e instanceof RangeError) {
      console.log("É um RangeError");
      console.log(e.message);
    } else if (e instanceof ReferenceError) {
      console.log("É um ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("É um TypeError");
      console.log(e.message);
    } else {
      console.log("Tipo de erro nao esperado " + e);
    }
  }
}

console.log(validaArray(["1", "2"], 2));

//? Primeira tentativa (Funciona, mas da pra melhorar)
//! function validaArray(arr, num) {
//!   if (arr === undefined || num === undefined) throw ReferenceError;
//!   if (!(arr instanceof Object)) throw new TypeError("arr must be an object");
//!   if (!Number(num)) throw new TypeError("num must be a number");
//!   if (arr.length != num)
//!     throw new RangeError("arr length must be equal to num");
//! }
//! function tryCatch(arr, num) {
//!   try {
//!     validaArray(arr, num);
//!   } catch (e) {
//!     console.log(e);
//!   }
//! }
//! tryCatch([1, "a", 3]);
