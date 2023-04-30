
import Editor from './editor.js';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  console.log('service worker supported');
  window.addEventListener('load', ()=>{
    navigator.serviceWorker
    .register('/sw.js')
    .then(reg=> console.log('Service Worker: Registered'))
    .catch(err => console.log(`Service Worker: Error ${err}`))
  })

} else {
  console.error('Service workers are not supported in this browser.');
}
