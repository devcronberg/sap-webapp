// Svaret på alt
function answerJS() {
  return 42;
}

// Når der klikkes på knappen!!
document.getElementById("btnJs").onclick = function() {
  document.getElementById("result").innerText = "Answer from JS: " + answerJS();
};
