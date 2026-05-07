function answer(score) {
  const result = document.getElementById("result");

  if (score === 1) {
    result.innerHTML = "<h2>你偏外向型人格！</h2>";
  } else {
    result.innerHTML = "<h2>你偏內向型人格！</h2>";
  }
}