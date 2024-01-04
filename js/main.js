// Sections
let secMain = document.querySelector("div.per-step");
let secONe = document.querySelector("div.step-one");
let secTwo = document.querySelector("div.step-two");
let secThree = document.querySelector("div.step-three");
let secFour = document.querySelector("div.step-four");
// let secONeform = document.getElementById("nxt-form");

// Inputs
let inputsecOne = document.querySelectorAll(".input-sec-one");
let inputyear = document.getElementById("flexSwitchCheckChecked");

// Lists
let ulmonthsec = document.getElementById("month");
let ulyearsec = document.getElementById("year");

// Normal Buttons
let btnStpOne = document.getElementById("step-one");
let btnStpTwo = document.getElementById("step-two");
let btnSecThree = document.getElementById("step-three");

// Next Buttons
let btnNext = document.getElementById("nxt");
let btnNextTwo = document.getElementById("nxtStepTwo");

// Remove all sec except the first section
ulyearsec.remove();
secTwo.remove();
secThree.remove();
secFour.remove();

// get all  Sections by linked lists

// Class Section

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

// Functions I will use
function yearsec() {
  ulmonthsec.after(ulyearsec);
  ulmonthsec.remove();
}
function sectwo() {
  Secone.next.data.remove();
  secMain.append(Secone.data);
  btnStpOne.style.backgroundColor = "#bfe2fd";
  btnStpOne.style.color = "#02295a";
  btnStpTwo.style.backgroundColor = "transparent";
  btnStpTwo.style.color = "#fff";
}

// Section nextButton
btnStpOne.getAttribute("class");
btnNext.onclick = function () {
  for (let i = 0; i < inputsecOne.length; i++) {
    if (inputsecOne[i].value === "") {
      btnNext.addEventListener("click", function (event) {
        event.preventDefault();
      });
    } else {
      Secone.data.remove();
      secMain.append(Secone.next.data);
      btnStpOne.classList.remove("active");
      btnStpTwo.classList.add("active");
      let btnBack = document.getElementById("btn-back");
      btnBack.addEventListener("click", sectwo);
    }
  }
};
btnNextTwo.addEventListener("click", function () {
  Secone.next.data.remove();
  secMain.append(SecTwo.next.data);
  btnStpTwo.classList.remove("active");
  btnSecThree.classList.add("active");
});
// test
console.log(secMain.children);

inputyear.addEventListener("click", yearsec);
inputyear.addEventListener("blur", function () {
  ulyearsec.before(ulmonthsec);
  ulyearsec.remove();
});
