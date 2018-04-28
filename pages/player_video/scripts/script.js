/***************************
 
     VARIABLES

***************************/

const body = document.querySelector('body')
const player = document.querySelector('.player')
const scopeVideo = player.querySelector('.scope-player')
const video = scopeVideo.querySelector('.viewer')
const controls = player.querySelector('.player__controls')
const progressBar = controls.querySelector('.progress-bar')
const fillBar = progressBar.querySelector('.fill-bar')
const topple = controls.querySelector('.topple') // play, pause button
const actualTime = controls.querySelector('.actual-time')
const totalTime = controls.querySelector('.total-time')
const volumeInfo = controls.querySelector('.volume')
const volumeOn = volumeInfo.querySelector('.not-muted')
const volumeMuted = volumeInfo.querySelector('.muted')
const volumeBar = controls.querySelector('.volume-bar')
const volumeUser = volumeBar.querySelector('.volume-fill-bar')
const qualityOptions = controls.querySelector('.player__quality')
const highDefinition = qualityOptions.querySelector('.high-definition')
const semiDefinition = qualityOptions.querySelector('.semi-definition')
const cinemaMode = controls.querySelector('.cinema-mode')
const fullScreen = controls.querySelector('.full-screen')



/***************************
 
     FUNCTIONS 

***************************/


// PLAY,PAUSE FUNCTIONS //

function togglePlay() {
    if (video.paused) {
        // on pause button = play video
        video.play()
    } else {
         // on play button = pause video
        video.pause()
    }
}


function updateStateButton() {
    if (video.paused) {
        // if video paused, see play icon
        topple.textContent = '►'
    } else {
        // if video played, see pause icon
        topple.textContent = '❚❚'
    }
}


// function for spacebar on document => play, pause the video
document.onkeypress = function SpaceBarToggle(event) {
    // spacebar keycode = 32
    if ((event || video.event).keyCode === 32) {
        if (video.paused) {
        // if video paused, play it
            video.play()
        } else {
        // if video played, pause it
            video.pause()
        }
    }
}


// when video finished, reload it automaticaly after 1s
setInterval(function reloadVideo() {
    if (video.currentTime == video.duration) {
        video.currentTime = 0;
        video.pause();
    }
}, 1000)



// TIMES FUNCTIONS //

// javascript time conversion function
function convertTime(timeToConvert) {
    let jsTime = Math.round(timeToConvert)

    // set minute variable
    let minutes = Math.floor(jsTime / 60)
    if (minutes >= 10) {
        minutes = minutes
    } else {
        minutes = "0" + minutes
        // example 8 minutes = 08 minutes
    }

    // set seconds variable
    let seconds = Math.floor(jsTime % 60)
    if (seconds >= 10) {
        seconds = seconds
    } else {
        seconds = "0" + seconds
        // example 8 seconds = 08 seconds
    }

    // return the convert time
    return `${minutes}:${seconds}`
    // example 8minutes and 8 seconds = 08:08
}


function videoTotalTime() {
    // convert video duration with the javascript time conversion function
    totalTime.innerHTML = convertTime(video.duration)
}


// refresh the video current time every 100ms
setInterval(function videoActualTime() {
     // convert video current time with the javascript time conversion function
    actualTime.innerHTML = convertTime(video.currentTime)
}, 100) // need to SET the refresh to 100 for have the timer directly when the page has load => 100ms



// TIME BARS FUNCTIONS //

// function of the progression of time in the progress bar (fill-bar)
function updateProgress() {
    const ratio = (video.currentTime / video.duration) * 100
    // update fill-bar
    fillBar.style.flexBasis = `${ratio}%`
}


// function for the scrub user on the progressBar, update the time according to the scrub
function scrubProgress(event) {
    const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration
    video.currentTime = scrubTime
}



// VOLUME FUNCTIONS //

// function for load the video volume on the volume bar
function LoadedPageVolume() {
    let videoVolume = video.volume
    // update volumeBar
    volumeUser.style.transform = ` scaleX(${videoVolume})`
}


// set video volume variable for isMuted and isNotMuted functions
let videoVolume = video.volume
// function for the click on the muted img
function isMuted() {
    if (video.volume > 0) {
        video.volume = 0
        // update volumeBar
        volumeUser.style.transform = ` scaleX(${0})`
    }
}


// function for the click on the not muted img
function isNotMuted() {
    if (video.volume == 0) {
        video.volume = videoVolume
        // update volumeBar
        volumeUser.style.transform = ` scaleX(${videoVolume})`
    }
}


// function for display volume img (muted and not muted img)
setInterval(function displayVolume() {
    if (video.volume == 0) {
        // display muted img
        volumeOn.classList.add('dontSee')
        volumeMuted.classList.remove('dontSee')
    } else {
        // display not muted img
        volumeMuted.classList.add('dontSee')
        volumeOn.classList.remove('dontSee')
    }
}, 100) // need to SET the refresh to 100 for have the volume img directly when the page has load => 100ms


