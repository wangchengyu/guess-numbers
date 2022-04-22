var ori = [ 0, 3, 5, 7, 0 ]

var input = [
    {a: [0, 1, 2, 3, 4], b:[0, 2]}
   ,{a: [5, 6, 7, 3, 4], b:[0, 3]}
   ,{a: [3, 6, 7, 3, 4], b:[0, 2]}
]

var f = [-1, -1, -1, -1, -1]

function check(input, ori) {
    //console.log(input, ori)
    var green = 0;
    var yellow =0;
    // if (in1[0] == ori[0]) {
    //     green ++ ;
    //     in1[0] = ori[0] = -1
    // } 

    // if (in1[1] == ori[1]) {
    //     green ++ ;
    //     in1[1] = ori[1] = -1
    // }

    // if (in1[2] == ori[2]) {
    //     green ++ ;
    //     in1[2] = ori[2] = -1
    // }

    // if (in1[3] == ori[3]) {
    //     green ++ ;
    //     in1[3] = ori[3] = -1
    // }

    // if (in1[4] == ori[4]) {
    //     green ++ ;
    //     in1[4] = ori[4] = -1
    // }

    for (var i = 0; i < 5; i++) {
        if (input[i] == ori[i]) {
            green ++ ;
            input[i] = ori[i] = -1
        }
    }


    // if (ori[0] != in1[0] && (ori[0] == in1[1] || ori[0] == in1[2] || ori[0] == in1[3] || ori[0] == in1[4])) {
    //     yellow ++ ;
    // }

        
    // if (ori[1] != in1[1] && (ori[1] == in1[0] || ori[1] == in1[2] || ori[1] == in1[3] || ori[1] == in1[4])) {
    //     yellow ++ ;
    // }

    // if (ori[2] != in1[2] && (ori[2] == in1[0] || ori[2] == in1[1] || ori[2] == in1[3] || ori[2] == in1[4])) {
    //     yellow ++ ;
    // }

    // if (ori[3] != in1[3] && (ori[3] == in1[0] || ori[3] == in1[1] || ori[3]== in1[2] || ori[3]== in1[4])) {
    //     yellow ++ ;
    // }

    // if (ori[4] != in1[4] && (ori[4] == in1[0] || ori[4] == in1[1] || ori[4] == in1[2] || ori[4] == in1[3])) {
    //     yellow ++ ;
    // }


    for (var j = 0; j < 5; j++) {
        if (input[j] == -1) {
            continue ;
        }

        if (input[j] != ori[j]) {
            for (var k = 0; k < 5; k++) {
                if (j == k )
                    continue;

                if (input[j] == ori[k]) {
                    input[j] = ori[k] = -1;
                    yellow ++ ;
                    break;
                }
            }
        }
    }
    
   return [green, yellow]            
}

function init() {
    var result = []
    for(var i = 0; i <= 9; i++) {
        for(var j = 0; j <= 9; j++) {
            for(var k = 0; k <= 9; k++) {
                for(var l = 0; l <= 9; l++) {
                    for(var r = 0; r <= 9; r++) {
                        result.push([i, j, k, l, r])                              
                    }
                }
            }
        }
    }

    return result
}

var o = init()


for (j in input) {

    var o1 = []

    var item = input[j]

    for (var i in o) {
        var r = check([...item.a], [...o[i]])
        // console.log(r)
        if (r[0] == item.b[0] && r[1] == item.b[1]) {

            if (f[0] != -1 && f[0] != o[i][0]) 
                continue;

            if (f[1] != -1 && f[1] != o[i][1])
                continue;
            
            if (f[2] != -1 && f[2] != o[i][2])
                continue;
            
            if (f[3] != -1 && f[3] != o[i][3])
                continue;

            if (f[4] != -1 && f[4] != o[i][4])
                continue;


            o1.push([...o[i]])
        }
    }

    o = o1
}


//666 4196
//analyze each number count
//            0  1  2  3  4  5  6  7  8  9
var result = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

for (var i = 0; i < o.length; i++) {
    for (var j = 0; j < 5; j++) {
        result[j][o[i][j]] ++
    }
}

console.log(o)
console.table(result)
