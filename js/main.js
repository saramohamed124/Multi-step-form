let secMain = document.querySelector("div.per-step");
let secONe = document.querySelector("div.step-one");
let secONeform = document.getElementById("nxt-form");
let inputsecOne = document.querySelectorAll(".input-sec-one");
let secTwo = document.querySelector("div.step-two");
let secThree = document.querySelector(".step-three");
let btnSecThree = document.getElementById("step-three");
let secFour = document.querySelector("div.step-four");
let inputyer = document.getElementById("flexSwitchCheckChecked");
let ulmonthsec = document.getElementById("month");
let ulyearsec = document.getElementById("year");
ulyearsec.remove();
secTwo.remove();
secThree.remove();
secFour.remove();
let btnNext = document.getElementById("nxt");
let btnNextTwo = document.getElementById("nxtStepTwo");

let btnStpOne = document.getElementById("step-one");
let btnStpTwo = document.getElementById("step-two");
function yearsec() {
  ulmonthsec.after(ulyearsec);
  ulmonthsec.remove();
}
inputyer.addEventListener("click", yearsec);
inputyer.addEventListener("blur", function () {
  ulyearsec.before(ulmonthsec);
  ulyearsec.remove();
});
class Section {
  constructor(data) {
    this.data = data;
    Section.next;
  }
}
let Secone = new Section(secONe);
let SecTwo = new Section(secTwo);
let Secthree = new Section(secThree);
let SecFour = new Section(secFour);

Secone.next = SecTwo;
SecTwo.next = Secthree;
Secthree.next = SecFour;
SecFour.next = Secone;

function sectwo() {
  Secone.next.data.remove();
  secMain.append(Secone.data);
  btnStpOne.style.backgroundColor = "#bfe2fd";
  btnStpOne.style.color = "#02295a";
  btnStpTwo.style.backgroundColor = "transparent";
  btnStpTwo.style.color = "#fff";
}

console.log(secMain.children);
btnStpOne.onclick = function () {
  secMain.removeChild(Secone.next.data);
  secMain.append(Secone.data);
  btnStpOne.style.backgroundColor = "#bfe2fd";
  btnStpOne.style.color = "#02295a";
  btnStpTwo.style.backgroundColor = "transparent";
  btnStpTwo.style.color = "#fff";
};
btnStpTwo.onclick = function () {
  Secone.data.remove();
  SecTwo.data.remove();
  Secthree.data.remove();
  secMain.append(Secone.next.data);
  console.log(Secone.data);
  btnStpTwo.style.backgroundColor = "#bfe2fd";
  btnStpTwo.style.color = "#02295a";
  btnStpOne.style.backgroundColor = "transparent";
  btnStpOne.style.color = "#fff";
  let btnBack = document.getElementById("btn-back");
  btnBack.addEventListener("click", sectwo);
  btnNextTwo.onclick = function () {
    SecTwo.data.remove();
    secMain.append(SecTwo.next.data);
  };
};
btnNext.onclick = function () {
  for (let i = 0; i < inputsecOne.length; i++) {
    if (inputsecOne[i + 2].value == "") {
      btnNext.addEventListener("click", function (event) {
        event.preventDefault();
      });
    } else {
      Secone.data.remove();
      secMain.append(Secone.next.data);
      console.log(Secone.data);
      btnStpTwo.style.backgroundColor = "#bfe2fd";
      btnStpTwo.style.color = "#02295a";
      btnStpOne.style.backgroundColor = "transparent";
      btnStpOne.style.color = "#fff";
      let btnBack = document.getElementById("btn-back");
      btnBack.addEventListener("click", sectwo);
    }
  }
};

btnSecThree.onclick = function () {
  SecTwo.data.remove();
  secMain.append(SecTwo.next.data);
  btnSecThree.style.backgroundColor = "#bfe2fd";
  btnSecThree.style.color = "#02295a";
  btnStpTwo.style.backgroundColor = "transparent";
  btnStpTwo.style.color = "#fff";
};
