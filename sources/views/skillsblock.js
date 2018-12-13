export const SkillsBlock = {
	rows:[
		{ view:"label", template:"Skills", css:"about_label" },
		{
			cols:[
				{
					batch:"read", view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:obj => {
						let result = "";
						if (obj.skills)
							for (let i = 0; i < obj.skills.length; i++)
								result += `<div class="skill">
									<span class="webix_icon mdi mdi-circle-small"></span>
									${obj.skills[i]}
								</div>`;
						return result;
					}
				},
				{
					batch:"edit", hidden:true,
					// outer layout for multiline control
					rows:[
						{
							view:"multitext", separator:",",
							name:"skills"
						}
					]
				}
			]
		}
	]
};