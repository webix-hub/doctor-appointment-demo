const options = [
	"10:00 AM - 14:00 PM",
	"11:00 AM - 15:00 PM",
	"14:00 PM - 18:00 PM",
	"15:00 PM - 19:00 PM"
];
const days = [
	"Monday","Tuesday","Wednesday","Thursday","Friday"
];
webix.protoUI({
	name:"multitime",
	_getForm(mode){
		const id = webix.uid();
		return {
			view:"form", id:id, borderless:true, padding:0, margin:10,
			cols:[
				{
					view:"multiselect", label:"Day(s)", labelWidth:65, name:"day",
					options:webix.copy(days)
				},
				{ width:5 },
				{
					view:"richselect", name:"time", label:"Time", labelWidth:65,
					options:options
				},
				{
					view:"icon", icon:"wxi-"+mode+"-circle",
					click:() => {
						if (mode == "plus") this.addInput();
						else this.removeInput(id);
					}
				}
			]
		};
	}
}, webix.ui.multidate);