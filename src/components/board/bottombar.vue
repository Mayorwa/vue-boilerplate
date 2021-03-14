<template>
    <div class="bottomBar">
        <a href="/board/links" :class="routeName === 'board-links' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-link"/>
                </svg>
            </div>
        </a>
        <a href="/board/notifications" :class="routeName === 'board-notifications' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-notification"/>
                </svg>
            </div>
        </a>
        <a href="/board/overview" :class="routeName === 'board-overview' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-analytics"/>
                </svg>
            </div>
        </a>
        <a href="/board/plan" :class="routeName === 'board-plan' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-services"/>
                </svg>
            </div>
        </a>
        <a href="/board/settings" :class="routeName === 'board-settings' ? 'active' : ''" class="bottomBar_item" title="settings">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-settings"/>
                </svg>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                routeName: "",
            };
        },
        mounted() {
            this.routeName = this.$route.name;
        }
    }
</script>
