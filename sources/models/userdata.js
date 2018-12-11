// dummy use data
let login = {
	user:"awoolfe",
	password:"sta7wi10hm8ar4en8tte"
};
try {
	const saved = webix.storage.session.get("demo_login_data");
	if (saved) login = saved;
}
catch(err){/* for blocked cookies */}

export function getLoginData(){
	return login;
}
