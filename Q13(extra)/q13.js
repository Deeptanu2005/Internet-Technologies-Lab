let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;

document.getElementById('result').value = 'Result';
document.getElementById('list').value = 'List Is Empty';

let list = [];

linearSearch = (x) => {
    for (let i in list) {
        if (list[i] === x) {
            return parseInt(i);
        }
    }
    return -1;
}

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


document.getElementById('getSearch').addEventListener('click', () => {
    if (list.length > 0) {
        let x = document.getElementById('searchVal').value.trim();

        if (x === "") {
            document.getElementById('result').value = 'All fields must be filled';
        } else {
            x = Number(x);

            if (isNaN(x)) {
                document.getElementById('result').value = 'Please Enter A Valid Number';
            } else {
                let index = linearSearch(x);
                document.getElementById('result').value = index === -1? `${x} Not Found In List` : `${x} Found At Index ${index}`;
            }
        }
    } else {
        document.getElementById('result').value = 'List Is Empty';
    }
});