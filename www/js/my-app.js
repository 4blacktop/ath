// по кнопке выход после подтверждения удалять локалсторейдж localStorage.clear()
// сохранять локалсторейдж на сервере (при каких услоиях?) - собирать весь(?) локалсторейдж и делать его в JSON
// загружать локалсторейдж с сервера при логине
// локальные уведомления
// сделать фото и журнал фоток
// проверить сплэшскрин
// смена пароля
// после сохранения редирект?
// крутилка при логине


// Initialize your app
var myApp = new Framework7({
    // animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
     template7Data: {
		entryList: []	
    }  
});

// дата при открытии add-entry
var addEntryDateInput = "";
	
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDN6REIe6FjLtIkWMrMW2C2v0RiqQ5lwmE",
	authDomain: "awakening-to-hope.firebaseapp.com",
	databaseURL: "https://awakening-to-hope.firebaseio.com",
	storageBucket: "awakening-to-hope.appspot.com",
	messagingSenderId: "623933765391"
};
firebase.initializeApp(config);	

// add a realtime listener
firebase.auth().onAuthStateChanged( function(firebaseUser) {
	if(firebaseUser) {
		// console.log(firebaseUser);
		console.log('logged in');
		// myApp.alert('Logged in');
		// document.getElementById( 'btnLogout' ).style.display = 'block';
		// document.getElementById( 'btnSignUp' ).style.display = 'none';
		myApp.closeModal();
	} else {
		myApp.alert('Logged out');
		console.log('not logged in');
		// document.getElementById( 'btnLogout' ).style.display = 'none';
		// document.getElementById( 'btnSignUp' ).style.display = 'block';
		myApp.loginScreen();
	}
});	



/* for (var a in localStorage) {
   // console.log(a, ' = ', localStorage[a]);
	console.log(localStorage.getItem(localStorage.key(a)));
   
} */

// поиск дней с событиями
var calendarEvents = [];
for (var i = 0; i < localStorage.length; i++){
	var itemNow = JSON.parse(localStorage.getItem(localStorage.key(i)));
	if (itemNow.date) {
		// console.log(itemNow);
		myApp.template7Data.entryList.push(itemNow);
		var eventDate = itemNow.date.split("-");
		// console.log('eventDate' + eventDate);
		var f = new Date(eventDate);
		// console.log('f' + f);
		calendarEvents.push(f);
	}
}

// Compile car template to HTML, its template is already compiled and accessible as Template7.templates.carTemplate
var timelineHTML = Template7.templates.timelineTemplate(myApp.template7Data.entryList);
document.getElementById('timeline-list').innerHTML = timelineHTML;


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

// var mainView = myApp.addView('.view-main');

var dateAth = new Date().toISOString().split('T')[0];

var calendarDefault = myApp.calendar({
    input: '#calendar-default',
	firstDay: 7,
	onChange: function (values) {
   }
});   



