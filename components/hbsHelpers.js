let helper={
	for:(add,cost)=>{
	let result = []
	
if (cost=='low_cost') {
for (var i = 1; i <= add; i++) {
		result+='<li class="page-item"><a class="page-link" href="/low_cost?page='+i+'">'+ i +'</a></li>'
	}

	return result
}

if (cost=='expensive_cost') {
for (var i = 1; i <= add; i++) {
		result+='<li class="page-item"><a class="page-link" href="/expensive_cost?page='+i+'">'+ i +'</a></li>'
	}

	return result
}

if (cost==false) {

	for (var i = 1; i <= add; i++) {
		result+='<li class="page-item"><a class="page-link" href="/?page='+i+'">'+ i +'</a></li>'
	}
	return result
}
	}
}

module.exports=helper;


