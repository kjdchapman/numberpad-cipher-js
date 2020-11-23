exports.encrypt = (input) => {
  var output = ""

  var firstEncoder = new Map([
      ["1","5"],["2","6"],["3","4"],
      ["4","8"],["5","9"],["6","7"],
      ["7","2"],["8","3"],["9","1"]
    ]);
  if (input[0]) {
    output += firstEncoder.get(input[0])
  }
  if (input[0] == "1") {

    let oneEncoder = new Map([
      ["1","5"],["2","6"],["3","4"],
      ["4","8"],["5","9"],["6","7"],
      ["7","2"],["8","3"],["9","1"]
      ]);

    if (input[1]) {
      output += oneEncoder.get(input[1])
    }

    if (input[2] == "3") {

      output += 6
    }
  }

  if (input[0] == "2") {

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


exports.decrypt = () => ""
