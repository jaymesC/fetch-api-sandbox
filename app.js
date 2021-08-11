document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getApi)

// Get Local Text Data
function getText() {
  fetch('test.txt')
    .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML= data
  })
  .catch(err => console.log(err))
}

// Get Local JSON data
function getJson() {
  fetch('post.json')
  .then(res => res.json())
  .then(data => {console.log(data)
    let output ='';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err))
}


// Get from External API
function getApi(){
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {console.log(data);
    let output =''
    data.forEach(function(user){
      output += `<li>${user.login}</li>`
    })
    document.getElementById('output').innerHTML = output
  })
  .catch(err => console.log(err))
}




const letters = [1,2,'a','f',4,5]

letters.forEach(letter => {
  console.log(letter)
})





