function answerJS() {
  return 42;
}

document.getElementById("btnJs").onclick = function() {
  document.getElementById("result").innerText = "Answer from JS: " + answerJS();
};
