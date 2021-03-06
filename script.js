const fetchFunction = (n) => {
  fetch('./Dataset/lol.json').then(res => {
      return res.json()
    }).then(
    data => {
        // console.log(data);
        const html = data.map(
          single => {
            if (single.name.toLowerCase().indexOf(n.toLowerCase()) ==0  ) {
              return `
              <div>
                <div class='child1'>
                  <div class="first">
                    <img src = "${single.icon}">
                  </div>
                  <div class="second">
                    <p>${single.name}</p>
                  </div>
                </div>
                <div class ='child2'>
                  <div class='third'>
                    <h3>${single.title.toUpperCase()}</h3>
                    <h4>${single.tags}</h4>
                    <hr>
                    <p>${single.description}</p>
                  </div>
                </div>
              </div>
              `
            }
          }
        ).join('')
      document.querySelector('#body').insertAdjacentHTML('beforeend',html)
    }).catch(err => {
    console.log(err)
  })
}
const sortList = () => {
  document.getElementById('body').innerHTML = '';
  var x = document.getElementById('search').value;
  // console.log(x);
  fetchFunction(x);
  document.getElementById('search').value = '';
}
document.getElementById('search')
  .addEventListener('keypress', function (event) {
    if (event.code === 'Enter'){
      event.preventDefault();
      document.getElementById('btn').click();
    }
});
fetchFunction('irelia')