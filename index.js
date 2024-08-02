function getTemperature(cityName, tempCity) {
  if (Array.isArray(cityName)) {
    return cityName.map((city) => {
      const cityInfo = tempCity.find((data) => data.name === city);
      return cityInfo ? cityInfo.temperature : null;
    });
  } else {
    const cityInfo = tempCity.find((data) => data.name === cityName);
    return cityInfo ? cityInfo.temperature : null;
  }
}

const city = [
  { name: "Tehran", temperature: "+32C" },
  { name: "Shiraz", temperature: "+22C" },
  { name: "Tabriz", temperature: "-1C" },
  { name: "Ahvaz", temperature: "-1C" },
];

console.log(getTemperature("Tehran", city));
console.log(getTemperature(["Tehran", "Tabriz"], city));
console.log(getTemperature(["Tehran", "Tabriz", "Esfehan"], city));
console.log(
  getTemperature(["Tehran", "Tabriz", "Esfehan", "Shiraz", "Ahvaz"], city)
);
