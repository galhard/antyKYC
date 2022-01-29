"use strict";
// let initmoney = 10000;
// let money = initmoney; //wpłacana kwota
// let moneyBorrowed = 0;
// let borLimit = 0.8; //procent jaki można pożyczyć z wpłaconej kwoty
// let bormoney = money * borLimit;
// let loops = 3; //ilość pętli
// let lendApr = 0.45; //APR wpąłcanej kwoty
// let borrowApr = 0.2; //APR pożyczonej kwoty
// let overallMoney = money;
let getValue = function (ddd) {
  let val = ddd.value;
  // console.log(val);
  return val;
};
let initmoney1 = document.querySelector(".init");

let ltv1 = document.querySelector(".ltv");

let loops1 = document.querySelector(".loops");
let lendApr1 = document.querySelector(".lending");
let borrowApr1 = document.querySelector(".borrow");

document.querySelector(".submit").addEventListener("click", function () {
  document.querySelector(".looping__result").classList.remove("hidden");
  let initmoney = Number(getValue(initmoney1));
  let ltv = Number(getValue(ltv1) / 100);
  let loops = Number(getValue(loops1));
  let lendApr = Number(getValue(lendApr1) / 100);
  let borrowApr = Number(getValue(borrowApr1) / 100);
  let money = initmoney;
  let moneyBorrowed = 0;
  let bormoney = money * ltv;
  for (let i = 0; i < loops; i++) {
    money = money + bormoney;
    moneyBorrowed = moneyBorrowed + bormoney;
    bormoney = bormoney * ltv;
    console.log(money, moneyBorrowed, bormoney);
  }
  const overallApr =
    ((money * lendApr + moneyBorrowed * borrowApr) / initmoney) * 100;
  console.log(overallApr);
  document.querySelector(".looping__number").textContent = loops;
  document.querySelector(".looping__lending-amount").textContent = money;
  document.querySelector(".looping__borrowing-amount").textContent =
    moneyBorrowed;
  document.querySelector(".looping__percentages").textContent =
    overallApr.toFixed(2);
  document.querySelector(".looping__still").textContent = bormoney.toFixed(2);
});
// document.querySelector(".btn").addEventListener("click", getValue);
// console.log(overallApr);
