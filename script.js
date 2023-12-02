document.addEventListener('DOMContentLoaded', function() {
    const recipient = document.getElementById('recipient');
    const sender = document.getElementById('sender');

    playButton.addEventListener('click', function() {
        birthdaySong.play();
      });
  
    recipient.addEventListener('click', function() {
      alert('Happy Birthday, Super Milkie🎉🎂');
      // You can add any other actions or animations for the recipient here
    });
  
    sender.addEventListener('click', function() {
      alert('I love you Sooooooo Much !!!!  🎈🎁');
      // You can add any other actions or animations for the sender here
    });
  });
  
  let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
}

showSlides();