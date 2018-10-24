import {JetView} from "webix-jet";
export default class DatesView extends JetView{
	config(){
		const start = new Date();
		start.setDate(start.getDate()-3);

		return {
			view:"calendar",
			width:250,
			icons:true,
			maxDate:new Date(),
			minDate:start,
			on:{
				onAfterDateSelect:date => this.app.callEvent("date:select",[date]),
				onTodaySet:date => this.app.callEvent("date:select",[date]),
				onDateClear:_ => this.app.callEvent("date:select")
			}
		};
	}
}
