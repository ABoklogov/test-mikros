import options from '../options';

const changingFilterData = (nameFilter, dataFilter) => {
  //   const startData = {
  //     minPrice: options.minPrice,
  //     maxPrice: options.maxPrice,
  //   };

  if (nameFilter === 'price') {
    const startPriceRange =
      dataFilter[0] === options.minPrice && dataFilter[1] === options.maxPrice;
    return startPriceRange;
  }
};

export default changingFilterData;
