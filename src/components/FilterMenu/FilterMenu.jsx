import s from './FilterMenu.module.css';
import FilterPrice from '../FilterPrice';
import FilterDimensions from '../FilterDimensions';

const FilterMenu = () => {
  const options = {
    titles: ['Цена, ₽', 'Размер, см', 'Цвет'],
    minPrice: 200,
    maxPrice: 10000,
    dimensions: [17, 24, 32, 40],
    colors: ['Красный', 'Зеленый', 'Синий', 'Фиолетовый', 'Белый', 'Черный'],
  };

  return (
    <div className={s.filterMenuContainer}>
      <div className={s.filterSubBox}>
        <FilterPrice options={options} />
      </div>

      <div className={s.filterSubBox}>
        <FilterDimensions options={options} />
      </div>
    </div>
  );
};

export default FilterMenu;
