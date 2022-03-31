<template><h1 id="_4-you-and-web3-0" tabindex="-1"><a class="header-anchor" href="#_4-you-and-web3-0" aria-hidden="true">#</a> 4. You and Web3.0</h1>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_crypto-hist.png')" alt="history of crypto">
</div>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_intro.png')" alt="web 3 intro" class="slide">
</div>
<hr>
<h3 id="web3-is-the-decentralized-or-open-web" tabindex="-1"><a class="header-anchor" href="#web3-is-the-decentralized-or-open-web" aria-hidden="true">#</a> Web3 is the <em>decentralized</em> or &quot;open&quot; web 👐</h3>
<ul>
<li>
<p>network interfaces follow new rules</p>
<ul>
<li>no one node is in charge</li>
<li>no single NAP
<ul>
<li><em>no front desk</em></li>
</ul>
</li>
</ul>
</li>
<li>
<p>no one can &quot;turn it off&quot;</p>
<ul>
<li>it's accessible to all</li>
<li>it's owned and operated by the people using it</li>
<li>there are no middlemen
<ul>
<li>no brokers between you and the stock market</li>
<li>no bank fees for managing your money</li>
<li>no HR between you and payroll</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="a-network-of-computers-across-the-globe-act-as-one-computer-sharing-a-single-state" tabindex="-1"><a class="header-anchor" href="#a-network-of-computers-across-the-globe-act-as-one-computer-sharing-a-single-state" aria-hidden="true">#</a> A network of computers across the globe act as one computer sharing a single state</h4>
<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_org.png')" alt="web 3 organization" class="slide">
    <img :src="$withBase('/images/course/web3_walle.gif')" alt="wall-e gif" style="position:absolute; top: 20%; left: .2%;">
</div>
<div class="custom-container tip"><p class="custom-container-title">what's "state" in the neighborhood analogy?</p>
<p>When a new house is built in your neighborhood, all the phone books need to update to reflect the new addition. So, a new phone book is sent out to all the neighbors with the address, etc. of the new house.</p>
</div>
<ul>
<li>change state of one, you change state of all
<ul>
<li>we are Borg :robot_face:</li>
</ul>
</li>
<li>when one node registers a change in the network (state) it gossips about it to the other nodes
<ul>
<li>gossip spreads about the change in state to the entire network</li>
</ul>
</li>
</ul>
<h4 id="web3-interfaces-are-accessed-using-web3-accounts" tabindex="-1"><a class="header-anchor" href="#web3-interfaces-are-accessed-using-web3-accounts" aria-hidden="true">#</a> Web3 <em>interfaces</em> are accessed using Web3 accounts</h4>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_el5.png')" alt="web 3 intro" class="slide">
</div>
<ul>
<li>&quot;log in with your email&quot; becomes &quot;log in with your Web3 wallet&quot;</li>
<li>connections to Web3 architecture occur through http connections and <strong>smart contracts</strong></li>
</ul>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_interfaces.png')" alt="smart contracts" class="slide">
</div>
<hr>
<h3 id="organization-of-web3" tabindex="-1"><a class="header-anchor" href="#organization-of-web3" aria-hidden="true">#</a> Organization of Web3</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_smrt-ct.png')" alt="smart contracts" class="slide">
</div>
<ul>
<li>they are a set of instructions (like any other program) for updating state/data/transaction history</li>
<li>the updates that nodes gossip about are triggered by methods in these contracts</li>
<li>contract methods allow Web3 accounts to either  <em>view</em> state/data/transaction history or <em>change</em> state/data/transaction history</li>
<li>contracts that take a lot of time to run can congest the network
<ul>
<li>transaction fees (GAS) help prevent this</li>
<li>they incentivize developers to optimize their code so it execute faster, and consumes fewer resources (cheaper!💸)</li>
</ul>
</li>
</ul>
<hr>
<h3 id="interconnected-layers-of-web3" tabindex="-1"><a class="header-anchor" href="#interconnected-layers-of-web3" aria-hidden="true">#</a> Interconnected layers of Web3</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_layers.png')" alt="web 3 layer model">
</div>
<ul>
<li>these layers behave like <strong>modules</strong> and can be broken apart and reconfigured to create new use cases</li>
</ul>
<h4 id="protocol-layer" tabindex="-1"><a class="header-anchor" href="#protocol-layer" aria-hidden="true">#</a> protocol layer</h4>
<ul>
<li>base layer</li>
<li>blockchain architecture</li>
<li>changes to data are stored as transaction receipts on a digital ledger
<ul>
<li>ledger is copied and distributed to all nodes in the network</li>
</ul>
</li>
</ul>
<h4 id="infrastructure-layer" tabindex="-1"><a class="header-anchor" href="#infrastructure-layer" aria-hidden="true">#</a> infrastructure layer</h4>
<ul>
<li>interoperable building blocks</li>
<li>modules connect together for specific tasks
<ul>
<li>storage</li>
<li>naming service</li>
</ul>
</li>
<li><strong>smart contracts</strong> serve as the <em>back</em> end of Web3 infrastructure
<ul>
<li>contracts manage state
<ul>
<li>they are like interpreters</li>
</ul>
</li>
<li>web3 accounts &quot;sign&quot; transactions the same way one might sign a lease agreement or credit card receipt</li>
</ul>
</li>
</ul>
<h4 id="use-case-layer" tabindex="-1"><a class="header-anchor" href="#use-case-layer" aria-hidden="true">#</a> use case layer</h4>
<ul>
<li>where it all comes together</li>
<li>DeFi, Gaming</li>
</ul>
<h4 id="access-points" tabindex="-1"><a class="header-anchor" href="#access-points" aria-hidden="true">#</a> access points</h4>
<ul>
<li>top layer</li>
<li>users sign into their account(s) and send / receive crypto-currency</li>
</ul>
<hr>
<h3 id="web3-needs-web2-for-now" tabindex="-1"><a class="header-anchor" href="#web3-needs-web2-for-now" aria-hidden="true">#</a> Web3 needs Web2... for now</h3>
<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_web2.jpeg')" alt="handshake meme">
    <p style="position:absolute;bottom:5%;left:35%;font-weight:bold;color:#fff;">Web2</p>
    <p style="position:absolute;bottom:5%;right:35%;font-weight:bold;color:#fff;">Web3</p>
