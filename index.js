// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     });


function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: name, email: email })
    }).then(res => res.json())
        .then(obj => {
            console.log(obj);
            const body = document.querySelector("body");
            body.textContent = obj.id;
        })
        .catch(err => {
            console.log(err.message)
            const body = document.querySelector("body")
            body.textContent = err.message
        })
}


submitData("John", "john@email.com");