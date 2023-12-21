const btn = document.querySelector("button");
const trasa = document.querySelector(".trasa"),
  pig = document.querySelector(".pig");
let record = document.querySelector(".record");

function jamp() {
  setTimeout(myFunction, 1300);
  pig.classList.add("jjj");
  function myFunction() {
    pig.classList.remove("jjj");
  }
}

let rec = 0;
function updateRecord() {
  record.innerHTML = rec;
  rec += 10;
  bah();
}
const intervalId = setInterval(updateRecord, 1000);

btn.addEventListener("click", jamp);

const pula = document.querySelector(".pula");
const btn2 = document.querySelector(".button2");
function atack() {
  setTimeout(myFunctio, 700);
  pula.classList.add("pul");
  function myFunctio() {
    pula.classList.remove("pul");
  }
}
const litak = document.querySelector(".litak");
function rst() {
  rec = 0;
  record.innerHTML = rec;
  per.classList.add("perAnim");
}
const per = document.querySelector(".per");
per.classList.add("perAnim");

btn2.addEventListener("click", atack);
const pigg = pig.getBoundingClientRect();
const perr = per.getBoundingClientRect();
let end = setInterval(function () {
  let pigTop = parseInt(window.getComputedStyle(pig).getPropertyValue("top"));
  let perLeft = parseInt(
    window.getComputedStyle(per).getPropertyValue("right")
  );
  let airLef = parseInt(window.getComputedStyle(litak).getPropertyValue("right"));
  if (
    (perLeft > 530 && perLeft < 580 && pigTop < -69 && pigTop > -90)||(
      airLef > 530 && airLef < 580 && pigTop < -69 && pigTop > -91
    )
  ) {
    per.classList.remove("perAnim");
    alert(` заробив ${rec} очок  і всрався`);
    rst();
    per.style.cssText = "right: 0px";
  } else {
  }
}, 10);
const vybuh = document.querySelector(".vybuh");
function bah() {
  let pulaRight = parseInt(
    window.getComputedStyle(pula).getPropertyValue("left")
  );
  let airLeft = parseInt(
    window.getComputedStyle(litak).getPropertyValue("right")
  );
  if (pulaRight > 40 && airLeft > 150) {
    vybuh.classList.add("vybuhAni");
    litak.classList.remove("anim");
    setTimeout(myFunctio, 700);
    function myFunctio() {
      vybuh.classList.remove("vybuhAni");
      litak.classList.add("anim");
    }
  }
}
litak.classList.add('anim')