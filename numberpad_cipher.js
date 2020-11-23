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

  var one = numberpad.indexOf("1");
  onePositionEncoder = new Map([
    [numberpad[one],nomove],[numberpad[(one + 1)],right],[numberpad[mod((one - 1),3)],left]
    ]);

  var two = numberpad.indexOf("2");
  twoPositionEncoder = new Map([
    [numberpad[(two - 1)],left],[numberpad[two],nomove],[numberpad[(two + 1)],right]
    ]);

  var three = numberpad.indexOf("3");
  threePositionEncoder = new Map([
    [numberpad[mod((three + 1),3)],right],[numberpad[(three - 1)],left],[numberpad[three],nomove]
    ]);

  if (input[0]) {
    output += onePositionEncoder.get(input[0])
  }

  i = 0
  while (i < input.length) {

    if (input[i+1]) {
      if (input[i] == "1") {
        output += onePositionEncoder.get(input[i+1])
      }
      if (input[i] == "2") {
        output += twoPositionEncoder.get(input[i+1])
      }
      if (input[i] == "3") {
        output += threePositionEncoder.get(input[i+1])
      }
    }

    i++
  }

  return output
}


exports.decrypt = () => ""
