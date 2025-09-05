const profilePic = document.getElementById('animated-pic');

function animateProfile() {
  profilePic.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(0px)' }
  ], {
    duration: 3000,
    iterations: Infinity
  });
}

animateProfile();