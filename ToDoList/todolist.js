var todos = ["Call Erica"]

var input = prompt("what would you like to do??")

while(input !== "quit")
{
  //handle input
  //I broke down the code into functions so the code is shorter, but
  //it doesnt change the functionality
  if(input === "list")
  {
    // call the functiion
    listTodos();
  }

  else if(input === "new")
  {
    // call the functiion
    addTodo();
  }

  else if(input === "delete")
  {
    // call the functiion
    deleteTodo();
  }

  // ask again for new input
  input = prompt("what would you like to do??");

}

console.log("OK, YOU QUIT THE APP");


// functions to be called

function listTodos()
{
  console.log("***********")
  todos.forEach(function(todo, index)
{
  console.log(index + ":" + todo);
});
console.log("***********")

}

function addTodo()
{
  // ask for new todo
  var newTodo = prompt("enter new todo");
  // add todos to array
  todos.push(newTodo);
  console.log("added todo")
}

function deleteTodo()
{
  //ask for the index todo to be deleted
  var index = prompt("enter index of todo to delete");
  //delete that todo
  //splice()
  todos.splice(index,1);
  console.log("item deleted")
}
