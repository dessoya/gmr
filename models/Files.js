'use strict'

var Class			= require('class')
  , coroutine		= require('coroutine')
  , uuid			= require('uuid')

var Module = module.exports = Class.inherit({

	onCreate: function(type) {
	    
	    switch(type) {
		case 'method':
			this.loadByMethod(arguments[1], arguments[2], arguments[3])
			break
		case 'new':
			this.new(arguments[1], arguments[2])
			break
		case 'uuid':
			this.loadByUUID(arguments[1], arguments[2])
			break
		}
	}

})