var dailyVerse = { 
"2017-01-01": ["Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be. ","Psalms 139:16","01_1"],
"2017-01-02": ["I have loved you with an everlasting love; I have drawn you with unfailing kindness. ","Jeremiah 31:3","01_2"],
"2017-01-03": ["Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, “This is the way; walk in it.” ","Isaiah 30:21","01_3"],
"2017-01-04": ["For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.  ","Jeremiah 29:11","01_4"],
"2017-01-05": ["Don’t be afraid, for I am with you. Don’t be discouraged, for I am your God. I will strengthen you and help you. I will hold you up with my victorious right hand. ","Isaiah 41:10","01_5"],
"2017-01-06": ["You are truly my disciples if you remain faithful to my teachings.  And you will know the truth, and the truth will set you free. ","John 8:31-32","01_6"],
"2017-01-07": ["Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid. ","John 14:27","01_7"],
"2017-01-08": ["Everything comes from him and exists by his power and is intended for his glory. All glory to him forever! Amen. ","Romans 11:36 ","01_8"],
"2017-01-09": ["God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.  ","John 3:16","01_9"],
"2017-01-10": ["Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take. ","Proverbs 3:5-6","01_10"],
"2017-01-11": ["For we are God’s masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago. ","Ephesians 2:10","01_11"],
"2017-01-12": ["Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you. ","Deuteronomy 31:6","01_12"],
"2017-01-13": ["Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. ","Psalms 91:1","01_13"],
"2017-01-14": ["I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world. ","John 16:33","01_14"],
"2017-01-15": ["Bless the Lord, O my soul; And all that is within me, bless His holy name! Bless the Lord, O my soul, And forget not all His benefits. ","Psalms 103:1-2","01_15"],
"2017-01-16": ["The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged. ","Deuteronomy 31:8","01_16"],
"2017-01-17": ["Take delight in the Lord, and he will give you the desires of your heart. ","Psalms 37:4","01_17"],
"2017-01-18": ["For I have come down from heaven not to do my will but to do the will of him who sent me. ","John 6:38","01_18"],
"2017-01-19": ["Be sure of this: I am with you always, even to the end of the age. ","Matthew 28:20","01_19"],
"2017-01-20": ["In the shelter of your presence you hide them from all human intrigues; you keep them safe in your dwelling from accusing tongues. ","Psalms31:20","01_20"],
"2017-01-21": ["The Lord gives strength to his people; the Lord blesses his people with peace. ","Psalms 29:11","01_21"],
"2017-01-22": ["Let everything that has breath praise the Lord. Praise the Lord. ","Psalms 150:6","01_22"],
"2017-01-23": ["There is no fear in love; instead, perfect love drives out fear. ","1 John 4:18","01_23"],
"2017-01-24": ["Your word is a lamp to guide my feet and a light for my path. ","Psalms 119:105 ","01_24"],
"2017-01-25": ["For we must all appear before the judgment seat of Christ, so that each of us may receive what is due us for the things done while in the body. ","2 Corinthians 5:10","01_25"],
"2017-01-26": ["If God is for us, who can be against us?  ","Romans 8:31","01_26"],
"2017-01-27": ["For in the day of trouble He will keep me safe in his dwelling;  He will hide me in the shelter of his sacred tent and set me high upon a rock. ","Psalms 27:5","01_27"],
"2017-01-28": ["Love and faithfulness meet together; righteousness and peace kiss each other. ","Psalms 85:10","01_28"],
"2017-01-29": ["When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is ... human beings that you care for them? ","Psalms 8:3-4","01_29"],
"2017-01-30": ["We know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.   ","1 John 4:16","01_30"],
"2017-01-31": ["We can make our plans, but the Lord determines our steps. ","Proverbs 16:9 ","01_31"],
"2017-02-01": ["The Lord was sorry he had ever made them and put them on the earth. It broke his heart. ","Genesis 6:6","02_1"],
"2017-02-02": ["Since death came through a man, the resurrection of the dead comes also through a man. For as in Adam all die, so in Christ all will be made alive. ","1 Corinthians 21-22","02_2"],
"2017-02-03": ["When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. ","Isaiah 43:2","02_3"],
"2017-02-04": ["I consider that the sufferings of this present time are not worth comparing with the glory that is going to be revealed to us.","Romans 8:18","02_4"],
"2017-02-05": ["Those who sacrifice thank offerings honor me and prepare the way that I might show them the salvation of God. ","Psalms 50:23","02_5"],
"2017-02-06": ["Fix your eyes on Jesus, the author and finisher of our faith, who for the joy that lay before him endured the cross., scorning its shame. ","Hebrews 12:2","02_6"],
"2017-02-07": [" My grace is sufficient for you, for my power is made perfect in weakness. ","2 Corinthians 12:9","02_7"],
"2017-02-08": ["Jesus wept. ","John 11:35","02_8"],
"2017-02-09": ["For we who are alive are always being given over to death for Jesus’ sake, so that his life may also be revealed in our mortal body.  ","2 Corinthians 4:11","02_9"],
"2017-02-10": ["The Lord is my shepherd; I have all that I need. He lets me rest in green meadows; he leads me beside peaceful streams. ","Psalms 23:1-2","02_10"],
"2017-02-11": ["For our present troubles are small and won’t last very long. Yet they produce for us a glory that vastly outweighs them and will last forever!  ","2 Corinthians 4:17","02_11"],
"2017-02-12": ["See, God has come to save me. I will trust in Him and not be afraid. The Lord God is my strength and my song;  He has given me victory. ","Isaiah 12:2","02_12"],
"2017-02-13": ["We fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal. ","2 Corinthians 4:18","02_13"],
"2017-02-14": ["Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need. ","Hebrew 4:16","02_14"],
"2017-02-15": ["He was despised and rejected—a man of sorrows, acquainted with deepest grief. ","Isaiah 53:3","02_15"],
"2017-02-16": ["Death is at work in us, but life is at work in you. ","2 Corinthians 4:12","02_16"],
"2017-02-17": ["Even though I walk through the darkest valley, I will fear no evil, for you are with me.","Psalms 23:4","02_17"],
"2017-02-18": ["In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. ","1 Peter 1:6","02_18"],
"2017-02-19": ["I will please him with a long life. And I will show him My saving power. ","Psalms 91:16","02_19"],
"2017-02-20": ["Set your hearts on things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things. ","Colossians 3:1-2","02_20"],
"2017-02-21": ["Those who receive God’s abundant provision of grace and of the gift of righteousness reign in life through the one man, Jesus Christ! ","Romans 5:17","02_21"],
"2017-02-22": ["Sorrowful, yet always rejoicing; poor, yet making many rich; having nothing, and yet possessing everything. ","2 Corinthians 6:10","02_22"],
"2017-02-23": ["All this is for your benefit, so that the grace that is reaching more and more people may cause thanksgiving to overflow to the glory of God. ","2 Corinthians 4:15","02_23"],
"2017-02-24": ["When he calls out to Me, I will answer him; I will be with him in trouble. I will rescue him and give him honor. ","Psalms 91:15","02_24"],
"2017-02-25": ["We rejoice in our sufferings, knowing that suffering produces endurance, endurance produces character, and character produces hope. ","Romans 5:3-4","02_25"],
"2017-02-26": ["Though the fields produce no food, there are no sheep in the pen & no cattle in the stalls, yet I will rejoice in the Lord, I will be joyful in God my Savior.","Habakkuk 3:17-18","02_26"],
"2017-02-27": ["Whom have I in heaven but you? And earth has nothing I desire besides you.","Psalms 73:25","02_27"],
"2017-02-28": ["Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day.","2 Corinthians 4:16","02_28"],
"2017-03-01": ["You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book. ","Psalms 56:8","03_1"],
"2017-03-02": ["This is the victory that has overcome the world, even our faith. ","1 John 5:4","03_2"],
"2017-03-03": ["Give all your worries and cares to God, for he cares about you. ","1 Peter 5:7","03_3"],
"2017-03-04": ["Prayer is the greatest power in the entire universe.' ","C.S. Lewis","03_4"],
"2017-03-05": ["Ah, Sovereign Lord, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.  ","Jeremiah 32:17","03_5"],
"2017-03-06": ["Thanks be to God who always leads us in triumph in Christ, and through us diffuses the fragrance of His knowledge in every place. ","2 Corinthians 2:14","03_6"],
"2017-03-07": ["“Where is your faith?” he asked his disciples. ","Luke 8:25","03_7"],
"2017-03-08": ["Those who sow with tears will reap with songs of joy. ","Psalms 126:5","03_8"],
"2017-03-09": ["The only thing that counts is faith expressing itself through love. ","Galatians 5:6","03_9"],
"2017-03-10": ["Cast your burden on the Lord, and He will sustain you; He will never allow the righteous to be shaken. ","Psalms 55:22","03_10"],
"2017-03-11": ["I can do all things through Christ who strengthens me. ","Philippians 4:13","03_11"],
"2017-03-12": ["I am the Lord, the God of all the peoples of the world. Is anything too hard for me? ","Jeremiah 32:27","03_12"],
"2017-03-13": ["This is the victory that has overcome the world, even our faith. ","1 John 5:4","03_13"],
"2017-03-14": ["“You of little faith, why are you so afraid?” Then he got up and rebuked the winds and the waves, and it was completely calm. ","Matthew 8:26","03_14"],
"2017-03-15": ["Those who go out weeping, carrying seed to sow, will return with songs of joy, carrying sheaves with them. ","Psalms 126:6","03_15"],
"2017-03-16": ["Without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him. ","Hebrews 11:6","03_16"],
"2017-03-17": ["Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done.  ","Philippians 4:6","03_17"],
"2017-03-18": ["God is working in you, giving you the desire and the power to do what pleases him. ","Philippians 2:13","03_18"],
"2017-03-19": ["The Son is the radiance of God’s glory and the exact representation of his being, sustaining all things by his powerful word. ","Hebrew 1:3","03_19"],
"2017-03-20": ["No, despite all these things, overwhelming victory is ours through Christ, who loved us. ","Romans 8:37","03_20"],
"2017-03-21": ["Jesus said, “Did I not tell you that if you believe, you will see the glory of God?” ","John 11:40","03_21"],
"2017-03-22": ["In all their suffering he also suffered, and he personally rescued them. In his love and mercy he redeemed them.  ","Isaiah 63:9","03_22"],
"2017-03-23": ["He knows the way that I take; when He has tested me, I will come forth as gold. ","Job 23:10","03_23"],
"2017-03-24": ["The eyes of the Lord are on the righteous, and his ears are attentive to their cry. ","Psalms 34:15","03_24"],
"2017-03-25": ["A person can receive only what is given them from heaven.  ","John 3:27","03_25"],
"2017-03-26": ["For God, who said, “Let there be light in the darkness,” has made this light shine in our hearts so we could know the glory of God that is seen in the face of Jesus Christ. ","2 Corinthians 4:6","03_26"],
"2017-03-27": ["The one who is in you is greater than the one who is in the world. ","1 John 4:4","03_27"],
"2017-03-28": ["By faith we understand that the universe was formed at God’s command, so that what is seen was not made out of what was visible. ","Hebrews 11:3","03_28"],
"2017-03-29": ["Jesus wept. ","John 11:35","03_29"],
"2017-03-30": ["Remember how the Lord your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart. ","Deuteronomy 8:2","03_30"],
"2017-03-31": ["I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth. ","Psalms 121:1-2","03_31"],
"2017-04-01": ["My old self has been crucified with Christ. It is no longer I who live, but Christ lives in me. So I live in this earthly body by trusting in the Son of God, who loved me and gave himself for me. ","Galatians 2:20","04_1"],
"2017-04-02": ["He is before all things, and in him all things hold together. ","Colossians 1:17","04_2"],
"2017-04-03": ["As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts. ","Isaiah55:9","04_3"],
"2017-04-04": ["Jesus said, If you hold to my teaching, you are really my disciples. 32 Then you will know the truth, and the truth will set you free. ","John 8:31-32","04_4"],
"2017-04-05": ["Let us think of ways to motivate one another to acts of love and good works. ","Hebrew 10:24 ","04_5"],
"2017-04-06": ["You have tested my heart; You have examined me at night. You have tried me and found nothing evil; I have determined that my mouth will not sin. ","Psalms 17:3","04_6"],
"2017-04-07": ["For you have been given not only the privilege of trusting in Christ but also the privilege of suffering for him. ","Philippians 1:29","04_7"],
"2017-04-08": ["I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord, for whose sake I have lost all things. I consider them garbage, that I may gain Christ . ","Philippians 3:8","04_8"],
"2017-04-09": ["You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being. ","Revelation 4:11","04_9"],
"2017-04-10": ["God is working in you, giving you the desire and the power to do what pleases him. ","Philippians 2:13","04_10"],
"2017-04-11": ["Do not throw away this confident trust in the Lord. Remember the great reward it brings you! ","Hebrew 10:35","04_11"],
"2017-04-12": ["How good and pleasant it is when God’s people live together in unity! ","Psalms 133:1","04_12"],
"2017-04-13": ["For you, God, tested us; you refined us like silver. ","Psalms 66:10","04_13"],
"2017-04-14": ["I rejoice in my sufferings for you, and I am completing in my flesh what is lacking in Christ’s afflictions for His body, that is, the church. ","Colossians 1:24","04_14"],
"2017-04-15": ["My goal is to know Him and the power of His resurrection and the fellowship of His sufferings, being conformed to His death. ","Philippians 3:10","04_15"],
"2017-04-16": ["Give thanks in all circumstances; for this is God’s will for you in Christ Jesus. ","1 Thessalonians 5:18","04_16"],
"2017-04-17": ["Care more for a grain of faith than a ton of excitement.' ","Charles Spurgeon","04_17"],
"2017-04-18": ["Patient endurance is what you need now, so that you will continue to do God’s will. Then you will receive all that he has promised. ","Hebrew 10:36","04_18"],
"2017-04-19": ["I have given them the glory you gave me, so they may be one as we are one.  ","John 17:22","04_19"],
"2017-04-20": ["The crucible for silver and the furnace for gold, but the Lord tests the heart. ","Proverbs 17:3","04_20"],
"2017-04-21": ["We glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.  ","Romans 5:3-4","04_21"],
"2017-04-22": ["One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the all the days of my life, to gaze on the beauty of the Lord and to seek him in his temple. ","Psalms 27:4","04_22"],
"2017-04-23": ["Give thanks for everything to God the Father in the name of our Lord Jesus Christ. ","Ephesians 5:20","04_23"],
"2017-04-24": ["It is not that we think we are qualified to do anything on our own. Our qualification comes from God. ","2 Corinthians 3:5","04_24"],
"2017-04-25": ["Let us hold tightly without wavering to the hope we affirm, for God can be trusted to keep his promise. ","Hebrew 10:23","04_25"],
"2017-04-26": ["Make every effort to keep the unity of the Spirit through the bond of peace.  ","Ephesians 4:3","04_26"],
"2017-04-27": ["These (trials) have come so that the proven genuineness of your faith—of greater worth than gold, which perishes even though refined by fire—may result in praise, glory and honor when Jesus Christ is revealed. ","1 Peter 1:7","04_27"],
"2017-04-28": ["Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. ","James 1:2-3","04_28"],
"2017-04-29": ["Better is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked. ","Psalms 84:10","04_29"],
"2017-04-30": ["I will praise the Lord at all times; His praise will always be on my lips. ","Psalms 34:1 ","04_30"],
"2017-05-01": ["You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you! ","Isaiah 26:3","05_1"],
"2017-05-02": ["Store up for yourselves treasures in heaven, where neither moth nor rust destroys, and where thieves do not break in or steal. ","Matthew 6:20","05_2"],
"2017-05-03": ["We must all appear before the judgment seat of Christ, so that each one may be recompensed for his deeds in the body, according to what he has done, whether good or bad. ","2 Corinthians 5:10","05_3"],
"2017-05-04": ["The very hairs of your head are all numbered. Don’t be afraid; you are worth more than many sparrows. ","Luke 12:7","05_4"],
"2017-05-05": ["How great is the goodness you have stored up for those who fear you. You lavish it on those who come to you for protection, blessing them before the watching world. ","Psalms 31:19","05_5"],
"2017-05-06": ["Be faithful until death, and I will give you the crown of life. ","Revelation 2:10","05_6"],
"2017-05-07": ["Whoever offers the sacrifice of thanksgiving glorifies me, and prepares his way so that I will show God's salvation to him.  ","Psalms 50:23","05_7"],
"2017-05-08": ["For he himself is our peace. ","Ephesians 2:14","05_8"],
"2017-05-09": ["Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions. ","Luke 12:15","05_9"],
"2017-05-10": ["Look! I am coming quickly, and My reward is with Me to repay each person according to what he has done. ","Revelation 22:12","05_10"],
"2017-05-11": ["Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done.  ","Philippians 4:6","05_11"],
"2017-05-12": ["Faith and love that spring from the hope stored up for you in heaven. ","Colossians 1:5","05_12"],
"2017-05-13": ["The one who plants and the one who waters have one purpose, and they will each be rewarded according to their own labor.  ","1 Corinthians 3:8","05_13"],
"2017-05-14": ["I will hold my head high above my enemies who surround me. At his sanctuary I will offer sacrifices with shouts of joy, singing and praising the Lord with music. ","Psalms 27:6","05_14"],
"2017-05-15": ["Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world. ","John 16:33","05_15"],
"2017-05-16": ["Wherever your treasure is, there the desires of your heart will also be. ","Luke 12:34","05_16"],
"2017-05-17": ["God will repay each person according to what they have done. ","Romans 2:6","05_17"],
"2017-05-18": ["Give all your worries and cares to God, for he cares about you. ","1 Peter 5:7","05_18"],
"2017-05-19": ["God blesses those who patiently endure testing and temptation. Afterward they will receive the crown of life that God has promised to those who love him. ","James 1:12 ","05_19"],
"2017-05-20": ["Everyone who has given up house or wife or brothers or parents or children, for the sake of the Kingdom of God, will be repaid many times over in this life, and will have eternal life in the world to come. ","Luke 18:29-30","05_20"],
"2017-05-21": ["I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.  ","Romans 12:1","05_21"],
"2017-05-22": ["Since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand. ","Romans 5:1-2","05_22"],
"2017-05-23": ["Seek first his kingdom and his righteousness, and all these things will be given to you as well.  ","Matthew 6:33","05_23"],
"2017-05-24": ["I have fought the good fight, I have finished the race, I have kept the faith. 8 Now there is in store for me the crown of righteousness. ","2 Timothy 4:7-8","05_24"],
"2017-05-25": ["Give your burdens to the Lord, and he will take care of you. He will not permit the godly to slip and fall. ","Psalms 55:22","05_25"],
"2017-05-26": ["And when the Great Shepherd appears, you will receive a crown of never-ending glory and honor. ","1 Peter 5:4 ","05_26"],
"2017-05-27": ["Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you. ","Matthew 5:12","05_27"],
"2017-05-28": ["You are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. ","1 Peter 2:9","05_28"],
"2017-05-29": ["Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful. ","Colossians 3:15","05_29"],
"2017-05-30": ["Whom have I in heaven but you? And earth has nothing I desire besides you. ","Psalms 73:25","05_30"],
"2017-05-31": ["For the Son of Man will come in the glory of His Father with His angels, and then He will reward each according to his works.  ","Matthew 16:27","05_31"],
"2017-06-01": ["He heals the brokenhearted and binds up their wounds. ","Psalms 147:3","06_1"],
"2017-06-02": ["You know how to interpret the weather signs in the sky, but you don’t know how to interpret the signs of the times! ","Matthew 16:3 ","06_2"],
"2017-06-03": ["Since Christ suffered in his body, arm yourselves also with the same attitude, because whoever suffers in the body is done with sin. ","1 Peter 4:1","06_3"],
"2017-06-04": ["The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid? ","Psalms 27:1","06_4"],
"2017-06-05": ["Great peace have those who love your law, and nothing can make them stumble. ","Psalms 119:165","06_5"],
"2017-06-06": ["I used to wander off until you disciplined me; but now I closely follow your word. ","Psalms 119:67 ","06_6"],
"2017-06-07": ["Teach us to realize the brevity of life, so that we may grow in wisdom. ","Psalms 90:12 ","06_7"],
"2017-06-08": ["The sacrifice pleasing to God is a broken spirit. God, You will not despise a broken and humbled heart. ","Psalms 51:17 ","06_8"],
"2017-06-09": ["The Lord does not delay His promise, as some understand delay, but is patient with you, not wanting any to perish but all to come to repentance. ","2 Peter 3:9 ","06_9"],
"2017-06-10": ["I will show him how much he must suffer for the sake of my name. ","Acts 9:16 ","06_10"],
"2017-06-11": ["God is our refuge and strength, a very present help in trouble. ","Psalms 46:1 ","06_11"],
"2017-06-12": ["Your words are what sustain me; they are food to my hungry soul. They bring joy to my sorrowing heart and delight me.  ","Jeremiah 15:16","06_12"],
"2017-06-13": ["My suffering was good for me, for it taught me to pay attention to your decrees. ","Psalms 119:71","06_13"],
"2017-06-14": ["God has made everything beautiful for its own time. He has planted eternity in the human heart. ","Ecclesiastes 3:11 ","06_14"],
"2017-06-15": ["I live in the high and holy place with those whose spirits are contrite and humble. I restore the crushed spirit of the humble and revive the courage of those with repentant hearts. ","Isaiah 57:15 ","06_15"],
"2017-06-16": ["When everything is ready, I will come and get you, so that you will always be with me where I am.  ","John 14:3 ","06_16"],
"2017-06-17": ["I am glad when I suffer for you in my body, for I am participating in the sufferings of Christ that continue for his body, the church. ","Colossians 1:24","06_17"],
"2017-06-18": ["My victory and honor come from God alone. He is my refuge, a rock where no enemy can reach me. O my people, trust in him at all times. ","Psalms 62:7-8","06_18"],
"2017-06-19": ["How sweet are your words to my taste, sweeter than honey to my mouth! ","Psalms 119:103","06_19"],
"2017-06-20": ["As you endure this divine discipline, remember that God is treating you as his own children. Who ever heard of a child who is never disciplined by its father? ","Hebrew 12:7","06_20"],
"2017-06-21": ["Life on Earth is the first page of a never ending story. ","C.S. Lewis","06_21"],
"2017-06-22": ["He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners. ","Isaiah 61:1","06_22"],
"2017-06-23": ["This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven. ","Acts 1:11","06_23"],
"2017-06-24": ["The apostles left the high council rejoicing that God had counted them worthy to suffer disgrace for the name of Jesus. ","Acts 5:41","06_24"],
"2017-06-25": ["I will say of the Lord, “He is my refuge and my fortress, my God, in whom I trust.” ","Psalms 91:2","06_25"],
"2017-06-26": ["Instead, his delight is in the Lord’s instruction, and he meditates on it day and night. ","Psalms 1:2 ","06_26"],
"2017-06-27": ["But he knows the way that I take; when he has tested me, I will come forth as gold. ","Job 23:10","06_27"],
"2017-06-28": ["Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul.  ","1 Peter 2:11 ","06_28"],
"2017-06-29": ["I will heal my people and will let them enjoy abundant peace and security.  ","Jeremiah 33:6","06_29"],
"2017-06-30": ["He will wipe every tear from their eyes, and there will be no more death or sorrow or crying or pain. All these things are gone forever. ","Revelation 21:4","06_30"],
"2017-07-01": ["The apostles left the high council rejoicing that God had counted them worthy to suffer disgrace for the name of Jesus. ","Acts 5:41 ","07_1"],
"2017-07-02": ["May the Lord bless and protect you; may the Lord’s face radiate with joy because of you; may he be gracious to you, show you his favor, and give you his peace. ","Numbers 6:24-26 ","07_2"],
"2017-07-03": ["Above all else, guard your heart, for everything you do flows from it. ","Proverbs 4:23","07_3"],
"2017-07-04": ["The name of the Lord is a strong fortress; the godly run to him and are safe. ","Proverbs 18:10","07_4"],
"2017-07-05": ["Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need. ","Hebrew 4:16","07_5"],
"2017-07-06": ["You meant evil against me; but God meant it for good, in order to bring it about as it is this day, to save many people alive.  ","Genesis 50:20","07_6"],
"2017-07-07": ["And there will be no night there—no need for lamps or sun—for the Lord God will shine on them. And they will reign forever and ever. ","Revelation 22:5 ","07_7"],
"2017-07-08": ["I want to know Christ and experience the mighty power that raised him from the dead. I want to suffer with him, sharing in his death. ","Philippians 3:10","07_8"],
"2017-07-09": ["May the favor[a] of the Lord our God rest on us; establish the work of our hands for us—yes, establish the work of our hands. ","Psalms 90:17","07_9"],
"2017-07-10": ["Search me, O God, and know my heart; test my thoughts. Point out anything you find in me that makes you sad, and lead me along the path of everlasting life. ","Psalms 139:23-24 ","07_10"],
"2017-07-11": ["The Lord is close to all who call on him, yes, to all who call on him in truth. ","Psalms 145:18 ","07_11"],
"2017-07-12": ["David found strength in the Lord his God. ","1 Samuel 30:6","07_12"],
"2017-07-13": ["I will repay you for the years the locusts have eaten. ","Joel 2:25","07_13"],
"2017-07-14": ["These troubles and sufferings of ours are, after all, quite small and won’t last very long. Yet this short time of distress will result in God’s richest blessing upon us forever and ever!  ","2 Corinthians 4:17","07_14"],
"2017-07-15": ["With the strength God gives you, be ready to suffer with me for the sake of the Good News.  ","2 Timothy 1:8 ","07_15"],
"2017-07-16": ["The Lord is my rock, my fortress, and my savior; my God is my rock, in whom I find protection. He is my shield, the power that saves me, and my place of safety. ","Psalms18:2 ","07_16"],
"2017-07-17": ["The crucible for silver and the furnace for gold, but the Lord tests the heart. ","Proverbs 17:3","07_17"],
"2017-07-18": ["Call to me and I will answer you. I’ll tell you marvelous and wondrous things that you could never figure out on your own. ","Jeremiah 33:3","07_18"],
"2017-07-19": ["When you draw close to God, God will draw close to you. ","James 4:8","07_19"],
"2017-07-20": ["Simon, Simon, Satan has asked to have you, to sift you like wheat,  but I have pleaded in prayer for you that your faith should not completely fail. ","Luke 22:31-32 ","07_20"],
"2017-07-21": ["Since we are his children, we will share his treasures—for all God gives to his Son Jesus is now ours too. But if we are to share his glory, we must also share his suffering. ","Romans 8:17 ","07_21"],
"2017-07-22": ["These sufferings of ours are for your benefit. And the more of you who are won to Christ, the more there are to thank him for his great kindness, and the more the Lord is glorified. ","2 Corinthians 4:15 ","07_22"],
"2017-07-23": ["I am overwhelmed with joy in the Lord my God! For he has dressed me with the clothing of salvation and draped me in a robe of righteousness. ","Isaiah 61:10","07_23"],
"2017-07-24": ["A good person produces good things from the treasury of a good heart …... What you say flows from what is in your heart. ","Luke 6:45 ","07_24"],
"2017-07-25": ["When he calls on me, I will answer; I will be with him in trouble and rescue him and honor him.  ","Psalms 91:15 ","07_25"],
"2017-07-26": ["But as for me, it is good to be near God. I have made the Sovereign Lord my refuge; I will tell of all your deeds. ","Psalms 73:28","07_26"],
"2017-07-27": ["Remember how the Lord your God led you through the wilderness for these forty years, humbling you and testing you to prove your character. ","Deuteronomy 8:2 ","07_27"],
"2017-07-28": ["No eye has seen, no ear has heard, and no mind has imagined what God has prepared for those who love him. ","1 Corinthians 2:9 ","07_28"],
"2017-07-29": ["Rejoice inasmuch as you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed.  ","1 Peter 4:13","07_29"],
"2017-07-30": ["See, God has come to save me. I will trust in him and not be afraid. The Lord God is my strength and my song; he has given me victory. ","Isaiah 12:2 ","07_30"],
"2017-07-31": ["Anyone who believes in me may come and drink! For the Scriptures declare, ‘Rivers of living water will flow from his heart.' ","John 7:38","07_31"],
"2017-08-01": ["Let the one who boasts boast about this: that they have the understanding to know me, that I am the Lord, who exercises kindness, justice and righteousness on earth. ","Jeremiah 9:24 ","08_1"],
"2017-08-02": ["You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth. ","Acts 1:8","08_2"],
"2017-08-03": ["It is a time to celebrate with a hearty meal and to send presents to those in need, for the joy of the Lord is your strength. ","Nehemiah 8:10","08_3"],
"2017-08-04": ["In the shelter of your presence you hide them from all human intrigues; you keep them safe in your dwelling from accusing tongues. ","Psalms 31:20","08_4"],
"2017-08-05": ["I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him until that day. ","2 Timothy 1:12","08_5"],
"2017-08-06": ["How precious is your constant love, O God! All humanity takes refuge in the shadow of your wings.  You feed them with blessings from your own table. ","Psalms 36:7-8","08_6"],
"2017-08-07": ["The tongue has the power of life and death, and those who love it will eat its fruit. ","Proverbs 18:21","08_7"],
"2017-08-08": ["The people who know their God shall be strong, and carry out great exploits. ","Daniel 11:32 ","08_8"],
"2017-08-09": ["Don’t drink too much wine, for many evils lie along that path; be filled instead with the Holy Spirit and controlled by him. ","Ephesians 5:18 ","08_9"],
"2017-08-10": ["Our hearts ache, but at the same time we have the joy of the Lord. We are poor, but we give rich spiritual gifts to others. We own nothing, and yet we enjoy everything. ","2 Corinthians 6:10 ","08_10"],
"2017-08-11": ["In the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent and set me high upon a rock. ","Psalms 27:5","08_11"],
"2017-08-12": ["Since we are his children, we will share his treasures—for all God gives to his Son Jesus is now ours too. But if we are to share his glory, we must also share his suffering. ","Romans 8:17","08_12"],
"2017-08-13": ["The Lord is merciful and compassionate, slow to get angry and filled with unfailing love. ","Psalms 145:8","08_13"],
"2017-08-14": ["Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen. ","Ephesians 4:29","08_14"],
"2017-08-15": ["Do not grieve the Holy Spirit of God, with whom you were sealed for the day of redemption. ","Ephesians 4:30","08_15"],
"2017-08-16": ["Now hope does not disappoint, because the love of God has been poured out in our hearts by the Holy Spirit who was given to us. ","Romans 5:5","08_16"],
"2017-08-17": ["Fix your eyes on Jesus, the pioneer & perfecter of faith, who for the joy set before him endured the cross, scorning its shame, & sat down at the right hand of the throne of God. ","Hebrew 12:2","08_17"],
"2017-08-18": ["If your Presence does not go with us, do not send us up from here. ","Exodus 33:15","08_18"],
"2017-08-19": ["Yet the Lord was pleased to crush Him severely. When You make Him a restitution offering, He will see His seed, .. and by His hand, the Lord’s pleasure will be accomplished. ","Isaiah 53:10","08_19"],
"2017-08-20": ["Rejoice always! ","1 Thessalonians 5:16","08_20"],
"2017-08-21": ["The tongue is a flame of fire. It is full of wickedness, and poisons every part of the body. ..and can turn our whole lives into a blazing flame of destruction and disaster. ","James 3:6","08_21"],
"2017-08-22": ["Do not quench the Spirit.  ","1 Thessalonians 5:19","08_22"],
"2017-08-23": ["Christ’s love compels us, because we are convinced that one died for all,.. that those who live should no longer live for themselves but for him who died for them & was raised again. ","2Corinthians 5:14-15","08_23"],
"2017-08-24": ["The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him. ","Psalms 28:7","08_24"],
"2017-08-25": ["I want to know Christ and experience the mighty power that raised him from the dead. I want to suffer with him, sharing in his death. ","Philippians 3:10","08_25"],
"2017-08-26": ["For Christ’s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong. ","2 Corinthians 12:10","08_26"],
"2017-08-27": ["See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! ","1 John 3:1","08_27"],
"2017-08-28": ["Let your conversation be gracious and attractive so that you will have the right response for everyone. ","Colossians 4:6","08_28"],
"2017-08-29": ["Must you forever resist the Holy Spirit? ","Acts 7:51","08_29"],
"2017-08-30": ["There is no fear in love. But perfect love drives out fear. ","1 John 4:18","08_30"],
"2017-08-31": ["A cheerful heart is good medicine, but a broken spirit saps a person’s strength. ","Proverbs 17:22 ","08_31"],
"2017-09-01": ["Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.   ","Matthew 28:19","09_1"],
"2017-09-02": ["My health may fail, and my spirit may grow weak, but God remains the strength of my heart; he is mine forever. ","Psalms 73:26","09_2"],
"2017-09-03": ["Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to Him be glory in the church & in Christ Jesus. ","Ephesians 3:20-21","09_3"],
"2017-09-04": ["A friend loves at all times, and a brother is born for a time of adversity. ","Proverbs 17:17","09_4"],
"2017-09-05": ["Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven. ","Luke 6:37","09_5"],
"2017-09-06": ["You have every spiritual gift you need as you eagerly wait for the return of our Lord Jesus Christ.  ","1 Corinthians 1:7 ","09_6"],
"2017-09-07": ["In repentance and rest is your salvation, in quietness and trust is your strength. ","Isaiah 30:15","09_7"],
"2017-09-08": ["Come, follow me, Jesus said, and I will send you out to fish for people. ","Matthew 4:19","09_8"],
"2017-09-09": ["So that no one would be unsettled by these trials. For you know quite well that we are destined for them.  ","1 Thessalonians 3:3","09_9"],
"2017-09-10": ["Ah, Sovereign Lord, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you. ","Jeremiah 32:17","09_10"],
"2017-09-11": ["Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves. ","Philippians 2:3","09_11"],
"2017-09-12": ["For if you forgive other people when they sin against you, your heavenly Father will also forgive you.  ","Matthew 6:14","09_12"],
"2017-09-13": ["While we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ. ","Titus 2:13","09_13"],
"2017-09-14": ["Be still, and know that I am God! ","Psalms 46:10 ","09_14"],
"2017-09-15": ["We are Christ’s ambassadors; God is making his appeal through us. We speak for Christ when we plead, “Come back to God! ","2 Corinthians 5:20","09_15"],
"2017-09-16": ["Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.  ","Romans 5:3-4","09_16"],
"2017-09-17": ["Great is the Lord and most worthy of praise; his greatness no one can fathom. ","Psalms 145:3","09_17"],
"2017-09-18": ["Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take. ","Proverbs 3:5-6","09_18"],
"2017-09-19": ["Forgive your brother or sister from your heart. ","Matthew 18:35","09_19"],
"2017-09-20": ["Think clearly and exercise self-control. Put all your hope in the gracious salvation that will come to you when Jesus Christ is revealed to the world. ","1 Peter 1:13 ","09_20"],
"2017-09-21": ["Those who live in the shelter of the Most High will find rest in the shadow of the Almighty. ","Psalms 91:1","09_21"],
"2017-09-22": ["I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me—the task of testifying to the good news of God’s grace. ","Acts 20:24","09_22"],
"2017-09-23": ["Those who suffer according to God’s will should commit themselves to their faithful Creator and continue to do good. ","1 Peter 4:19","09_23"],
"2017-09-24": ["For great is the Lord and most worthy of praise; he is to be feared above all gods. ","Psalms 96:4","09_24"],
"2017-09-25": ["It is better to take refuge in the Lord than to trust in people. ","Psalms 118:8","09_25"],
"2017-09-26": ["I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and learned, and revealed them to little children. ","Matthew 11:25","09_26"],
"2017-09-27": ["Our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ. ","Philippians 3:20","09_27"],
"2017-09-28": ["Those who wait on the Lord shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint. ","Isaiah 40:31","09_28"],
"2017-09-29": ["The Lord is not slow in keeping his promise ... Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance. ","2 Peter 3:9","09_29"],
"2017-09-30": ["You have been given not only the privilege of trusting in Christ but also the privilege of suffering for him.  ","Philippians 1:29 ","09_30"],
"2017-10-01": ["How great is our Lord! His power is absolute! His understanding is beyond comprehension! ","Psalms 147:5","10_1"],
"2017-10-02": ["Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses.  ","1 Timothy 6:12","10_2"],
"2017-10-03": ["Forgive us our sins, as we forgive those who sin against us. ","Luke 11:4 ","10_3"],
"2017-10-04": ["The Lord made the heavens. Splendor and majesty are before him;  strength and joy are in his dwelling place. ","1 Chronicles 16:26-27","10_4"],
"2017-10-05": ["Teach us to realize the brevity of life, so that we may grow in wisdom. ","Psalms 90:12 ","10_5"],
"2017-10-06": ["We live by faith, not by sight.  ","2 Corinthians 5:7","10_6"],
"2017-10-07": ["Anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun! ","2 Corinthians 5:17 ","10_7"],
"2017-10-08": ["I am the Lord, the God of all the peoples of the world. Is anything too hard for me?  ","Jeremiah 32:27 ","10_8"],
"2017-10-09": ["I have fought the good fight, I have finished the race, and I have remained faithful.  ","2 Timothy 4:7 ","10_9"],
"2017-10-10": ["So watch yourselves! If another believer sins, rebuke that person; then if there is repentance, forgive.  ","Luke 17:3 ","10_10"],
"2017-10-11": ["Give to the Lord the glory due His name; Bring an offering, and come before Him. Oh, worship the Lord in the beauty of holiness! ","1 Chronicles 16:29 ","10_11"],
"2017-10-12": ["Whom have I in heaven but you? And earth has nothing I desire besides you. ","Psalms 73:25","10_12"],
"2017-10-13": ["Without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him. ","Hebrew 11:6","10_13"],
"2017-10-14": ["You are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. ","1 Peter 2:9","10_14"],
"2017-10-15": ["Oh, how great are God’s riches and wisdom and knowledge! How impossible it is for us to understand his decisions and his ways! ","Romans 11:33 ","10_15"],
"2017-10-16": ["And now the prize awaits me—the crown of righteousness, which the Lord, the righteous Judge, will give me on the day of his return. ","2 Timothy 4:8","10_16"],
"2017-10-17": ["Even if that person wrongs you seven times a day and each time turns again and asks forgiveness, you must forgive. ","Luke 17:4 ","10_17"],
"2017-10-18": ["You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand. ","Psalms 16:11","10_18"],
"2017-10-19": ["How do you know what your life will be like tomorrow? Your life is like the morning fog—it’s here a little while, then it’s gone.  ","James 4:14","10_19"],
"2017-10-20": ["Jesus said, “Did I not tell you that if you believe, you will see the glory of God?” ","John 11:40","10_20"],
"2017-10-21": ["He gave his life to free us from every kind of sin, to cleanse us, and to make us his very own people, totally committed to doing good deeds. ","Titus 2:14 ","10_21"],
"2017-10-22": ["The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. ","Isaiah 40:28","10_22"],
"2017-10-23": ["Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him. ","James 1:12","10_23"],
"2017-10-24": ["Make allowance for each other’s faults, and forgive anyone who offends you. Remember, the Lord forgave you, so you must forgive others.  ","Colossians 3:13 ","10_24"],
"2017-10-25": ["As for me, my contentment is not in wealth but in seeing you and knowing all is well between us. And when I awake in heaven, I will be fully satisfied, for I will see you face-to-face. ","Psalms 17:15","10_25"],
"2017-10-26": ["Dear friends, I warn you as “temporary residents and foreigners” to keep away from worldly desires that wage war against your very souls.  ","1 Peter 2:11","10_26"],
"2017-10-27": ["Jesus told them, “This is the only work God wants from you: Believe in the one he has sent.” ","John 6:29 ","10_27"],
"2017-10-28": ["Don’t you realize that your body is the temple of the Holy Spirit, who lives in you and was given to you by God? You do not belong to yourself. ","1 Corinthians 6:19","10_28"],
"2017-10-29": ["Glory in his holy name; let the hearts of those who seek the Lord rejoice. Look to the Lord and his strength; seek his face always. ","1 Chronicles 16:10-11","10_29"],
"2017-10-30": ["“‘Well done!’ the king exclaimed. ‘You are a good servant. You have been faithful with the little I entrusted to you, so you will be governor of ten cities as your reward.’ ","Luke 19:17 ","10_30"],
"2017-10-31": ["Jesus said, “Father, forgive them, for they do not know what they are doing.” ","Luke 23:34","10_31"],
"2017-11-01": ["Since you have been raised to new life with Christ, set your sights on the realities of heaven, where Christ sits in the place of honor at God’s right hand.  ","Colossians 3:1","11_1"],
"2017-11-02": ["The righteous perish, and no one takes it to heart; the devout are taken away, and no one understands that the righteous are taken away to be spared from evil. ","Isaiah 57:1","11_2"],
"2017-11-03": ["Jesus said, \"Anyone who is not offended because of Me is blessed.\" ","Luke 7:23","11_3"],
"2017-11-04": ["I can do all things through Christ who strengthens me. ","Philippians 4:13 ","11_4"],
"2017-11-05": ["Remember the wonders he has done, his miracles, and the judgments he pronounced. ","1 Chronicles 16:12","11_5"],
"2017-11-06": ["Godliness with contentment is great gain. ","1 Timothy 6:6","11_6"],
"2017-11-07": ["Joy is not the absence of suffering but the presence of God.' ","Amy Carmichael ","11_7"],
"2017-11-08": ["Think about the things of heaven, not the things of earth. ","Colossians 3:2 ","11_8"],
"2017-11-09": ["For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands.  ","2 Corinthians 5:1","11_9"],
"2017-11-10": ["Great peace have they which love thy law: and nothing shall offend them. ","Psalms 119:165 ","11_10"],
"2017-11-11": ["He who is in you is greater than he who is in the world.  ","1 John 1:4 ","11_11"],
"2017-11-12": ["Sing to the Lord, all the earth; proclaim his salvation day after day. ","1 Chronicles 16:23","11_12"],
"2017-11-13": ["Better a little with the fear of the Lord than great wealth with turmoil. ","Proverbs 15:16","11_13"],
"2017-11-14": ["In acceptance lieth peace.' ","Amy Carmichael","11_14"],
"2017-11-15": ["When everything is ready, I will come and get you, so that you will always be with me where I am.  ","John 14:3","11_15"],
"2017-11-16": ["He will wipe every tear from their eyes, and there will be no more death or sorrow or crying or pain. All these things are gone forever. ","Revelation 21:4 ","11_16"],
"2017-11-17": ["Blessed is he who is not offended because of Me. ","Matthew 11:6 ","11_17"],
"2017-11-18": ["My God will supply all your needs according to His riches in glory in Christ Jesus.  ","Philippians 4:19","11_18"],
"2017-11-19": ["Declare His glory among the nations, His wonderful works among all peoples. ","1 Chronicles 16:24 ","11_19"],
"2017-11-20": ["Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need. ","Matthew 6:33 ","11_20"],
"2017-11-21": ["Whoever sacrifices a thank offering honors Me, and whoever orders his conduct, I will show him the salvation of God. ","Psalms 50:23 ","11_21"],
"2017-11-22": ["My home is in Heaven. I'm just traveling through this world.' ","Billy Graham","11_22"],
"2017-11-23": ["We are confident, yes, well pleased rather to be absent from the body and to be present with the Lord. ","2 Corinthians 5:8","11_23"],
"2017-11-24": ["God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work. ","2 Corinthians 9:8 ","11_24"],
"2017-11-25": ["God is our refuge and strength, an ever-present help in trouble. ","Psalms 46:1","11_25"],
"2017-11-26": ["Great is the Lord and most worthy of praise; he is to be feared above all gods. ","1 Chronicles 16:25","11_26"],
"2017-11-27": ["We know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.  ","Romans 8:28","11_27"],
"2017-11-28": ["I have learned to be content whatever the circumstances. ","Philippians 4:11","11_28"],
"2017-11-29": ["Father, I want these whom you have given me to be with me where I am. ","John 17:24 ","11_29"],
"2017-11-30": ["For to me, to live is Christ and to die is gain. ","Philippians 1:21","11_30"],
"2017-12-01": ["Give to the Lord the glory he deserves! Bring your offering and come into his presence. Worship the Lord in all his holy splendor. ","1 Chronicles 16:29","12_1"],
"2017-12-02": ["The Lord God is our sun and our shield. He gives us grace and glory. The Lord will withhold no good thing from those who do what is right. ","Psalms 84:11 ","12_2"],
"2017-12-03": ["Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord. ","Luke 2:10-11","12_3"],
"2017-12-04": ["Give thanks to the Lord, for he is good; his love endures forever. ","1 Chronicles 16:34","12_4"],
"2017-12-05": ["All glory to God, who is able, through his mighty power at work within us, to accomplish infinitely more than we might ask or think.  ","Ephesians 3:20","12_5"],
"2017-12-06": ["Nothing is impossible with God. ","Luke 1:37 ","12_6"],
"2017-12-07": ["In heaven we shall see that we had not one trial too many,' ","Charles Spurgeon","12_7"],
"2017-12-08": ["Let the heavens rejoice, let the earth be glad; let them say among the nations, “The Lord reigns!” ","1 Chronicles 16:31","12_8"],
"2017-12-09": ["Surely your goodness and unfailing love will pursue me all the days of my life, and I will live in the house of the Lord forever. ","Psalms 23:6 ","12_9"],
"2017-12-10": ["To us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace. ","Isaiah 9:6","12_10"],
"2017-12-11": ["I pray that from his glorious, unlimited resources he will empower you with inner strength through his Spirit. ","Ephesians 3:16","12_11"],
"2017-12-12": ["God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work. ","2 Corinthians 9:8 ","12_12"],
"2017-12-13": ["Always be full of joy in the Lord. I say it again—rejoice! Let everyone see that you are considerate in all you do. Remember, the Lord is coming soon. ","Philippians 4:4-5","12_13"],
"2017-12-14": ["Love is a fruit in season at all times.' ","Mother Teresa","12_14"],
"2017-12-15": ["Let the sea and everything in it shout his praise! Let the fields and their crops burst out with joy! ","1 Chronicles 16:32 ","12_15"],
"2017-12-16": ["In My Father’s house are many mansions; if it were not so, I would have told you. I go to prepare a place for you. ","John 14:2 ","12_16"],
"2017-12-17": ["Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid. ","John 14:2","12_17"],
"2017-12-18": ["That Christ may dwell in your hearts through faith; that you. ","Ephesians 3:17 ","12_18"],
"2017-12-19": ["Therefore, if anyone is in Christ, the new creation has come:[a] The old has gone, the new is here!  ","2 Corinthians 5:17","12_19"],
"2017-12-20": ["The closer one approaches to God the simpler one becomes.' ","Teresa of Avila","12_20"],
"2017-12-21": ["In light of heaven, the worst suffering on earth will be seen to be no more serious than one night in an inconvenient hotel.' ","Teresa of Avila","12_21"],
"2017-12-22": ["Let the trees of the forest sing, let them sing for joy before the Lord, for he comes to judge the earth. ","1 Chronicles 16:33","12_22"],
"2017-12-23": ["The LORD is my shepherd; I have all that I need.  ","Psalms 23:1","12_23"],
"2017-12-24": ["Be still in the presence of the Lord, and wait patiently for him to act. Don’t worry about evil people who prosper or fret about their wicked schemes. ","Psalms 37:7 ","12_24"],
"2017-12-25": ["I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.  ","Luke 2:10-11","12_25"],
"2017-12-26": ["The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth. ","John 1:14","12_26"],
"2017-12-27": ["To all who did receive him, to those who believed in his name, he gave the right to become children of God. ","John 1:12","12_27"],
"2017-12-28": ["From his abundance we have all received one gracious blessing after another. ","John 1:16 ","12_28"],
"2017-12-29": ["No eye has seen, no ear has heard, and no mind has imagined what God has prepared for those who love him. ","1 Corinthians 2:9-10 ","12_29"],
"2017-12-30": ["Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take. ","Proverbs 3:5-6 ","12_30"],
"2017-12-31": ["The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged. ","Deuteronomy 31:8","12_31"]
};


