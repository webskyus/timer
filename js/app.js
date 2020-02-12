window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	// time date 
	let deadline = document.querySelector('.timer-wrapper--ny').dataset.deadline,
			thisYear = new Date(),
			nextYear = thisYear.getFullYear() + 1,
			days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
			'September','Octover', 'November', 'December'];


			deadline = nextYear + '-1-1';
			
	


	function getTimingRemaing(deadline) { 
		let t = Math.floor(Date.parse(deadline)) - Math.floor(Date.parse(new Date)),
				seconds = Math.floor(t / 1000 % 60),
				minutes = Math.floor(t / 1000 / 60 % 60),
				hours = Math.floor(t / 1000 / 3600 % 24),
				days = Math.floor(t / 1000 / 86400);

		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': days
		};
	};

	function getTimingNow() { 
		let tn = new Date(),
				seconds = tn.getSeconds(),
				minutes = tn.getMinutes(),
				hours = tn.getHours(),
				year = tn.getFullYear();

		Date.prototype.getDayName = function () { 
			return days[ this.getDay() ];
		};

		Date.prototype.getMonthName = function () { 
			return month[ this.getMonth() ];
		};

		let daysNow = tn.getDayName(),
				monthNow = tn.getMonthName();

		return {
			'total': tn,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': daysNow,
			'month': monthNow,
			'year': year,
		};
		
	};

	function setNowTime(classId) { 
		let time = document.querySelector(classId),
				seconds = time.querySelector('.timer-wrapper__descr--today-seconds'),
				minutes = time.querySelector('.timer-wrapper__descr--today-minutes'),
				hours = time.querySelector('.timer-wrapper__descr--today-hours'),
				days = time.querySelector('.timer-wrapper__descr--today-days'),
				month = time.querySelector('.timer-wrapper__descr--today-month'),
				year = time.querySelector('.timer-wrapper__descr--today-year'),
				updateDateNow = setInterval(updateDate, 1000);

		function updateDate() { 
			let t = getTimingNow();
			
			year.textContent = t.year;
			month.textContent = t.month;
			days.textContent = t.days;
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;
		}
	}

	function setClock(classId, endtime) { 
		let time = document.querySelector(classId),
				seconds = time.querySelector('.timer-wrapper__descr--ny-seconds'),
				minutes = time.querySelector('.timer-wrapper__descr--ny-minutes'),
				hours = time.querySelector('.timer-wrapper__descr--ny-hours'),
				days = time.querySelector('.timer-wrapper__descr--ny-days'),
				timeInterval = setInterval(updateClock, 1000);
				

		function updateClock() { 
			let t = getTimingRemaing(endtime);
	
			seconds.textContent = t.seconds;
			minutes.textContent = t.minutes;
			hours.textContent = t.hours;
			days.textContent = t.days;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				seconds.textContent = 0;
				minutes.textContent = 0;
				hours.textContent = 0;
				days.textContent = 0;
			}
		 }

	};

	

	setClock('.timer-wrapper--ny', deadline);
	setNowTime('.timer-wrapper--today');






});