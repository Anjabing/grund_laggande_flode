/*jshint esversion:6*/
// Array of objects
let pets = [
  {name: 'Fido', species: 'dog'},
  {name: 'Garfield', species: 'cat'},
  {name: 'Jumbo', species: 'elephant'},
  {name: 'Thomas', species: 'cat'}
];



$(document).on("click", ".pet-list li", function() {
  // This is the "raw" HTML-element clicked on
  console.log($(this));
  // We can convert it to a jQuery element
  let me = $(this);
  // So we can use different jQuery methods with it
  // for example data to retrieve the actual pet object
  let pet = me.data('pet');
  // Now let's find the index of the pet object in the pets array
  let index = pets.indexOf(pet);
  // And remove it from the array
  pets.splice(index, 1);
  console.log(pets);
  // Now rerender the pets
  renderPets();
  
});

// render pets to the dom as list items
function renderPets(){
  $('.pet-list').empty();
  // loop throught the pets
  for(let pet of pets){
    // Create a new li element as jQuery objet
    let newLi = $(`
      <li>
        ${pet.name} is a ${pet.species}
      </li>
    `);
    // "Connect" the li element to data in
    // in this case a pet object
    newLi.data('pet', pet);
    // Add the li element to the .pet-list ul
    $('.pet-list').append(newLi);
  }
 }

renderPets();
