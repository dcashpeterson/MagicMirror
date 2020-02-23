/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.13", "192.168.1.3", "192.168.1.7"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",

			config: {
				displaySeconds: false,
				showDate: true,
				timezone: "America/New_York",
				displayType: "digital",

			}

		},
		{
			module: "responsivecal",
			header: "US Holidays Responsive",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		
			
	
		{
			module: "currentweather",
			position: "top_right",
			header: "Weather for Today",
			config: {
				location: "Boston, Massachusetts",
				locationID: "4943629",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ec9661e5df00c8abc319f91d8bf3cc6f",
				degreeLabel: "true",
				showHumidity: "true",
				showFeelslike: "true"

			}
		},
		
		
		{
			module: 'MMM-BackgroundSlideshow',
			position: 'fullscreen_below',
			config: {
			  imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
			  transitionImages: true,
			  randomizeImageOrder: true,
			  validImageFileExtention: "jpg,gif,png",
			}
		  },
		  
        
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
