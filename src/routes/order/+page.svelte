<script lang="ts">
    import CommonPage from '$lib/components/CommonPage.svelte';
    import { theme } from '$lib/stores/theme'; // Import the theme store
    import { onMount } from 'svelte';

    const email = "webforgerstudio@gmail.com"; 
    const title = "Order"; 

    let userEmail = "";
    let orderInfo = "";
    let currentTheme: any;

    function sendOrder() {
        window.location.href = `mailto:${email}?subject=New Order&body=Email: ${userEmail}%0D%0AOrder Info: ${orderInfo}`;
    }

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
    <div class={`order-container ${currentTheme ? 'dark' : 'light'}`}>
        <h1 class="order-title">Place Your Order</h1>
        <div class="order-form">
            <label for="email">Your Email:</label>
            <input type="email" id="email" bind:value={userEmail} required>
            
            <label for="order">Order Information:</label>
            <textarea id="order" bind:value={orderInfo} required></textarea>
            
            <button class="send-button" on:click={sendOrder}>Send Order</button>
        </div>
    </div>
</CommonPage>

<style lang="scss">
    .order-container {
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

    .order-title {
        font-size: 2em; /* Adjust the size as needed */
    }

    .order-form {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 600px;
    }

    .order-form label {
        margin-top: 10px;
        font-size: 1.2em;
    }

    .order-form input,
    .order-form textarea {
        margin-top: 5px;
        padding: 10px;
        font-size: 1em;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px; /* Added to round the corners */
        border: 1px solid #ccc;
    }

    .send-button {
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

    .send-button:hover {
        background-color: #e33b00; 
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
