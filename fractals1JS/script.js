(function () {
    const canvas = document.createElement("canvas");
    canvas.width = 1500;
    canvas.height = 900;
    document.body.appendChild(canvas);
    const cont = canvas.getContext("2d");


    function checkSet(x, y) {
        let resultX = x;
        let resultY = y;
        const iterations = 100;
        for (let i = 0; i < iterations; i++) {
            let templateX = resultX * resultX
                - resultY * resultY
                + x;
            let templateY = 2 * resultX * resultY
                + y;
            resultX = templateX;
            resultY = templateY;

            if (resultX * resultY > 5)
                return (i / iterations * 100);
        }
        return 0;     
    }


    const magniFactor = 5000;
    let panX = 0.7;
    let panY = 0.6;
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let belongsToSet =
                checkSet(x / magniFactor - panX,
                    y / magniFactor - panY);
            if (belongsToSet == 0) {
                cont.fillStyle = '#fff';
                cont.fillRect(x, y, 1, 1); 
            } else {
                cont.fillStyle = 'hsl(0, 30%, ' + belongsToSet + '%)';
                cont.fillRect(x, y, 5, 20); 
            }
        }
    }
}());