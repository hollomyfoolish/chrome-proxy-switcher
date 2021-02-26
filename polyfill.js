window.chrome = window.chrome || {};
window.chrome.storage = window.chrome.storage || (function(){
    let storage = {};
    let _storage = {
        _sync: {},
        _local: {}
    };
    function buildStorage(name){
        let _s = _storage[name];
        return {
            get: function(k, cb){
                let result = {};
                if(Object.hasOwnProperty(_s, k)){
                    result[k] = _s[k];
                }
                cb(result);
            },
            set: function(data, cb){
                Object.assign(_s, data);
                cb();
            },
            clear: function(){
                _storage[name] = {};
            }
        };
    }

    storage.sync = buildStorage('_sync');
    storage.local = buildStorage('_local');
    return storage;
})();
chrome.runtime = chrome.runtime || {};