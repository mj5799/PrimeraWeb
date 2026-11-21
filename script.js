const BotonLearnMore = document.querySelector(".contenido-header a")
const BotNav = document.querySelectorAll(".enlaces-header a")
const servicios =document.querySelectorAll(".servicio")
const BotAprend =document.querySelector(".textos-pregunta a")

BotonLearnMore.addEventListener("click", function(){
    BotonLearnMore.classList.toggle("BotonLN-Activo")
})

BotNav.forEach(function (enlace) {
enlace.addEventListener("click", function () {
    enlace.classList.toggle("Nav-Activo")
});
});

servicios.forEach(function (servicio) {
servicio.addEventListener("click", function(){
    servicio.classList.toggle("Servicio-Activo")

    const icono = servicio.querySelector("i")
    icono.classList.toggle("Icono-Activo")
});
});

BotAprend.addEventListener("click", function () {
    BotAprend.classList.toggle("Aprend-activo")
});

const contadores =document.querySelectorAll(".numbers .number h4");

contadores.forEach(function (contador){
const objetivo= Number (contador.dataset.objetivo);
let actual =0;
const incremento = Math.ceil(objetivo / 60)

const intervalo = setInterval(function () {
    actual += incremento;

    if (actual >= objetivo) {
            contador.textContent = "+" + objetivo;
            clearInterval(intervalo);
        } else {
            contador.textContent = "+" + actual;
        }
    }, 25);
});
