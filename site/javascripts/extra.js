document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.md-nav__link--active .md-nav__icon').click();
    outer_nav = document.querySelector('.md-nav--primary');
    outer_nav_title = outer_nav.querySelector('.md-nav__title');
    outer_nav.querySelector('a span').textContent = ''
    inner_nav = outer_nav.querySelector('.md-nav--secondary');
    inner_nav_title = inner_nav.querySelector('.md-nav__title');
    inner_nav_title.replaceWith(outer_nav_title)
    inner_nav_title = inner_nav.querySelector('.md-nav__title');
    inner_nav_title.childNodes[inner_nav_title.childNodes.length - 1].textContent = '\n    目录\n  '
    outer_nav.style.display = 'block';
    inner_nav.style.display = 'block';
    // document.querySelectorAll('.md-nav--secondary').forEach(function(element) {
    //     element.style.display = 'block';
    // });
});
