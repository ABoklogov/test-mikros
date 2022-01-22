import options from '../options';

const changingFilterData = dataFilter => {
  //   const startData = {
  //     minPrice: options.minPrice,
  //     maxPrice: options.maxPrice,
  //   };

  if (Array.isArray(dataFilter)) {
    const startPriceRange =
      dataFilter[0] === options.minPrice && dataFilter[1] === options.maxPrice;
    return startPriceRange;
  }
};

export default changingFilterData;
