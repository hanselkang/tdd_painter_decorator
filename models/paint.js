const Paint = function( name, litres ) {
    this.name = name
    this.litres = litres
}

Paint.prototype.checkEmpty = function () {
    if (this.litres != 0) {
        return false
    }
    else {
        return true
    }
    
}
Paint.prototype.emptyPaint = function () {
    this.litres = 0
}

module.exports = Paint