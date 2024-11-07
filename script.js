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



window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('close-loading');
    }, 4000);
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 5000);
}