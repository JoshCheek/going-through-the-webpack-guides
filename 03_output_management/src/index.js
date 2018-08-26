import _ from 'lodash';
import './style.css';
import Icon from './icon2.png';
import data from './example.json';

window.j = data

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // load some JSON
  var myJson = document.createElement('pre');
  myJson.innerText = JSON.stringify(data, null, 2);
  element.appendChild(myJson);

  return element;
}

document.body.appendChild(component());
