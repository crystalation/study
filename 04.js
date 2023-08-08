function createPrintFunction(i) {
  return function () {
    console.log(i);
  };
}

for (var i = 0; i < 5; i++) {
  const print = createPrintFunction(i);
  setTimeout(print, 1000);
}

function printValue(i) {
  console.log(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(printValue, 1000, i);
}
