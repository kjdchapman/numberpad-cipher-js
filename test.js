var assert = require('assert')
const numberpadCipher = require("./numberpad_cipher.js")
const smallNumberpadCipher = require("./123_numberpad_cipher.js")

describe('Encryption', () => {
  subject = numberpadCipher.encrypt
  describe('2 length code starting with 1', () => {
    it('returns 55 when given 11', () => {
      assert.equal(subject("11"), "55")
    })
    it('returns 56 when given 12', () => {
      assert.equal(subject("12"), "56")
    })
    it('returns 54 when given 13', () => {
      assert.equal(subject("13"), "54")
    })
    it('returns 58 when given 14', () => {
      assert.equal(subject("14"), "58")
    })
    it('returns 59 when given 15', () => {
      assert.equal(subject("15"), "59")
    })
    it('returns 57 when given 16', () => {
      assert.equal(subject("16"), "57")
    })
    xit('returns 52 when given 17', () => {
      assert.equal(subject("17"), "52")
    })
    xit('returns 53 when given 18', () => {
      assert.equal(subject("18"), "53")
    })
    xit('returns 51 when given 19', () => {
      assert.equal(subject("19"), "51")
    })
  })
  it('returns empty string when given empty string', () => {
    assert.equal(subject(""), "")
  })

  it('returns 5 when given 1', () => {
    assert.equal(subject("1"), "5")
  })

  it('returns 6 when given 2', () => {
    assert.equal(subject("2"), "6")
  })

  it('returns 55 when given 22', () => {
    assert.equal(subject("22"), "65")
  })

  it('returns 4 when given 3', () => {
    assert.equal(subject("3"), "4")
  })

  it('returns 566 when given 123', () => {
      assert.equal(subject("123"), "566")
  })

  xit('returns 545 when given 133', () => {
      assert.equal(subject("133"), "545")
  })

})

describe('Small Encryption', () => {
  it('returns empty string when given empty string', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt(""), "")
  })
  it('returns 2 when given 1', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("1"), "2")
  })
  it('returns 3 when given 2', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("2"), "3")
  })
  it('returns 1 when given 3', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("3"), "1")
  })
  it('returns 23 when given 12', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("12"), "23")
  })
  it('returns 21 when given 13', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("13"), "21")
  })
  it('returns 32 when given 22', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("22"), "32")
  })
  it('returns 33 when given 23', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("23"), "33")
  })
  it('returns 11 when given 32', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("32"), "11")
  })
  it('returns 233211 when given 123321', () => {
    assert.equal(smallNumberpadCipher.smallEncrypt("123321"), "233211")
  })
})

describe('Decryption', () => {
  it('returns empty string when given empty string', () => {
    assert.equal(numberpadCipher.decrypt(""), "")
  })
})

