document.getElementById('result').value = 'Result';

document.getElementById('getMax').addEventListener('click', () => {
    let a = document.getElementById('first').value.trim();
    let b = document.getElementById('second').value.trim();
    let c = document.getElementById('third').value.trim();

    if (a === "" || b === "" || c === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        a = Number(a);
        b = Number(b);
        c = Number(c);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            document.getElementById('result').value = 'Invalid Input';
        } else {

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

            document.getElementById('result').value = `Maximum is =  ${max}`;
        }
    }
});