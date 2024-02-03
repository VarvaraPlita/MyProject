// Function to scroll to the "Things To Do" section (changed to MOre info)
function More_info() {
    const thingsToDoSection = document.getElementById('thingsToDoSection');
    if (thingsToDoSection) {
      thingsToDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  