//f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 
const windc = document.getElementById("windchill");
const t = document.getElementById("temp").innerHTML;
const s = document.querySelector("wind").innerHTML;

if (s > 3 && t <= 50) {
    windc.innerText = Math.round(35.74+(0.6215*t)-(35.75*Math.pow(s, 0.16))+(0.4275*t*Math.pow(s, 0.16)));
}
else {
    windc.innerText = "N/A";
}
