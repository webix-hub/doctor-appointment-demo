import {JetView} from "webix-jet";

export default class AboutView extends JetView {
	config(){
		const text = "Dr. Arienette Woolfe is a general practitioner in Grindelwald. She received her medical degree from the University of Zurich and has been in practice for 11 years. She is one of 5 doctors at Spital Interlaken who specialize in General Practice. Dr. Woolfe is dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. She has a strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. She is willing to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Dr. Woolfe has a wide knowledge of a range of health issues that impact internal organs.";
		const time = "<div class=\"schedule\"><div class=\"days\">Monday, Wednesday, Friday</div><div class=\"time\">11:00 AM - 15:00 PM</div></div><div class=\"schedule\"><div class=\"days\">Tuesday, Thursday</div><div class=\"time\">14:00 AM - 18:00 PM</div></div>";
		const skills = "<div class=\"skill\">- patient consultations at home and within the surgery</div><div class=\"skill\">- physical examinations</div><div class=\"skill\">- diagnosis and treatment of illnesses/ailments</div><div class=\"skill\">- minor surgery</div><div class=\"skill\">- health education</div>";
		const qualification = "<div class=\"qualification_step\">General Practitioner<span class=\"year\">May 2013 - Present</span></div><div class=\"qualification_step\">Attending Doctor<span class=\"year\">April 2009 - May 2013</span></div><div class=\"qualification_step\">Resident Doctor<span class=\"year\">June 2006 - April 2009</span></div><div class=\"qualification_step\">Internship at Princeton - Plainsboro Teaching Hospital, New Jersey, USA <span class=\"year\">2005-2006</span></div><div class=\"qualification_step\">University of Zurich, Doctor of Medicine <span class=\"year\">2005</span></div>";

		return {
			type:"form", minWidth:560,
			rows:[
				{ view:"label", template:"About" },
				{ template:text, borderless:true, css:"profile_templates", autoheight:true },
				{ view:"label", template:"Working time" },
				{ template:time, borderless:true, css:"profile_templates", height:36 },
				{ view:"label", template:"Skills" },
				{ template:skills, borderless:true, css:"profile_templates", autoheight:true },
				{ view:"label", template:"Qualification" },
				{ template:qualification, borderless:true, css:"profile_templates", autoheight:true }
			]
		};
	}
}