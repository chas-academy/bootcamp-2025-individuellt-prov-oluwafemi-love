const data = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 31,
  },
  {
    name: "Jim",
    age: 13,
  },
];

// returna namnet i samtliga objekt i arrayen
// // return the name in all objects in the array
const getName = (person) => {
  data.forEach(obj => {
    return obj.name;
  });
};

// lämna denna orörd
//leave this untouched
 const getAllNames = () => {
  let names = [];
  data.forEach((person) => {
    names.push(getName(person));
  });
  return names;
};
