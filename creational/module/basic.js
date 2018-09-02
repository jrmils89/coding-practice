const Repo = () => {
  
  /**
   * Get one by ID
   * @param {number} id 
   */
  const getOne = (id) => {
    console.log("Getting one by id=" + id);
  }

  return {
    getOne
  }
}


module.exports = Repo();