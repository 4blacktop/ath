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
	onChange: function (values) {
	console.log(values.value[0]);
   }
});   



var dailyVerse = { 
"2017-01-13": ["Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be.","Psalms 139:16"],
"2017-04-14": ["For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.","Jeremiah 29:11"]
};
console.log(dailyVerse);

// var date = new Date();
// var dateForVerse = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
// console.log(date);
// console.log(dateForVerse);
var datesof = new Date().toISOString().split('T')[0];
console.log(datesof);
console.log(dailyVerse[datesof][0]);
console.log(dailyVerse[datesof][1]);

// console.dir(dailyVerse);

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

