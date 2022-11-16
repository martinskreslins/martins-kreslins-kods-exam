<script>
import songs from '../data/songs'
import player from '../stores/player'
export default {
    data(){
        return{
            songs,
            player,
            search: "",
            show_favorites: false,
            title_state: 1,
            duration_state: 1,
            delay: 500,
            clicks: 0,
            timer: null,
            selectedIndex: -1,
            str: "",
        }

    },
    computed:{
        filtered_songs: {
            get(){
                return this.songs;
            },
        }
    },
    methods:{
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },
        changeTitleState(){
            this.title_state == 3 ? this.title_state = 1 : this.title_state++; 
        },
        changeDurationState(){
            this.duration_state == 3 ? this.duration_state = 1 : this.duration_state++; 
        },
        sortBy(sortParam){
            if (sortParam == 2){
                alert("sorting a-z");
            } else if (sortParam == 3){
                alert("sorting z-a");
            }
        },
        selectSong(song, songIndex){
            this.clicks++
          if(this.clicks === 1) {
            var self = this
            this.timer = setTimeout(function() {
                alert(song.name + " is selected");
              self.clicks = 0;
            }, this.delay);
          } else{
             clearTimeout(this.timer); 
             alert(song.name + " is playing");
             this.clicks = 0;
          }   
        },
    }
}
</script>
<template>
    <div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input id="input-search" v-model="search" placeholder="Search by title..." />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" v-bind:class = "show_favorites?'active':'inactive'" @click="show_favorites = !show_favorites" >Show Favorites</button>
        </div>
    </div>
    <div class="wrapper-songs">
        <table cellspacing="0" cellpadding="0">
            <tr ref="header">
                <th id="th-id" >#</th>
                <th id="th-title"  @click="changeTitleState(), sortBy(title_state)" v-bind:class = "title_state > 1 ?'active':'inactive'">
                    Title
                    <IconCaretUp v-if="title_state == 2"/>
                    <IconCaretUp class="flip-vertical" v-else-if="title_state == 3"/>
                </th>
                <th id="th-artist">Artist</th>
                <th id="th-album">Album</th>
                <th id="th-duration" @click="changeDurationState(), sortBy(duration_state)" v-bind:class = "duration_state > 1 ?'active':'inactive'">
                    Duration
                    <IconCaretUp v-if="duration_state == 2"/>
                    <IconCaretUp class="flip-vertical" v-else-if="duration_state == 3"/>
                </th>
            </tr>
            <!-- Loop goes on this <tr> element -->
            <tr class="song" @click="selectSong(song, index), selectedIndex = index" v-for="(song, index) in filtered_songs" :key="index" v-bind:class = "selectedIndex == index ?'active':'song'" >
                <td id="td-index">
                    <IconPlay v-if="selectedIndex == index"/>
                    <span id="txt-index" v-if="selectedIndex != index">{{index + 1}}</span>
                </td>
                <td id="td-title">
                    <img v-bind:src="song.album.images[1].url" />
                    {{song.name}}
                </td>
                <td id="td-artist" >{{song.album.artists[0].name}}</td>
                <td id="td-album">{{song.album.name}}</td>
                <td id="td-duration">
                    {{parseInt(song.duration_ms/60000) + ":" + parseInt(song.duration_ms/10000)}}
                    <IconHeart />
                </td>
            </tr>
        </table>
    </div>
</div>
</template>