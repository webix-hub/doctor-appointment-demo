import {JetView} from "webix-jet";
//import {allpayments} from "models/allpayments";

export default class AllTActionsView extends JetView {
	config(){
		return {
			view:"datatable",
			select:true,
			columns:[
				{ id:"id", header:"#", width:40, sort:"int" },
				{
					id:"status", header:"", width:40,
					css:"status", sort:"text",
					template:data => {
						let icon = "";
						if (data.status === "success")
							icon = "check-circle";
						else if (data.status === "failed")
							icon = "alert-box";
						else
							icon = "clock";
						return `<span class='webix_icon mdi mdi-${icon} ${data.status}'></span>`;
					}
				},
				{
					id:"date", header:"Date",
					fillspace:2, minWidth:150,
					sort:"date", format:dateFormat
				},
				{
					id:"", header:"Payment", fillspace:3, minWidth:240, sort:"text",
					template:data => {
						return `<img class="method" src="data/images/${data.method}.svg" />${data.method} ${data.number || ""}`;
					}
				},
				{
					id:"", header:"Purchase",
					fillspace:4, minWidth:200, sort:"text",
					template: data => `${data.name} / ${data.city} / ${data.country}`
				},
				{
					id:"type", header:"+/-", sort:"int",
					css:"type", fillspace:1, minWidth:30,
					template:data => {
						let type = data.type ? "plus incoming" : "minus payment";
						return `<span class='webix_icon mdi mdi-${type}'></span>`;
					}
				},
				{
					id:"sum", header:"Sum", sort:"int",
					fillspace:1, minWidth:70,
					format:webix.i18n.priceFormat
				},
				{
					id:"left", header:"Left",
					fillspace:1, minWidth:70,
					sort:"int", format:webix.i18n.priceFormat
				}
			]
		};
	}
}
