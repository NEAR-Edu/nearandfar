<template><h1 id="_3-you-and-web2-0" tabindex="-1"><a class="header-anchor" href="#_3-you-and-web2-0" aria-hidden="true">#</a> 3. You and Web2.0</h1>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_intro.png')" alt="web 2 intro" class="slide">
</div>
<hr>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_web2.png')" alt="web1 vs web2" class="slide">
</div>
<ul>
<li>neighborhood layout vs block parties</li>
<li>infrastructure vs information</li>
<li>highway vs rush hour (and billboards and bus rides...)</li>
<li><em>network</em> <strong>interfaces</strong> vs <em>web</em> <strong>interfaces</strong></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">what about web 1??</p>
<ul>
<li>Web1.0 worked like a giant encyclopedia</li>
<li>it can be considered a content delivery network (CDN)
<ul>
<li>content was simply delivered to your computer</li>
<li><em>generally</em> you couldn't update the information served to you.</li>
</ul>
</li>
<li>Web2.0 extended how the web was used by allowing users to &quot;interact&quot; more with the web
<ul>
<li>think of the book &quot;Tarzan&quot; vs the book &quot;Choose your own adventure: Tarzan&quot; (or &quot;MadLibs: Tarzan&quot;)</li>
</ul>
</li>
</ul>
</div>
<hr>
<h3 id="the-web-is-the-information-users-access-on-the-internet" tabindex="-1"><a class="header-anchor" href="#the-web-is-the-information-users-access-on-the-internet" aria-hidden="true">#</a> The web is the information users access on the internet</h3>
<ul>
<li>it's the mail that is delivered to houses in your neighborhood</li>
</ul>
<h4 id="web-interfaces-applications-and-browsers" tabindex="-1"><a class="header-anchor" href="#web-interfaces-applications-and-browsers" aria-hidden="true">#</a> Web <em>interfaces</em> = applications and browsers</h4>
<ul>
<li>application interfaces interpret each other's instructions
<ul>
<li>Application Programming Interface (<strong>API</strong>)
<ul>
<li>APIs are each application's <strong>interpreter</strong> when other applications talk to them</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h4 id="the-web-is-servers-and-clients" tabindex="-1"><a class="header-anchor" href="#the-web-is-servers-and-clients" aria-hidden="true">#</a> The Web is servers and clients</h4>
<ul>
<li>servers and clients are computers</li>
<li>servers are the <em>back</em> end of the web</li>
<li>clients are the <em>front</em> end of the web</li>
<li>clients make requests to servers</li>
<li>servers listen and respond to requests from clients</li>
<li>servers talk to other servers on behalf of clients</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">How do servers "listen"?</p>
<p>Servers use <strong>ports</strong> to listen for events. Ports are like your mailbox. Your mailbox isn't your address, but it's where you send and receive mail. Ports are like a server's mailbox.</p>
</div>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_servers-everywhere.png')" alt="web 2 intro" class="slide">
</div>
<ul>
<li>your keyboard sends requests to the input server running on your computer that listens and responds to every key you press</li>
<li>your dog's smart collar is a server</li>
<li>servers just need a port so they can listen and respond to requests</li>
<li>web servers are servers that use web protocols like &quot;http&quot;</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">why are appliances becoming "smart" now?</p>
<ul>
<li>more and more consumer goods now have tiny servers in them</li>
</ul>
<h5 id="for-example" tabindex="-1"><a class="header-anchor" href="#for-example" aria-hidden="true">#</a> for example:</h5>
<ul>
<li>alexa listens to me say &quot;turn off lights&quot;
<ul>
<li>her microphone receives my sound vibrations
<ul>
<li>it transduces my command to bytecode her api can understand</li>
</ul>
</li>
</ul>
</li>
<li>alexa converts the bytecode of my request to a signal that my smart bulb's API can hear.
<ul>
<li>my smart bulb's server has been listening for any requests to its API all day</li>
</ul>
</li>
<li>my smart bulb receives the request and routes it to a function that executes the turning off of the bulb</li>
<li>this networking of objects with tiny servers in our homes is called the Internet of Things (<strong>IoT</strong>)</li>
</ul>
</div>
<hr>
<h3 id="the-web-is-organized-and-designed-for-user-experience-u-x" tabindex="-1"><a class="header-anchor" href="#the-web-is-organized-and-designed-for-user-experience-u-x" aria-hidden="true">#</a> The web is <em>organized</em> and <em>designed</em> for user experience (U/X)</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_evolve.png')" alt="web 1 to web2 evolution" class="slide">
</div>
<ul>
<li>WordPress used to be the convention for web design
<ul>
<li>each page was a pre-designed template
<ul>
<li>limited control of layout</li>
<li>all pages looked / behaved the same</li>
</ul>
</li>
</ul>
</li>
</ul>
<!-- - **modular** design breaks the page into the tiniest, customizable components or web resources -->
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_mod.png')" alt="web 2 modularity" class="slide">
</div>
<ul>
<li>it allows flexibility in deployment, arrangement, and customization
<ul>
<li>a web app is composed of different scripts, libraries, smaller apps, etc., but can be deployed as a single entity, and therefore follows this idea of modularity</li>
</ul>
</li>
<li>granular control</li>
<li>web pages grow / shrink responsively to screen size and device type</li>
</ul>
<hr>
<h3 id="data-and-the-web" tabindex="-1"><a class="header-anchor" href="#data-and-the-web" aria-hidden="true">#</a> Data and the web</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_data-st.jpg')" alt="Data from Star Trek" class="slide">
</div>
<hr>
<h4 id="data-is-broken-down-and-passes-back-and-forth-between-your-computer-and-multiple-servers" tabindex="-1"><a class="header-anchor" href="#data-is-broken-down-and-passes-back-and-forth-between-your-computer-and-multiple-servers" aria-hidden="true">#</a> <strong>Data</strong> is broken down and passes back and forth between your computer and multiple servers</h4>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_data-flow.gif')" alt="web2 data flow">
</div>
<div class="custom-container tip"><p class="custom-container-title">web data as postcards</p>
<p>if I want to send you a postcard, but I have so much to tell you that I have to write it out across 10 postcards, I might number each postcard in case they don't all get delivered at the same time, so you can reconstruct them in the right order once they all arrive</p>
</div>
<ul>
<li>
<p><strong>data in motion</strong> 🏃</p>
<ul>
<li>data broken into smaller web packets that travel between client and server(s)
<ul>
<li>if a packet says it's number 4 in a list of packets, and your computer hasn't seen number 3 yet then your data waits until the other packets arrive before it gets reassembled</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>data at rest</strong> 😴</p>
<ul>
<li>local storage
<ul>
<li>data stored in your browser with no expiration</li>
</ul>
</li>
<li>session storage
<ul>
<li>data cached in your browser until you close the browser window</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h3 id="time-and-the-web" tabindex="-1"><a class="header-anchor" href="#time-and-the-web" aria-hidden="true">#</a> <em>time</em> and the web 🕐</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_time-diag.png')" alt="web2 time diagrams">
</div>
<ul>
<li>&quot;trusting&quot; what a server somewhere in the world tells us is the correct time</li>
<li>UCT solution - time based on the Sun and Earth's rotation
<ul>
<li>needs mass adoption</li>
<li>impractical that noon UCT would mean noon all around the world</li>
</ul>
</li>
<li>faster connections make syncing time more and more difficult
<ul>
<li>bad things can and do happen on the web in a blink of an eye</li>
</ul>
</li>
</ul>
<hr>
<h2 id="your-relationship-with-the-web" tabindex="-1"><a class="header-anchor" href="#your-relationship-with-the-web" aria-hidden="true">#</a> Your Relationship with the Web</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_relate.jpg')" alt="people with smart phones">
</div>
<h3 id="identity" tabindex="-1"><a class="header-anchor" href="#identity" aria-hidden="true">#</a> <em>Identity</em> 🤳</h3>
<div class="asset-container" style="position:relative;">
    <img :src="$withBase('/images/course/web2_map-1.jpg')" alt="google maps" style="position:absolute; left:1%;width: 35%; transform: rotate(-15deg);border:1px solid blue;">
    <img :src="$withBase('/images/course/web2_sl_comic.png')" alt="comic about the modern web" class="slide">
    <img :src="$withBase('/images/course/web2_map-2.jpg')" alt="google maps" style="position:absolute;right:1%;width: 35%; transform: rotate(15deg);border:1px solid blue;">
