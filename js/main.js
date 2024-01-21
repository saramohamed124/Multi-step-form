// Sections
let secMain = document.querySelector("div.per-step"),
  secONe = document.querySelector("div.step-one"),
  secTwo = document.querySelector("div.step-two"),
  secThree = document.querySelector("div.step-three"),
  secFour = document.querySelector("div.step-four");
// let secONeform = document.getElementById("nxt-form");

// Inputs
let inputsecOne = document.querySelectorAll(".input-sec-one"),
  inputyear = document.getElementById("check"),
  inputcheck = document.querySelectorAll("input[type=checkbox]");
console.log(inputcheck);
// Lists
let listStpTwo = document.querySelectorAll(".list-group-items"),
  listinput = document.querySelectorAll("li.list-input"),
  list = document.querySelectorAll("li.lst");

// Normal Buttons
let btnStpOne = document.getElementById("step-one"),
  btnStpTwo = document.getElementById("step-two"),
  btnStpThree = document.getElementById("step-three"),
  btnStpFour = document.getElementById("step-four");

// Next Buttons
let btnNext = document.getElementById("nxt"),
  btnNextTwo = document.getElementById("nxtStepTwo"),
  btnBackSecThree = document.getElementById("back_btn_stptwo"),
  btnNextThree = document.getElementById("btn_nxt_stpTwo");
// Remove all sec except the first section
// ulyearsec.remove();
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
  console.log(inputyear);
}
function sectwo() {
  Secone.next.data.remove();
  secMain.append(Secone.data);
  btnStpOne.classList.add("active");
  btnStpTwo.classList.remove("active");
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
      btnStpThree.classList.remove("active");
      btnStpFour.classList.remove("active");
      let btnBack = document.getElementById("btn-back");
      btnBack.addEventListener("click", sectwo);
    }
  }
};

btnBackSecThree.onclick = function () {
  SecTwo.next.data.remove();
  secMain.append(SecTwo.data);
  btnStpOne.classList.remove("active");
  btnStpTwo.classList.add("active");
  btnStpThree.classList.remove("active");
  btnStpFour.classList.remove("active");
};
btnNextTwo.addEventListener("click", function () {
  Secone.next.data.remove();
  secMain.append(SecTwo.next.data);
  btnStpOne.classList.remove("active");
  btnStpTwo.classList.remove("active");
  btnStpThree.classList.add("active");
  btnStpFour.classList.remove("active");
});

console.log(listStpTwo[1]);
// console.log(listStpTwo);
btnNextThree.onclick = function () {
  SecTwo.next.data.remove();
  secMain.append(Secthree.next.data);
};
let data = "";
let spanMOnth = document.querySelectorAll("span.month"),
  spanYear = document.querySelectorAll("span.year");
inputyear.onclick = function () {
  // console.log(spanMOnth.values[0]);
  console.log(document.querySelectorAll("span.month"));
  for (let i = 0; i < spanMOnth.length; i++) {
    spanMOnth[i].classList.toggle("hide");
    console.log(this.textContent);
    if (!spanMOnth[i].classList.contains("hide")) {
      data.concat(spanMOnth[i].innerHTML);
    }
  }
  for (let k = 0; k < spanYear.length; k++)
    spanYear[k].classList.toggle("hide");
  document.querySelector(".spm").children[0].classList.toggle("right");
  // .forEach((span) => {
  // });
  console.log(data);
};

list.forEach((li) => {
  li.onclick = function () {
    list.forEach((li) => {
      li.classList.remove("active_list");
    });
    if (!li.classList.contains("active_list")) {
      li.classList.add("active_list");
    }
  };
});
