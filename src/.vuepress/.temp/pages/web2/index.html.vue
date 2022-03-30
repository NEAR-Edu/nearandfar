<template><h1 id="_3-you-and-web2-0" tabindex="-1"><a class="header-anchor" href="#_3-you-and-web2-0" aria-hidden="true">#</a> 3. You and Web2.0</h1>
<hr>
<h2 id="the-internet-is-not-the-web" tabindex="-1"><a class="header-anchor" href="#the-internet-is-not-the-web" aria-hidden="true">#</a> The Internet is <em>not</em> the Web</h2>
<ul>
<li>neighborhood layout vs block parties</li>
<li>infrastructure vs information</li>
<li>highway vs rush hour (and billboards and bus rides...)</li>
<li><em>network</em> <strong>interfaces</strong> vs <em>web</em> <strong>interfaces</strong></li>
</ul>
<p>:::info</p>
<h4 id="thinking-face-what-happened-to-web1-0" tabindex="-1"><a class="header-anchor" href="#thinking-face-what-happened-to-web1-0" aria-hidden="true">#</a> :thinking_face: what happened to Web1.0?</h4>
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
<p>:::</p>
<hr>
<h3 id="the-web-is-the-information-users-access-on-the-internet" tabindex="-1"><a class="header-anchor" href="#the-web-is-the-information-users-access-on-the-internet" aria-hidden="true">#</a> the web is the information users access on the internet</h3>
<ul>
<li>it's the mail that is delivered to houses in your neighborhood</li>
</ul>
<h4 id="web-interfaces-applications-and-browsers" tabindex="-1"><a class="header-anchor" href="#web-interfaces-applications-and-browsers" aria-hidden="true">#</a> web <em>interfaces</em> = applications and browsers</h4>
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
<h4 id="the-web-is-servers-and-clients" tabindex="-1"><a class="header-anchor" href="#the-web-is-servers-and-clients" aria-hidden="true">#</a> the Web is servers and clients</h4>
<ul>
<li>servers and clients are computers</li>
<li>servers are the <em>back</em> end of the web</li>
<li>clients are the <em>front</em> end of the web</li>
<li>clients make requests to servers</li>
<li>servers listen and respond to requests from clients</li>
<li>servers talk to other servers on behalf of clients</li>
</ul>
<p>:::info</p>
<h4 id="thinking-face-how-do-servers-listen" tabindex="-1"><a class="header-anchor" href="#thinking-face-how-do-servers-listen" aria-hidden="true">#</a> :thinking_face: how do servers &quot;listen&quot;?</h4>
<p>Servers use <strong>ports</strong> to listen for events. Ports are like your mailbox. Your mailbox isn't your address, but it's where you send and receive mail. Ports are like a server's mailbox.</p>
<p>:::</p>
<hr>
<h4 id="servers-are-everywhere" tabindex="-1"><a class="header-anchor" href="#servers-are-everywhere" aria-hidden="true">#</a> servers are everywhere</h4>
<ul>
<li>your keyboard sends requests to the input server running on your computer that listens and responds to every key you press</li>
<li>your dog's smart collar is a server</li>
<li>servers just need a port so they can listen and respond to requests</li>
<li>web servers are servers that use web protocols like &quot;http&quot;</li>
</ul>
<hr>
<p>:::info</p>
<h4 id="thinking-face-why-are-appliances-becoming-smart-now" tabindex="-1"><a class="header-anchor" href="#thinking-face-why-are-appliances-becoming-smart-now" aria-hidden="true">#</a> :thinking_face: why are appliances becoming &quot;smart&quot; now?</h4>
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
<p>:::</p>
<hr>
<h4 id="the-web-is-organized-and-designed-for-user-experience-u-x" tabindex="-1"><a class="header-anchor" href="#the-web-is-organized-and-designed-for-user-experience-u-x" aria-hidden="true">#</a> the web is <em>organized</em> and <em>designed</em> for user experience (U/X)</h4>
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
<li><strong>modular</strong> design breaks the page into the tiniest, customizable components or web resources
<ul>
<li>it allows flexibility in deployment, arrangement, and customization
<ul>
<li>a web app is composed of different scripts, libraries, smaller apps, etc., but can be deployed as a single entity, and therefore follows this idea of modularity</li>
</ul>
</li>
<li>granular control</li>
<li>web pages grow / shrink responsively to screen size and device type</li>
</ul>
</li>
</ul>
<hr>
<h3 id="data-and-the-web" tabindex="-1"><a class="header-anchor" href="#data-and-the-web" aria-hidden="true">#</a> data and the web</h3>
<hr>
<h4 id="data-is-broken-down-and-passes-back-and-forth-between-your-computer-and-multiple-servers" tabindex="-1"><a class="header-anchor" href="#data-is-broken-down-and-passes-back-and-forth-between-your-computer-and-multiple-servers" aria-hidden="true">#</a> <strong>data</strong> is broken down and passes back and forth between your computer and multiple servers</h4>
<p>:::info</p>
<p>if I want to send you a postcard, but I have so much to tell you that I have to write it out across 10 postcards, I might number each postcard in case they don't all get delivered at the same time, so you can reconstruct them in the right order once they all arrive</p>
<p>:::</p>
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
<hr>
<h2 id="your-identity-and-the-web" tabindex="-1"><a class="header-anchor" href="#your-identity-and-the-web" aria-hidden="true">#</a> your <em>identity</em> and the web 🤳</h2>
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
<h3 id="ownership-and-the-web" tabindex="-1"><a class="header-anchor" href="#ownership-and-the-web" aria-hidden="true">#</a> <em>ownership</em> and the web 🔑</h3>
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
<h3 id="the-structure-of-the-web" tabindex="-1"><a class="header-anchor" href="#the-structure-of-the-web" aria-hidden="true">#</a> the <em>structure</em> of the web 🏛️</h3>
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
