Array.prototype.compare = function(a) {
    if (this.length != a.length) return false;
    for (var i = 0; i < a.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(a[i])) return false;
        }
        if (this[i] !== a[i]) return false;
    }
    return true;
}