// Challenge 1 

// First Name - Last Name
// Below have a list of full names, we want to split these names into an array containing
// the first and last names as separate items.
// Then we want to push these names to two different arrays named first_name,
// Last_name

let fullNames = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

for (var i = 0; i < fullNames.length; i++){
	firstNames.push(fullNames[i].split(" ")[0]) 
	lastNames.push(fullNames[i].split(" ")[1])

}

