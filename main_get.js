let base_url = "http://jsonplaceholder.typicode.com/users"
fetch(base_url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
