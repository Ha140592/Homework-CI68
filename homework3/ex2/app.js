let searchKey = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let searchResult =  document.getElementById("search-result");
searchBtn.addEventListener("click", searchBook);
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
    searchBook();
  }
});
async function search(){
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKey.value}&key=AIzaSyBZU5-EDorDiQ-2ni3Bf7v0kuHj16AW_BQ`);
  const res = await response.json()
  for (let i = 0; i < res.items.length; i++) {
      let item = res.items[i];
      searchResult.insertAdjacentHTML('afterBegin', 
      `<div class="book">
      <img id="img" src = ${item.volumeInfo.imageLinks.thumbnail} alt="image">
      <p id="title"><b>${item.volumeInfo.title}</b></p>
      <p id="author">${item.volumeInfo.authors}</p>
      <div id="detail-btn">Detail</div>
      </div>`);
  }
}
function searchBook() {
  if(searchResult.innerHTML != "") {
    searchResult.innerHTML = "";
    search();
  } else {
    search();
  } 
}