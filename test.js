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

    let oneEncoder = new Map([
      ["1","5"],["2","6"],["3","4"],
      ["4","8"],["5","9"],["6","7"],
      ["7","2"],["8","3"],["9","1"]
      ]);

    if (input[1]) {
      output += oneEncoder.get(input[1])
    }
  }

  if (input[0] == "2") {
    output += "6"

    let twoEncoder = new Map([
      ["1","4"],["2","5"],["3","6"],
      ["4","7"],["5","8"],["6","9"],
      ["7","1"],["8","2"],["9","3"]
      ]);

    if (input[1]) {
      output += twoEncoder.get(input[1])
    }
  }

  return output
}


const decrypt = () => ""
