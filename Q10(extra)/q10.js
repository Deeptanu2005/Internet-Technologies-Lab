let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;

document.getElementById('result').value = 'Result';
document.getElementById('list').value = 'List Is Empty';

let list = [];

function generateList(n, range) {
    for (let i = 0; i < n; i++) {
        list.push(parseInt(Math.random() * (range + 1)));
    }
}

function selectionSort() {
    for (let i = 0; i < list.length; i++) {
        let min = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        let temp = list[i];
        list[i] = list[min];
        list[min] = temp;
    }
}

document.getElementById('getList').addEventListener('click', () => {
    let n = document.getElementById('nEle').value.trim();
    let range = document.getElementById('range').value.trim();

    if (n === "" || range === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        n = Number(n);
        range = Number(range);

        if (isNaN(n) || isNaN(range)) {
            document.getElementById('result').value = 'Please Enter Valid Numbers';
        } else if (n <= 0 || range <= 0) {
            document.getElementById('result').value = 'Enter Positive Numbers';
        } else if (!Number.isInteger(n) || !Number.isInteger(range)) {
            document.getElementById('result').value = 'Enter Integer Numbers';
        } else {
            list = [];
            generateList(n, range);
            document.getElementById('list').value = `Original List => ${list.join(', ')}`;
            document.getElementById('result').value = 'List Generated';
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


document.getElementById('getSelectionSort').addEventListener('click', () => {
    if (list.length > 0) {
        selectionSort();
        document.getElementById('result').value = `Sorted List => ${list.join(', ')}`;
    } else {
        document.getElementById('result').value = 'List Is Empty';
    }
});