</div>
<ul>
<li>Web3 infrastructure is different than web2, but still new and generally limited, so it can't operate without web2 yet
<ul>
<li>you still need the centralized web to access the decentralized web</li>
<li>it's not immediately apparent when you are using a Web3 app (dApp)</li>
</ul>
</li>
</ul>
<hr>
<h3 id="let-s-finally-talk-about-the-blockchain" tabindex="-1"><a class="header-anchor" href="#let-s-finally-talk-about-the-blockchain" aria-hidden="true">#</a> Let's finally talk about the &quot;blockchain&quot;</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_blockchain.png')" alt="Blockchain" class="slide">
</div>
<h4 id="the-blockchain-is" tabindex="-1"><a class="header-anchor" href="#the-blockchain-is" aria-hidden="true">#</a> The blockchain is..</h4>
<ul>
<li>transaction history</li>
</ul>
<p>the blockchain is like a stack of milk crates with each crate containing piles of various transaction receipts. The stack of crates gets higher with every new batch of receipts.</p>
<div class="custom-container tip"><p class="custom-container-title">If the Phone Book behaved like a blockchain</p>
<p>Imagine if instead of receiving a new phone book every time a new neighbor moves in / out, you (and everyone you know) receives a single page from the phone book with just the updated information.</p>
</div>
<hr>
<h2 id="data-and-web3" tabindex="-1"><a class="header-anchor" href="#data-and-web3" aria-hidden="true">#</a> <em>Data</em> and Web3</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_data-st.jpeg')" alt="Data from Star Trek">
</div>
<hr>
<h3 id="data-in-motion" tabindex="-1"><a class="header-anchor" href="#data-in-motion" aria-hidden="true">#</a> <strong>Data in motion</strong></h3>
<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_data-in-motion.png')" alt="Web3 data in motion" class="slide">
    <img :src="$withBase('/images/course/web3_gossip.gif')" alt="Gossip protocol" style="position:absolute; right: 0;top: 10%;">
</div>
<h3 id="data-at-rest" tabindex="-1"><a class="header-anchor" href="#data-at-rest" aria-hidden="true">#</a> <strong>Data at rest</strong></h3>
<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_data-at-rest.png')" alt="Web3 data at rest" class="slide">
    <img :src="$withBase('/images/course/web3_data-at-rest.png')" alt="web3 data diagram" style="position:absolute; left: 0;top: 30%;">