// display Daily Verse
document.getElementById('dayly-verse-text').innerHTML = dailyVerse[dateAth][0];
document.getElementById('dayly-verse-from').innerHTML = dailyVerse[dateAth][1];

myApp.onPageInit('index-1', function (page) {
});  


	
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

// add login event
btnLogin.addEventListener('click', function (e) {
	myApp.alert('btnLogin');
	// get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(function (f) {
	myApp.alert(f.message);
	console.log(f.message);
	});
});
		
// add signup event
btnSignUp.addEventListener('click', function (e) {
	myApp.alert('signup');
	// get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign up
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(function (f) {
	console.log(f.message);
	});
});

// add log out event
btnLogout.addEventListener('click', function (e) {
	firebase.auth().signOut();
	// myApp.loginScreen();
});

// action sheet from plus icon in navbar - One group, three buttons
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: 'Button1',
            bold: true
        },
        {
            text: 'Add Entry',
			            onClick: function () {
                // myApp.alert('Button1 clicked');
				mainView.router.loadPage("add-entry.html#tab2");
            }
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});




// reminder settings
myApp.onPageInit('settings-reminders',function(page){
	console.log("page settings-reminders is active");
	
	// picker morning  
	var pickerMorning = myApp.picker({
		input: '#picker-morning',
		rotateEffect: true,

		cols: [
			{
				textAlign: 'left',
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23').split(' ')
			},
						{
				divider: true,
				content: ' : '
			},
			{
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
			},
		]
	});   
	
		// picker evening  
	var pickerMorning = myApp.picker({
		input: '#picker-evening',
		rotateEffect: true,

		cols: [
			{
				textAlign: 'left',
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23').split(' ')
			},
						{
				divider: true,
				content: ' : '
			},
			{
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
			},
		]
	});  
	
		// picker verse  
	var pickerMorning = myApp.picker({
		input: '#picker-verse',
		rotateEffect: true,

		cols: [
			{
				textAlign: 'left',
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23').split(' ')
			},
						{
				divider: true,
				content: ' : '
			},
			{
				values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
			},
		]
	});  
	
});  
  
