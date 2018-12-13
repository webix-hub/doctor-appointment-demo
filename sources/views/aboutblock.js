export const AboutBlock = {
	rows:[
		{ view:"label", template:"About", css:"about_label" },
		{
			cols:[
				{
					batch:"read", view:"template", borderless:true,
					css:"profile_templates", autoheight:true,
					template:"#about#"
				},
				{
					batch:"edit", hidden:true,
					rows:[
						{ view:"textarea", name:"about", height:160 }
					]
				}
			]
		}
	]
};