// function for the volume set by the user
function volumeUpdate(event) {
    // set variables offset of volume-bar and player
    const volumeBarWidth = volumeBar.offsetWidth
    const volumeBarLeft = volumeBar.offsetLeft
    const playerOffsetLeft = player.offsetLeft
    let ratio = ((event.clientX - (playerOffsetLeft - volumeBarLeft)) / volumeBarWidth * 10)
    // multiplicate the resul x 10 for prepare the Math.round property
    ratio = Math.round(ratio) / 10
    ratio = ratio - 4.2
    // need to subtract 5.5 from the ratio to put the result between 0 and 1
    video.volume = ratio
    volumeUser.style.transform = ` scaleX(${ratio})`
    // need to return ratio on the videoVolume variable for the LoadedPageVolume function to avoid conflicts with changing src video when using quality buttons
    videoVolume = ratio
}



// CINEMA MODE FUNCTION //

// function for the click on the cinema mode button
function toggleCinemaMode() {
    if (isActive === false) {
        // width expand, background black color, change size of player__controls
        body.classList.add('body-cinema-mode')
        player.classList.add('player-cinema')
        controls.classList.add('player-controls-cinema')
        isActive = true
        console.log(isActive)
    } else if (isActive === true) {
        // remove the changes
        body.classList.remove('body-cinema-mode')
        player.classList.remove('player-cinema')
        controls.classList.remove('player-controls-cinema')
        isActive = false
        console.log(isActive)
    }
    // exit full screen to activate cinema mode
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
}



// FULLSCREEN FUNCTION //

function toggleFullScreen() {
    // Test if fullscreen is active
    if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) {
        // Leave fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        }
        // Fullscreen is not active
    } else {
        // Go fullscreen
        if (player.requestFullscreen) {
            player.requestFullscreen()
        } else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen()
        } else if (player.webkitRequestFullScreen) {
            player.webkitRequestFullScreen()
        }
    }
}



// QUALITY FUNCTION //

// function for the click on the Semi Definition button
function qualityVideoSD() {
    // set video time, volume variables for the source change video
    let videoTime = video.currentTime
    let videoVolume = video.volume
    video.pause()
    // change source video to get the 360p version
    video.src = 'videos/ferdinand360p.mp4'
    // put the values ​​after change
    video.volume = videoVolume
    video.currentTime = videoTime
    video.play()

}

function qualityVideoHD() {
    // set video time, volume variables for the source change video
    let videoTime = video.currentTime
    let videoVolume = video.volume
    video.pause()
    // change source video to get the 720p version
    video.src = 'videos/ferdinand720p.mp4'
        // put the values ​​after change
    video.volume = videoVolume
    video.currentTime = videoTime
    video.play()
}



/***************************
 
     EVENTS LISTERNERS 

***************************/


// PLAY,PAUSE EVENTS //

// on video click, active togglePlay
video.addEventListener('click', togglePlay)
// need to set mousedown for topple(play, pause button) to avoid a conflict with the spaceBar function
topple.addEventListener('mousedown', togglePlay)

// update icon of topple button (play, pause button)
video.addEventListener('play', updateStateButton)
video.addEventListener('pause', updateStateButton)


// TIMES EVENTS //

// load the video duration
video.addEventListener('loadeddata', videoTotalTime)



// TIME BARS EVENTS //

// update fill-bar according to the current time of the video
video.addEventListener('timeupdate', updateProgress)

progressBar.addEventListener('click', scrubProgress)
// need to create mousedown variable for possibilitys on the 'mousemove' event
let mousedown = false
progressBar.addEventListener('mousedown', () => mousedown = true)
player.addEventListener('mouseup', () => mousedown = false)
// if user mousedown and move the mouse on the player, the fill bar (contain the current time video) is updated
player.addEventListener('mousemove', (event) => mousedown && scrubProgress(event))



// VOLUME EVENT //

// set video volume on the volume bar
video.addEventListener('loadeddata', LoadedPageVolume)

// imgs volume events
volumeOn.addEventListener('click', isMuted)
volumeMuted.addEventListener('click', isNotMuted)

// volume User event
volumeBar.addEventListener('click', volumeUpdate)




// CINEMA MODE EVENT //

// need to set isActive variable for the toggleCinemaMode function
let isActive = false
cinemaMode.addEventListener('click', toggleCinemaMode)



// FULLSCREEN EVENT //

fullScreen.addEventListener('click', toggleFullScreen)



// QUALITY EVENT //

// change quality video
semiDefinition.addEventListener('click', qualityVideoSD)
highDefinition.addEventListener('click', qualityVideoHD)