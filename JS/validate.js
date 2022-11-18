function newTask(){
// Dom api referances

// 1. get the newTask by its own id

 document.getElementById("newTask");

// 2. create an if statement to prevent HTML characters

if(true){
    document.getElementById("error").style.display = "Block";

    // 3. create a new li element using createElement dom api
  let newTask = document.createElement('ul');
  console.log(newTask);
    // 4. create a textnode (save this to a variable)
    let textNode = document.createTextNode("Do Your Tasks");
    console.log(textNode);

    // 5. append this variable to the <li> variable by using .appendChild
    let list = document.getElementById("ul");
    console.log(list);
    // 6. Append your new list to the HTML unordered list
     
   list.appendChild(ul);
}
}
// calling the function
newTask(newTask);

