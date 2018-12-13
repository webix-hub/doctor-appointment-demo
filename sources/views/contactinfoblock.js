function isEmail(value){
	return !value || /\S+@[^@\s]+\.[^2\s]+$/.test(value);
}

export const ContactInfoBlock = {
	rows:[
		{ view:"label", template:"Contact Info", css:"about_label" },
		{
			cols:[
				{
					batch:"read", view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						let result = "";
						if (obj.email)
							result += `<div class="contact">Email address: ${obj.email}</div>`;
						if (obj.phone)
							result += `<div class="contact">Phone number: ${obj.phone}</div>`;
						if (obj.address)
							result += `<div class="contact">Address: ${obj.address}</div>`;
						return result;
					}
				},
				{
					batch:"edit", hidden:true, rows:[
						{ view:"text", label:"Email", name:"email", labelWidth:130, validate:isEmail },
						{ view:"text", label:"Phone", name:"phone", labelWidth:130, pattern:webix.patterns.phone },
						{ view:"text", label:"Address", name:"address", labelWidth:130 }
					]
				}
			]
		}
	]
};