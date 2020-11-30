const fs = require('fs')

fs.readdir('./', { withFileTypes: true }, (err, files) => {
	if (err) {
		console.error(err)
		return
	}

	console.log('files: ')
	files.forEach(file => {
		
		const type = file.isDirectory() ? 'DIR' : 'FILE'
		console.log(type, file.name)
	})
})