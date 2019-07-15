
function openSpotifyTab(response) {
    chrome.tabs.create({url: `https://open.spotify.com/search/results/${response.album} ${response.artist}`})
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {msg: "Open Spotify"}, openSpotifyTab)
})