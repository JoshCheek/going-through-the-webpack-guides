import _ from 'lodash';
import printMe from './print.js';


function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack', 'lol3'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

// it's hot, but always says "Nothing hot updated" :/
// ALSO, print.js gets updated twice
if (module.hot) {
  console.log('hot src/index')
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
} else console.log('cold')

module.hot.accept(function() {
  console.log('alllll goooood')
})
