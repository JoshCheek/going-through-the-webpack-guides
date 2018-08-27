import _ from 'lodash'
import printMe from './print.js'


function buildComponent() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!!!'
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let component
function reset() {
  if(component) component.remove()
  component = buildComponent()
  document.body.appendChild(component);
}

reset()

// ----- hot reloading ------
import 'webpack-hot-middleware/client'
if (module.hot) {
  // Okay, it can update the code when print.js changes
  // But cannot update its own code. In this case, it says:
  //
  // > [HMR] The following modules couldn't be hot updated: (Full reload needed)
  // > This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See https://webpack.js.org/concepts/hot-module-replacement/ for more details.
  // > process-update.js:103
  module.hot.accept(['./index.js', './print.js'], function() {
    console.log('Accepting the updated printMe module!')
    printMe()
    reset()
  })
}
