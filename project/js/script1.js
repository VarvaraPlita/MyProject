// scripts.js

// Function to return the template content as a string
function getMenuTemplate() {
    return `
      <ul id="jw-menu" class="jw-menu jw-menu-horizontal">
        <li class="jw-menu-item jw-menu-is-active">
          <a class="jw-menu-link js-active-menu-item" href="/" data-page-link-id="17645909">
            <span>Home</span>
          </a>
        </li>
        <li class="jw-menu-item">
          <a class="jw-menu-link" href="/explore" data-page-link-id="17645910">
            <span>Explore</span>
          </a>
        </li>
        <li class="jw-menu-item">
          <a class="jw-menu-link" href="/contact" data-page-link-id="17645911">
            <span>Contact</span>
          </a>
        </li>
        <li class="jw-menu-item">
          <a class="jw-menu-link" href="/things-to-do" data-page-link-id="17647312">
            <span>Things To Do</span>
          </a>
        </li>
      </ul>
    `;
  }
  
  // Get the menu template and insert it into the nav element
  document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.jw-menu-copy');
    navMenu.innerHTML = getMenuTemplate();
  });
  



  // scripts.js
// Your JavaScript code for handling menu functionality, interactions, etc.

// Add event listeners to each menu link to open in a new window
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.jw-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = link.getAttribute('href');
        window.open(url, '_blank');
      });
    });
  });

  
 