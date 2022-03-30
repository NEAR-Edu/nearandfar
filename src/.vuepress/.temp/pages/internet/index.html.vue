<template><div class="asset-container">
    <img :src="$withBase('/images/course/pc_dist.jpeg')" alt="multiple vintage pc">
</div>
<h1 id="_2-you-and-the-internet" tabindex="-1"><a class="header-anchor" href="#_2-you-and-the-internet" aria-hidden="true">#</a> 2. You and the Internet</h1>
<hr>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<h3 id="the-internet-is-a-network-of-networks-of-computers" tabindex="-1"><a class="header-anchor" href="#the-internet-is-a-network-of-networks-of-computers" aria-hidden="true">#</a> The Internet is a Network (of networks) of Computers 📡</h3>
<h4 id="think-of-your-neighborhood-how-is-it-organized" tabindex="-1"><a class="header-anchor" href="#think-of-your-neighborhood-how-is-it-organized" aria-hidden="true">#</a> Think of your neighborhood. How is it organized?</h4>
<ul>
<li>houses connect to each other through shared <strong>interfaces</strong>
<ul>
<li>electrical grids</li>
<li>sewage</li>
<li>waste management</li>
</ul>
</li>
<li>each house has its own address</li>
<li>clusters of houses comprise neighborhoods</li>
<li>apartment buildings can be considered neighborhoods with each floor being a cluster of condos, have one main entrance, and maybe a front desk, to handle traffic in / out of building</li>
<li>neighborhoods help cities manage how resources are distributed</li>
<li>some neighborhoods are very densely populated :house_buildings::house_buildings::house_buildings:</li>
<li>some neighborhoods are spread out 🏠🏜️🏜️🏠</li>
</ul>
<h2 id="interfaces-of-the-internet" tabindex="-1"><a class="header-anchor" href="#interfaces-of-the-internet" aria-hidden="true">#</a> <em>Interfaces</em> of the Internet</h2>
<h4 id="the-internet-is-organized-in-a-similar-way-to-your-neighborhood" tabindex="-1"><a class="header-anchor" href="#the-internet-is-organized-in-a-similar-way-to-your-neighborhood" aria-hidden="true">#</a> the internet is organized in a similar way to your neighborhood</h4>
<ul>
<li>networks generally have one Network Access Point (NAP) to handle traffic in / out of network</li>
<li>networks facilitate traffic (data) across the internet</li>
<li>some networks are densely populated 💻  💻  💻</li>
<li>some are sparsely populated💻    🏜️    🏜️  💻</li>
</ul>
<h3 id="peripheral-interfaces" tabindex="-1"><a class="header-anchor" href="#peripheral-interfaces" aria-hidden="true">#</a> peripheral interfaces</h3>
<ul>
<li>clusters ( or <strong>modules</strong>) of computers, called <strong>nodes</strong>, comprise networks
<ul>
<li>these network computers are not designed to be used like your personal computer</li>
<li>they are referred to as <strong>nodes</strong> to help clarify the distinction</li>
</ul>
</li>
</ul>
<h3 id="software-interfaces" tabindex="-1"><a class="header-anchor" href="#software-interfaces" aria-hidden="true">#</a> software interfaces</h3>
<ul>
<li>computers connect to each other through their network <strong>interfaces</strong>
<ul>
<li>ethernet 2.0</li>
<li>IEEE 802.11</li>
<li>VPC / VPN</li>
</ul>
</li>
<li>each computer has an address</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">mailboxes</p>
<p>When you mail a letter, you must properly address it, add correct postage, and any other rules or protocols set up by your region's mail delivery system or it will be returned.</p>
<p>Networking <strong>nodes</strong> and <strong>modules</strong> isn't all that different (I mean, it is! But you get the idea )</p>
</div>
<hr>
<h4 id="neighborhood-health-relies-on-people-getting-along-usually-through-some-set-of-rules-every-neighbor-agrees-to-follow" tabindex="-1"><a class="header-anchor" href="#neighborhood-health-relies-on-people-getting-along-usually-through-some-set-of-rules-every-neighbor-agrees-to-follow" aria-hidden="true">#</a> neighborhood health relies on people getting along, usually through some set of rules every neighbor agrees to follow</h4>
<ul>
<li>some neighborhoods have HOAs</li>
<li>some neighborhoods have community boards</li>
<li>some employ neighborhood watch shifts</li>
<li>some have regular block parties</li>
</ul>
<hr>
<h4 id="network-health-relies-on-good-node-to-node-communication-and-good-module-to-module-communication" tabindex="-1"><a class="header-anchor" href="#network-health-relies-on-good-node-to-node-communication-and-good-module-to-module-communication" aria-hidden="true">#</a> <em>network</em> health relies on good node-to-node communication, and good module-to-module communication</h4>
<ul>
<li>each network has at least one access point (NAP)
<ul>
<li><em>i.e. a front desk</em>
<ul>
<li>outsiders must talk to the front desk of your apartment building in order to talk to you</li>
</ul>
</li>
</ul>
</li>
<li>these connections need to agree on basic rules called <strong>protocols</strong> that every <strong>node</strong> and <strong>module</strong> (cluster of nodes) must follow</li>
<li>network protocols ensure that a connection between any two <strong>nodes</strong> will be available, reliable, and consistent 24 / 7</li>
</ul>
<hr>
<h4 id="the-set-of-rules-that-comprise-how-the-internet-works-are-called-internet-protocols-ip" tabindex="-1"><a class="header-anchor" href="#the-set-of-rules-that-comprise-how-the-internet-works-are-called-internet-protocols-ip" aria-hidden="true">#</a> The set of rules that comprise how the internet works are called Internet Protocols (IP)</h4>
<ul>
<li>Each node connected to the internet must have its own <strong>IP address</strong> so other nodes can find it.</li>
</ul>
<hr>
<h2 id="data-and-the-internet" tabindex="-1"><a class="header-anchor" href="#data-and-the-internet" aria-hidden="true">#</a> <em>Data</em> and the internet</h2>
<hr>
<h4 id="internet-data-is-about-connectivity" tabindex="-1"><a class="header-anchor" href="#internet-data-is-about-connectivity" aria-hidden="true">#</a> internet data is about connectivity</h4>
<ul>
<li><strong>data</strong> travels through the internet from one node to another until it reaches it's destination IP address.</li>
<li>think of it as the difference between a letter and the entire postal system
<ul>
<li>
<p>what is the &quot;data&quot; of a letter?</p>
<ul>
<li>journal entry? ✔️</li>
<li>to / from addresses? ✔️</li>
<li>stamp? ✔️</li>
</ul>
</li>
<li>
<p>what is the &quot;data&quot; of a postal system?</p>
<ul>
<li>routes? ✔️</li>
<li>zipcodes? ✔️</li>
<li>letter / package volume? ✔️</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="data-is-handled-in-two-basic-ways-on-the-internet" tabindex="-1"><a class="header-anchor" href="#data-is-handled-in-two-basic-ways-on-the-internet" aria-hidden="true">#</a> data is handled in two basic ways on the internet</h4>
<h3 id="data-in-motion" tabindex="-1"><a class="header-anchor" href="#data-in-motion" aria-hidden="true">#</a> <strong>data in motion</strong> 🏃</h3>
<ul>
<li>data is broken down into packets</li>
<li>data reassembles when it reaches its destination</li>
</ul>
<h3 id="data-at-rest" tabindex="-1"><a class="header-anchor" href="#data-at-rest" aria-hidden="true">#</a> <strong>data at rest</strong> 😴</h3>
<ul>
<li>some data is cached at NAPs
<ul>
<li><em>your building's front desk &quot;caches&quot; info for all tenants</em>
<ul>
<li>i.e. <em>&quot;Notice to all tenants: there will be...&quot;</em></li>
</ul>
</li>
</ul>
</li>
<li>service outages ☠️
<ul>
<li>nodes go offline</li>
<li>routers fail</li>
<li>congestion 🚥</li>
</ul>
</li>
<li>data packets are cached in the nearest node</li>
<li>networks spin back up, and data packets resume travel</li>
<li>errors often occur when systems shutdown mid-execution</li>
</ul>
<hr>
<h2 id="time-and-the-internet" tabindex="-1"><a class="header-anchor" href="#time-and-the-internet" aria-hidden="true">#</a> <em>Time</em> and the internet 🕚</h2>
<ul>
<li>
<p>Network Time Protocols (NTP) help networks sync time</p>
<ul>
<li>one node is cast as the <strong>layer 1</strong> source of truth</li>
<li>other nodes that sync with this node become <strong>layer 2</strong> nodes</li>
<li>other nodes that sync to layer 2 nodes become <strong>layer 3</strong> nodes, etc.</li>
<li>accuracy to 1ms
<ul>
<li>that's a long time for modern networks</li>
<li>if I have $100 and a super fast connection, I can wire you $100, my friend Bob $100, and my other friend Alice $100 - all before my bank realizes what happened.</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Your internet relies on whatever the network <em>thinks</em> is the correct time.</p>
<ul>
<li>it assumes the time given it by the network is trustworthy</li>
</ul>
</li>
</ul>
<h4 id="we-need-to-adjust-and-re-adjust-how-our-computers-measure-time" tabindex="-1"><a class="header-anchor" href="#we-need-to-adjust-and-re-adjust-how-our-computers-measure-time" aria-hidden="true">#</a> We need to adjust and re-adjust how our computers measure time</h4>
<ul>
<li>Y2K
<ul>
<li>Date formatted as YY instead of YYYY
<ul>
<li>'97...'98...'99...😨</li>
</ul>
</li>
</ul>
</li>
<li>Y2038
<ul>
<li>Unix time
<ul>
<li>counting the seconds since 1970</li>
</ul>
</li>
<li>Imagine if a system could only count to 2,147,483,648 seconds
<ul>
<li>and resets to zero each second after that...</li>
<li>we don't need to imagine it - just wait until 2038</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="your-relationship-with-the-internet" tabindex="-1"><a class="header-anchor" href="#your-relationship-with-the-internet" aria-hidden="true">#</a> Your Relationship with the Internet</h2>
<hr>
<h3 id="identity" tabindex="-1"><a class="header-anchor" href="#identity" aria-hidden="true">#</a> <em>Identity</em></h3>
<ul>
<li>Your IP Address is your identity
<ul>
<li>I may not know <em>who</em> you are, but I know <em>where</em> you're calling from</li>
</ul>
</li>
</ul>
<hr>
<h3 id="ownership" tabindex="-1"><a class="header-anchor" href="#ownership" aria-hidden="true">#</a> <em>Ownership</em></h3>
<ul>
<li>you don't own your apartment building or the roads and sidewalks that make it accessible</li>
</ul>
<h4 id="who-owns-the-internet-not-you" tabindex="-1"><a class="header-anchor" href="#who-owns-the-internet-not-you" aria-hidden="true">#</a> who owns the internet? Not you!</h4>
<ul>
<li>businesses built their own networks and eventually agreed to connect those networks</li>
<li>network owners can take a node or entire network offline</li>
<li>your computer's access to the internet is entirely governed by centralized networks
<ul>
<li>You are at their mercy</li>
<li>You pay for a service, not a right</li>
</ul>
</li>
<li>you have no say in how internet protocols are decided</li>
</ul>
<hr>
<h2 id="structure-of-the-internet" tabindex="-1"><a class="header-anchor" href="#structure-of-the-internet" aria-hidden="true">#</a> <em>Structure</em> of the internet 🏛️</h2>
<ul>
<li>
<p>The Internet is <strong>distributed</strong></p>
<ul>
<li>It doesn't go down when one node or network goes offline
<ul>
<li><em>your</em> internet going down isn't the same as <em>the</em> internet going down</li>
</ul>
</li>
</ul>
</li>
<li>
<p>The Internet <em>used</em> to be <strong>decentralized</strong></p>
<ul>
<li>One computer connected to another computer, and so on</li>
</ul>
</li>
<li>
<p>The Internet quickly became <strong>centralized</strong></p>
<ul>
<li>each network has one access point (NAP)
<ul>
<li>one door to open or close</li>
<li>one point of failure for the entire network</li>
</ul>
</li>
<li>network owners in control
<ul>
<li>access decided by a small group of people</li>
<li>vast distributed systems with numerous access points still controlled by a a handful of decision makers</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
</template>
