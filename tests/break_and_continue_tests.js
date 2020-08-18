// valid odd number test
describe('isValidOddNumber', function () {
    it('isValidOddNumber should be a function', function() {
        expect(typeof isValidOddNumber).toBe('function')
    })
    it('isValidOddNumber() should return false', function() {
        expect(isValidOddNumber()).toBe(false)
    })
    it('isValidOddNumber("Hello") should return false', function() {
        expect(isValidOddNumber("Hello")).toBe(false)
    })
    it('isValidOddNumber(3.75) should return false', function() {
        expect(isValidOddNumber(3.75)).toBe(false)
    })
    it('isValidOddNumber(4) should return false', function() {
        expect(isValidOddNumber(4)).toBe(false)
    })
    it('isValidOddNumber(17) should return true', function() {
        expect(isValidOddNumber(17)).toBe(true)
    })
    it('isValidOddNumber("17") should return true', function() {
        expect(isValidOddNumber("17")).toBe(true)
    })
})

// Query user test
describe('queryUser', function () {
    it('isValidOddNumber should be a function', function() {
        expect(typeof queryUser).toBe('function')
    })
    it('isValidOddNumber() should be return undefined', function() {
        expect(queryUser()).toBe(undefined)
    })
})

// test getOddNumbers function
describe('getOddNumbers', function () {
    it('getOddNumbers should be a function', function() {
        expect(typeof getOddNumbers).toBe('function')
    })
    it('getOddNumbers() should be return an error string', function() {
        expect(getOddNumbers()).toBe('Error: The skip value must be a number.')
    })
    it('getOddNumbers(47.2) should be return an error for not being an integer.', function() {
        expect(getOddNumbers(47.2)).toBe('Error: The skip value must be an integer.')
    })
    it('getOddNumbers(4) should be return an error for not being an odd number.', function() {
        expect(getOddNumbers(4)).toBe('Error: The skip value must be an odd number.')
    })
    it('getOddNumbers(-5) should be return an error for not being out of range.', function() {
        expect(getOddNumbers(-5)).toBe('Error: The skip value is outside of the range.')
    })
    it('getOddNumbers(57) should be return an error for not being out of range.', function() {
        expect(getOddNumbers(57)).toBe('Error: The skip value is outside of the range.')
    })
})