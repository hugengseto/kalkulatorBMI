
const hitung = document.getElementById("calc");

hitung.addEventListener("click", BMI);

function BMI(){
  const tinggi = parseInt(document.getElementById("tinggi").value);
  const berat = parseInt(document.getElementById("berat").value);
  const hasil = document.getElementById("hasil");
  const total = document.getElementById("total");

  let BMI = (((berat  / (tinggi*tinggi))*10000).toFixed(2));
  
  hasil.textContent = "Hasil Perhitungan:";

  if((tinggi === ""|| isNaN(tinggi)) && ((berat) === "" || isNaN(berat))){
    total.textContent = "Berikan Tinggi dan Berat Badan Yang Benar";
    total.style.color = "red";
  }else if(tinggi === "" || isNaN(tinggi)){
    total.textContent = "Berikan Tinggi Badan Yang Benar";
    total.style.color = "red";
  }else if(berat === "" || isNaN(berat)){
    total.textContent = "Berikan Berat Badan Yang Benar";
    total.style.color = "red";
  }else{
    if(BMI < 18.5){
      total.textContent = `${BMI} (Berat Badan Kamu Kurang)`;
      total.style.color = "green";
    }else if(BMI >= 18.5 && BMI < 25){
      total.textContent = `${BMI} (Berat Badan Kamu Ideal/Normal)`;
      total.style.color = "green";
    }else if(BMI >= 25 && BMI < 40){
      total.textContent = `${BMI} (Kamu Kelebihan Berat Badan )`;
      total.style.color = "green";
    }else{
      total.textContent = `${BMI} (Kamu Obesitas)`;
      total.style.color = "green";
    }
  }
}

const reset = document.getElementById("reset");

reset.addEventListener("click", hapus);

function hapus(){
  
  hasil.textContent = "";
  total.textContent = "";
}