---
next: '/web3/'
---
<!-- 
<ClientOnly>
  <SheildDetect/> 
</ClientOnly> -->

# 3. You and Web2.0

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_intro.png')" alt="web 2 intro" class="slide">
</div>

----
## Introduction

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_web2.png')" alt="web1 vs web2" class="slide">
</div>

- neighborhood layout vs block parties
- infrastructure vs information
- highway vs rush hour (and billboards and bus rides...)
- _network_ **interfaces** vs _web_ **interfaces**

::: tip what about web 1??

- Web1.0 worked like a giant encyclopedia
- it can be considered a content delivery network (CDN)
    - content was simply delivered to your computer
    - _generally_ you couldn't update the information served to you.
- Web2.0 extended how the web was used by allowing users to "interact" more with the web
    - think of the book "Tarzan" vs the book "Choose your own adventure: Tarzan" (or "MadLibs: Tarzan")

:::

----

### The web is the information users access on the internet
- it's the mail that is delivered to houses in your neighborhood

#### Web _interfaces_ = applications and browsers
- application interfaces interpret each other's instructions
    - Application Programming Interface (**API**)
        - APIs are each application's **interpreter** when other applications talk to them 
    
----

#### The Web is servers and clients
- servers and clients are computers
- servers are the _back_ end of the web
- clients are the _front_ end of the web
- clients make requests to servers
- servers listen and respond to requests from clients 
- servers talk to other servers on behalf of clients

::: tip How do servers "listen"?

Servers use **ports** to listen for events. Ports are like your mailbox. Your mailbox isn't your address, but it's where you send and receive mail. Ports are like a server's mailbox.

:::

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_servers-everywhere.png')" alt="web 2 intro" class="slide">
</div>


- your keyboard sends requests to the input server running on your computer that listens and responds to every key you press
- your dog's smart collar is a server
- servers just need a port so they can listen and respond to requests
- web servers are servers that use web protocols like "http"


::: tip why are appliances becoming "smart" now?

- more and more consumer goods now have tiny servers in them

##### for example:
- alexa listens to me say "turn off lights" 
     - her microphone receives my sound vibrations
        - it transduces my command to bytecode her api can understand
- alexa converts the bytecode of my request to a signal that my smart bulb's API can hear.
    - my smart bulb's server has been listening for any requests to its API all day
- my smart bulb receives the request and routes it to a function that executes the turning off of the bulb
- this networking of objects with tiny servers in our homes is called the Internet of Things (**IoT**)

:::

----


### The web is _organized_ and _designed_ for user experience (U/X)

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_evolve.png')" alt="web 1 to web2 evolution" class="slide">
</div>



- WordPress used to be the convention for web design
    - each page was a pre-designed template
        - limited control of layout
        - all pages looked / behaved the same    
<!-- - **modular** design breaks the page into the tiniest, customizable components or web resources -->
<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_mod.png')" alt="web 2 modularity" class="slide">
</div>

  - it allows flexibility in deployment, arrangement, and customization
    - a web app is composed of different scripts, libraries, smaller apps, etc., but can be deployed as a single entity, and therefore follows this idea of modularity
  - granular control
  - web pages grow / shrink responsively to screen size and device type

---

### Data and the web

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_data-st.jpg')" alt="Data from Star Trek" class="slide">
</div>



----

#### **Data** is broken down and passes back and forth between your computer and multiple servers

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_data-flow.gif')" alt="web2 data flow">
</div>

::: tip web data as postcards

if I want to send you a postcard, but I have so much to tell you that I have to write it out across 10 postcards, I might number each postcard in case they don't all get delivered at the same time, so you can reconstruct them in the right order once they all arrive

:::
- **data in motion** :runner: 
    - data broken into smaller web packets that travel between client and server(s)
        - if a packet says it's number 4 in a list of packets, and your computer hasn't seen number 3 yet then your data waits until the other packets arrive before it gets reassembled

- **data at rest** :sleeping: 
    - local storage
        - data stored in your browser with no expiration
    - session storage
        - data cached in your browser until you close the browser window

----

### _time_ and the web :clock1: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_time-diag.png')" alt="web2 time diagrams">
</div>


- "trusting" what a server somewhere in the world tells us is the correct time
- UCT solution - time based on the Sun and Earth's rotation
    - needs mass adoption
    - impractical that noon UCT would mean noon all around the world
- faster connections make syncing time more and more difficult
    - bad things can and do happen on the web in a blink of an eye

---

## Your Relationship with the Web

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_relate.jpg')" alt="people with smart phones">
</div>


### _Identity_ :selfie:

<div class="asset-container" style="position:relative;">
    <img :src="$withBase('/images/course/web2_map-1.jpg')" alt="google maps" style="position:absolute; left:1%;width: 35%; transform: rotate(-15deg);border:1px solid blue;">
    <img :src="$withBase('/images/course/web2_sl_comic.png')" alt="comic about the modern web" class="slide">
    <img :src="$withBase('/images/course/web2_map-2.jpg')" alt="google maps" style="position:absolute;right:1%;width: 35%; transform: rotate(15deg);border:1px solid blue;">
</div>


- you are your _activity_ on the web
    - your browser history 
    - requests coming from your IP address
    - your activity in and accross other web apps (shared data)

- your email is your _main_ source of identity
    - it relies on a web mail protocol to function
    - you can use it to log into numerous web apps
    - password _plus_ information from another device (2FA) required for identity verification

- access to your identity is at the mercy of internet service providers and app owners
    - Twitter can lock you out of your account
    - your ISP can shut your internet access at any point
        - new internet plan? no problem - except now your router is no longer compatable, and you'll need to upgrade that before you service is restored :shrug: 

----

### _Ownership_ :key: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_own.png')" alt="Facebook owns your data" class="slide">
</div>


#### you don't own your data
- your data (activity history) is being sold constantly
    - you don't make a dime from it
- cloud admins can delete any data you store on it
- your accounts can be taken offline with just a few strokes
- Instagram can use any pics you posted any way they want
- it only takes a handful of people to completely block your access to any digital assets you "own"

----

### _Structure_ of the web :classical_building: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web2_sl_struct.png')" alt="Bezos controls web2" class="slide">
</div>


- The modern web is distributed in a _centralized_ way
    - _distributed_ networks managed by handful of tech companies
    - very few points of failure can bring entire regions offline

- The modern web is _very_ centralized
    - 4 big box stores to shop at
    - monopolies mean that fewer and fewer people hold the keys to the kingdom

---
## Quiz

<div class="asset-container">
  <ClientOnly>
    <Quiz3 :nextChapter="$frontmatter['next']"/> 
  </ClientOnly>
</div>
