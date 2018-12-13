export const ScheduleBlock = {
	rows:[
		{ view:"label", template:"Schedule", css:"about_label" },
		{
			cols:[
				{
					batch:"read", view:"template", borderless:true,
					css:"profile_templates", minHeight:52,
					template:obj => {
						let result = "";
						if (obj.schedule)
							for (let key in obj.schedule){
								if (key.indexOf("day") !== -1)
									result += `<div class="schedule"><div class="days">${obj.schedule[key]}</div>`;
								else if (key.indexOf("time") !== -1)
									result += `<div class="time">${obj.schedule[key]}</div></div>`;
							}
						return result;
					}
				},
				{
					batch:"edit", hidden:true,
					// outer layout for multiline control
					rows:[
						{
							view:"multitime", name:"schedule"
						}
					]
				}
			]
		}
	]
};