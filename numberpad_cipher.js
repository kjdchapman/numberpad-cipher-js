exports.encrypt = (input) => {

  var output = ""

  var numberpad = ["1","2","3","4","5","6","7","8","9"]

  const letWrapAround = (x,n) => {
    return (x % n + n) % n
  }


  var downLeft = "1"
  var down = "2"
  var downRight = "3"
  var left = "4"
  var nomove = "5"
  var right = "6"
  var upLeft = "7"
  var up = "8"
  var upRight = "9"

  encodeByMove = (startingPosition, endPosition) => {
    var startingIndex = numberpad.indexOf(startingPosition);

    postionEnconder = new Map([
      [numberpad[letWrapAround(startingIndex + 1,3)],right],
      [numberpad[letWrapAround(startingIndex - 1,3)],left],
      [numberpad[startingIndex],nomove],
      [numberpad[letWrapAround(letWrapAround(startingIndex + 1,3) + 3,9)],upRight],
      [numberpad[letWrapAround(letWrapAround(startingIndex - 1,3) + 3,9)],upLeft],
      [numberpad[letWrapAround(startingIndex + 3,9)],up]
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
