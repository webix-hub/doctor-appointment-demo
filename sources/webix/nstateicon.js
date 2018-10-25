webix.protoUI({
	name:"nstateicon",
	defaults:{
		tooltip:false
	},
	$init:function(config){
		var state = config.state || 0;
		config.state = state;
		config.icon = config.icons[state];
		config.tooltip = config.tooltip ? config.tip + " " + config.states[state] : "",

		this.attachEvent("onItemClick", () => {
			var state = this.config.state;

			state++;
			if (state >= this.config.states.length ) state = 0;
			this.config.state = state;
			this.config.icon = config.icons[state];
			this.config.tooltip = this.config.tooltip ? (this.config.tip + " " + this.config.states[state]) : "",
			this.refresh();

			this.callEvent("onStateChange", [state]);
		});
	}
}, webix.ui.icon);