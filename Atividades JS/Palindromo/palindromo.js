function verificaPalindromo(string) {
  let j = string.length - 1;

  for (i in string) {
    if (string[i] != string[j]) {
      console.log(`${string} nao é palindromo`);
      return false;
    }
    j--;
  }
  console.log(`${string} é palindromo`);
  return true;
}

verificaPalindromo("arero");

function verificaPalindromo2(string) {
  if (!string) return;

  return string.split("").reverse().join("") === string;
}
