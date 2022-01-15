import s from './InputSearch.module.css';
import search from '../../images/icons/search.svg';

const InputSearch = () => {
  return (
    <form className={s.formSearch}>
      <input
        className={s.inputSearch}
        type="text"
        placeholder="Название товара или артикул"
      />
      <button className={s.buttonSearch}>
        <img src={search} alt="search" />
      </button>
    </form>
  );
};

export default InputSearch;
