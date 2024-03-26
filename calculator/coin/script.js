/*Search function*/
function searchFunction() {
  // Declare variables
  var input, filter, gridItems, gridItemName, gridItemTicker, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  gridItems = document.getElementsByClassName("c-coins__grid-item");

  // Loop through all grid items
  for (i = 0; i < gridItems.length; i++) {
    gridItemName = gridItems[i].getElementsByClassName(
      "c-coins__grid-item-coinname"
    )[0];
    gridItemTicker = gridItems[i].getElementsByClassName(
      "c-coins__grid-item-tickername"
    )[0];
    name = gridItemName.textContent || gridItemName.innerText;
    ticker = gridItemTicker.textContent || gridItemTicker.innerText;

    // Combine name and ticker for search functionality
    title = name + " " + ticker;
    // Check if the text inside the cryptocurrency name or ticker container matches the search value
    if (title.toUpperCase().indexOf(filter) > -1) {
      gridItems[i].style.display = "";
    } else {
      gridItems[i].style.display = "none";
    }
  }
}

/*Remove arrow image from search*/
document.addEventListener("DOMContentLoaded", function () {
  // Get the search input element
  var searchInput = document.getElementById("searchInput");
  // Check if the search input exists
  if (searchInput) {
    // Change the color of the input with !important
    searchInput.style.setProperty("background-image", "url()", "important"); // Change to your desired color
  }
});


/*removes all href from bitcoin and similar*/ 
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "c-coins__grid-item-linkblock"
  var linkBlocks = document.querySelectorAll(".c-coins__grid-item-linkblock");

  // Loop through each link block
  linkBlocks.forEach(function (linkBlock) {
    // Remove the href attribute
    linkBlock.removeAttribute("href");
  });
});
