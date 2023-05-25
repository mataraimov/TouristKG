export const offers = [
  {
    category: 'Горные пейзажи',
    title: 'Горный тур в Тянь-Шань',
    price: '10 000 сом',
    address: 'Бишкек, ул. Фрунзе, 1',
    imageUrl: `https://source.unsplash.com/random/200x300/?nature&${new Date().getTime()}1`,
  },
  {
    category: 'Горные пейзажи',
    title: 'Пеший тур в Ала-Арча',
    price: '8 000 сом',
    address: 'Бишкек, ул. Московская, 24',
    imageUrl: `https://source.unsplash.com/random/200x300/?nature&${new Date().getTime()}2`,
  },
  {
    category: 'Горные пейзажи',
    title: 'Покорение пика Ленина',
    price: '15 000 сом',
    address: 'Ош, ул. Ленина, 18',
    imageUrl: `https://source.unsplash.com/random/200x300/?nature&${new Date().getTime()}3`,
  },
  {
    category: 'Горные пейзажи',
    title: 'Тур в национальный парк Иссык-Куль',
    price: '12 000 сом',
    address: 'Каракол, ул. Абдраева, 12',
    imageUrl: `https://source.unsplash.com/random/200x300/?nature&${new Date().getTime()}4`,
  },
  {
    category: 'Горные пейзажи',
    title: 'Экскурсия в горы Сулайман-Тоо',
    price: '9 000 сом',
    address: 'Ош, ул. Сулаймана-Тоо, 5',
    imageUrl: `https://source.unsplash.com/random/200x300/?nature&${new Date().getTime()}5`,
  },

  // Экскурсии
  {
    category: 'Экскурсии',
    title: 'Экскурсия по историческому центру Бишкека',
    price: '3 500 сом',
    address: 'Бишкек, ул. Киевская, 44',
    imageUrl: `https://source.unsplash.com/random/200x300/?excursion&${new Date().getTime()}1`,
  },
  {
    category: 'Экскурсии',
    title: 'Обзорная экскурсия по городу Ош',
    price: '4 000 сом',
    address: 'Ош, ул. Навои, 19',
    imageUrl: `https://source.unsplash.com/random/200x300/?excursion&${new Date().getTime()}2`,
  },
  {
    category: 'Экскурсии',
    title: 'Водный тур по реке Чуя',
    price: '6 000 сом',
    address: 'Бишкек, ул. Абдраева, 26',
    imageUrl: `https://source.unsplash.com/random/200x300/?excursion&${new Date().getTime()}3`,
  },
  {
    category: 'Экскурсии',
    title: 'Экскурсия по озеру Иссык-Куль',
    price: '7 500 сом',
    address: 'Чолпон-Ата, ул. Приозерная, 5',
    imageUrl: `https://source.unsplash.com/random/200x300/?excursion&${new Date().getTime()}4`,
  },
  {
    category: 'Экскурсии',
    title: 'Поход по памятникам древности Баласагын',
    price: '5 000 сом',
    address: 'Бишкек, ул. Фрунзе, 47',
    imageUrl: `https://source.unsplash.com/random/200x300/?excursion&${new Date().getTime()}5`,
  },

  // Культурные мероприятия
  {
    category: 'Культурные мероприятия',
    title: 'Театральное представление в Бишкеке',
    price: '3 000 сом',
    address: 'Бишкек, ул. Киевская, 34',
    imageUrl: 'https://source.unsplash.com/random/200x300/?theater',
  },
  {
    category: 'Культурные мероприятия',
    title: 'Экскурсия по музеям Оша',
    price: '2 500 сом',
    address: 'Ош, ул. Ленина, 16',
    imageUrl: 'https://source.unsplash.com/random/200x300/?museum',
  },

  // Конные прогулки
  {
    category: 'Конные прогулки',
    title: 'Прогулка на лошадях в горах Тянь-Шань',
    price: '5 500 сом',
    address: 'Бишкек, ул. Гагарина, 18',
    imageUrl: 'https://source.unsplash.com/random/200x300/?horse',
  },
  {
    category: 'Конные прогулки',
    title: 'Конный тур по национальному парку Ала-Арча',
    price: '6 000 сом',
    address: 'Бишкек, ул. Московская, 26',
    imageUrl: 'https://source.unsplash.com/random/200x300/?horse',
  },

  // Национальная кухня
  {
    category: 'Национальная кухня',
    title: 'Мастер-класс по приготовлению плова',
    price: '2 000 сом',
    address: 'Бишкек, ул. Байтик Батыра, 50',
    imageUrl: 'https://source.unsplash.com/random/200x300/?kyrgyzstan,food',
  },
  {
    category: 'Национальная кухня',
    title: 'Дегустация кыргызских национальных блюд',
    price: '2 500 сом',
    address: 'Бишкек, ул. Советская, 100',
    imageUrl: 'https://source.unsplash.com/random/200x300/?kyrgyzstan,food',
  },

  // Шоппинг
  {
    category: 'Шоппинг',
    title: 'Шопинг-тур по магазинам Бишкека',
    price: 'Бесплатно',
    address: 'Бишкек, ул. Чуй, 150',
    imageUrl: 'https://source.unsplash.com/random/200x300/?shopping',
  },
  {
    category: 'Шоппинг',
    title: 'Поход по рынкам Оша',
    price: 'Бесплатно',
    address: 'Ош, ул. Сулаймана-Тоо, 7',
    imageUrl: 'https://source.unsplash.com/random/200x300/?market',
  },

  // Пешие прогулки
  {
    category: 'Пешие прогулки',
    title: 'Пеший тур по историческому центру Бишкека',
    price: '3 000 сом',
    address: 'Бишкек, ул. Фрунзе, 25',
    imageUrl: 'https://source.unsplash.com/random/200x300/?walking',
  },
  {
    category: 'Пешие прогулки',
    title: 'Пеший тур по Ошу',
    price: '3 500 сом',
    address: 'Ош, ул. Навои, 20',
    imageUrl: 'https://source.unsplash.com/random/200x300/?walking',
  },

  // Спорт и фитнес
  {
    category: 'Спорт и фитнес',
    title: 'Занятие йогой на природе',
    price: '1 500 сом',
    address: 'Бишкек, ул. Фрунзе, 40',
    imageUrl: 'https://source.unsplash.com/random/200x300/?yoga',
  },
  {
    category: 'Спорт и фитнес',
    title: 'Тренировка по фитнесу в парке',
    price: '1 000 сом',
    address: 'Бишкек, ул. Гагарина, 12',
    imageUrl: 'https://source.unsplash.com/random/200x300/?fitness',
  },

  // Спа и массаж
  {
    category: 'Спа и массаж',
    title: 'Релаксирующий массаж в спа-центре',
    price: '4 000 сом',
    address: 'Бишкек, ул. Чуй, 210',
    imageUrl: 'https://source.unsplash.com/random/200x300/?spa',
  },
  {
    category: 'Спа и массаж',
    title: 'Процедура в хаммаме',
    price: '5 000 сом',
    address: 'Ош, ул. Курманжан-Датка, 28',
    imageUrl: 'https://source.unsplash.com/random/200x300/?spa',
  },
];
