//f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 

let windc = document.getElementById("windchill");
let t_string = document.getElementById("temp").innerText.match(/\d+/)[0];
let s_string = document.getElementById("wind").innerText.match(/\d+/)[0];

let t = parsefloat(t_string);
let s = parseFloat(s_string);

if (s > 3 && t <= 50) {
   // windc.innerText = Math.round(35.74+(0.6215*t)-(35.75*Math.pow(s, 0.16))+(0.4275*t*Math.pow(s, 0.16)));
    document.getElementById('windchill').innerHTML = result;

}
else {
    document.getElementById('windchill').innerHTML = "N/A";
}
