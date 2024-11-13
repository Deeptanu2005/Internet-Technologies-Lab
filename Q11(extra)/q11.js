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


function insertionSort() {
    for (let i = 1; i < list.length; i++) {
        let key = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = key;
    }
}

function binarySearch(x) {
    let lb = 0;
    let ub = list.length - 1;
    while (lb <= ub) {
        let mid = Math.floor((lb + ub) / 2);
        if (list[mid] === x) {
            return mid;
        }
        else if (list[mid] < x) {
            lb = mid + 1;
        }
        else {
            ub = mid - 1;
        }
    }
    return -1;
}

document.getElementById('getList').addEventListener('click', () => {
    let n = document.getElementById('nEle').value.trim();
    let range = document.getElementById('range').value.trim();

    if (n === "" || range === "") {
        document.getElementById('result').value = 'Number of elements and range must be filled';
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
            insertionSort();
            document.getElementById('list').value = `List => ${list.join(', ')}`;
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


document.getElementById('getSearch').addEventListener('click', () => {
    if (list.length > 0) {
        let x = document.getElementById('searchNum').value.trim();
        if (x === "") {
            document.getElementById('result').value = 'Search value must be filled';
        } else {
            x = Number(x);
            if (isNaN(x)) {
                document.getElementById('result').value = 'Please Enter Valid Search Number';
            } else {
                let index = binarySearch(x);
                if (index === -1) {
                    document.getElementById('result').value = `Number ${x} Not Found`;
                } else {
                    document.getElementById('result').value = `Number ${x} Found At Index ${index}`;
                }
            }
        }
    } else {
        document.getElementById('result').value = 'List Is Empty';
    }
});