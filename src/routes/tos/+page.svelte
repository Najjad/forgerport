<script lang='ts'>
    import CommonPage from '$lib/components/CommonPage.svelte';
    import { theme } from '$lib/stores/theme'; 

    const title = 'Terms of Service';
    let currentTheme: boolean;

    theme.subscribe(value => {
        currentTheme = value;
    });
</script>

<CommonPage {title}>
    <div class={`tos-container ${currentTheme ? 'dark' : 'light'}`}>
        <h1 class="contact-title">These are our Terms of Service for all projects, </h1>
    </div>

    <div class="tos-text"> 
        <p class="tos-writing">TOS GOES HERE </p>
        <p class="tos-writing">Term 1, ONLY andrew tate watchers can order </p>
    </div>
</CommonPage>

<style lang="scss">
    .tos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; 
        padding-top: 50px; 
        width: 100%;
        font-family: Arial, sans-serif;
        text-align: center;
        height: auto; 
    }

    .tos-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px; 
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .tos-writing {
        font-size: 1.5em; 
        margin: 5px 0; 
    }

    .dark {
        background-color: #000; 
        color: #fff;
    }

    .light {
        background-color: #fff; 
        color: #000;
    }
</style>
