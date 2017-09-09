console.log(
    "Congratulation!! You've just found me on this page."
);

console.log('');

console.log(
    "Let's talk about me a little bit.\n" + 
    "I started to code 7 years ago as a part-timer in a local software house. " +
    "I code mostly using PHP. I utilize frameworks like Laravel and CodeIgniter " + 
    "also CMSes like WordPress and Drupal.\n" +
    "I'm currently looking for a new opportunity to advance my career and skill. " +
    "Although PHP is my first choice language, I will accept any challenge to code in other language. " +
    "Maybe in golang, nodejs, or even python?"
);

console.log('');

console.log('What about my experiences?');
console.log(
    "MamiKos (https://mamikos.com)\n" + 
    "January 2017 - present\n" +
    "As backend developer, most of the time I will develop features, build API for apps, as well as maintain, refactor, " +
    "and optimize existing codebase. Also, I allocate 10% of my time to contribute to our frontend codebase " +
    "(adding small features, bugfixing simple layout, etc).\n" +
    "Working in a startup is like working on your very own product, because you will give everything you have " +
    "to make it working."
);
console.log(
    "Closely Coded (http://closelycoded.com)\n" +
    "November 2015 - December 2016\n" +
    "Here, I contributed on various projects, most of them are Drupal based e-commerce websites. " +
    "But, I also created some company profile websites using both Drupal and WordPress. " +
    "It's fun to have various projects with various requirements."
);
console.log(
    "Formulatrix Indonesia (http://formulatrix.com)\n" +
    "July 2014 - October 2016\n" +
    "In this lab automation company, I worked as Software Quality Assurance. " + 
    "I did mostly manual testing for their internal web based software. " +
    "The experience and skill that I learnt during this time are very useful to make me " +
    "think more critical about a specific topic."
);
console.log(
    "Wacana Inti Informatika\n" +
    "2009 - 2010\n" + 
    "My professional career started here, where I worked as part timer " + 
    "then converted to full time Junior Web Developer. " +
    "My day to day tasks were creating various websites for various clients.\n" +
    "Sometimes I was so shy when I re-read the code I wrote during my employment here. " +
    "That's so messy. But that's part of someone's journey, right?" 
);

console.log('');

console.log("What I've done");
console.log(
    "Mamikos (https://mamikos.com)\n" + 
    "#laravel #mariadb #restAPI"
);
console.log(
    "Qualitatif (http://qualitatif.co)\n" + 
    "#drupal7 #drupalcommerce #html #css #jquery"
);
console.log(
    "Psynaptica (http://psynaptica.com)\n" + 
    "#wordpress #html #css #jquery"
);
console.log(
    "FDC Singapore (http://fdc.sg)\n" +
    "#drupa7 #html #css #jquery"
)
console.log(
    "Kelas Bahasa (http://kelasbahasa.com)\n" +
    "#laravel #html #css #jquery"
);

console.log('');

console.log('Contact me here : ')
console.log('email: destiya.dian@gmail.com');
console.log('facebook: https://facebook.com/destiya');
console.log('twitter: https://twitter.com/eantz');
console.log('linkedin: https://www.linkedin.com/in/destiya-wijayanto-48a66819/');
console.log('github: https://github.com/eantz');



var subhero = document.getElementsByClassName('sub-hero')[0];

subhero.addEventListener('click', function() {
    swal({
        title: 'Nope...',
        type: 'info',
        html: "While you are thinking about where<br>you can find me on this page,<br>" +
                "why not heading to my <a href=\"http://blog.destiyadian.com\" target=\"_blank\">blog</a>?"

    })
});

// code from : https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
// get the value of the key code from the key map
var key = allowedKeys[e.keyCode];
// get the value of the required key from the konami code
var requiredKey = konamiCode[konamiCodePosition];

// compare the key with the required key
if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
        swal({
            title: 'Hhhhmmmm...',
            type: 'info',
            html: 'I know that you will execute this code.<br>' + 
                    "Unfortunately you can't find me via this code.<br><br>" + 
                    "<em class=\"hint\">hint: go to my <a href=\"https://github.com/eantz/destiyadian.com\" target=\"_blank\">github<a></em>"
        });
        konamiCodePosition = 0;
    }
} else {
    konamiCodePosition = 0;
}
});