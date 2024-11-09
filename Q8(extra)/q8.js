let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;


document.getElementById('result').value = 'Result';

document.getElementById('getRev').addEventListener('click', () => {
    let str = document.getElementById('string').value.trim();

    if (str === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        // Method 1
        /*
        str = str.split('');
        let m = 0;
        let n = str.length - 1;
        while (m < n) {
            let temp = str[m];
            str[m] = str[n];
            str[n] = temp;
            m++;
            n--;
        }
        let revStr = str.join('');
        */

        // Method 2
        let revStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revStr += str[i];
        }

        document.getElementById('result').value = `Reversed String = ${revStr}`;
    }
});