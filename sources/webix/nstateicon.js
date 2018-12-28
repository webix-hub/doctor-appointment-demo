webix.protoUI({
	name:"nstateicon",
	$cssName:"icon",
	defaults:{
		tooltip:false
	},
	$init:function(config){
		var state = config.state || 0;
		config.state = state;
		if (config.icons) config.icon = config.icons[state];
		if (config.tip && config.states) config.tooltip = config.tip + " " + config.states[state];

		this.attachEvent("onItemClick", () => {
			var state = this.config.state;
			state++;
			if (config.icons && state >= config.icons.length ) state = 0;
			this.config.state = state;
			
			if (config.icons) this.config.icon = config.icons[state];
			
			if (config.tip && config.states) this.config.tooltip = config.tip + " " + config.states[state];
			
			this.refresh();

			this.callEvent("onStateChange", [state]);
		});
	}
}, webix.ui.icon);