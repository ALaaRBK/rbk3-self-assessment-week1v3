var Stack = function() {
    this._storage ={}
    this.count=0;
    this.add = function(value){
      this._storage[this.count++]=value;
    };
    this.remove = function(value) {
    	for(var key in this._storage){
    		if (this._storage[key] === value) {
    			delete this._storage[key];
    			this.count--
    		}
    	}
      // write me
    };
  };