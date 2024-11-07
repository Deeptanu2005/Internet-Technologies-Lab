document.getElementById('result').value = 'Result';
document.getElementById('list').value = 'List Is Empty';

let list = [];

document.getElementById('addNum').addEventListener('click', () => {
    let n = document.getElementById('num').value.trim();

    if (n === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        n = Number(n);

        if (isNaN(n)) {
            document.getElementById('result').value = 'Please Enter A Valid Number';
        } else if (n <= 0) {
            document.getElementById('result').value = 'It Is Not A Positive Number';
        } else if (n % 10 !== 0) {
            document.getElementById('result').value = 'It Is Not A Number Terminated By Zero';
        } else {
            list.push(n);
            document.getElementById('list').value = 'List => ' + list.join(', ');
            document.getElementById('result').value = `${n} Added To List`;
        }
    }
});


document.getElementById('clearList').addEventListener('click', () => {
    if (list.length > 0) {
        list = [];
        document.getElementById('list').value = 'List Is Empty';
        document.getElementById('result').value = 'List Cleared';
    } else {
        document.getElementById('result').value = 'List Is Already Empty';
    }
});


document.getElementById('getSumAvg').addEventListener('click', () => {
    if (list.length > 0) {
        let sum = 0;
        list.forEach(element => {
            sum += element;
        });
        let avg = sum / list.length;
        document.getElementById('result').value = `Sum = ${sum}, Average = ${avg}`;
    } else {
        document.getElementById('result').value = 'List Is Empty';
    }
});