webix.protoUI({
	name:"profilelabel",
	$init(config){
		if (config.value) webix.delay(() => this.setValue(config.value));
	},
	getValue(){
		return this.config.value;
	},
	setValue(value){
		this.setHTML(this.config.template(value));
		this.config.value = value;
	}
}, webix.ui.template);