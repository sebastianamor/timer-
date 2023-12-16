const stopwatch = document.getElementById("stopwatch");
const playPauseButton = document.getElementById("play-pause");
const secondSphere = document.getElementById("seconds-sphere");


let stopwatchInterval ;
let runningTime = 0 ;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains("running");
    if (isPaused) {
        playPauseButton.classList.add("running");
        start();
    } else {
       playPauseButton.classList.remove("running"); 
       pause();
    } 
}

const pause = () => {
     secondSphere.style.animationPlayState = "paused";
     clearInterval(stopwatchInterval);
}

const stop = () => {
    secondSphere.style.transform = "rotate(-90) tralateX(60px)";
    secondSphere.style.animation = "none";
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = "00:00";
}

const start = () => {
    secondSphere.style.animation = " rotacion 60s  linear infinite ";
     let startTime = Date.now() - runningTime;
     secondSphere.style.animationPlayState = "running";
     stopwatchInterval = setInterval ( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
     }, 1000 )

}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime/ 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_second = ( total_seconds % 60).toString().padStart(2,"0");
    const display_minutes = total_minutes.toString().padStart(2,"0");

    return `${display_minutes}:${display_second}`
}