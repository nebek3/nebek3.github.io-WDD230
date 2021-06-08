//f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 


document.querySelector("#windchill")

let t = document.querySelector("#temp")
let s = document.querySelector("wind")

if (wind > 5) AND (temp <= 50) {

}
    document.querySelector("#windchill").textContent = ;


function windChill(t, s) {
    return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
}
