const repoList = require('./repoSourceConfig')

class ReposFactory {
  constructor() {
    repoList.forEach((repo) => {
      this[repo.name] = require(repo.source)();
    });
  }
}

module.exports = new ReposFactory;
