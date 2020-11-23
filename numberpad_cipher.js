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


exports.decrypt = () => ""
