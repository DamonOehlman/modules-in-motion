const app = (() => {
  function youCantSeeMe() {
    console.log('hey there!');
  }

  function run() {
    youCantSeeMe();
  }

  return { run };
})();

app.run();
