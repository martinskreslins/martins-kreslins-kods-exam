import { reactive } from 'vue'
export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        this.playlist = songs;
    },
    setNowPlaying(song) {
        this.now_playing = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        let songCount = 0;
        for(album in this.playlist){
            if (this.getNowPlayingAlbumID() == album.id) {
                break;
            } else {
                songCount++;
                continue;
            }
        }
        const index = songCount;
        if (this.playlist.length > index+1) {
            return this.playlist[index+1];
        } else {
            return false;
        }
    },
    getPreviousSong() {
        let songCount = 0;
        for(album in this.playlist){
            if (this.getNowPlayingAlbumID() == album.id) {
                break;
            } else {
                songCount++;
                continue;
            }  
        }
        const index = songCount;
        if (index > 0) {
            return this.playlist[index-1];
        } else {
            return false;
        }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})
export default player;