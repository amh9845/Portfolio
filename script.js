document.addEventListener("DOMContentLoaded", function () {
  let progress = 0;
  const progressText = document.getElementById("progress");
  const barFill = document.getElementById("bar-fill");
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  const interval = setInterval(() => {
    if (progress < 100) {
      progress += 1;
      progressText.textContent = `${progress}%`;
      barFill.style.width = `${progress}%`;
    } else {
      clearInterval(interval);
      loader.style.display = "none";        // Hide loader
      mainContent.classList.remove("hidden"); // Show your main page content
    }
  }, 50);
  let offset = 0;

});