chrome.runtime.onMessage.addListener(openSpotifyURL)

function openSpotifyURL(message, sender, sendResponse) {
    if (message.msg === "Open Spotify") {
        let artist = document.getElementById("band-name-location").firstElementChild.innerText.split(" ").join("%20")
        let album = document.getElementById("name-section").firstElementChild.innerText.split(" ").join("%20")
        sendResponse({artist: artist, album: album})
    }
}

