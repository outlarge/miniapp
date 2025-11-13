document.getElementById("openBot").addEventListener("click", () => {
  window.location.href = "https://t.me/your_bot_username";
});

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const product = e.target.dataset.product;
    if (window.Telegram?.WebApp) {
      Telegram.WebApp.sendData(JSON.stringify({ action: "buy", product }));
    } else {
      window.location.href = "https://t.me/your_bot_username?start=" + product;
    }
  });
});
