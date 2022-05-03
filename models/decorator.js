const Room = require('./room')
const Paint = require('./paint')




const Decorator = function (name) {
    this.name = name
    this.paints_stock = []
}

Decorator.prototype.addPaint = function (paint) {
    this.paints_stock.push(paint)
}

Decorator.prototype.totalPaintLitres = function (paints_stock) {
    total = 0
    for (paint of paints_stock) {
        total += paint.litres
    }
    return total
}

Decorator.prototype.enoughPaint = function (paint_room, paint_amount) {
    if (paint_room > paint_amount) {
        return false
    }
    else {
        return true
    }
}



module.exports = Decorator