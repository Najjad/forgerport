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
        <p class="tos-writing"><strong>Effective Date: June 2024 - June 2025</strong></p>
        
        <h2 class="tos-header">1. Introduction</h2>
        <p class="tos-writing">WebForger Studio ("we", "us", "our") provides website development and related services ("Services"). These Terms of Service ("Terms") govern your use of our Services.</p>
        
        <h2 class="tos-header">2. Scope of Services</h2>
        <p class="tos-writing">We provide a range of web development services including but not limited to:</p>
        <ul class="tos-writing">
            <li>Website design and development</li>
            <li>Website maintenance</li>
            <li>Hosting services</li>
            <li>SEO and digital marketing</li>
        </ul>
        
        <h2 class="tos-header">3. Payment Terms</h2>
        <p class="tos-writing"><strong>Initial Payment:</strong> An initial deposit is required before the commencement of any project.</p>
        <p class="tos-writing"><strong>Monthly Payments:</strong> For ongoing services such as hosting, clients are required to make monthly payments by the specified due date.</p>
        <p class="tos-writing"><strong>Late Payments:</strong> If payments are not received within a reasonable period after the due date, we reserve the right to suspend services, including disabling access to your website until payment is made.</p>
        
        <h2 class="tos-header">4. Service Suspension</h2>
        <p class="tos-writing"><strong>Non-payment:</strong> In the event of non-payment, WebForger Studio reserves the right to disable your website until outstanding payments are received. Notification will be sent prior to suspension.</p>
        <p class="tos-writing"><strong>Violation of Terms:</strong> Any violation of these Terms may also result in suspension or termination of Services.</p>
        
        <h2 class="tos-header">5. Client Responsibilities</h2>
        <p class="tos-writing"><strong>Content:</strong> Clients are responsible for providing all content, images, and other materials required for the project.</p>
        <p class="tos-writing"><strong>Access:</strong> Clients must provide access to any necessary accounts, hosting, and other technical resources required to perform the Services.</p>
        
        <h2 class="tos-header">6. Intellectual Property</h2>
        <p class="tos-writing"><strong>Ownership:</strong> Upon full payment, the client will own the rights to the website design and any custom code created by WebForger Studio. We reserve the right to showcase the completed project in our portfolio.</p>
        <p class="tos-writing"><strong>Third-party Software:</strong> Any third-party software or components will remain the property of their respective owners and subject to their licenses.</p>
        
        <h2 class="tos-header">7. Warranties and Liabilities</h2>
        <p class="tos-writing"><strong>Warranties:</strong> WebForger Studio makes no warranties or guarantees regarding the success of any project. All services are provided "as is".</p>
        <p class="tos-writing"><strong>Liability:</strong> In no event shall WebForger Studio be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our Services.</p>
        
        <h2 class="tos-header">8. Termination</h2>
        <p class="tos-writing"><strong>Termination by Client:</strong> Clients may terminate the agreement at any time by providing written notice. Any payments made are non-refundable.</p>
        <p class="tos-writing"><strong>Termination by WebForger Studio:</strong> We reserve the right to terminate the agreement if the client fails to comply with these Terms.</p>
        
        <h2 class="tos-header">9. Confidentiality</h2>
        <p class="tos-writing">We agree to keep all client information confidential and will not disclose any information without the client's consent, except as required by law.</p>
        
        <h2 class="tos-header">10. Amendments</h2>
        <p class="tos-writing">WebForger Studio reserves the right to amend these Terms at any time. Clients will be notified of any changes, and continued use of our Services constitutes acceptance of the new terms.</p>
        
        <p class="tos-writing">By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>

        <p class="tos-footer">All rights reserved © 2024 WebForger LLC.</p>
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
        justify-content: center;
        padding-top: 20px; 
        font-family: Arial, sans-serif;
        text-align: left; 
        width: 80%; 
        margin: 0 auto;
    }

    .tos-writing {
        font-size: 1.2em; 
        margin: 10px 0; 
        line-height: 1.5; 
    }

    .tos-header {
        font-size: 2.0em; 
        margin: 10px 0; 
        line-height: 1.0; 
    }

    .tos-text ul {
        list-style-type: disc;
        padding-left: 20px;
    }

    .tos-footer {
        font-size: 1em;
        text-align: center;
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