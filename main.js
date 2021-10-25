const counterCount = document.getElementById("counter");
const minus = document.querySelector("#minus");
const add = document.querySelector("#add");

minus.style.backgroundColor = "red";
add.style.backgroundColor = "blue";
add.addEventListener("click", addOne);
minus.addEventListener("click", minusOne);

counter = 0;

function addOne() {
  if (counter >= 0) {
    counter = counter + 1;
    counterChange();
    imgComponentAdd();
  } else {
    counter = counter + 1;
    counterChange();
  }
}

function minusOne() {
  if (counter > 0) {
    counter = counter - 1;
    counterChange();
    imgComponentDelete();
  } else {
    counter = counter - 1;
    counterChange();
  }
}

function counterChange() {
  counterCount.innerText = `Count: ${counter}`;
}

function imgComponentAdd() {
  const imageCount = document.querySelector("#imageCount");
  const img = document.createElement("div");
  img.innerHTML =
    '<div><img src="https://cdn-cmmbk.nitrocdn.com/mqrdRTIZRuokXBJVzWBSKbRHzakhFzbt/assets/static/optimized/rev-e01d27d/wp-content/uploads/2017/11/star-image-300x285.png"/></div>';
  imageCount.appendChild(img);
}

function imgComponentDelete() {
  if (counter >= 0) {
    const imageCount = document.querySelector("#imageCount");
    const img = document.createElement("div");
    imageCount.removeChild(imageCount.lastElementChild);
  }
}
