function numberWithSpaces(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  export {numberWithSpaces}