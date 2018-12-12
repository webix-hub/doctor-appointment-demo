// dummy user data
let login = {
	user:"awoolfe",
	password:"sta7"
};
export function getLoginData(){
	try {
		const saved = webix.storage.session.get("demo_login_data");
		if (saved) login = saved;
	}
	catch(err){/* for blocked cookies */}
	return login;
}
