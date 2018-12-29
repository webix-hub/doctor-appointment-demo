import {JetView} from "webix-jet";
export default class DatesView extends JetView{
	config(){
		const size = this.app.config.size;
		const start = new Date();
		start.setDate(start.getDate() - 3);

		return {
			view:"calendar",
			width:size !== "small" ? 271 : 240,
			icons:true,
			maxDate:new Date(),
			minDate:start,
			on:{
				onAfterDateSelect:date => this.app.callEvent("date:select",[date]),
				onTodaySet:date => this.app.callEvent("date:select",[date]),
				onDateClear:() => this.app.callEvent("date:select")
			}
		};
	}
}
