/* This object contains the digits expressed as '-' and '|' characters.

              0
             ----
          1 |  3 | 2
             ----       --> this is the representation of the characters based on the array position
          4 |    | 5        example: number 1 only needs the characters in position 2 and 5 of the array.  
             ----           the other positions are filled with blank space ' '. 
               6
*/

const digits={
  0: ['-', '|', '|', ' ', '|', '|', '-'],
  1: [' ', ' ', '|', ' ', ' ', '|', ' '],
  2: ['-', ' ', '|', '-', '|', ' ', '-'],
  3: ['-', ' ', '|', '-', ' ', '|', '-'],
  4: [' ', '|', '|', '-', ' ', '|', ' '],
  5: ['-', '|', ' ', '-', ' ', '|', '-'],
  6: ['-', '|', ' ', '-', '|', '|', '-'],
  7: ['-', ' ', '|', ' ', ' ', '|', ' '],
  8: ['-', '|', '|', '-', '|', '|', '-'],
  9: ['-', '|', '|', '-', ' ', '|', '-']
};


// Function in charge of printing the characters that belong to a row in a number.
// The values for rowIndex will be 0, 3 and 6 as represented in the diagram at the top. 

function printRow(rowIndex, number, size) {  
  let print = "";
  for(let numbIndx=0; numbIndx < number.length; numbIndx++) {
    const digit = number[numbIndx];    
    print += ' ';
    for(let i=0; i < size; i++) {
      print += digits[digit][rowIndex];      
    }
    print += ' ';
    print += ' ';
  }
  print += '\n';

  return print;
}


// Function in charge of printing the characters that belong to a column in a number.
// The values for colIndex will be 1, 2, 4 and 5 as represented in the diagram at the top.

function printCol(colIndex, number, size) {  
  let print = "";
  for(let i=0; i < size; i++) {
    for(let numbIndx=0; numbIndx < number.length; numbIndx++) {
      const digit = number[numbIndx];

      print += digits[digit][colIndex];
      for(let j=0; j < size; j++) {
        print += ' ';
      }
      print += digits[digit][colIndex+1];
      print += ' ';
    }
    print +='\n';
  }
  return print;
}

// Function for printing the number in the LCD screen.

function lcd(number, size) {
  return printRow(0, number, size) +
    printCol(1, number, size) +
    printRow(3, number, size) +
    printCol(4, number, size) +
    printRow(6, number, size) ;
}


// Functions in charge of updating the LCD screen when a number is entered.

function refresh() {
  const preTag = document.getElementById('lcd');
  const number = document.getElementById('number').value;
  const size = document.getElementById('size').value;
  preTag.textContent = lcd(number, size);  
}

onload = function() {
  document.getElementById('number').onchange = refresh;
  document.getElementById('number').onkeyup = refresh;
  document.getElementById('size').onchange = refresh;
  refresh();
}