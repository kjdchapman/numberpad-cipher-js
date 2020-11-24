exports.encrypt = (input) => {
  var output = ""
  var numberpad = ["1","2","3","4","5","6","7","8","9"]
  const letWrapAround = (x) => {
    var n = 3
    return (x % n + n) % n
  }

  var downLeft = "1"
  var down = "2"
  var downRight = "3"
  var left = "4"
  var nomove = "5"
  var right = "6"
  var upleft = "7"
  var up = "8"
  var upRight = "9"

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


exports.decrypt = () => ""
