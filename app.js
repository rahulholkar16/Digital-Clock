const display_time = () =>{
    let Hours = new Date().getHours();
    let Min = new Date().getMinutes();
    let Sec = new Date().getSeconds();

    Hours = (Hours < 10)? "0" + Hours : Hours;
    Min = (Min < 10)? "0" + Min : Min;
    Sec = (Sec < 10)? "0" + Sec : Sec;

    const H = document.querySelector(".hours");
    H.innerHTML = Hours;
    const M = document.querySelector(".miniutes");
    M.innerHTML = Min;
    const S = document.querySelector(".secound");
    S.innerHTML = Sec;
}
    
setInterval( ()=>{
    display_time();
}, 1000);