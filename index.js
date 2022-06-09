// 1.API URL
const url = "https://jsonplaceholder.typicode.com/users"

// 2. Fetch users from the API URL 
function fetchUsers(){
    //Make use of the browser fetch API

    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        //2.2 passing the data to the renderUsers function 
        // console.log(data)
        renderUsers(data)
    });
}
// 3. Render users in the DOM
function renderUsers(userData){
    // console.log(userData)
    const  ul = document.querySelector('#user-list-container')
    // console.log(ul)

    //Render an li for each of the users
    userData.forEach((user,index) => {
        
        const li = document.createElement('li')
        li.innerHTML=`
        <span>${index + 1}.</span>
        <span class='name'>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username} `
        

        //Append the li to the Ul tag
        ul.appendChild(li)
        // console.log(li)
    });

}

//search by username 
function searchUsersByUserName(){
    const input =  document.getElementById('search')
    const ul = document.getElementById('user-list-container')
    const InputValue = input.value.toUpperCase()
    const userList = ul.querySelectorAll('li') //array of the li tags

    //loop through all the users and render the ones that match

   

    for(let index =0;index < userList.length;index++){
        const nameTag = userList[index].querySelector(".name")// to be able to search with the users name 
        const usernameSpanTag = userList[index].querySelector(".username")
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase()
        const nameSpanTagValue = nameTag.innerText.toUpperCase()
        
       // const isMatch = usernameSpanTagValue.indexOf(InputValue) >-1


        //combining the name and username from the JSON 
        if( usernameSpanTagValue.indexOf(InputValue) >-1 ||  nameSpanTagValue.indexOf(InputValue) >-1 ){
           
            userList[index].style.display = "block"
       
           
         }

        else{
          
            userList[index].style.display = "none"
            
           
        
        // console.log(ul.innerHTML)
        // console.log(userList)
    }
    
    
    }




}



//calling the fetch function
fetchUsers()