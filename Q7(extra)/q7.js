let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;


document.getElementById('result').value = 'Result';

document.getElementById('getCopy').addEventListener('click', () => {
    let str = document.getElementById('string').value.trim();

    if (str === "") {
        document.getElementById('result').value = 'All fields must be filled';
    } else {
        // There isn’t a direct “string copy” function like in C (strcpy).
        let strCopy = str;
        document.getElementById('result').value = `Copied String = ${strCopy}`;
    }
});