var tombol = document.getElementById("hitung");

tombol.onclick = function() {
  var angka1 = Number(document.getElementById("angka1").value);
  var angka2 = Number(document.getElementById("angka2").value);
  var hasil = angka1 + angka2;
  document.getElementById("hasil").textContent = "Hasil: " + hasil;
};