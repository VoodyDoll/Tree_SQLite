let helper={
	for:(add)=>{
var result = ''
for (var i = 1; i <= add; i++) {
    result += i
  }
return ('<ul>' + result + '</ul>')
	}
}

module.exports=helper;


// var register = function(Handlebars) {
//   var helpers = {
//     // put all of your helpers inside this object
//     ifEquals: function(){
//         return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
//     }
//   };

//   if (Handlebars && typeof Handlebars.registerHelper === "function") {
//     // register helpers
//     for (var prop in helpers) {
//         Handlebars.registerHelper(prop, helpers[prop]);
//     }
//   } else {
//       // just return helpers object if we can't register helpers here
//       return helpers;
//   }

// };

// module.exports.register = register;
// module.exports.helpers = register(null); 