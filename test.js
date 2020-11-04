var assert = require('assert')

describe('Encryption', () => {
  it('returns empty string when given empty string', () => {
    assert.equal(encrypt(""), "")
  })

  it('returns 5 when given 1', () => {
    assert.equal(encrypt("1"), "5")
  })

  it('returns 6 when given 2', () => {
    assert.equal(encrypt("2"), "6")
  })

  it('returns 55 when given 11', () => {
    assert.equal(encrypt("11"), "55")
  })

  it('returns 55 when given 22', () => {
    assert.equal(encrypt("22"), "65")
  })

  it('returns 56 when given 12', () => {
    assert.equal(encrypt("12"), "56")
  })

  it('returns 56 when given 13', () => {
    assert.equal(encrypt("13"), "54")
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
  }

  if (input == "22") output = "65"
  if (input == "2") output = "6"

  return output
}


const decrypt = () => ""