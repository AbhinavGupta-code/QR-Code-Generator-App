const input = document.querySelector("#input");
const code = document.querySelector("#code");
const generateBtn = document.querySelector("#qr-generate");
const downloadBtn = document.querySelector("#qr-download");
const clearBtn = document.querySelector("#qr-clear");
const themeToggle = document.querySelector("#theme-toggle");

let qr;

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) {
    alert("⚠️ Please enter some text or URL first!");
    return;
  }

  qr = new QRious({
    element: code,
    value: value,
    size: 200,
  });

  code.style.display = "block";
  downloadBtn.disabled = false;
});


downloadBtn.addEventListener("click", () => {
  if (qr) {
    const link = document.createElement("a");
    link.href = code.toDataURL("image/png");
    link.download = "qr-code.png";
    link.click();
  }
});


clearBtn.addEventListener("click", () => {
  input.value = "";
  code.style.display = "none";
  downloadBtn.disabled = true;
});


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
