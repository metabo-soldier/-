function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const heightM = heightCm / 100;

  const bmi = weight / Math.pow(heightM, 2);
  document.getElementById("bmi").innerHTML = "理想的なBMI: " + bmi.toFixed(2);
}
