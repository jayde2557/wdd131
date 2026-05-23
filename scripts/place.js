const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = "Last Modified: " + lastModified;

const temperature = 28; 
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChillDisplay;

if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = calculateWindChill(temperature, windSpeed);
} else {
    windChillDisplay = "N/A";
}

document.getElementById("windchill").textContent = windChillDisplay;