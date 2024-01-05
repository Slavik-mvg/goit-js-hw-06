
const quantityCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityCategory.length}`);



 quantityCategory.forEach(item =>
 {  console.log(' Category:',  item.firstElementChild.textContent);
     console.log( 'Elements', item.lastElementChild.children.length);

})
 