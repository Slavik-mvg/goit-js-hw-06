const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*Используй массив объектов images для создания
элементов <img> вложенных в <li>. Для создания разметки используй
шаблонные строки и метод insertAdjacentHTML().*/

const conteiner =
  document.querySelector('.gallery');
console.dir(conteiner);

const mark = images
  .map(
    ({ url, alt }) => `<li>
<img src ="${url}" alt="${alt}" height = '200px'>
</li > `
  )
  .join('');
console.log(mark);
conteiner.insertAdjacentHTML('beforeend', mark);


  conteiner.style.display = 'flex';
  conteiner.style.flexWrap = 'wrap' ;
  conteiner.style.gap = '20px';

  conteiner.style.listStyle = 'none';
  
  conteiner.style.justifyContent = 'center';
