const btnDel = document.getElementById("del");
const btnHide = document.getElementById("hide");
const btnRemove = document.getElementById("remove");
const black = document.querySelector("#black");
const blacks = document.querySelectorAll(".black");
const hideMultiple = document.querySelector("#hide-2");
const input = document.querySelector("#inp");
const message = document.querySelector("#message");
const messageImg = document.querySelector("#img-message");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");
const showRed = document.querySelector("#showRed");
const input2 = document.querySelector("#inp-2");
const imgSection = document.querySelector("#img-section");
const inpRect = document.querySelector("#inp-rect");
const greenRect = document.querySelector("#green-rect");
const input3 = document.querySelector("#inp-3");
const imgSection2 = document.querySelector("#img-section-2");
const messageImg2 = document.querySelector("#img-message-2");
const addPictureBtn = document.querySelector("#add-pic");
// 1
btnDel.addEventListener("click", () => {
  black.classList.add("delete");
});
btnRemove.addEventListener("click", () => {
  black.remove();
});
// 2
btnHide.addEventListener("click", () => {
  black.classList.toggle("hidden");
});
// 3
blacks.forEach((black) => {
  hideMultiple.addEventListener("click", () => {
    black.classList.toggle("hidden");
  });
});

// 4
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let selector = document.querySelector(`${input.value}`);
    if (selector) {
      selector.remove();
      const ms = document.createElement("p");
      let count = message.childNodes.length + 1;
      ms.innerHTML = `Selector "${input.value}" has been removed. Total removed:${count}`;
      message.appendChild(ms);
    } else {
      message.innerHTML = `Selector "${input.value}" does not exist`;
    }
  }
});

// 5
let clickCount = 0;

yellow.addEventListener("click", () => {
  if (clickCount === 0) {
    alert("Привет");
    clickCount++;
  } else {
    yellow.remove();
  }
});

// 6

showRed.onmouseover = () => {
  red.classList.remove("hidden");
};
showRed.onmouseout = () => {
  red.classList.add("hidden");
};

// 7

inpRect.addEventListener("focus", () => {
  greenRect.classList.remove("hidden");
});
inpRect.addEventListener("keydown", () => {
  greenRect.classList.add("hidden");
});

// 8
addPictureBtn.addEventListener("click", () => {
  let link = input2.value;
  if (link && link.slice(0, 4) === "http") {
    imgSection.innerHTML = `<img src="${link}">`;
  } else {
    messageImg.innerHTML = "Wrong link adress";
  }
});
// 9
input3.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let link = input3.value;
    if (link && link.slice(0, 4) === "http") {
      const imgCont = document.createElement("div");

      imgCont.innerHTML = `<img src="${link}">`;
      imgSection2.appendChild(imgCont);
    } else {
      messageImg2.innerHTML = "Wrong link adress";
    }
  }
});
const x = document.querySelector("#x-axis");
const y = document.querySelector("#y-axis");
const xGeo = document.querySelector("#x-geo");
const yGeo = document.querySelector("#y-geo");
const lang = document.querySelector("#lang");
lang.textContent = navigator.language;
window.onload = getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    xGeo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  xGeo.innerHTML = `Latitude:  
    ${position.coords.latitude}`;
  yGeo.innerHTML = `Longitude: ${position.coords.longitude.toFixed(9)}`;
}

window.addEventListener("mousemove", (e) => {
  x.innerHTML = `X:${e.clientX}`;
  y.innerHTML = `Y:${e.clientY}`;
});

const locStor = document.querySelector("#local");
const sesStor = document.querySelector("#session");
const cookStor = document.querySelector("#cookies");
// local storage
locStor.addEventListener("input", () => {
  localStorage.setItem("local", locStor.innerHTML);
});
if (localStorage.getItem("local") !== "") {
  locStor.innerHTML = localStorage.getItem("local");
}
// session storage
sesStor.addEventListener("input", () => {
  sessionStorage.setItem("session", sesStor.innerHTML);
});
if (sessionStorage.getItem("session") !== "") {
  sesStor.innerHTML = sessionStorage.getItem("session");
}
// cookies
cookStor.addEventListener("input", () => {
  document.cookie = cookStor.innerHTML;
});
cookStor.innerHTML = document.cookie;

// scroll function
const btnTop = document.querySelector("#btn-top");

const scrollFunc = () => {
  console.log(document.documentElement.scrollTop);
  return document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
    ? btnTop.classList.remove("hidden")
    : btnTop.classList.add("hidden");
};

document.addEventListener("scroll", scrollFunc);
btnTop.addEventListener("click", () => {
  // window.scrollTo({
  //   left: black.left + window.pageXOffset,
  //   top: black.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  black.scrollIntoView({ behavior: "smooth" });
});

const block1 = document.querySelector(".block-1");
const block2 = document.querySelector(".block-2");
block1.addEventListener("click", hi);

block2.addEventListener("click", (e) => {
  alert("hello");
  // stoppin bubbling
  e.stopPropagation();
});

block1.addEventListener("click", hi);

function hi() {
  alert("hello");
}

const freezeBtn = document.querySelector(".freeze-btn");
const freezeBox = document.querySelector("#freeze-box");
const freezeCont = document.querySelector(".freeze-container");

function freeze() {
  freezeBox.classList.remove("hidden");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.style.overflow = "hidden";
}
freezeBtn.addEventListener("click", freeze);
freezeBox.addEventListener("click", () => {
  freezeBox.classList.add("hidden");
  document.body.style.backgroundColor = "white";
  document.body.style.overflow = "visible";
});

// 17
const submit = document.querySelector("#submit-go");
submit.addEventListener("click", (e) => {
  e.preventDefault();
});

// 18
const dropArea = document.querySelector(".drop-area");
const dgDpBtpn = document.querySelector("#drag-drop-btn");
const dgDpInput = document.querySelector("#drag-drop");
const dpText = document.querySelector("#dp-text");
const dpMessage = document.querySelector("#dp-message");
let file;
dgDpBtpn.onclick = () => {
  input.click();
};

// dgDpInput.addEventListener("change", function () {
//   file = this.files[0];
// });

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener("dragover", (e) => {
  dpText.textContent = "Release to Upload File";
  dropArea.classList.add("highlight");
  preventDefaults(e);
});

dropArea.addEventListener("drop", (e) => {
  dropArea.classList.remove("highlight");
  dpText.textContent = "Drag & Drop to Upload file";
  file = e.dataTransfer.files[0];
  preventDefaults(e);
  console.log(file);
  dpMessage.innerHTML = `Your file uploaded: "${file.name}"`;
});