// journal
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];

var calendarInline = myApp.calendar({
    container: '#calendar-inline-container',
    value: [new Date()],
    weekHeader: true,
	
	    events: calendarEvents,
    toolbarTemplate: 
        '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
                '<div class="left">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                '</div>' +
                '<div class="center"></div>' +
                '<div class="right">' +
                    '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                '</div>' +
            '</div>' +
        '</div>',
    onOpen: function (p) {
        $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        $$('.calendar-custom-toolbar .left .link').on('click', function () {
            calendarInline.prevMonth();
        });
        $$('.calendar-custom-toolbar .right .link').on('click', function () {
            calendarInline.nextMonth();
        });
    },
    onMonthYearChangeStart: function (p) {
        $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    },
	
	onMonthYearChangeStart: function (p) {
        $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
    },
	
	onDayClick: function (p, dayContainer, year, month, day) {
		// console.log(p, dayContainer, year, month, day);
		month = month+1;
		var tmpDate = year+"-"+month+"-"+day;
		addEntryDateInput = new Date(tmpDate).toISOString().split('T')[0];
		view4.router.load({url:"add-entry.html"});
    }
});       

// $$('.form-to-data').on('click', function(){
// });



myApp.onPageInit('timeline',function(page){
	console.log("onPageInit" + page);
}); 



