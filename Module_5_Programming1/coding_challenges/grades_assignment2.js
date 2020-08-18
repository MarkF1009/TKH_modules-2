// Assignment 2 
                                             

// - A+ if marks is greater than 95 .
// - A if marks is greater than 88 and less than or equal to 90 .
// - B+ if marks is greater 84 than and less than or equal to 88.
// - C+ if marks is greater than 76 and less than or equal to 84.
// - C if marks is greater than 70 and less than or equal to 76.
// - D+ if marks is greater than 67and less than or equal to 70.
// - D if marks is greater than 64 and less than or equal to 67.
// - F if marks is less than or equal to 64

// Note
// Use console.log for printing statements to the console.
// HINT*** This may be a good use of a switch statement

switch (true) {
		case (grade > 95):
		console.log("A+");
		break;
        case (grade > 88): 
            console.log("A");
            break;
        case (grade > 84):
        	console.log("B+");
        case (grade > 76): 
            console.log("C+");
              break;
        case (grade >70): 
            console.log("C");
              break;
        case (grade > 67): 
            console.log("D+");
              break;
        case (grade > 64): 
            console.log("D");
              break;
        case (grade <= 64): 
            console.log("F");
              break;
        default:
            break;
}
