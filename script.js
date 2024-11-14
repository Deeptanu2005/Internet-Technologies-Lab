document.querySelector('.over-container').addEventListener('scroll', function () {
    const scrollTop = this.scrollTop;
    const headerHeight = document.getElementsByTagName('h1')[0].clientHeight;
    const totalHeaderHeight = headerHeight + 20;

    if (scrollTop > totalHeaderHeight) {
        document.querySelector('.navigation').classList.add('fixed-nav');
        document.getElementById('desc').style.marginTop = (document.querySelector('.navigation').clientHeight + 80 + 20) + 'px';
    } else {
        document.querySelector('.navigation').classList.remove('fixed-nav');
        document.getElementById('desc').style.marginTop = '80px';
    }
});

const overlay = document.getElementById('overlay');
const navList = document.querySelector('.nav-list');

overlay.style.visibility = 'hidden';
overlay.style.opacity = '0';


navList.addEventListener('mouseover', () => {
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
});

navList.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
});

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('close-loading');
    }, 4000);
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 4800);
}