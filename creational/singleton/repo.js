const Repo = () => {

  let called = 0;
  const getOne = (id) => {
    called++;
    console.log(`Getting one by id: ${id} Called ${called} times`);
  }
  return {
    getOne
  }
}

module.exports = Repo(); // invoking here b/c CommonJS in Node will cache the return;