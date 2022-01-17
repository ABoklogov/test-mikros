const options = {
  titles: [
    'Цена',
    'Размер',
    'Цвет',
    'Коллекция',
    'Товар Микроса',
    'Без текста',
  ],
  minPrice: 200,
  maxPrice: 10000,
  dimensions: [17, 24, 32, 40],
  colors: [
    {
      color: '#FF464B',
      label: 'Красный',
    },
    {
      color: '#9CC330',
      label: 'Зеленый',
    },
    {
      color: '#1C9BF1',
      label: 'Синий',
    },
    {
      color: '#AE46FF',
      label: 'Фиолетовый',
    },
    {
      color: '#FFFFFF',
      label: 'Белый',
    },
    {
      color: '#000C0C',
      label: 'Черный',
    },
  ],
  sortMenu: {
    textMenu: ['Сортировать по', 'Отображать по'],
    menuItem: {
      sort: ['категориям', 'алфавиту', 'цене'],
      display: ['20', '40', '60'],
    },
  },
};

export default options;
