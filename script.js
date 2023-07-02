// Calcula el tiempo restante hasta el 7 de Julio de 2023
function getTimeRemaining() {
  const targetDate = new Date("July 7, 2023").getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return {
    total: timeRemaining,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// Actualiza el contador en la página
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const time = getTimeRemaining();

  countdownElement.innerHTML =
    time.days +
    " días, " +
    time.hours +
    " horas, " +
    time.minutes +
    " minutos, " +
    time.seconds +
    " segundos";

  // Verifica si el contador ha llegado a cero
  if (time.total <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "¡Feliz aniversario!";
  }
}

// Actualiza el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
