import { reactive } from 'vue';
// TE DEFINĒT USER OBJEKTU
let user = {
    name: "Mārtiņš",
    surname: "Krēsliņš",
    code: "IT20045",
    favorite_songs: []
}

export const auth = reactive({
    
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        name = user.name;
        surname = user.surname;
        code = user.code;
    },

    authenticate(email, password) {
        if (email == "martins.kreslins@va.lv" && password == "123456") {
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.push({path: "/"});

        } else {
            return false;
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.push({ path: "/login" });
    },

    toggleFavorite(songID) {
        if (this.user.favorite_songs.includes(songID)) {
            this.user.favorite_songs.splice(user.favorite_songs.indexOf(songID), 1);
        } else if (!this.user.favorite_songs.includes(songID)) {
            this.user.favorite_songs.push(songID);
        }
    },

    getFavoriteSongs() {
        return this.user.favorite_songs;
    }
});
