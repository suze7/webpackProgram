import _ from 'lodash';
import Print from './print';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

function component() {
  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(br);
  element.appendChild(button);
  element.onclick = Print.bind(null, 'Hello webpack!');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
  // }).catch(error => 'An error occurred while loading the component');
}
document.body.appendChild(component());
