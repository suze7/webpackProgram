import _ from 'lodash';
// import './style.css';
// import Icon from './logo.png';
// import Data from './data.xml';
// import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');
  // var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  // console.log(Data);
  // var btn = document.createElement('button');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  );
  return element;
}
let element = component();
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }
