// Include the HTTP core module
var http = require('http')
var moment = require('moment')

// Create a server that listens for connections on a specified port
http.createServer(function(req, res) {
	res.write(moment("19880924").format('dddd [the] Do [of] MMMM [in the year] YYYY'))
	res.write('\nThat was ' + moment("19880924", "YYYYMMDD").fromNow())
	res.write('\nYeeesh')
	res.end()
}).listen(8000)