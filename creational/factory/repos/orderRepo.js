const OrderRepo = () => {
  /**
   * Get one by ID
   * @param {number} id 
   */
  const getOne = (id) => {
    console.log(`Getting one order by id= ${id}`);
  }

  return {
    getOne
  }
}

module.exports = OrderRepo;