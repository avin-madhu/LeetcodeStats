

window.onload = function(){
       
fetch('https://leetcode-stats-api.herokuapp.com/avin-madhu', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(data=>{
    const easy = document.getElementById('Progress').querySelector('.easy');
    easy.textContent = data.easySolved

    const medium = document.getElementById('Progress').querySelector('.medium');
    medium.textContent = data.mediumSolved

    const hard = document.getElementById('Progress').querySelector('.hard');
    hard.textContent = data.hardSolved
   })
   .then(response => console.log(JSON.stringify(response)))
}