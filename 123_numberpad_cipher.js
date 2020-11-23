exports.smallEncrypt = (input) => {
  output = ""
  numberpad = ["1","2","3"]
  const mod = (x, n) => (x % n + n) % n

  var left = "1"
  var nomove = "2"
  var right = "3"

  encoder = (startingPostion, endPosition) => {
    var number = numberpad.indexOf(startingPostion);

    postionEnconder = new Map([
      [numberpad[mod((number + 1),3)],right],
      [numberpad[mod((number - 1),3)],left],
      [numberpad[number],nomove]
      ]);

    return postionEnconder.get(endPosition)
  }

  if (input[0]) {
    output += encoder("1",input[0])
  }

  i = 0
  while (i < input.length - 1) {

    output += encoder(input[i],input[i + 1])

    i++
  }

  return output
}
