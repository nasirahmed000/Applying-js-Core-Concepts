


function test() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(a, b, c); // 4 5 6
  }

  console.log(a, b, c); // 4 2 3
}

test();