// форма добавления/редактирования записи
myApp.onPageInit('add-entry',function(page){
	// console.log("onPageInit: add-entry");
	
	console.log(addEntryDateInput);
	// document.getElementById('calendar-default').value = "asdfgdf";	
	document.getElementById('calendar-default').value = addEntryDateInput;	
	
	// заполним если существует запись
	if (localStorage.getItem(addEntryDateInput)) {
		// document.getElementById('morning1').value = localStorage.getItem(addEntryDateInput).morning1;	
		var entryText = JSON.parse(localStorage.getItem(addEntryDateInput));
		// console.log(entryText);
		document.getElementById('morning1').value = entryText.morning1;	
		document.getElementById('morning2').value = entryText.morning2;	
		document.getElementById('morning3').value = entryText.morning3;	
		document.getElementById('evening1').value = entryText.evening1;	
		document.getElementById('evening2').value = entryText.evening2;	
	}
	
	$$('.form-from-data').on('click', function(){
	  // myApp.alert('thanks for add entry');
	}); 
	
	var calendarDefault = myApp.calendar({
		input: '#calendar-default',
		closeOnSelect: true,
		firstDay: 7,
		onChange: function (values) {
																												// console.log(values.value[0]);
	   }
	});   

	$$('.get-data').on('click', function(){
		var formData = myApp.formToData('#add-entry-form');
		var getDate = formData.date; 
		console.log("getDate: " + getDate);

		// обновим 
		for (var a in localStorage) {
		   // console.log(a, ' = ', localStorage[a]);
			if (a == getDate) {
				console.log(localStorage.getItem(localStorage.key(a)));
				// console.log("found: " + a);
			}
		}
	}); 
	
	$$('.form-to-data').on('click', function(){
																	// document.getElementById("img_url").setAttribute("value", savedImage);
																	// myApp.alert('savedImage: ' + savedImage);
		
		var formData = myApp.formToData('#add-entry-form');
		console.log(formData.date);
		console.log(formData);
		localStorage.setItem(formData.date, JSON.stringify(formData));
		
		myApp.template7Data.entryList = [];
		// поиск дней с событиями
		var calendarEvents = [];
		for (var i = 0; i < localStorage.length; i++){
			var itemNow = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if (itemNow.date) {
				// console.log(itemNow);
				myApp.template7Data.entryList.push(itemNow);
				var eventDate = itemNow.date.split("-");
				// console.log('eventDate' + eventDate);
				var f = new Date(eventDate);
				// console.log('f' + f);
				calendarEvents.push(f);
			}
		}
		var timelineHTML = Template7.templates.timelineTemplate(myApp.template7Data.entryList);
		document.getElementById('timeline-list').innerHTML = timelineHTML;
		myApp.alert('Entry saved');
		// myApp.alert('calendarEvents' + calendarEvents);
		// myApp.alert('myApp.template7Data.entryList' + JSON.stringify(myApp.template7Data.entryList));
		// view2.router.back();
	});
}); 

