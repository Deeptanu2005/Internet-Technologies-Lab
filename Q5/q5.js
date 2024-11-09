let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;


document.getElementById('result').value = 'Result';

const P = 1000;
const r = 5;

document.getElementById('getBalance').addEventListener('click', () => {
    document.querySelectorAll('.del').forEach(element => {
        element.remove();
    });
    let n = document.getElementById('num').value.trim();
    
    if (n === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        n = Number(n);
        
        if (isNaN(n)) {
            document.getElementById('result').value = 'Please Enter A Valid Number';
        } else if (n <= 0 || !Number.isInteger(n)) {
            document.getElementById('result').value = 'Please Enter A Positive Integer';
        } else {
            document.getElementById('result').value = `Result Computed For ${n} Year(s)`;
            for (let i = 1; i <= n; i++) {
                let amount = P * Math.pow((1 + r / 100), i);
                const resultInput = document.createElement('input');
                resultInput.type = 'text';
                resultInput.className = 'res del';
                resultInput.readOnly = true;
                resultInput.value = `Amount after ${i} year(s): Rs ${amount.toFixed(2)}`;
                document.body.appendChild(resultInput);
            }
        }
    }
});