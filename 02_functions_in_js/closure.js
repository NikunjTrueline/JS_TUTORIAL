function outerTest() {
  let message = "Good morning";
  console.log(message);

  {
    let message = "Good afternoon";
    console.log(message);
  }

  let mssgWithLexical = "Good evening";
  function innerTest() {
    console.log(mssgWithLexical);
  }

  return innerTest;
}

let store = outerTest();
store();
