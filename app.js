const addButton = document.getElementById('addButton');
addButton.addEventListener('click', generateQuote);


function generateQuote() {
    const url = "https://type.fit/api/quotes"
fetch(url)
        .then(function (response) {
        return response.json();    
        })
        .then(function(data){
            console.log(data);

            let index = Math.floor(Math.random() * data.length);
            data[index];

            document.getElementById("card").innerHTML = '"' + data[index].text 
            + '"' + ' -' + data[index].author;

        });
        
}
