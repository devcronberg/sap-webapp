let answerWASM;
fetch("main.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(results => {
    console.log("*");
    instance = results.instance;
    answerWASM = instance.exports.answerWASM;
  })
  .catch(console.error);

document.getElementById("btnJsWasm").onclick = function() {
  document.getElementById("result").innerText = "Answer from WASM/JS: " + answerWASM();
};
