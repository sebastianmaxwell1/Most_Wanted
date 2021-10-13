"use strict"

let firstNameInput = document.forms['nameForm']['fname'].value;
let lastNameInput = document.forms['nameForm']['lname'].value;
let genderInput = document.forms[ 'nameForm']['gender'].value;
let dobInput = document.forms['nameForm']['dob'].value;
let heightInput = document.forms['nameForm']['height'].value;
let weightInput = document.forms[ 'nameForm']['weight'].value;
let eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
let occupationInput = document.forms[ 'nameForm']['occupation'].value;
let parentsInput = document.forms[ 'nameForm']['parents'].value;
let currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;

let headers = ['ID', 'First Name', 'Last Name', 'Gender','DOB', 'Height', 'Weight', 'Eye Color', 'Occupation','Descendants','Current Spouse'];

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
        console.log(filteredFirstName);

    }else{
        alert('Sorry, looks like there is no one with that First Name.');
    }
    return filteredFirstName;
}

// Last Name Search
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
        console.log(filteredLastName);

    }else{
        alert('Sorry there is no one with that Last Name');
    }
    return filteredLastName;
}

// Gender search
function searchByGender(filteredGenderArray){
  genderInput = document.forms[ 'nameForm']['gender'].value;
  let filteredGender = filteredGenderArray.filter(function(person) {
      if(person.gender == genderInput){
          return true;
      }
      return false;
  });
      if(filteredGender.length > 0){
          console.log(filteredGender);

      }else{
          alert("Sorry that is not a gender");
      }
      return filteredGender;
}

// DOB search
function searchByDob(dobArray){
  dobInput = document.forms[ 'nameForm']['dob'].value;
  let filteredDob = dobArray.filter(function(person){
      if(person.dob == dobInput){
          return true;
      }
      return false;
  });
      if(filteredDob.length > 0){
          console.log(filteredDob);
      }else{
         alert(`Our records does not indicate a person with the ${dobInput} birthdate. Please enter in XX/XX/XXXX format or try again.`);
      }
      return filteredDob;
}

// Height search
function searchByHeight(heightArray){
  heightInput = document.forms[ 'nameForm']['height'].value;
  let filteredHeight = heightArray.filter(function(person){
      if(person.height == heightInput){
          return true;
      }
          return false;
  });
      if(filteredHeight.length > 0){
          console.log(filteredHeight);
      }else{
          alert(`We dont have anybody wanted measured at ${heightInput} inches. Please enter another height.`);
      }
      return filteredHeight;
}

// Weight Search
function searchByWeight(weightArray){
  weightInput = document.forms[ 'nameForm']['weight'].value;
  let filteredWeight = weightArray.filter(function(person){
      if(person.weight == weightInput){
          return true;
    }
          return false;
  });
      if(filteredWeight.length > 0){
        console.log(filteredWeight);
      }else{
        alert(`'We do not have anybody wanted with the weighing ${weightInput}. Please enter another weight in lbs.`);
      }
      return filteredWeight;
}

// Eye Color Search
function searchByEyecolor(eyeColorArray){
  eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
  let filteredEyecolor = eyeColorArray.filter(function(person){
      if(person.eyeColor == eyecolorInput){
          return true;
      }
      return false;
  });
      if(filteredEyecolor.length > 0){
          console.log(filteredEyecolor);
      }else{
          alert(`Our records do not indicate anyone with ${eyecolorInput} eyes. Please check your spelling or try another Eye Color.`);
      }
      return filteredEyecolor;
}

// Occupation search
function searchByOccupation(occupationArray){
  occupationInput = document.forms[ 'nameForm']['occupation'].value;
  let filteredOccupation = occupationArray.filter(function(person){
      if(person.occupation == occupationInput){
          return true;
      }
      return false;
  });
      if(filteredOccupation.length > 0){
          console.log(filteredOccupation);
      }else{
          alert(`No ${occupationInput} is recorded in our Wanted List. Please check your spelling or try another Occupation.`);
      }
      return filteredOccupation;
}
// Parents search
function searchByParents(parentArray){
  parentsInput = document.forms[ 'nameForm']['parents'].value;
  let filteredParents = parentArray.filter(function(person){
      if(person.parents == parentsInput){
          return true;
      }
      return false;
  });
      if(filteredParents.length > 0){
          console.log(filteredParents);
      }else{
         alert('No Desendants matched our Wanted List');
      }
      return filteredParents;
}

// Current Spouse Search
function searchByCurrentspouse(spouseArray){
  currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;
  let filteredCurrentSpouse = spouseArray.filter(function(person){
      if(person.currentSpouse == currentSpouseInput){
          return true;
      }
      return false;
  });
      if(filteredCurrentSpouse.length > 0){
          console.log(filteredCurrentSpouse);
      }else{
          alert('No Current Spouses matched our Wanted List');
      }
      return filteredCurrentSpouse;
}


// main search function

function mainSearchFunction(){
    firstNameInput = document.forms['nameForm']['fname'].value;
    lastNameInput = document.forms['nameForm']['lname'].value;
    genderInput = document.forms[ 'nameForm']['gender'].value;
    dobInput = document.forms['nameForm']['dob'].value;
    heightInput = document.forms['nameForm']['height'].value;
    weightInput = document.forms['nameForm']['weight'].value;
    eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
    occupationInput = document.forms[ 'nameForm']['occupation'].value;
    parentsInput = document.forms[ 'nameForm']['parents'].value;
    currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;




    let results = people;

    if(firstNameInput.length > 1){
        results = searchByFirstName(results);

    }

    if(lastNameInput.length > 1){
        results = searchByLastName(results);

    }
    if(genderInput.length > 1) {
      results = searchByGender(results);
  
      }

    if(dobInput.length > 1) {
      results = searchByDob(results);
    }
    
    if(heightInput.length > 1) {
      results = searchByHeight(results);
    }
    if(weightInput.length > 1) {
      results = searchByWeight(results);
    }

    if(eyecolorInput.length > 1) {
      results = searchByEyecolor(results);

  }
  if(occupationInput.length > 1) {
    results = searchByOccupation(results);

}
if(parentsInput.length > 1) {
  results = searchByParents(results);

}

if(currentSpouseInput.length > 1) {
  results = searchByCurrentspouse(results);
}



    console.log(results);
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
