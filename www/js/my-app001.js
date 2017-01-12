// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view4 = myApp.addView('#view-4', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view5 = myApp.addView('#view-5', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


var calendarDefault = myApp.calendar({
    input: '#calendar-default',
	firstDay: 7,
	onDayClick: function (picker, dayContainer, dateYear, dateMonth, dateDay) {
   //try to console log these values dateYear, dateMonth, dateDay
	console.log(picker);
	console.log(dayContainer);
	console.log(dateYear);
	console.log(dateMonth);
	console.log(dateDay);
	
},
	onChange: function (values) {
	console.log(values.value[0]);
   }
});   
      // console.dir(values.value); // values will be an array with selected dates in ms format
	// onDayClick: function (p) {
		// console.dir(p);
		// console.log(p['updateValue']);
		// console.log(p['value']);
	// }

		// console.log(p['animating']);
		// console.log(p['value']);
		// console.log(p.value);
		// console.log(p);
		// console.log(p.animate);
// myApp.alert(p);

 

// var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
 
// var calendarInline = myApp.calendar({
    // container: '#calendar-inline-container',
    // value: [new Date()],
    // firstDay: 7,
    // toolbarTemplate: 
        // '<div class="toolbar calendar-custom-toolbar">' +
            // '<div class="toolbar-inner">' +
                // '<div class="left">' +
                    // '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                // '</div>' +
                // '<div class="center"></div>' +
                // '<div class="right">' +
                    // '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                // '</div>' +
            // '</div>' +
        // '</div>',
    // onOpen: function (p) {
        // $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        // $$('.calendar-custom-toolbar .left .link').on('click', function () {
            // calendarInline.prevMonth();
        // });
        // $$('.calendar-custom-toolbar .right .link').on('click', function () {
            // calendarInline.nextMonth();
        // });
    // },
    // onMonthYearChangeStart: function (p) {
        // $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    // }
// }); 

