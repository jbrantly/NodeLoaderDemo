var loadScriptFile = function(url, onLoad, scope, synchronous) {
    var content = require('fs').readFileSync(url, 'utf8');
    process.binding('evals').Script.runInThisContext(content, url);
    
    if (typeof onLoad == 'function') {
        onLoad.call(scope);
    }
};

loadScriptFile('ext-bootstrap-debug.js');

Ext.Loader.loadScriptFile = loadScriptFile;

loadScriptFile(process.argv[2]);
    
