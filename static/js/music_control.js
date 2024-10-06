const ap = new APlayer({
    container: document.getElementById('aplayer'),
    loop: 'all',
    lrcType: 3,
    audio: {
        name: '最长的电影',
        artist: '张天赋',
        url: 'https://raw.githubusercontent.com/fenglingback/My-Music/main/songs/%E6%9C%80%E9%95%BF%E7%9A%84%E7%94%B5%E5%BD%B1.mp3',
        lrc: 'https://raw.githubusercontent.com/fenglingback/My-Music/main/lrc/%E6%9C%80%E9%95%BF%E7%9A%84%E7%94%B5%E5%BD%B1.lrc'
    }
});

document.querySelector(".aplayer-pic").remove();
document.querySelector(".aplayer-controller").remove();
document.querySelector(".aplayer-miniswitcher").remove();

const controlbar = document.createElement("div");

controlbar.classList.add("controlbar");


const backIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-back">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M20 5v14l-12 -7z" />
<path d="M4 5l0 14" />
</svg>`;

const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 4v16l13 -8z" />
</svg>`;

const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
<path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>`;

const nextIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-forward">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 5v14l12 -7z" />
<path d="M20 5l0 14" />
</svg>`;


controlbar.innerHTML = `
    <div class="back">${backIcon}</div>
    <div class="toggle">${playIcon}</div>
    <div class="next">${nextIcon}</div>
`;

document.querySelector(".aplayer-info").appendChild(controlbar)


document.querySelector(".back").addEventListener("click", () => {
    ap.skipBack();
});

document.querySelector(".toggle").addEventListener("click", () => {
    ap.toggle();
});

document.querySelector(".next").addEventListener("click", () => {
    ap.skipForward();
});


ap.on('playing', () => {
    document.querySelector(".toggle").innerHTML = pauseIcon;
    document.querySelector(".controlbar").style.setProperty("display", "none", "important");
    document.querySelector(".aplayer-lrc").style.setProperty("display", "block", "important");
});

ap.on('pause', function () {
    document.querySelector(".toggle").innerHTML = playIcon;
    document.querySelector(".controlbar").style.setProperty("display", "flex", "important");
    document.querySelector(".aplayer-lrc").style.setProperty("display", "none", "important");
})

document.querySelector(".aplayer-lrc").addEventListener("click", () => {
    if (ap.audio.paused === false) {
        document.querySelector(".controlbar").style.setProperty("display", "flex", "important");
        document.querySelector(".aplayer-lrc").style.setProperty("display", "none", "important");
    }

    setTimeout(() => {
        if (ap.audio.paused) {
            document.querySelector(".controlbar").style.setProperty("display", "flex", "important");
            document.querySelector(".aplayer-lrc").style.setProperty("display", "none", "important");
        } else {
            document.querySelector(".controlbar").style.setProperty("display", "none", "important");
            document.querySelector(".aplayer-lrc").style.setProperty("display", "block", "important");
        }
    }, 3000);

})