// social sharing
 function shareImage() {
	window.plugins.socialsharing.share('Awakening to God Today', null, 'www/img/daily-verses-images/' + dailyVerse[dateAth][2]  + '.png', null);
    }

// Take picture with camera
function takePicture() {
	
									// var inputImage = document.getElementById('img_url');
									// inputImage.value = "testimageURI";
									// myApp.alert('test testimageURI');
	
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
	// var inputImage = document.getElementById('img');
    // inputImage.value = imageURI;
    // inputImage.value = "imageURItest";
	// document.getElementById("img_url").setAttribute("value", "testimageURI");
	

	
    myApp.alert('onSuccess imageURI: ' + imageURI);
    var image = document.getElementById('camera_image');
    image.src = imageURI;
	
	var inputImage = document.getElementById('img_url');
    myApp.alert('onSuccess inputImage: ' + inputImage);
	inputImage.value = imageURI;
    myApp.alert('onSuccess inputImage.value: ' + inputImage.value);
    myApp.alert('onSuccess imageURI: ' + imageURI);
	// var savedImage = imageURI;
	// myApp.alert('savedImage: ' + savedImage);
	
	// document.getElementById("img_url").setAttribute("value", imageURI);
	
};

function onFail(message) {
    myApp.alert('Failed: ' + message);
	}
};

