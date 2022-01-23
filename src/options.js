const options = {
  filtres: {
    textPrice: 'price',
    textDimensions: 'dimensions',
    textColors: 'colors',
  },
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
  dimensions: ['11', '12', '35', '36', '47', '54'],
  measure: 'см',
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
      sort: ['алфавиту', 'цене'],
      display: ['20', '40', '60'],
    },
  },
  buttons: {
    katalog: {
      text: 'каталог',
      alt: 'icon-katalog',
    },
    show: {
      text: 'показать',
      alt: null,
    },
    reset: {
      text: 'сбросить',
      alt: null,
    },
  },
};

export default options;