</div>
<hr>
<h2 id="time-and-web3" tabindex="-1"><a class="header-anchor" href="#time-and-web3" aria-hidden="true">#</a> <em>Time</em> and Web3 🕥</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_time.png')" alt="consensus diagram" class="slide">
</div>
<h4 id="the-blockchain-is-1" tabindex="-1"><a class="header-anchor" href="#the-blockchain-is-1" aria-hidden="true">#</a> The blockchain is...</h4>
<ul>
<li>a clock 🤯</li>
</ul>
<h3 id="time-is-measured-in-block-height" tabindex="-1"><a class="header-anchor" href="#time-is-measured-in-block-height" aria-hidden="true">#</a> Time is measured in <em>block height</em></h3>
<ul>
<li>each block added to the chain increases its height</li>
<li>some blockchains add a new block at a constant rate even if the block is empty of updates to transaction history
<ul>
<li>this allows for planning
<ul>
<li><em>&quot;let's meet at 3pm&quot;</em> becomes <em>&quot;let's meet when the block height reaches 89489830340&quot;</em></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_time-2.png')" alt="consensus diagram" class="slide">
</div>
<ul>
<li>
<p>community board meetings exist for the purpose of finding consensus community-related initiatives. Community-based blockchain networks are no different, and people don't always agree</p>
</li>
<li>
<p>sometimes two nodes with different block heights claim to have the most current (highest) chain</p>
<ul>
<li>( generally ) longest chain wins</li>
</ul>
</li>
<li>
<p>sometimes nodes do not agree with the consensus and continue with <em>their</em> version of the blockchain</p>
<ul>
<li>if other nodes join them, then a fork is created
<ul>
<li>two versions now exist
<ul>
<li>Ethereum vs Ethereum <em>classic</em></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>sometimes infrastructure updates require a fork</p>
<ul>
<li>
<p>if a node with the old version of the chain exists, the old infrastructure is still accessible</p>
<ul>
<li>you can keep your old phone books, and use them, but they will become more and more unreliable</li>
<li>you can keep your computer from 1997, but it won't be able to &quot;dial into&quot; today's internet like it did when Austin Powers was in theaters.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="trustless-proofs-provide-integrity-of-the-blockchain-so-you-can-trust-the-time-it-gives" tabindex="-1"><a class="header-anchor" href="#trustless-proofs-provide-integrity-of-the-blockchain-so-you-can-trust-the-time-it-gives" aria-hidden="true">#</a> trustless proofs provide integrity of the blockchain so you can trust the time it gives</h4>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_pow-pos.jpeg')" alt="types of consensus protocols" class="slide">
</div>
<ul>
<li>proof that a transaction is valid can be achieved through cryptography
<ul>
<li>if anything changes in one block, all subsequent blocks are <em>immediately</em> invalidated
<ul>
<li>we see this in time travel movies
<ul>
<li>change the past, you change the future</li>
</ul>
</li>
</ul>
</li>
<li><em>mining</em> or Proof of Work (<strong>PoW</strong>) is how BitCoin and Ethereum create trust in their networks</li>
<li>PoW has become very energy-intensive as the blockchains that rely on it continue to grow
<ul>
<li>other proof concepts are being employed in new and existing blockchain networks to address these and related issues</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="your-relationship-with-web3" tabindex="-1"><a class="header-anchor" href="#your-relationship-with-web3" aria-hidden="true">#</a> Your Relationship with Web3</h2>
<p style="font-size:2vw"> <strong>time</strong>: enabled by a chain of discrete “data moments”</p>
<p style="font-size:2vw"> <strong>identity</strong>: enabled by public/private key cryptography</p>
<p style="font-size:2vw"> <strong>money</strong>: time + value</p>
<p style="font-size:2vw"> <strong>ownership</strong>: identity + money</p>
<p style="font-size:2vw"> <strong>provenance</strong>: identity + money + time</p>
<h3 id="identity" tabindex="-1"><a class="header-anchor" href="#identity" aria-hidden="true">#</a> <em>Identity</em> 🤳</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_id.png')" alt="types of identification protocols" class="slide">
</div>
<ul>
<li>your web3 account is your identity</li>
<li>no Oauth</li>
<li>your offline identity is yours to reveal or keep hidden as you see fit</li>
<li>the account(s) you use to explore the space build reputation
<ul>
<li>reputation / street cred helps build trust in the platform</li>
</ul>
</li>
<li>active engagement in the community is core to a successful, community-run web</li>
</ul>
<hr>
<h3 id="ownership" tabindex="-1"><a class="header-anchor" href="#ownership" aria-hidden="true">#</a> <em>Ownership</em> 🔑</h3>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_own.png')" alt="diagram of ownership in web3" class="slide">
</div>
<ul>
<li>
<p><em>you</em> own your data, and <em>you</em> own the network</p>
<ul>
<li>no. seriously!</li>
<li>everything is flipped on its head</li>
<li>you earn money from simply engaging the network</li>
<li>ad companies pay <em>you</em> to see their ads rather than google</li>
</ul>
</li>
<li>
<p>networks have their own economies based on their specific token or <strong>crypto-currency</strong></p>
<ul>
<li>Bitcoin, ether, doge, $NEAR
<ul>
<li>if it's not Bitcoin, then it's an altcoin</li>
</ul>
</li>
<li>tokens in your wallet are yours to do as you wish
<ul>
<li>if your country freezes bank accounts, your crypto is still safe and accessible</li>
</ul>
</li>
<li>digital assets are yours
<ul>
<li>whatever digital assets are associated with your account are yours for as long as you desire</li>
<li>there is no repo man</li>
<li>you are your own security</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="structure-of-web3" tabindex="-1"><a class="header-anchor" href="#structure-of-web3" aria-hidden="true">#</a> <em>Structure</em> of Web3 🏛️</h2>
<div class="asset-container">
    <img :src="$withBase('/images/course/web3_struct.png')" alt="centralized vs decentralized internet" class="slide">
</div>
<ul>
<li>
<p>Web3 is <em>decentralized</em></p>
<ul>
<li>there is no single point of entry or failure</li>
<li>if one node goes offline, the data is preserved on all the other nodes</li>
<li>no <em>one</em> controls the network</li>
<li>everyone controls the network</li>
<li>the wealth that is generated by the network is distributed among the people using it</li>
</ul>
</li>
<li>
<p>Web3 relies on Web2 to exist</p>
<ul>
<li>Web3's infrastructure is decentralized</li>
<li>Web3's access layer relies on Web2 servers</li>
<li>contracts compile to webassembly so they can run in Web2 browsers</li>
</ul>
</li>
</ul>
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

.p-rel 
    position: relative

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
