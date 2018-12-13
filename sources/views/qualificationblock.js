const dateFormat = webix.Date.dateToStr("%F %Y");

export const QualificationBlock = {
	rows:[
		{ view:"label", template:"Qualification", css:"about_label" },
		{
			cols:[
				{
					batch:"read", view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						if (obj.qualification){
							let result = "<div class=\"qualification\">";
							for (let key in obj.qualification){

								if (key.indexOf("step") !== -1)	
									result += `<div class="qualification_step">
										<span class="place">${obj.qualification[key]}</span>`;
								else if (key.indexOf("time") !== -1){
									const startDate = dateFormat(obj.qualification[key].start) || "unknown";
									const endDate = dateFormat(obj.qualification[key].end) || "Present";

									result += ` - <span>${startDate} - ${endDate}</span></div>`;
								}

							}
							return result + "</div>";
						}
					}
				},
				{
					batch:"edit", hidden:true,
					// outer layout for multiline control
					rows:[
						{
							view:"multidate", name:"qualification"
						}
					]
				}
			]
		}
	]
};