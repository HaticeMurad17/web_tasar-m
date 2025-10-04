// Şehir ve hava durumu verileri (örnek, API yok)
const weatherData = {
  istanbul: { temp: 24, condition: "Güneşli ☀️" },
  ankara: { temp: 19, condition: "Bulutlu ⛅" },
  izmir: { temp: 26, condition: "Parçalı Bulutlu 🌤" },
  antalya: { temp: 28, condition: "Sıcak 🔥" }
};

const select = document.getElementById("citySelect");
const weatherBox = document.getElementById("weatherBox");

select.addEventListener("change", () => {
  const city = select.value;
  if (city && weatherData[city]) {
    const data = weatherData[city];
    weatherBox.innerHTML = `
      <h2>${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
      <p>${data.condition}</p>
      <p>${data.temp}°C</p>
    `;
  } else {
    weatherBox.innerHTML = "<p>Bir şehir seçin.</p>";
  }
});



