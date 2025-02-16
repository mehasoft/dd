import { dd } from "./src/index.js";

const user = {
  name: "Mehmet",
  age: 25,
  skills: ["JavaScript", "Node.js", "Laravel"]
};

dd(user); // JSON çıktısını renklendirilmiş bir şekilde gösterir ve süreci durdurur

console.log("Deneme test") // Program dd() metodundan sonra çalışmayacağı için bu log yazısı gözükmez.