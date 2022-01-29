"use strict";

const ascendexUnfold = document.querySelector(".Ascendex_unfold");
const ascendexFold = document.querySelector(".Ascendex_fold");
const foldingAscendex = document.querySelector(".folding_Ascendex");
const kucoinUnfold = document.querySelector(".Kucoin_unfold");
const kucoinFold = document.querySelector(".Kucoin_fold");
const foldingKucoin = document.querySelector(".folding_Kucoin");
const gateUnfold = document.querySelector(".Gate_unfold");
const gateFold = document.querySelector(".Gate_fold");
const foldingGate = document.querySelector(".folding_Gate");

// ascendexUnfold.addEventListener("click", function () {
//   foldingAscendex.classList.remove("hidden");
//   foldingAscendex.classList.add("grid-3-columns");
//   ascendexUnfold.classList.add("hidden");
//   ascendexFold.classList.remove("hidden");
// });
const unfold = function (fold, unfold, folding) {
  unfold.addEventListener("click", function () {
    folding.classList.remove("hidden");
    folding.classList.add("grid-3-columns");
    unfold.classList.add("hidden");
    fold.classList.remove("hidden");
  });
};
const fold = function (fold, unfold, folding) {
  fold.addEventListener("click", function () {
    folding.classList.remove("grid-3-columns");
    folding.classList.add("hidden");
    fold.classList.add("hidden");
    unfold.classList.remove("hidden");
  });
};
unfold(ascendexFold, ascendexUnfold, foldingAscendex);
fold(ascendexFold, ascendexUnfold, foldingAscendex);
unfold(kucoinFold, kucoinUnfold, foldingKucoin);
fold(kucoinFold, kucoinUnfold, foldingKucoin);
unfold(gateFold, gateUnfold, foldingGate);
fold(gateFold, gateUnfold, foldingGate);

//APY= (1 + r/n )n – 1
//r - APR
//n - ilość compoundingów w roku
