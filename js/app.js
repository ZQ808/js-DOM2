/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var catsMeow = document.getElementById("rating1");
console.log(catsMeow);
catsMeow.innerHTML="Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Address: 525 Kapahulu Ave, Honolulu, HI 96815*/

var noRise = document.getElementById("price2");
console.log(noRise);
noRise.innerHTML="Price: $$$";

var someRise = document.getElementById("addy2");
console.log(someRise);
someRise.innerHTML="Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var noTime = document.getElementById("hours3");
console.log(noTime);
noTime.innerHTML="Hours: 6pm - 12am Sun - Sat";

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var noPrice = document.getElementById("price4");
console.log(noPrice);
noPrice.innerHTML="Price: $$$";

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var noAddy = document.getElementById("addy4");
console.log(noAddy);
noAddy.innerHTML="Address: 1620 N. School St, Honolulu, HI 96817";

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var noHours = document.getElementById("hours4");
console.log(noHours);
noHours.innerHTML="Hours: 9am - 10pm Sun - Sat";

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var noUpdate = document.getElementById("update4");
console.log(noUpdate);
noUpdate.innerHTML="I'd leave a blank space for this oxtail soup!";

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var noName5 = document.getElementById("name5");
console.log(noName5);
noName5.innerHTML="5. The Death Star Cafe";

var noRating5 = document.getElementById("rating5");
console.log(noRating5);
noRating5.innerHTML="Rating: 2 Stars";

var noPrice5 = document.getElementById("price5");
console.log(noPrice5);
noPrice5.innerHTML="Price: $$";

var noAddy5 = document.getElementById("addy5");
console.log(noAddy5);
noAddy5.innerHTML="Address: A galaxy far, far away.";

var noHours5 = document.getElementById("hours5");
console.log(noHours5);
noHours5.innerHTML="Hours: We never close.";