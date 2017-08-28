var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        var index=hashFn(key, max);
        return this._storage[index];

        var index =hashFn(key, max);
        if (this._storage[index] === undefined ) {
        return false;
        }
        else{
        //this._storage [index] = value;
        for (var i = 0; i < this_storage.bucket.length; i++) {
          if (this_storage.bucket[i]) {
            return true;
          }
        }

      },

      insert: function(key, value) {
        //your code is here
        var index =hashFn(key, max);
        if (this._storage[index] === undefined ) {
          var bucket = [];
        }
        else{
        //this._storage [index] = value;
        var p = [value,key];
        bucket.push(p);
        this._storage [index] = bucket;
        }

    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};