import s from './TopPost.module.css';
import iconClose from '../../images/icons/close.svg';

const TopPost = ({ setTopPost }) => {
  const closeTopPost = () => {
    setTopPost(false);
  };

  return (
    <div className={s.box}>
      <p className={s.text}>
        Скидка 10% на покупку от 3000 рублей при регистрации
      </p>

      <img
        onClick={closeTopPost}
        className={s.iconClose}
        src={iconClose}
        alt="iconClose"
      />
    </div>
  );
};

export default TopPost;
