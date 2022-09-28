function do_allocation(number_of_people, number_of_buses) {
  let noOfbuses = number_of_buses;

  if (number_of_buses == 1) {
    let array = [number_of_people];
    return array;
  }

  let array = []; 
let n1 = 1, n2 = 1, nextTerm;
for (let i = 0; i <number_of_buses; i++) {
    console.log(n1);
    array.push(n1)
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
}
console.log(array)

  number_of_people = number_of_people - 1;
  number_of_buses = number_of_buses - 1;

  let b1 = Math.round(number_of_people / number_of_buses); //next buses
  if (b1 > 1 && number_of_buses > 1) {
    b1 = b1 - 1;
  }


  array.push(b1);

  number_of_people = number_of_people - b1;
  number_of_buses = number_of_buses - 1;

  if (array.length < noOfbuses) {
    let more = noOfbuses - array.length;
    for (let i = 0; i < more; i++) {
      array.push(0);
    }
  }


  if (array.length > noOfbuses) {
    let more = array.length - noOfbuses;
    for (let i = 0; i < more; i++) {
      array.pop();
    }
  }
  return array;
}

document.getElementById("button").addEventListener("click", () => {
  //  inputs
  const number_of_people = document.getElementById("number_of_people").value;
  const number_of_buses = document.getElementById("number_of_buses").value;

  if (number_of_people == 0 || number_of_buses == 0) {
    return alert("Please insert valid input");
  }

  if (number_of_people && number_of_buses) {
    let busNumber = 1;
    const result = do_allocation(number_of_people, number_of_buses);
    const Main = document.getElementById("result");
    Main.innerText = "";



    //   iterating result array
    for (let i = 0; i < result.length; i++) {
      const resultTable = document.createElement("div");

      // result div
      resultTable.innerHTML = `
      
      <div class="table">Bus${busNumber}</div><div class="table-result">NoOfPeople :${result[i]}</div>`;

      Main.append(resultTable);
      busNumber += 1;
    }

  } else {

    return prompt();// Alert if fields are empty
  }
});

