let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;

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
        } else {
            list.push(n);
            document.getElementById('list').value = 'List => ' + list.join(', ');
            document.getElementById('result').value = `${n} Added To List`;
            document.getElementById('num').value = '';
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


document.getElementById('getCount').addEventListener('click', () => {
    if (list.length > 0) {
        let positive = 0;
        let negative = 0;
        let zero = 0;
        list.forEach(element => {
            if (element > 0) {
                positive++;
            } else if (element < 0) {
                negative++;
            } else {
                zero++;
            }
        });
        document.getElementById('result').value = `Positive Count: ${positive}, Negative Count: ${negative}, Zero Count: ${zero}`;
    } else {
        document.getElementById('result').value = 'List Is Empty';
    }
});