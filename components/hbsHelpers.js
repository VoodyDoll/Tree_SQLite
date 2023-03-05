let helper={
	for:(add)=>{
	let result = []
	for (var i = 1; i <= add; i++) {
		result+='<li class="page-item"><a class="page-link" href="/?page='+i+'">'+ i +'</a></li>'
	}
	return result

	}
}

module.exports=helper;


