document.addEventListener("DOMContentLoaded", function() {
  const catButton = document.querySelector('.summon-cats');
  const catList = document.querySelector('#cat-list');
  const catBook = document.querySelector('#cat-book-section');
  catButton.addEventListener('click', () => {
    console.log("hi")
    axios.get("http://bitkittens.herokuapp.com/cats.json")
      .then((resp) => {
        if (catBook.style.display == '') {
          catBook.style.display = 'inline-block';
        }
        cats = resp.data['cats'];
        console.log(cats)
        cats.forEach((cat, index) => {
          catPic = document.createElement('img');
          catPic.src = resp.data['cats'][index]['photo']
          catPic.alt = `Photo of ${cat['name']}`
          catBox = document.querySelector('#cat' + (index+1));
          catBox.innerText = '';
          catBox.appendChild(catPic);
          catLi = document.createElement('li');
          catLi.innerText = cat.name;
          catList.appendChild(catLi);
          console.log(catBox)
          console.log(catPic)
        })
      })
  })
});
