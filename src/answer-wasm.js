let answerWASM;
// Hent funktion fra WASM
fetch("main.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(results => {
    instance = results.instance;
    answerWASM = instance.exports.answerWASM;
  })
  .catch(console.error);

// Når der klikkes på knappen!!
document.getElementById("btnJsWasm").onclick = function() {
  document.getElementById("result").innerText = "Answer from WASM/JS: " + answerWASM();
};
