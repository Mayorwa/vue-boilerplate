<template>
    <div class="page">
        <Sidebar/>
        <main class="main">
            <div class="page__content">
                <Header/>
                <router-view/>
            </div>
            <BottomBar/>
        </main>
    </div>
</template>
<script>
    import Header from '@/components/board/header.vue';
    import Sidebar from '@/components/board/sidebar.vue';
    import BottomBar from '@/components/board/bottombar.vue';
    export default {
        name: 'Home',
        components: {
            Header,
            Sidebar,
            BottomBar
        }
    }
</script>
