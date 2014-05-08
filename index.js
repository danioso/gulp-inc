'use strict';

var es				= require("event-stream"),
	fs				= require("fs"),
	PluginError		= require("gulp-util").PluginError;

module.exports = function(options) {
	options = options || {};

	var pluginName = 'gulp-inc',
		regex = options.regex || /^(.*=\s*(include)\s+([\w\.\/-]+))$/gm;

	if( typeof options.preproccesor == 'function')
		preproccesor = options.preproccesor;
	else
		preproccesor = function(contents){ return content; }

    function inc(file, callback) {

    	if (file.isNull()) 
    		return; // ignore
        if (file.isStream()) 
        	return this.emit('error', new PluginError(pluginName,  'Streaming not supported'));

		if (file.isBuffer()) {

			var content = String(file.contents),
			var result = content,
				matches;

			while (matches = regex.exec(content)) {
				
				var match 	= matches[1],
					path	= file.base + matches[3].replace(/['"]/g, '');

				if (fs.existsSync(path)) {
					
					var contentToInclude = preproccesor(String(fs.readFileSync(path)));
					result = result.split(match).join(contentToInclude + "\n");
					
				} else
					throw new PluginError(pluginName, 'File not found: ' + path);
				
			}
			file.contents = new Buffer(result);
		}
		callback(null, file);
	}
    return es.map(inc);
}
