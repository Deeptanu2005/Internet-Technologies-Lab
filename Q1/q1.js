let tableText = "Number\tSquare\tCube\n";  

for (let i = 5; i <= 15; i++) {
    tableText += `\t${i}\t${i * i}\t\t${i * i * i}\n`;  
}

document.getElementsByTagName('button')[0].onclick = () => {
    alert(tableText);
}


/* <==== Invalid Method ====> */

// let table = document.createElement('table');
// table.setAttribute('border', '1');
// table.setAttribute('align', 'center');
// table.innerHTML = '<tr> <th>Number</th> <th>Square</th> <th>Cube</th> </tr>';


// for (let i = 5; i <= 15; i++) {
//     table.innerHTML += `<tr> <td>${i}</td> <td>${i*i}</td> <td>${i*i*i}</td> </tr>`;
// }

// document.body.appendChild(table);
// alert(table); // alert() doesn’t support rendering HTML elements like tables 

