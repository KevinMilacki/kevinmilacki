const photoGrid = document.getElementById("photoGrid");
const slides = document.querySelectorAll(".slides img");
const modalSlider = document.getElementById("modalSlider");
const wrapper = document.querySelector(".wrapper");

let slideNumber = null;

let slideArr = [];
const slideIndex = 0;

function getSlideArray(slides) {
  slides.forEach((slide) => {
    slideArr.push(slide.src);
  });
}

getSlideArray(slides);

function getSlideNumber(number) {
  return (slideNumber = number);
}

function handleEvent() {}

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    photoGrid.classList.add("grayout");
    modalSlider.classList.add("showModal");
    makeModal(slide.src);
    wrapper.style.display = "none";
    return (slideNumber = index);
  });
});

function prevSlide() {
  if (slideNumber === 0) {
    slideNumber = slideArr.length - 1;
    modalImg.src = slideArr[slideNumber];
    return slideNumber;
  }
  slideNumber = slideNumber - 1;
  modalImg.src = slideArr[slideNumber];
  return slideNumber;
}

function nextSlide() {
  if (slideNumber === slideArr.length - 1) {
    slideNumber = 0;
    modalImg.src = slideArr[slideNumber];
    return slideNumber;
  }

  slideNumber = slideNumber + 1;
  modalImg.src = slideArr[slideNumber];
  return slideNumber;
}

function exitSlide() {
  photoGrid.classList.remove("grayout");
  photoGrid.style.position = "";
  modalSlider.classList.remove("showModal");
  // Instead of removing the modal image element, hide it
  const modalImg = document.getElementById("modalImg");
  if (modalImg) {
    modalImg.style.display = "none";
  }
  wrapper.style.display = "";
}

function makeModal(slideImg) {
  modalSlider.innerHTML = `<img id="modalImg" src="${slideImg}"   >
                             <button type="button" class="button" id="leftButton"  onClick="prevSlide()" >&#8678;</button>
                             <button type="button" class="button" id="rightButton" onClick="nextSlide()" >&#8680;</button>
                             <buttin type="button" class="button" id="exitButton" onClick="exitSlide()" > &#10006; </button>`;

  const modalImg = document.getElementById("modalImg");
}
