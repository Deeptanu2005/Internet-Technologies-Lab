function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


document.getElementById('result').value = 'Result';

document.getElementById('getFact').addEventListener('click', () => {
    let n = document.getElementById('num').value.trim();

    if (n === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        n = Number(n);

        if (isNaN(n)) {
            document.getElementById('result').value = 'Please Enter A Valid Integer';
        } else if (n < 0 || !Number.isInteger(n)) {
            document.getElementById('result').value = 'Please Enter A Non-negative Integer';
        } else {
            let fact = factorial(n);
            document.getElementById('result').value = `${n}! = ${fact}`;
        }
    }
});