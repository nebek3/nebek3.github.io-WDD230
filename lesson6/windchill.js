//f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 

let t_string = document.getElementById("temp").innerHTML;
let s_string = document.getElementById("wind").innerHTML;

//USE a FUNCTION?
let t = parseFloat(t_string);
let s = parseFloat(s_string);

function chill(t, s) {
    let windc = (Math.round(35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16)))));
    return windc;
}

if (s > 3 && t <= 50) {
    document.getElementById("windchill").innerHTML = chill(t, s)
}
else {
    document.getElementById('windchill').innerHTML = "N/A";
}
