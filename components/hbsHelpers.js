let helper={
	for:(add)=>{
	let result = []
	for (var i = 1; i <= add; i++) {
		if (add.cost==low_cost) {
		result+='<li class="page-item"><a class="page-link" href="/?page='+i+'&cost_low=true">'+ i +'</a></li>'
	}
	}
	return result

	}
}

module.exports=helper;


