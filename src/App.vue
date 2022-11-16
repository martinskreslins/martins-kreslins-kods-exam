<template>
    <div v-if="localStorage"><Header></Header></div>
    
    <div id="section-body">
        <div v-if="localStorage">
            <NavigationComponent></NavigationComponent>
        </div>
        <router-view class="section-router"></router-view>
    </div>
    <div v-if="localStorage">
        <div id="section-player">
            <AudioPlayer />
        </div>
    </div>
</template>
