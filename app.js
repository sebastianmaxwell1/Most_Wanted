"use strict"



let firstNameInput = document.forms['nameForm']['fname'].value;
let lastNameInput = document.forms['nameForm']['lname'].value;

let headers = ['First Name', 'Last Name'];

baseTableConfiguration(people);

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
        // console.log(filteredFirstName);

    }else{
        alert('Sorry, looks like there is no one with that First Name.');
    }
    return filteredFirstName;
}

// Name Search
function searchByLastName(lastNameArray){
    // Grabbing the values from our nameForm form and inputs.
    lastNameInput = document.forms['nameForm']['lname'].value;

    let filteredLastName = lastNameArray.filter(function (person) {
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredLastName.length > 0){
        // console.log(filteredLastName);

    }else{
        alert('Sorry there is no one with that Last Name');
    }
    return filteredLastName;
}

// main search function

function mainSearchFunction(){
    firstNameInput = document.forms['nameForm']['fname'].value;
    lastNameInput = document.forms['nameForm']['lname'].value;


    let results = people;

    if(firstNameInput.length > 1){
        results = searchByFirstName(results);

    }

    if(lastNameInput.length > 1){
        results = searchByLastName(results);

    }


    // console.log(results);
    createTableWithResults(results);
}

function createTableWithResults(test){
    let filteredTable2 = document.createElement('filteredTable');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    filteredTable2.appendChild(headerRow);

    test.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

       filteredTable2.appendChild(row);
    });

       filteredTable.appendChild(filteredTable2);
};

  function baseTableConfiguration(people){
    let baseConfig = document.createElement('myTable');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    baseConfig.appendChild(headerRow);

    people.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

       baseConfig.appendChild(row);
    });

        myTable.appendChild(baseConfig);
};
