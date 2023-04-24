let confetti = window.confetti;

function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);
  const now = new Date();
  const ageDifferenceMilliseconds = now - birthDate;
  const ageInSeconds = ageDifferenceMilliseconds / 1000;
  const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.2425);
  return ageInYears.toFixed(9);
}

const birthDate = "1995-04-24T23:56:00";
let celebrationDone = false;
let videoWrapperShown = false;

function checkCelebration(ageNumber) {
  if (!celebrationDone && ageNumber > 28) {
    console.log("Celebration triggered!");

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const ageElement = document.getElementById("age");
    ageElement.innerHTML += " 🥳";
    ageElement.classList.add("celebration");
    celebrationDone = true;

    const videoWrapper = document.getElementById("video-wrapper");
    if (videoWrapperShown === false) {
      videoWrapper.style.display = 'block';
      let video = document.querySelector('iframe');
      video.src += "&autoplay=1";
      videoWrapperShown = true;
    }
  }
}

function updateAge() {
  const ageElement = document.getElementById("age");
  const newAge = calculateAge(birthDate);
  ageElement.textContent = `${newAge} years`;

  const ageNumber = parseFloat(newAge);
  checkCelebration(ageNumber);
}

function startAgeUpdates() {
  window.setInterval(updateAge, 1000 / 60);
  updateAge();
}

startAgeUpdates();
