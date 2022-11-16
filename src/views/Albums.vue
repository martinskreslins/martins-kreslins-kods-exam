<script>
export default{
    data(){
        return{
            inGrid: false,
            inList: false,
        }
    }
}
</script>
<template>
    <div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" @click="inGrid = !inGrid" v-bind:class = "inGrid?'active':'inactive'"><IconGrid></IconGrid></button>
            <button id="btn-list" @click="inList = !inList" v-bind:class = "inList?'active':'inactive'"><IconList></IconList> </button>
        </div>
    </div>
    <ul id="list-albums" v-bind:class = "inGrid?'active':'inactive'">
        <li class="album">
            <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
            <div class="album-info">
                <h4 id="txt-album-name">We May Grow Old But We Never Grow Up</h4>
                <p id="txt-album-artists">Example</p>
                <div class="album-year">
                    <p id="txt-album-year">2022</p>
                    <p id="txt-album-tracks">2</p>
                </div>
            </div>
        </li>
    </ul>
    </div>
</template>