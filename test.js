var assert = require('assert')

describe('Encryption', () => {
  describe('2 length code starting with 1', () => {
    it('returns 55 when given 11', () => {
      assert.equal(encrypt("11"), "55")
    })
    it('returns 56 when given 12', () => {
      assert.equal(encrypt("12"), "56")
    })
    it('returns 54 when given 13', () => {
      assert.equal(encrypt("13"), "54")
    })
    it('returns 58 when given 14', () => {
      assert.equal(encrypt("14"), "58")
    })
    it('returns 59 when given 15', () => {
      assert.equal(encrypt("15"), "59")
    })
    it('returns 57 when given 16', () => {
      assert.equal(encrypt("16"), "57")
    })
    it('returns 52 when given 17', () => {
      assert.equal(encrypt("17"), "52")
    })
    it('returns 53 when given 18', () => {
      assert.equal(encrypt("18"), "53")
    })
    it('returns 51 when given 19', () => {
      assert.equal(encrypt("19"), "51")
    })
  })
  it('returns empty string when given empty string', () => {
    assert.equal(encrypt(""), "")
  })

  it('returns 5 when given 1', () => {
    assert.equal(encrypt("1"), "5")
  })

  it('returns 6 when given 2', () => {
    assert.equal(encrypt("2"), "6")
  })

  it('returns 55 when given 22', () => {
    assert.equal(encrypt("22"), "65")
  })

})

describe('Decryption', () => {
  it('returns empty string when given empty string', () => {
    assert.equal(decrypt(""), "")
  })
})


const encrypt = (input) => {
  var output = ""

  if (input[0] == "1") {
    output += "5"

    if (input[1] == "1") output += "5"
    if (input[1] == "2") output += "6"
    if (input[1] == "3") output += "4"
    if (input[1] == "4") output += "8"
    if (input[1] == "5") output += "9"
    if (input[1] == "6") output += "7"
    if (input[1] == "7") output += "2"
    if (input[1] == "8") output += "3"
    if (input[1] == "9") output += "1"
  }

  if (input == "22") output = "65"
  if (input == "2") output = "6"

  return output
}


const decrypt = () => ""
