document.getElementById("conversion-button").addEventListener("click", () => {
  // Tangkap nilai dari field.
  const getTemperature = parseInt(document.getElementById("inputTemperature").value);
  const getConversionType = document.getElementById("conversionType").value;
  let result;

  // Cek apakah nilai sudah didapatkan atau belum sekaligus tipe datanya.
  // console.log(typeof getTemperature);
  // console.log(typeof getConversionType);
  // console.log(typeof getConversionResult);

  // Cek jika inputan selain angka.
  if(isNaN(getTemperature)) {
    alert("Mohon masukkan angka yang valid, ya. Terimakasih.");
    return;
  }

  // Cek konversi yang dipilih
  switch(getConversionType) {
    case "celsiusFahrenheit":
      result = ((9 / 5) * getTemperature) + 32;
      templateResult(result, getConversionType, `((9 / 5) * ${getTemperature}) + 32`);
      break;
    case "celsiusKelvin":
      result = getTemperature + 273;
      templateResult(result, getConversionType, `${getTemperature} + 273`);
      break;
    case "celsiusReamur":
      result = (4 / 5) * getTemperature;
      templateResult(result, getConversionType, `(4 / 5) * ${getTemperature}`);
      break;
    case "fahrenheitCelsius":
      result = (5 / 9) * (getTemperature - 32);
      templateResult(result, getConversionType, `(5 / 9) * (${getTemperature} - 32)`);
      break;
    case "fahrenheitKelvin":
      result = ((5 / 9) * (getTemperature - 32) + 273);
      templateResult(result, getConversionType, `((5 / 9) * (${getTemperature} - 32) + 273)`);
      break;
    case "fahrenheitReamur":
      result = (4 / 9) * (getTemperature - 32);
      templateResult(result, getConversionType, `(4 / 9) * (${getTemperature} - 32)`);
      break;
    case "kelvinCelsius":
      result = getTemperature - 273;
      templateResult(result, getConversionType, `${getTemperature} - 273`);
      break;
    case "kelvinFahrenheit":
      result = ((9 / 5) * (getTemperature - 273) + 32);
      templateResult(result, getConversionType, `((9 / 5) * (${getTemperature} - 273) + 32`);
      break;
    case "kelvinReamur":
      result = (4 / 5) * (getTemperature - 273);
      templateResult(result, getConversionType, `(4 / 5) * (${getTemperature} - 273)`);
      break;
    case "reamurCelsius":
      result = (5 / 4) * getTemperature;
      templateResult(result, getConversionType, `(5 / 4) * ${getTemperature}`);
      break;
    case "reamurFahrenheit":
      result = (9 / 5) * (getTemperature + 32);
      templateResult(result, getConversionType, `(9 / 5) * (${getTemperature} + 32)`);
      break;
    case "reamurKelvin":
      result = (((5 / 4) * getTemperature) + 273);
      templateResult(result, getConversionType, `(((5 / 4) * ${getTemperature}) + 273)`);
      break;
  }
  
  document.getElementById("inputTemperature").value = "";
});

// Buat template hasil untuk ditampilkan di halaman web.
const getConversionResult = document.getElementById("conversion-result");

function templateResult(temperature, conversion, text) {
  let tempText = `Hasil konversi dari ${conversion} adalah ${temperature}`;
  const scaleTemperature = {
    "celsiusFahrenheit": "°F",
    "celsiusKelvin": "°K",
    "celsiusReamur": "°R",
    "fahrenheitCelsius": "°C",
    "fahrenheitKelvin": "°K",
    "fahrenheitReamur": "°R",
    "kelvinCelsius": "°C",
    "kelvinFahrenheit": "°F",
    "kelvinReamur": "°R",
    "reamurCelsius": "°C",
    "reamurFahrenheit": "°F",
    "reamurKelvin": "°K"
  };

 for(const key in scaleTemperature) {
    // console.log(typeof key);
    // console.log(scaleTemperature[key]);

    if(key === conversion) {
      tempText += scaleTemperature[key];
    }
 }

  // console.log(typeof conversion);
  
  // Menampilkan teks hasil.
  getConversionResult.innerHTML = `
    <h3 class="text-result">${tempText}</h3>
    <p>Dengan penyelesaian rumus sebagai berikut : ${text} = ${temperature}</p>  
  `;

   // Menghapus atribut hidden agar elemen terlihat.
   getConversionResult.removeAttribute('hidden');
}
