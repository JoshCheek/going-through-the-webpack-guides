export default function printMe() {
  console.log('l');
}

window.PRINTME_MODULE = module // for looking at `module.hot`

// it's hot, but always says "Nothing hot updated" :/
if (module.hot) {
  console.log('hot src/print')
  module.hot.accept(function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
} else console.log('cold')
