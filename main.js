
  var grid = []
  $(document).ready(function () {
    $('body').append('<div class="gameBox"></div>')

    init()
    playTurn(0, 0, 0, 1)
//  switchTiles(0,0,0,1)

// console.log(grid);

    $('.column').click(function () {
      console.log('this', $(this).index())
      console.log('parent', $(this).parent().index())
    })
  })

  function init () {
    var num

    for (var i = 0; i < 15; i++) {
      $('.gameBox').append('<div class="row row' + i + '"></div>')
      grid.push([])
      for (var j = 0; j < 8; j++) {
        num = random()
      //
        if ( i > 0 && j> 0) {
          if(grid[i-1][j] === num || grid[i][j-1] === num) {
            num = random()
          }
        }
        $('.row' + i).append('<div class="column column' + j + '"></div>')
          grid[i].push(num)

      $('.row' + i + ' .column' + j).text(grid[i][j])
      }
    }
  }

  function random(){
    return Math.floor(Math.random() * 6)
  }

  function playTurn (parent1, child1, parent2, child2) {
    console.log(grid)
    console.log(parent1 - parent2 === 1)
    console.log(grid[parent1])
    if (parent1 - parent2 === 1 || parent1 - parent2 === -1 || child1 - child2 === 1 || child1 - child2 === -1) {
      if (grid[parent1][child1] !== grid[parent2][child2]) {
        var temp = grid[parent1][child1]
        console.log('initial1', temp)
        console.log('initial2', grid[parent2][child2])
        grid[parent1][child1] = grid[parent2][child2]
        grid[parent2][child2] = temp

        switchTiles(parent1, child1, parent2, child2)
        console.log('final', grid[parent1][child1])
        console.log('final2', grid[parent2][child2])
      }
    }
  }

  function switchTiles (parent1, child1, parent2, child2) {
    console.log('tile start')
    console.log($('.row' + parent1 + ' .column' + child1).text())
    $('.row' + parent1 + ' .column' + child1).text(grid[parent1][child1])
    $('.row' + parent2 + ' .column' + child2).text(grid[parent2][child2])
    checkMathch(parent1, child1, parent2, child2)
  }

  function checkMathch (parent1, child1, parent2, child2) {
    var tile1 = [{parent: parent1, child: child1}]
    var tile2 = [{parent: parent2, child: child2}]
    if (parent1 - 1 >= 0) {
      for (var i = parent1 - 1; i >= 0; i--) {
        console.log('gard', i, child1, grid[i][child1], grid[parent1][child1])
        if (grid[i][child1] !== grid[parent1][child1]) {
          break
        } else {
          tile1.push({parent: i, child: child1 })
        }
      }
    }

    if (parent1 + 1 >= 0) {
      for (var i = parent1 + 1; i <= 15; i++) {
        console.log('gard', i, child1, grid[i][child1], grid[parent1][child1])
        if (grid[i][child1] !== grid[parent1][child1]) {
          break
        } else {
          tile1.push({parent: i, child: child1 })
        }
      }
    }

    if (child1 - 1 >= 0) {
      for (var i = child1 - 1; i >= 0; i--) {
        console.log('gard', parent1, i, grid[parent1][i], grid[parent1][child1])
        if (grid[parent1][i] !== grid[parent1][child1]) {
          break
        } else {
          tile1.push({parent: parent1, child: i })
        }
      }
    }
    if (child1 + 1 >= 0) {
      for (var i = child1 + 1; i <= 8; i++) {
        if (grid[parent1][i] !== grid[parent1][child1]) {
          console.log('gard', parent1, i, grid[parent1][i], grid[parent1][child1])
          break
        } else {
          tile1.push({parent: parent1, child: i })
        }
      }
    }

    console.log('tile1 length', tile1.length)
    console.log(tile1)

    if (parent2 - 1 >= 0) {
      for (var i = parent1 - 1; i >= 0; i--) {
        console.log('gard', i, child2, grid[i][child2], grid[parent2][child2])
        if (grid[i][child2] !== grid[parent2][child2]) {
          break
        } else {
          tile2.push({parent: i, child: child2 })
        }
      }
    }

    if (parent2 + 1 >= 0) {
      for (var i = parent2 + 1; i <= 15; i++) {
        console.log('gard', i, child2, grid[i][child2], grid[parent2][child2])
        if (grid[i][child2] !== grid[parent2][child2]) {
          break
        } else {
          tile2.push({parent: i, child: child2 })
        }
      }
    }

    if (child2 - 1 >= 0) {
      for (var i = child1 - 1; i >= 0; i--) {
        if (grid[parent2][i] !== grid[parent2][child2]) {
          console.log('gard', parent2, i, grid[parent2][i], grid[parent2][child2])
          break
        } else {
          tile2.push({parent: parent2, child: i })
        }
      }
    }
    if (child2 + 1 >= 0) {
      for (var i = child2 + 1; i <= 8; i++) {
        if (grid[parent2][i] !== grid[parent2][child2]) {
          console.log('gard', parent2, i, grid[parent2][i], grid[parent2][child2])
          break
        } else {
          tile2.push({parent: parent2, child: i })
        }
      }
    }
    if (tile1.length > 3) {
      alert('remove')
    }
  }
