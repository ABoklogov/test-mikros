import s from './TopPost.module.css';

const TopPost = () => {
  return (
    <div className={s.box}>
      <p className={s.text}>
        Скидка 10% на покупку от 3000 рублей при регистрации
      </p>

      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L28 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 28L28 7"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default TopPost;
