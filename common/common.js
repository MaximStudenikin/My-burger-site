const doc = document,
      hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu')
        closeMenu = doc.getElementById('full__menu-close');

hamburgerMenu.onclick = () => {
   let el = fullMenu;
    el.classList.remove('full__menu--hide');
    el.classList.add('full__menu--show');
};

closeMenu.onclick = () => {
    let el = fullMenu;
    el.classList.remove('full__menu--show');
    el.classList.add('full__menu--hide');
}