</div>
<ul>
<li>
<p>you are your <em>activity</em> on the web</p>
<ul>
<li>your browser history</li>
<li>requests coming from your IP address</li>
<li>your activity in and accross other web apps (shared data)</li>
</ul>
</li>
<li>
<p>your email is your <em>main</em> source of identity</p>
<ul>
<li>it relies on a web mail protocols to function</li>
<li>you can use it to log into numerous web apps</li>
<li>password <em>plus</em> information from another device (2FA) required for identity verification</li>
</ul>
</li>
<li>
<p>access to your identity is at the mercy of internet service providers and app owners</p>
<ul>
<li>Twitter can lock you out of your account</li>
<li>your ISP can shut your internet access at any point
<ul>
<li>new internet plan? no problem - except now your router is no longer compatable, and you'll need to upgrade that before you service is restored :woman-shrugging:</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h3 id="ownership" tabindex="-1"><a class="header-anchor" href="#ownership" aria-hidden="true">#</a> <em>Ownership</em> 🔑</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_own.png')" alt="Facebook owns your data" class="slide">
</div>
<h4 id="you-don-t-own-your-data" tabindex="-1"><a class="header-anchor" href="#you-don-t-own-your-data" aria-hidden="true">#</a> you don't own your data</h4>
<ul>
<li>your data (activity history) is being sold constantly
<ul>
<li>you don't make a dime from it</li>
</ul>
</li>
<li>cloud admins can delete any data you store on it</li>
<li>your accounts can be taken offline with just a few strokes</li>
<li>Instagram can use any pics you posted any way they want</li>
<li>it only takes a handful of people to completely block your access to any digital assets you &quot;own&quot;</li>
</ul>
<hr>
<h3 id="structure-of-the-web" tabindex="-1"><a class="header-anchor" href="#structure-of-the-web" aria-hidden="true">#</a> <em>Structure</em> of the web 🏛️</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_struct.png')" alt="Bezos controls web2" class="slide">
</div>
<ul>
<li>
<p>The modern web is distributed in a <em>centralized</em> way</p>
<ul>
<li><em>distributed</em> networks managed by handful of tech companies</li>
<li>very few points of failure can bring entire regions offline</li>
</ul>
</li>
<li>
<p>The modern web is <em>very</em> centralized</p>
<ul>
<li>4 big box stores to shop at</li>
<li>monopolies mean that fewer and fewer people hold the keys to the kingdom</li>
</ul>
</li>
</ul>
<hr>
</template>

<style lang="sass">
.asset-container
    display: flex
    justify-content: center
    align-items: center
    margin: 1rem

.asset-container img 
    width: 100%
    max-width: 450px

.asset-container img.slide 
    width: 100%
    max-width: 80vw

.asset-container img.flex-multi-row
    width: 100%
    max-width: 30%

@keyframes flickerAnimation 
    0%   
        opacity:1
    50%  
        opacity:0
    100% 
        opacity:1

@-o-keyframes flickerAnimation
    0%   
        opacity:1
    50%  
        opacity:0
    100% 
        opacity:1

@-moz-keyframes flickerAnimation
    0%       
        opacity:1
    50%  
        opacity:0
    100% 
        opacity:1

@-webkit-keyframes flickerAnimation
    0%   
        opacity:1
    50%  
        opacity:0
    100% 
        opacity:1

.animate-flicker 
   -webkit-animation: flickerAnimation 3s infinite
   -moz-animation: flickerAnimation 3s infinite
   -o-animation: flickerAnimation 3s infinite
    animation: flickerAnimation 3s infinite

</style>
