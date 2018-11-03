const repo = require('./repo');
const service = require('./repoService');

/**
 * Prints:
    Getting one by id: 1 Called 1 times
    Getting one by id: 2 Called 2 times
    Getting one by id: 3 Called 3 times
    Getting one by id: 4 Called 4 times
 */
repo.getOne(1);
repo.getOne(2);
service.getOne(3);
service.getOne(4);