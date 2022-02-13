"use strict";

//APY= (1 + r/n )n – 1
//r - APR
//n - ilość compoundingów w roku

// FOLDING DEPOSIT/WITHDRAWAL ELEMENT
const chevronUnfoldAll = document.querySelectorAll(".chevron-unfold");
const chevronFoldAll = document.querySelectorAll(".chevron-fold");

for (const unfold of chevronUnfoldAll) {
  unfold.addEventListener("click", function () {
    unfold.parentNode.parentNode
      .querySelector(".foldableEl")
      .classList.remove("hidden");
    unfold.parentNode.parentNode
      .querySelector(".foldableEl")
      .classList.add("grid-3-columns");
    unfold.classList.add("hidden");
    unfold.parentNode.querySelector(".chevron-fold").classList.remove("hidden");
  });
}
for (const fold of chevronFoldAll) {
  fold.addEventListener("click", function () {
    fold.parentNode.parentNode
      .querySelector(".foldableEl")
      .classList.add("hidden");
    fold.parentNode.parentNode
      .querySelector(".foldableEl")
      .classList.remove("grid-3-columns");
    fold.classList.add("hidden");
    fold.parentNode.querySelector(".chevron-unfold").classList.remove("hidden");
  });
}
