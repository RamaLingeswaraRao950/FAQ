// Dynamically injecting CSS into the document head
const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

  *{
      box-sizing: border-box;
  }

  body {
      font-family: 'Muli', sans-serif;
      background-color: lightgoldenrodyellow;
  }

  h1 {
      margin: 50px 0 30px;
      text-align: center;
  }

  .faq-container {
      max-width: 600px;
      margin: 0 auto;
  }

  .faq {
      background-color: transparent;
      border: 1px solid black;
      border-radius: 10px;
      margin: 20px 0;
      padding: 30px;
      position: relative;
      overflow: hidden;
      transition: 0.3s ease;
  }

  .faq.active {
      background-color: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  .faq.active::before, 
  .faq.active::after {
      content: '\\f075';
      font-family: 'Font Awesome 5 Free';
      color: #2ecc71;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      top: 20px;
      left: 20px;
      z-index: 0;
  }

  .faq.active::before {
      color: #3498db;
      top: -10px;
      left: -30px;
      transform: rotateY(180deg);
  }

  .faq-title {
      margin: 0 35px 0 0;
  }

  .faq-text {
      display: none;
      margin: 30px 0 0;
  }

  .faq.active .faq-text {
      display: block;
  }

  .faq-toggle {
      background-color: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 0;
      position: absolute;
      top: 30px;
      right: 30px;
      height: 30px;
      width: 30px;
  }

  .faq-toggle:focus {
      outline: 0;
  }

  .faq-toggle .fa-times {
      display: none;
  }

  .faq.active .faq-toggle .fa-times {
      color: #fff;
      display: block;
  }

  .faq.active .faq-toggle .fa-chevron-down {
      display: none;
  }

  .faq.active .faq-toggle {
      background-color: #9fa4a8;
  }
`;
document.head.appendChild(style);

// JavaScript code to toggle FAQ sections
const toggles = document.querySelectorAll('.faq-toggle'); 

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
