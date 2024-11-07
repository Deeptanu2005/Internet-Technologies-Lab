document.getElementById('result').value = 'Result';

document.getElementById('getMax').addEventListener('click', () => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let c = document.getElementById('third').value;

    if (a.trim() === "" || b.trim() === "" || c.trim() === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        a = Number(a);
        b = Number(b);
        c = Number(c);

        let max;

        // max = Math.max(a, b, c); // using Math

        if (a > b) {
            if (a > c) {
                max = a;
            } else {
                max = c;
            }
        } else {
            if (b > c) {
                max = b;
            } else {
                max = c;
            }
        }

        if (isNaN(max)) {
            document.getElementById('result').value = 'Invalid Input';
        } else {
            document.getElementById('result').value = 'Maximum is = ' + max;
        }
    }
});