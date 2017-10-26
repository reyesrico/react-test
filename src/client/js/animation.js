function animation() {
    setTimeout(() => {
        let square = document.querySelector("#square");
        square.className = "green";
        setTimeout(() => {
            let x = document.querySelector("#square");
            x.className = "red";
            setTimeout(() => {
                let y = document.querySelector("#square");
                y.className = "green";
                setTimeout(() => {
                    let z = document.querySelector("#square");
                    z.className = "red";
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}