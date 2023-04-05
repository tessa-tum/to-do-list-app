//Show current date
let currentDate = $('#currentDate');
let now = new Date();
let date = now.toLocaleDateString();
currentDate.text('Today is ' + date);

//List function
function newItem(){
  
  //Add new item to list
  let li = $('<li></li>');
  let inputValue = $("#input").val();
  li.append(inputValue);
  
  if (inputValue === '') {
    alert("Please write something!");
  } else {
    $('#list').append(li);
  }
  
  //Cross out an item from the list 
  li.on("dblclick", function(){
    li.toggleClass("strike");
  });
  
  //Add delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  
  crossOutButton.on("click", function(){
    li.addClass("delete");
  });
  
  // Reorder items
  $('#list').sortable();

}