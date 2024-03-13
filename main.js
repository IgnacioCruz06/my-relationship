/* Calculate and set the date */
const startDate = new Date("2019-07-13T00:00:00");
const today = new Date();

const years = getYearsAndMonts(startDate, today).years;
const months = getYearsAndMonts(startDate, today).months;

document.getElementById("date").innerText = `${years} years ${months} months`;

function getYearsAndMonts(startDate, endDate) {
  const result = {
    years: null,
    months: null,
  };

  if (endDate.getMonth() < startDate.getMonth()) {
    result.years = endDate.getFullYear() - startDate.getFullYear() - 1;
    result.months = 12 - startDate.getMonth() + endDate.getMonth();
  } else {
    result.years = endDate.getFullYear() - startDate.getFullYear();
    result.months = endDate.getMonth() - startDate.getMonth();
  }

  return result;
}

/* Carousel logic */

let currentImageIndex = 1;
const images = document.querySelectorAll(".image");
const totalImages = images.length;

function showImage(index) {
  if (index < 1) {
    currentImageIndex = totalImages;
  } else if (index > totalImages) {
    currentImageIndex = 1;
  }

  images.forEach((image) => {
    image.style.display = "none";
  });

  images[currentImageIndex - 1].style.display = "block";
}

function prevImage() {
  showImage((currentImageIndex -= 1));
}

function nextImage() {
  showImage((currentImageIndex += 1));
}

showImage(currentImageIndex);
