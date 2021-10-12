let searchKey = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let searchResult =  document.getElementById("search-result");
searchBtn.addEventListener("click", searchBook);
async function searchBook() {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKey.value}&key=AIzaSyBZU5-EDorDiQ-2ni3Bf7v0kuHj16AW_BQ`);
    const res = await response.json()
    console.log(res);
    console.log(typeof(res));
    for (var i = 0; i < res.items.length; i++) {
        var item = res.items[i];
        console.log(item.volumeInfo.title +item.volumeInfo.authors + '' +item.volumeInfo.imageLinks.thumbnail) ;
        searchResult.insertAdjacentHTML('afterBegin', 
        `<div class="book">
        <img src = ${item.volumeInfo.imageLinks.thumbnail} alt="image">
        <p id="title"><b>${item.volumeInfo.title}</b></p>
        <p id="author">${item.volumeInfo.authors}</p>
        <div id="detail-btn">Detail</div>
        </div>`);
      }
    
}