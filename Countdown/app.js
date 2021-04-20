
countDate = "1 jan 2022";

const countdown = () =>{

    updateDate = new Date.now();
    days = countDate - updateDate;

    console.log(days);
}

countdown();