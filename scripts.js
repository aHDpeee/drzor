function changeImage(img) {
  console.log("Функция вызвана для изображения:", img.src); // Сообщение для отладки
  img.src = img.src.includes("foto%20zor") ? img.src.replace("foto%20zor", "notes1") : img.src.replace("notes1", "foto%20zor");
  console.log(img.src); // Сообщение для отладки
}


// Таймер обратного отсчета
const countdownDate = new Date("2024-11-02T00:00:00").getTime();
const timerElement = document.getElementById("timer");
const linkContainer = document.getElementById("link-container");

const interval = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${hours}ч ${minutes}м ${seconds}с`;

  if (distance < 0) {
    clearInterval(interval);
    timerElement.innerHTML = "Время вышло!";
    linkContainer.style.display = "block"; // Появляется ссылка
  }
}, 1000);

// Функция для наблюдения за активными элементами галереи
const galleryImages = document.querySelectorAll(".gallery-image");

const observerOptions = {
  root: document.querySelector(".gallery"),
  rootMargin: "0px",
  threshold: 0.6, // Срабатывает, когда изображение в центре на 60%
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, observerOptions);

galleryImages.forEach((image) => observer.observe(image));

