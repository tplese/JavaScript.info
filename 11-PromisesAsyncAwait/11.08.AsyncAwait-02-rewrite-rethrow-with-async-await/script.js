"use strict";

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    };

    throw new HttpError(response);
}
  
// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    let name, user, full;
    let errorHolder = {};

    do {
        errorHolder = {};
        name = prompt("Enter a name?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
        } catch (err) {
            errorHolder = err;
            alert("No such user, please reenter.");
        };
    } while (errorHolder instanceof HttpError && errorHolder.response.status == 404);
    
    alert(`Full name: ${user.name}.`);
}
  
demoGithubUser().catch(err => {throw err;});