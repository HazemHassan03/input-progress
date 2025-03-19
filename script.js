const input = document.querySelector("input"),
  counter = document.querySelector(".counter"),
  progress = document.querySelector(".progress");

const maxLength = 30;
input.setAttribute("maxlength", maxLength);
counter.textContent = maxLength;

function type() {
  const currentProgress = input.value.length;
  const remaining = maxLength - currentProgress;
  counter.textContent = remaining;
  if (remaining === 0) {
    counter.classList.add("max");
  } else {
    counter.classList.remove("max");
  }
  progress.style.width = `${(100 / maxLength) * currentProgress}%`;
  console.log(currentProgress);
  console.log(remaining);
}
input.addEventListener("input", type);
