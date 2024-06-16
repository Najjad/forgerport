<script lang="ts">
    import CommonPage from '$lib/components/CommonPage.svelte';
    import { theme } from '$lib/stores/theme'; // Import the theme store
    import { onMount } from 'svelte';

    const email = "webforgerstudio@gmail.com"; 
    const title = "Contact"; 

    let currentTheme: any;

    // Subscribe to the theme store
    onMount(() => {
        const unsubscribe = theme.subscribe(value => {
            currentTheme = value;
        });

        return () => {
            unsubscribe();
        };
    });
</script>

<CommonPage {title}>
    <div class={`contact-container ${currentTheme ? 'dark' : 'light'}`}>
        <h1 class="contact-title">Would you like to get in touch?</h1>
        <a href={`mailto:${email}`} class="contact-button">Contact Us</a>
    </div>

    <div class="contact-please"> 
        <p class="contact-text">Contact us for any inquiries, </p>
        <p class="contact-text">we can discuss your vision, pricing, and much more!</p>
    </div>
</CommonPage>

<style lang="scss">
    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; 
        padding-top: 50px; 
        width: 100%;
        font-family: Arial, sans-serif;
        text-align: center;
        height: auto; /* Changed from calc(100vh - 100px) to auto */
    }

    .contact-title {
        font-size: 2em; /* Adjust the size as needed */
    }

    .contact-button {
        background-color: #ff3e00; 
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 20px 0;
        cursor: pointer;
        border-radius: 4px;
    }

    .contact-button:hover {
        background-color: #e33b00; 
    }

    .contact-please {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px; /* Add padding if needed */
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .contact-text {
        font-size: 1.5em; /* Adjust the size as needed */
        margin: 5px 0; /* Add some margin for spacing */
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
