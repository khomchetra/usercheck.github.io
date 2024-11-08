document.getElementById('checkinForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from form fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform simple validation
  if (username && password) {
      // Voice feedback with user's name
      const message = `Welcome, ${username}. You have successfully checked in.`;
      const speech = new SpeechSynthesisUtterance(message);
      speech.lang = 'en-US'; // Set language if needed
      window.speechSynthesis.speak(speech);

      // Show success message using SweetAlert
      Swal.fire({
          icon: 'success',
          title: 'Check-In Successful',
          text: `Welcome, ${username}! You have successfully checked in.`,
          confirmButtonText: 'OK'
      }).then(() => {
          // Optional: Clear the form after submission
          document.getElementById('checkinForm').reset();
      });
  } else {
      // Show an error alert if fields are empty
      Swal.fire({
          icon: 'error',
          title: 'Check-In Failed',
          text: 'Please fill in both username and password.',
          confirmButtonText: 'Try Again'
      });
  }
});