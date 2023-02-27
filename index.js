import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const propriedades = [];

(function css() {
  rl.question(
    "Digite uma propriedade CSS ou digite 'sair' para parar: ",
    val => {
      if (val === "sair") {
        console.log("\nPropriedades em ordem alfabética:\n");
        propriedades.sort().map(prop => console.log(`${prop}`));

        rl.pause();
      } else {
        propriedades.push(val);
        css();
      }
    }
  );
})();
