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
  inputcheck = document.querySelectorAll(".form-check-input");
console.log(inputcheck);
// Lists
let listinput = document.querySelectorAll("li.list-input"),
  listStpTwo = document.querySelectorAll(".lst"),
  listStpThree = document.querySelectorAll(".card");
// Normal Buttons
let btnStpOne = document.getElementById("step-one"),
  btnStpTwo = document.getElementById("step-two"),
  btnStpThree = document.getElementById("step-three"),
  btnStpFour = document.getElementById("step-four");

// Next Buttons
let btnNext = document.getElementById("nxt"),
  btnNextTwo = document.getElementById("nxtStepTwo"),
  btnBackSecThree = document.getElementById("back_btn_stptwo"),
  btnNextThree = document.getElementById("btn_nxt_stpTwo"),
  btnBackSecFour = document.getElementById("back_btn_stpthree");
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

function sectwo() {
  Secone.next.data.remove();
  secMain.append(Secone.data);
  btnStpOne.classList.add("active");
  btnStpTwo.classList.remove("active");
}
function lstStpTwo() {
  listStpTwo.forEach((li) => {
    if (li.classList.contains("active_list")) {
      // listData = document.querySelector(".active_list .text");
      listData =
        document.querySelector(".active_list").childNodes[3].children[0]
          .textContent +
        document.querySelector(
          ".step-two .lst .text span.media-margin:not(.hide)"
        ).textContent;
    }
  });
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
  lstStpTwo();
};

btnBackSecThree.onclick = function () {
  SecTwo.next.data.remove();
  secMain.append(SecTwo.data);
  btnStpOne.classList.remove("active");
  btnStpTwo.classList.add("active");
  btnStpThree.classList.remove("active");
  btnStpFour.classList.remove("active");
  lstStpTwo();
};

let month;
// When click on inputcheck if month or year
inputyear.onclick = function () {
  // Spans of year and Spans of month
  let spanMOnth = document.querySelectorAll("span.month"),
    spanYear = document.querySelectorAll("span.year");
  month = true;

  // Loops on spans of month
  for (let i = 0; i < spanMOnth.length; i++) {
    spanMOnth[i].classList.toggle("hide");
    // Check if spans have class of hide or not
    if (spanMOnth[i].classList.contains("hide")) {
      month = false;
    } else {
      month = true;
    }
  }
  // Loops on spans of year
  for (let k = 0; k < spanYear.length; k++)
    spanYear[k].classList.toggle("hide");
  // Make span child of span.spm move right
  document.querySelector(".spm").children[0].classList.toggle("right");
};
let listData;
// loop on li tags
listStpTwo.forEach((li) => {
  // When click on li remove active_list class on it
  li.onclick = function () {
    listStpTwo.forEach((li) => {
      li.classList.remove("active_list");
    });
    // Add class of active_list if li doesn't contain it
    if (!li.classList.contains("active_list")) {
      li.classList.add("active_list");
    }
    if (li.classList.contains("active_list")) {
      // listData = document.querySelector(".active_list .text");
      listData =
        document.querySelector(".active_list").childNodes[3].children[0]
          .textContent +
        document.querySelector(
          ".step-two .lst .text span.media-margin:not(.hide)"
        ).textContent;
    }
  };
});

// sec three
btnNextTwo.addEventListener("click", function () {
  Secone.next.data.remove();
  secMain.append(SecTwo.next.data);
  btnStpOne.classList.remove("active");
  btnStpTwo.classList.remove("active");
  btnStpThree.classList.add("active");
  btnStpFour.classList.remove("active");
  // Add class active to checkbox input
  listStpThree.forEach((li) => {
    li.onclick = function () {
      // li.classList.remove("card_active");
      li.classList.toggle("card_active");
    };
    document.querySelectorAll(".form-check-input").forEach((input) => {
      input.click = true;
    });
  });

  // Sec Three add span
  if (month === false) {
    document.querySelectorAll(".year-span").forEach((spanYr) => {
      // Make span hide or not
      spanYr.classList.remove("hide");
    });
    document.querySelectorAll(".month-span").forEach((spanMon) => {
      spanMon.classList.add("hide");
    });
  } else {
    document.querySelectorAll(".month-span").forEach((spanMon) => {
      spanMon.classList.remove("hide");
    });
    document.querySelectorAll(".year-span").forEach((spanYr) => {
      // Make span hide or not
      spanYr.classList.add("hide");
    });
  }
});
// When click on next button Remove data of Section Three
// And Append Data of Section Four
btnNextThree.onclick = function () {
  SecTwo.next.data.remove();
  secMain.append(Secthree.next.data);
  btnStpFour.classList.add("active");
  btnStpThree.classList.remove("active");
  secFour.querySelector(".text").textContent = listData;
};
btnBackSecFour.onclick = function () {
  Secthree.next.data.remove();
  secMain.append(Secthree.data);
  btnStpOne.classList.remove("active");
  btnStpTwo.classList.remove("active");
  btnStpThree.classList.add("active");
  btnStpFour.classList.remove("active");
};
