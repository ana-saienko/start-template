// Меню бургер

const iconMenu = document.querySelector('.icon-menu');

if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('burger-active');
		menuBody.classList.toggle('burger-active');
	});
}