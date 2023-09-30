let lineOne, lineTwo, i, size, sizeCalc;

lineOne = '';
lineTwo = '';
size = 20;
sizeCalc = size / 2;

function chessboard(sizeCalc) {
    for (i = 0; i < sizeCalc; i++) {
        lineOne += ' #'
    }
    
    for (i = 0; i < sizeCalc; i++) {
        lineTwo += '# ';
    }

    for (i = 0; i < sizeCalc; i++) {
        console.log(lineOne);
        console.log(lineTwo);
    }
}

chessboard(sizeCalc);