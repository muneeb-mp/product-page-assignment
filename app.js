const productCount = document.querySelector(".amount__number");
const changeCountBtn = document.querySelectorAll(".amount__icon");
let sizesList = document.querySelectorAll(".sizes__list");
const addCart = document.querySelector(".purchase__addtocart");
const sizeWarning = document.querySelector(".size__warning");
const purchaseAdded = document.querySelector(".purchase__added");
const sizeNum = document.querySelector(".size__num");

const selectSize = () => {
  for (let i = 0; i < sizesList.length; i++) {
    sizesList[i].onclick = function () {
      let el = sizesList[0];
      while (el) {
        if (el.tagName === "LI") {
          el.classList.remove("sizes__list--selected");
        }
        el = el.nextSibling;
      }
      this.classList.add("sizes__list--selected");
    };
  }
};
selectSize();

const sizeSelected = () => {
  addCart.addEventListener("click", () => {
    for (let i = 0; i < sizesList.length; i++) {
      if (sizesList[i].classList.contains("sizes__list--selected")) {
        purchaseAdded.style.display = "inline-block";
        sizeWarning.style.display = "none";
        sizeNum.innerHTML = sizesList[i].innerHTML;
        return;
      } else {
        sizeWarning.style.display = "inline-block";
      }
    }
  });
};
sizeSelected();

// To increase quantity
let quantity = 1;
changeCountBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickBtn = e.currentTarget.classList;

    if (clickBtn.contains("fa-plus")) {
      quantity += 1;
    } else if (clickBtn.contains("fa-minus")) {
      if (quantity !== 1) {
        quantity -= 1;
      }
    } else {
      quantity = 1;
    }

    productCount.innerText = quantity;
  });
});
