import _ from 'lodash'
import printMe from './print.js'

let printFn = printMe // late binding so I can hot swap it

function addComponent() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = () => printFn();

  element.appendChild(btn);

  document.body.appendChild(element)

  return element;
}

console.log("Hiiiii3")
let component = addComponent()
window.components = window.components || []
window.components.push(component)

// ----- hot reloading ------
import 'webpack-hot-middleware/client'
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printFn = printMe
  })

  // okay, apparently this will allow it to reset itself
  module.hot.accept(function(err) {
    console.log("FAILED TO RELOAD: ", err)
  })

  // hmm, it prints "accepting", but doesn't remove the old component
  module.hot.dispose(function() {
    window.component = component
    component.remove()
    console.log("accepting")
    component = addComponent()
  })

}
