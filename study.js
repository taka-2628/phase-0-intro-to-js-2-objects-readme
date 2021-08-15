//simple object
const obj = {
    key1: value1,
    key2: value2,
};

//nested object
const obj2 = {
    key1: value1,
    key2: {
        innerKey1: innerValue1,
        innerkey2: innerValue2
    },
    key3: value3
}

//nested object - real world example
const address = {
    steert: {
        line1: "601 West 113th St",
        line2: "Apt 7L"
    },
    city: "New York",
    state: "NY",
    zip: "10025"
};

address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }
address.street.line1;
//=> 11 Broadway

address["street"];
//=> { line1: "11 Broadway", line2: "2nd Floor" }
address["street"]['line2'];
//=> 11 Broadway

//keys with the same values
const meals = {
    breakfast: "Avocado toast",
    lunch: "Avocado toast",
    dinner: "Avocado toast",
};
  
meals.breakfast;
// => "Avocado toast"
  
meals['dinner'];
// => "Avocado toast"


//Accessing Properties Dynamically
const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
};
  
let mealName = "lunch";
  
meals[mealName];
//=> Caesar salad


//Dynamically set properties during the creation of a new Object
const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  [morningMeal]: "French toast",
  [middayMeal]: "Personal pizza",
  [eveningMeal]: "Fish and chips",
};

meals;
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }

//Without [], keys are interpreted literally
const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals = {
  morningMeal: "French toast",
  middayMeal: "Personal pizza",
  eveningMeal: "Fish and chips",
};

meals;
//=> { morningMeal: "French toast", middayMeal: "Personal pizza", eveningMeal: "Fish and chips" }

