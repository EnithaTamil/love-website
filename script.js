/* POPUP */

function openPopup() {

  const popup =
    document.getElementById("popup")

  if (popup) {

    popup.style.display = "flex"
  }

}

function closePopup() {

  const popup =
    document.getElementById("popup")

  if (popup) {

    popup.style.display = "none"
  }

}

/* FINAL SURPRISE */

function showSurprise() {

  const finalPopup =
    document.getElementById("finalPopup")

  if (finalPopup) {

    finalPopup.style.display = "flex"
  }

}

function closeSurprise() {

  const finalPopup =
    document.getElementById("finalPopup")

  if (finalPopup) {

    finalPopup.style.display = "none"
  }

}

/* HERO SLIDER */

const slides =
  document.querySelectorAll(
    ".hero-slider img"
  )

if (slides.length > 0) {

  let slideIndex = 0

  setInterval(() => {

    slides[slideIndex]
      .classList.remove("active-slide")

    slideIndex =
      (slideIndex + 1) % slides.length

    slides[slideIndex]
      .classList.add("active-slide")

  }, 4000)

}

/* CURSOR GLOW */

const cursor =
  document.querySelector(".cursor-glow")

if (cursor) {

  document.addEventListener(
    "mousemove",
    e => {

      cursor.style.left =
        e.clientX + "px"

      cursor.style.top =
        e.clientY + "px"

    }
  )

}
/* HOME POPUP */

function openPopup() {

  const popup =
    document.getElementById("popup")

  if (popup) {

    popup.style.display = "flex"
  }

}

function closePopup() {

  const popup =
    document.getElementById("popup")

  if (popup) {

    popup.style.display = "none"
  }

}

/* BIRTHDAY POPUP */

function showSurprise() {

  const finalPopup =
    document.getElementById("finalPopup")

  if (finalPopup) {

    finalPopup.style.display = "flex"
  }

}

function closeSurprise() {

  const finalPopup =
    document.getElementById("finalPopup")

  if (finalPopup) {

    finalPopup.style.display = "none"
  }

}