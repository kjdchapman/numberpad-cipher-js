exports.smallEncrypt = (input) => {
  var output = ""
  var numberpad = ["1","2","3"]
  const letWrapAround = (x) => {
    var n = numberpad.length
    return (x % n + n) % n
  }

  var left = "1"
  var nomove = "2"
  var right = "3"

  encodeByMove = (startingPostion, endPosition) => {
    var startingIndex = numberpad.indexOf(startingPostion);

    postionEnconder = new Map([
      [numberpad[letWrapAround(startingIndex + 1)],right],
      [numberpad[letWrapAround(startingIndex - 1)],left],
      [numberpad[startingIndex],nomove]
      ]);

    return postionEnconder.get(endPosition)
  }

  if (input[0]) {
    output += encodeByMove("1",input[0])
  }

  i = 0
  while (i < input.length - 1) {

    output += encodeByMove(input[i],input[i + 1])

    i++
  }

  return output
}
