var fs = require("fs");

fs.readdir(process.argv[2], function(err, files) {
	for (var i = 0; i < files.length; i++)
		if (files[i].match(new RegExp("\." + process.argv[3] + "$")))
			console.log(files[i]);
});