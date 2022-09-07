const assert = require('chai').assert;
const listFibonacci = require('../fibonachi');

describe('Generate Fibonnachi serieis', ()=>{
    it('Fibonnach of 0', ()=>{
        fibonachi = JSON.stringify(listFibonacci(0))
        assert.equal(fibonachi, JSON.stringify([0,1]))
    })

    it('Fibonnach of 1', ()=>{
        fibonachi = JSON.stringify(listFibonacci(1))
        assert.equal(fibonachi, JSON.stringify([0,1]))
    })
    it('Fibonnach of 2', ()=>{
        fibonachi = JSON.stringify(listFibonacci(2))
        assert.equal(fibonachi, JSON.stringify([0,1,1]))
    })

    it('Fibonnach of 3', ()=>{
        fibonachi = JSON.stringify(listFibonacci(3))
        assert.equal(fibonachi, JSON.stringify([0,1,1,2]))
    })

    it('Fibonnach of 4', ()=>{
        fibonachi = JSON.stringify(listFibonacci(4))
        assert.equal(fibonachi, JSON.stringify([0,1,1,2,3]))
    })
})