let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;

document.getElementById('result').value = 'Result';
document.getElementById('list1').value = 'List Is Empty';
document.getElementById('list2').value = 'List Is Empty';

let list1 = [];
let list2 = [];

function generateList(list, n, range) {
    for (let i = 0; i < n; i++) {
        list.push(parseInt(Math.random() * (range + 1)));
    }
}

function mergeList() {
    let n1 = list1.length;
    let n2 = list2.length;
    let mergedList = new Array(n1 + n2);
    let k = 0;

    for (let i = 0; i < n1; i++) {
        mergedList[k++] = list1[i];
    }

    for (let i = 0; i < n2; i++) {
        mergedList[k++] = list2[i];
    }

    return mergedList;
}

document.getElementById('getList1').addEventListener('click', () => {
    let n = document.getElementById('nEle1').value.trim();
    let range = document.getElementById('range1').value.trim();

    if (n === "" || range === "") {
        document.getElementById('result').value = 'All fields fot 1st list must be filled';
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
            list1 = [];
            generateList(list1, n, range);
            document.getElementById('list1').value = `Original List 1 => ${list1.join(', ')}`;
            document.getElementById('result').value = 'List 1 Generated';
        }
    }
});

document.getElementById('getList2').addEventListener('click', () => {
    let n = document.getElementById('nEle2').value.trim();
    let range = document.getElementById('range2').value.trim();

    if (n === "" || range === "") {
        document.getElementById('result').value = 'All fields fot 2nd list must be filled';
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
            list2 = [];
            generateList(list2, n, range);
            document.getElementById('list2').value = `Original List 2 => ${list2.join(', ')}`;
            document.getElementById('result').value = 'List 2 Generated';
        }
    }
});


document.getElementById('clearList1').addEventListener('click', () => {
    if (list1.length > 0) {
        list1 = [];
        document.getElementById('list1').value = '1st List Is Empty';

        document.getElementById('result').value = '1st List Cleared';
    } else {
        document.getElementById('result').value = '1st List Is Already Empty';
    }
});

document.getElementById('clearList2').addEventListener('click', () => {
    if (list2.length > 0) {
        list2 = [];
        document.getElementById('list2').value = '2nd List Is Empty';

        document.getElementById('result').value = '2nd List Cleared';
    } else {
        document.getElementById('result').value = '2nd List Is Already Empty';
    }
});


document.getElementById('getMergedList').addEventListener('click', () => {
    if (list1.length > 0 && list2.length > 0) {
        document.getElementById('result').value = `Sorted List => ${mergeList().join(', ')}`;
    } else {
        document.getElementById('result').value = 'Lists Are Empty';
    }
});