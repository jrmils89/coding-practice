const PersonRepo = () => {
  /**
   * Get one by ID
   * @param {number} id 
   */
  const getOne = (id) => {
    console.log(`Getting one person by id=${id}`);
  }

  return {
    getOne
  }
}

module.exports = PersonRepo;
