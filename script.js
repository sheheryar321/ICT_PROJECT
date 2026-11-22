
const music = {
    Happy: [
        ["Happy", "Pharrell Williams"],
        ["Good Life", "OneRepublic"],
        ["Can't Stop the Feeling", "Justin Timberlake"]
    ],
    Sad: [
        ["Someone You Loved", "Lewis Capaldi"],
        ["Let Her Go", "Passenger"],
        ["Arcade", "Duncan Laurence"]
    ],
    Chill: [
        ["Sunset Lover", "Petit Biscuit"],
        ["Ocean Eyes", "Billie Eilish"],
        ["Night Changes", "One Direction"]
    ],
    Energetic: [
        ["Believer", "Imagine Dragons"],
        ["Stronger", "Kanye West"],
        ["Thunder", "Imagine Dragons"]
    ],
    Romantic: [
        ["Perfect", "Ed Sheeran"],
        ["All of Me", "John Legend"],
        ["A Thousand Years", "Christina Perri"]
    ]

};
function showSongs(mood){
    let output = "";

    if (!music[mood]){
        alert("Mood not found!");
        return;
    }
    document.getElementById("heading").innerHTML = mood + " Songs For You 🎵";
    for (let i = 0; i < music[mood].length; i++){
        let songName = music[mood][i][0];
        let artist = music[mood][i][1];
        let search = encodeURIComponent(songName + " " + artist);
        output += `
            <div class="song">
                <div class="song-emoji">🎵</div>
                <h3>${songName}</h3>
                <p>Artist: ${artist}</p>
                <a href="https://open.spotify.com/search/${search}"
                   target="_blank">
                   ▶ Listen on Spotify
                </a>

            </div>
        `;
    }
    document.getElementById("songs").innerHTML = output;

}
console.log("MoodWave JavaScript is working!");
