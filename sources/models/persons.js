export const persons = new webix.DataCollection({
	url:"data/persons.json",
	scheme:{
		$init:function(obj){
			const date = obj.date = new Date();
			if (obj.id > 17)
				obj.date.setDate(date.getDate()-1);
			if (obj.id > 35)
				obj.date.setDate(date.getDate()-1);
			obj.date.setHours(0,0,0,0);
		}
	}
});
