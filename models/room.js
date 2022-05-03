const Room = function (name,area) {
    this.name = name
    this.area = area
    this.painted = false
}

Room.prototype.completePaint=function(){
    return this.painted = true
}
module.exports = Room