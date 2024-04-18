const input = document.querySelector('#fruit'); //input = #fruit
const suggestions = document.querySelector('.suggestions ul');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Function should find fruit that matches a given string
function search(str) {
  let results = [];

  //Checks each fruit in the fruitList array to see if it includes the given string
  results = fruitList.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));

  return results; //Returns a list of matching fruits
}

//Function reacts when you type something into the search bar
function searchHandler(e) {
  const inputVal = e.target.value; //Grabs what you type
  const results = search(inputVal); //Uses the search function to find fruits that match what you've typed
  showSuggestions(results, inputVal); //Shows the matching fruits as suggestions
}

//Function displays the suggestions
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clear previous suggestions
  if (inputVal !== '') {
    results.forEach(result => {
      const li = document.createElement('li'); //if inputval not empty create a li
      li.textContent = result; // set li text to result
      suggestions.appendChild(li); // append li to suggestions
    });
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

//Function reacts when you click on a suggestion
function useSuggestion(e) {
  if (e.target.tagName === 'LI') { 
    input.value = e.target.textContent; //If you click on a fruit suggestion, fill the search bar with that fruit
    suggestions.innerHTML = ''; //reset suggestion
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

input.addEventListener('input', searchHandler); //When you type in search bar, runs to show matching fruits
suggestions.addEventListener('click', useSuggestion); //When you click on a suggestion, useSuggestion runs to fill the search bar with that suggestion