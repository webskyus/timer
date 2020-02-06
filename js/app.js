window.addEventListener('DOMContentLoaded', function () {

	'use strict'

	// choose elements 
	let tabHeadWrapper = document.querySelector('.tab-header'),
		tabHeadItems = document.querySelectorAll('.tab-header__items'),
		tabContentBox = document.querySelectorAll('.tab-content');


	// hide function 
	function hiddenTabContentBox(w, f) {
		for (let i = w; i < tabContentBox.length; i++) {
			tabContentBox[i].classList.remove('tab-content--visible');
			tabContentBox[i].classList.add('tab-content--hidden');
		}
		for (let i = f; i < tabHeadItems.length; i++) {
			tabHeadItems[i].classList.remove('tab-header__items--active');
			tabHeadItems[i].classList.add('tab-header__items--inactive');
		}
	}

	hiddenTabContentBox(1, 1);


	// show function 
	function showTabContentBox(s, q) {
		if (tabContentBox[s].classList.contains('tab-content--hidden')) {
			tabContentBox[s].classList.remove('tab-content--hidden');
			tabContentBox[s].classList.add('tab-content--visible');
		}
		if (tabHeadItems[q].classList.contains('tab-header__items--inactive')) {
			tabHeadItems[q].classList.remove('tab-header__items--inactive');
			tabHeadItems[q].classList.add('tab-header__items--active');
		}
	}


	// click elem functuon 
	tabHeadWrapper.addEventListener('click', function (event) {
		let target = event.target;

		if (target && target.classList.contains('tab-header__items')) {
			for (let i = 0; i < tabHeadItems.length; i++) {
				if (target == tabHeadItems[i]) {
					hiddenTabContentBox(0, 0);
					showTabContentBox(i, i);
					break;
				}
			}
		}
	});



});