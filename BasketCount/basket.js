const rightarrow = document.querySelector(".right-arrow");
const firstbasketcount = document.querySelector(".basket-1 span");
const secondbasketcount = document.querySelector(".basket-2 span");
const lefttarrow = document.querySelector(".left-arrow");

let totalApple = 10;

let secondbasketApplecount = 0;
let firstbasketApplecount = totalApple - secondbasketApplecount;

firstbasketcount.innerText = firstbasketApplecount;
secondbasketcount.innerText = secondbasketApplecount;

rightarrow.addEventListener("click", () => {
  if (firstbasketApplecount > 0) {
    firstbasketApplecount--;
    firstbasketcount.innerText = firstbasketApplecount;
    secondbasketApplecount++;
    secondbasketcount.innerText = secondbasketApplecount;
  }
});
lefttarrow.addEventListener("click", () => {
  if (secondbasketApplecount > 0) {
    firstbasketApplecount++;
    firstbasketcount.innerText = firstbasketApplecount;
    secondbasketApplecount--;
    secondbasketcount.innerText = secondbasketApplecount;
  }
});
