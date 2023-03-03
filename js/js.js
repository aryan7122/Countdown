const enddate = "07 decmber 2023"
var a = document.getElementById("end").innerText = enddate;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(enddate);
    const now = new Date();
    // const diff = end - now; //ms
    const diff = (end - now) / 1000; //s    
    // console.log(Math.floor(diff)/3600/24); //
    if(diff<0) return;
    inputs[0].value = (Math.floor(diff/3600/24));//day
    inputs[1].value = (Math.floor(diff/3600)%24);//hours
    inputs[2].value = (Math.floor(diff/60)%60);//minutes
    inputs[3].value = (Math.floor(diff)%60);//second

    
}
clock();

// 1day = 24 hours
// 1 hours = 60 mins
// 60 min = 3600 sec

setInterval(() => {   // setInterval repit but setTimeout no
    clock()
}, 1000);