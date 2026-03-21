class Song {
    constructor(title, artist, plays, image) {
      this.title = title;
      this.artist = artist;
      this.plays = plays;
      this.image = image;
    }
}
const song1 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song2 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song3 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song4 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song5 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song6 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song7 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song8 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song9 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song10 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song11 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const song12 = new Song(
    "Looming Thread",
    "Yoshimasa Terui",
    "6.7M plays",
    "https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg"
);
const songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12];
const container = document.getElementById("song-list");

songs.forEach(song => {
  const div = document.createElement("div");

  div.className = "song";

  div.innerHTML = `
    <img src="${song.image}">
    <div>
      <div class="title">${song.title}</div>
      <div class="artist">${song.artist} • ${song.plays}</div>
    </div>
  `;

  container.appendChild(div);
});