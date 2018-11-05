export function getProfileData(){
	return profileData;
}

const profileData = {
	name:"Arienette Woolfe",
	job:"General practitioner",
	email:"awoolfe@ispital.com",
	phone:"+41 33 826 26 26",
	address:"Gwattstrasse 93A, 3645 Thun",
	photo:"dr_arienette",
	"linkedin":"https://www.linkedin.com/showcase/development-services-with-webix-javascript-ui-library",
	"instagram":"https://www.instagram.com/xbsoftware/",
	"youtube":"https://www.youtube.com/channel/UC0VoOaFEFb49Rfv2TKyR-Ow",
	"facebook":"https://www.facebook.com/webixui/",
	"twitter":"https://twitter.com/webixui?lang=en",
	"vkontakte":"https://vk.com/webixui",
	"notifications_mentions":0,
	"notifications_upcoming":1,
	"notifications_cancelled":1,
	"notifications_friends":0,
	"notifications_messages":0,
	about:"Dr. Arienette Woolfe is a general practitioner in Grindelwald. She received her medical degree from the University of Zurich and has been in practice for 11 years. She is one of 5 doctors at Spital Interlaken who specialize in General Practice. Dr. Woolfe is dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. She has a strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. She is willing to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Dr. Woolfe has a wide knowledge of a range of health issues that impact internal organs.",
	schedule:{
		day0:"Monday, Wednesday", time0:"11:00 AM - 15:00 PM",
		day1:"Tuesday, Thursday", time1:"14:00 PM - 18:00 PM",
		day2:"Friday", time2:"11:00 AM - 15:00 PM"
	},
	skills:[
		"patient consultations at home and within the surgery",
		"physical examinations",
		"diagnosis and treatment of illnesses/ailments",
		"minor surgery",
		"health education"
	],
	qualification:{
		step4:"General Practitioner", time4:{ start: new Date(2013,4,1), end:null },
		step3:"Attending Doctor", time3:{ start:new Date(2009,3,1), end:new Date(2013,2,31) },
		step2:"Resident Doctor", time2:{ start:new Date(2006,5,1), end:new Date(2009,2,31) },
		step1:"Internship at Princeton - Plainsboro Teaching Hospital, New Jersey, USA", time1:{ start:new Date(2005,8,1), end:new Date(2006,4,30) }, 
		step0:"University of Zurich, Doctor of Medicine", time0:{ start:new Date(1999,8,1), end:new Date(2005,5,25) }
	}
};
