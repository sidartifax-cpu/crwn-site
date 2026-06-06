/**
 * ============================================================
 *  CRWN — MUSIC PLAYER CONFIG
 *  Edit this file to add, remove, or change songs.
 *  All paths are relative to the root of the project.
 * ============================================================
 *
 *  HOW TO ADD A SONG:
 *  1. Drop the .mp3 file into: assets/audio/
 *  2. Drop the album art (.jpg or .png) into: assets/images/
 *  3. Copy one of the song objects below and fill in your info.
 *
 *  PURCHASE LINK:
 *  Set "purchaseUrl" to the URL of your product page,
 *  or use "#" as a placeholder until ready.
 * ============================================================
 */

const CRWN_SONGS = [
  {
    id: 1,
    title: "Song Title One",
    album: "Elevationships",
    duration: "3:24",
    // Path to your mp3 file inside assets/audio/
    audioSrc: "assets/audio/song-01.mp3",
    // Path to album art inside assets/images/
    coverArt: "assets/images/elevationships-cover.jpg",
    // Link to purchase/stream page — change to real URL when ready
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    // Preview start time in seconds (player will stop at start + 45s)
    previewStart: 0
  },
  {
    id: 2,
    title: "Song Title Two",
    album: "Elevationships",
    duration: "2:58",
    audioSrc: "assets/audio/song-02.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 3,
    title: "Song Title Three",
    album: "Elevationships",
    duration: "3:45",
    audioSrc: "assets/audio/song-03.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 4,
    title: "Song Title Four",
    album: "Elevationships",
    duration: "4:02",
    audioSrc: "assets/audio/song-04.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 5,
    title: "Song Title Five",
    album: "Elevationships",
    duration: "3:15",
    audioSrc: "assets/audio/song-05.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 6,
    title: "Song Title Six",
    album: "Elevationships",
    duration: "3:33",
    audioSrc: "assets/audio/song-06.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 7,
    title: "Song Title Seven",
    album: "Elevationships",
    duration: "2:47",
    audioSrc: "assets/audio/song-07.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 8,
    title: "Song Title Eight",
    album: "Elevationships",
    duration: "3:58",
    audioSrc: "assets/audio/song-08.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 9,
    title: "Song Title Nine",
    album: "Elevationships",
    duration: "4:10",
    audioSrc: "assets/audio/song-09.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Track — $1.29",
    previewStart: 0
  },
  {
    id: 10,
    title: "Song Title Ten",
    album: "Elevationships",
    duration: "3:22",
    audioSrc: "assets/audio/song-10.mp3",
    coverArt: "assets/images/elevationships-cover.jpg",
    purchaseUrl: "#",
    purchaseLabel: "Buy Full Album — $9.99",
    previewStart: 0
  }
];

// ============================================================
//  PLAYER SETTINGS — tweak these anytime
// ============================================================
const PLAYER_CONFIG = {
  previewDuration: 45,        // seconds before auto-stop
  autoPlayNext: false,        // play next song after preview ends
  showPreviewBadge: true,     // show "45-sec Preview" label
  currency: "USD",
  albumTitle: "Elevationships",
  artistName: "CRWN",
  // Fallback cover art if a song's coverArt file is missing
  fallbackCover: "assets/images/elevationships-cover.jpg"
};
