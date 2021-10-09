"use strict"

let firstNameInput = document.forms['nameForm']['fname'].value;
let lastNameInput = document.forms['nameForm']['lname'].value;

// Name Search
function searchByFirstName(firstNameArray){
    // Grabbing the values from our nameForm form and inputs.
    firstNameInput = document.forms['nameForm']['fname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredFirstName = firstNameArray.filter(function (person) {
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredFirstName.length > 0){
        console.log(filteredFirstName);

    }else{
        alert('Sorry, looks like there is no one with that First Name.');
    }
    return filteredFirstName;
}

// Name Search
function searchByLastName(lastNameArray){
    // Grabbing the values from  nameForm form and inputs.
    lastNameInput = document.forms['nameForm']['lname'].value;

    let filteredLastName = lastNameArray.filter(function (person) {
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredLastName.length > 0){
        console.log(filteredLastName);

    }else{
        alert('Sorry there is no one with that Last Name');
    }
    return filteredLastName;
}


// main search function

function mainSearchFunction(){
    firstNameInput = document.forms['nameForm']['fname'].value;
    lastNameInput = document.forms['nameForm']['lname'].value;
    

    let searchResults = people;

    if(firstNameInput.length > 1){
      searchResults = searchByFirstName(searchResults);

    }

    if(lastNameInput.length > 1){
      searchResults = searchByLastName(searchResults);

    }

    console.log(searchResults);
    mainSearchFunction(searchResults);
};