// если сейчас в оффлайне
document.addEventListener("offline", onOffline, false);
function onOffline() {
    myApp.alert("Please check Internet connection");
};









// {"morning-reminder-time":"10 00","morning-reminder-checkbox":["on"],"evening-reminder-time":"02 02","evening-reminder-checkbox":["on"],"verse-reminder-time":"00 04","verse-reminder-checkbox":["on"]}



document.addEventListener('deviceready', function () {
// local notifications

cordova.plugins.notification.local.schedule([{
	id: 1,
    text: "What is saying to you today?",
    sound: "file://sounds/not.mp3",
    every: "day"
},{
	id: 2,
    text: "What do you want to thank God for today?",
    sound: "file://sounds/not.mp3",
    every: "day"
},{
	id: 4,
    text: "test id=4 every=5",
    sound: "www/sounds/not.mp3",
    every: 5
},{
	id: 3,
    text: "Tap to read today's verse",
    sound: "file://sounds/not.mp3",
    every: "day"
}]);


});





// данные для reminders
// {"morning-reminder-time":"10 00","morning-reminder-checkbox":["on"],"evening-reminder-time":"02 02","evening-reminder-checkbox":["on"],"verse-reminder-time":"00 04","verse-reminder-checkbox":["on"]}
var storedData = myApp.formGetData('reminders-form');
if(storedData) {
																											// myApp.alert(JSON.stringify(storedData));
																												console.log(JSON.stringify(storedData));
	
	
	
	// update
	// cordova.plugins.notification.local.update({
		// id: 1,
		// title: "Updated Notification"
	// });
	
	// cancel
	// cordova.plugins.notification.local.cancel(1, function () {
		// Notification was cancelled
	// }, scope);
}
else {
	myApp.alert('There is no stored data for this form yet. Try to change any field')
}
