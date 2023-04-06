import throttle from 'lodash.throttle';

let currentTime = 0;
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    currentTime = parseFloat(savedTime);
}

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (savedTime) {
    player.setCurrentTime(currentTime)
    .then(function(seconds) {
        console.log('Player was seeked to ' + seconds + ' seconds');
    })
    .catch(function(error) {
        console.log('Error setting time:', error);
    });
}

player.on('timeupdate', function(data) {
    const currentTime = data.seconds;

    localStorage.setItem('videoplayer-current-time', currentTime);
});

const saveCurrentTime = throttle(() => {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch((error) => {
        console.log('Error getting current time:', error);
    });
}, 1000);

player.on('play', function () {
    saveCurrentTime();
});

