const assert = require('assert')
const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')


describe('Room', function () {
    let room;
    this.beforeEach(function () {
        room = new Room('Kitchen', 33)
    })

    it('Should have area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 33)
    })
    it('Should have not painted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })
    it('Should be painted', function () {
        room.completePaint()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})

describe('Paint', function () {

    let paint;
    this.beforeEach(function () {
        paint = new Paint('hotpink', 10)

    })

    it('Should have 10 litres of paint', function () {
        const actual = paint.litres;
        assert.strictEqual(actual, 10)
    })

    it('Is it empty?', function () {
        const actual = paint.checkEmpty();
        assert.strictEqual(actual, false)
    })

    it('Should be empty', function (){
        paint.emptyPaint()
        const actual = paint.litres
        assert.strictEqual(actual,0)
    })
})

describe('Decorator', function (){

    let decorator;
    this.beforeEach(function (){
        decorator = new Decorator('Jazz')
        paint = new Paint("hotpink", 10)
        room = new Room("Kitchen",15)
    })

    it('Should have no paint', function (){
        const actual = decorator.paints_stock
        assert.deepStrictEqual(actual,[])
    })

    it('Has a can of paint', function (){
        decorator.addPaint(paint)
        const actual = decorator.paints_stock.length
        assert.deepStrictEqual(actual,1)
    })

    it('Has 10 litres of paint', function () {
        decorator.addPaint(paint)
        const actual = decorator.totalPaintLitres(decorator.paints_stock)
        assert.deepStrictEqual(actual, 10)
    })

    it('Has enough paint', function () {
        decorator.addPaint(paint)
        const paint_amount = decorator.totalPaintLitres(decorator.paints_stock)
        const actual = decorator.enoughPaint(room.area, paint_amount)
        assert.strictEqual(actual,false)
    })

    it('Should be done', function () {
        let paint = new Paint("hotpink", 20)
        let room = new Room("Kitchen", 15)
        decorator.addPaint(paint)
        // const paint_amount = decorator.totalPaintLitres(decorator.paints_stock)
        // if (decorator.enoughPaint(room.area, paint_amount)) 
        if (room.area < paint.litres ){
            room.completePaint()
        }
        const actual = room.painted
        assert.strictEqual(actual, true)
    })


})