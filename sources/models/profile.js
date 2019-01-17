export function getProfileData(){
	let currentData = "";
	try{
		currentData = webix.storage.session.get("demo_profile_data");
	}
	catch(err){/* if cookies are blocked */}
	return currentData || profileData;
}

const profileData = {
	doctor:"Arienette Woolfe",
	job:"General practitioner",
	email:"awoolfe@gspital.com",
	phone:"+41338292629",
	address:"Gwattstrasse 25A, 2345 Thun",
	photo:"dr_arienette",
	linkedin:"https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
	instagram:"https://www.instagram.com/xbsoftware/",
	youtube:"https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
	facebook:"https://www.facebook.com/webixui/",
	twitter:"https://twitter.com/webixui?lang=en",
	vk:"https://vk.com/webixui",
	notifications_mentions:0,
	notifications_upcoming:1,
	notifications_cancelled:1,
	notifications_friends:0,
	notifications_messages:0,
	about:"Dr. Arienette Woolfe is a general practitioner in Grindelwald. She received her medical degree from the University of Zurich and has been in practice for 11 years. She is one of 5 doctors at Spital GrindelLacken who specialize in General Practice. Dr. Woolfe is dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. She has a strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. She is willing to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Dr. Woolfe has a wide knowledge of a range of health issues that impact internal organs.",
	hobbies:"When I'm not practicing medicine, I enjoy flying drones, crocheting, and sewing to maintain manual dexterity. I also enjoy writing short stories when I have the time, and I offer free medical services down at the community center every weekend. I've recently taken up meditation, which has improved my focus at work and my personal relationships.",
	schedule:[
		{day:"Monday,Wednesday", time:"11:00 AM - 15:00 PM"},
		{day:"Tuesday,Thursday", time:"14:00 PM - 18:00 PM"},
		{day:"Friday", time:"15:00 PM - 19:00 PM"}
	],
	skills:[
		"patient consultations at home and within the surgery",
		"physical examinations",
		"diagnosis and treatment of illnesses/ailments",
		"minor surgery",
		"health education"
	],
	qualification:[
		{ step:"University of Zurich, Doctor of Medicine", time:{ start:"1999-8-1", end:"2005-5-25" }},
		{ step:"Internship at Princeton - Plainsboro Teaching Hospital, New Jersey, USA", time:{ start:"2005-8-1", end:"2006-4-30" }}, 
		{ step:"Resident Doctor", time:{ start:"2006-5-1", end:"2009-2-31" }},
		{ step:"Attending Doctor", time:{ start:"2009-3-1", end:"2013-2-31" }}, 
		{ step:"General Practitioner", time:{ start: "2013-4-1", end:null }}
	]
};
