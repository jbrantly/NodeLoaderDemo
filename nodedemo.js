// Example uses alert - change to console.log
alert = console.log;

// The rest is example code taken from index.html (this file effectively replaces index.html)

// Configure loader
Ext.Loader.setConfig({
    enabled: true,
    basePath: 'src'
});

// 1. Loading a single file
console.log('1. Loading a single file');
Ext.require('Product', function() {
    var product = new Product();
    product.setName('Ext JS 4');
    
    alert("Product name: " + product.getName());
});

// 2. Loading a file with dependencies
console.log('2. Loading a file with dependencies');
Ext.require('SuperUser', function() {
    var superUser = new SuperUser();
    superUser.setEmail('ed@sencha.com');
    
    alert("Is a SuperUser: " + superUser.isSuper());
});

// 3. Mixins
console.log('3. Mixins');
Ext.require('Developer', function() {
    var dev = new Developer();
    dev.setEmail('tommy@sencha.com');
    dev.hackAway();
});

// 4. Bringing it all together
console.log('4. Bringing it all together');
Ext.require('Architect', function() {
    var ed = new Architect();
    
    //from the MadSkills mixin
    ed.hackAway();
    
    //from the LeetSkills mixin
    ed.makeItBetter();
    
    //from the RevertChanges requirement
    ed.revertCommits(2);
});