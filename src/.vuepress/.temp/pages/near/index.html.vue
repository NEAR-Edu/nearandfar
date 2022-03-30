<template><h1 id="_5-you-and-near-protocol" tabindex="-1"><a class="header-anchor" href="#_5-you-and-near-protocol" aria-hidden="true">#</a> 5. You and NEAR Protocol 🎆</h1>
<hr>
<h4 id="web3-is-a-network-of-blockchain-networks-and-near-is-one-of-them" tabindex="-1"><a class="header-anchor" href="#web3-is-a-network-of-blockchain-networks-and-near-is-one-of-them" aria-hidden="true">#</a> Web3 is a network of blockchain networks, and NEAR is one of them</h4>
<ul>
<li>
<p>not all blockchains are alike</p>
</li>
<li>
<p><strong>NEAR</strong> is a Layer 1 (L1) blockchain</p>
<ul>
<li>layer 2(L2) blockchains use architecture of existing blockchains
<ul>
<li>Polygon is built on top of Ethereum, which is a layer 1 blockchain</li>
</ul>
</li>
<li>NEAR is built from the ground up
<ul>
<li>NEAR has its own chain with its own rules and architecture</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Instead of <strong>PoW</strong> to create trust, NEAR uses Proof of Stake(<strong>PoS</strong>)</p>
<ul>
<li><strong>PoS</strong> is humans validating transactions, and staking a large amount of money that they will be honest about it
<ul>
<li>validators can earn historical returns on their staking</li>
<li>it's cheaper to tell the truth than to lie</li>
<li>validators get &quot;kicked&quot; off the network if they don't follow certain rules</li>
<li>PoS is CARBON NEUTRAL 🌎 ❤️</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h3 id="near-has-the-same-interfaces-as-other-web3-networks" tabindex="-1"><a class="header-anchor" href="#near-has-the-same-interfaces-as-other-web3-networks" aria-hidden="true">#</a> NEAR has the same interfaces as other Web3 networks</h3>
<h4 id="protocol-layer" tabindex="-1"><a class="header-anchor" href="#protocol-layer" aria-hidden="true">#</a> protocol layer</h4>
<ul>
<li>base layer
<ul>
<li>L1 blockchain</li>
</ul>
</li>
<li>blockchain architecture
<ul>
<li>nodes split into mini processors (sharding) to improve network availability</li>
<li>PoS validation</li>
<li>localnet for dApp development</li>
<li>testnet for testing dApps</li>
<li>mainnet for launching dApps</li>
</ul>
</li>
</ul>
<h4 id="infrastructure-layer" tabindex="-1"><a class="header-anchor" href="#infrastructure-layer" aria-hidden="true">#</a> infrastructure layer</h4>
<ul>
<li>
<p>nodes are virtual computers you can download locally</p>
<ul>
<li>when you download a node locally, you can refer to it as a client node since it will be interacting with the network in a similar way that your computer does.</li>
</ul>
</li>
<li>
<p>indexer nodes</p>
<ul>
<li>nodes anyone can run locally to listen to network updates</li>
<li>querying all blocks in the chain can be cumbersome</li>
<li>Indexer makes it easier to search the blockchain
<ul>
<li>Google indexes web pages so they are easier to find</li>
</ul>
</li>
</ul>
</li>
<li>
<p>block nodes</p>
<ul>
<li>contain copy of the blockchain to increase network availability</li>
</ul>
</li>
<li>
<p>archival nodes</p>
<ul>
<li>contain copy of the <em>entire</em> blockchain from its genesis</li>
</ul>
</li>
<li>
<p>validator nodes</p>
<ul>
<li>nodes used by validators to review transactions</li>
</ul>
</li>
<li>
<p><a href="wallet.near.org">Wallet</a></p>
<ul>
<li>account management</li>
</ul>
</li>
<li>
<p><a href="https://explorer.near.org/" target="_blank" rel="noopener noreferrer">Explorer</a></p>
<ul>
<li>transaction history of any account</li>
</ul>
</li>
<li>
<p><a href="https://docs.near.org/docs/api/rpc" target="_blank" rel="noopener noreferrer">JSON RPC</a> (Response-Procedure-Call)</p>
<ul>
<li>API for interacting with the blockchain</li>
</ul>
</li>
</ul>
<h4 id="use-case-layer" tabindex="-1"><a class="header-anchor" href="#use-case-layer" aria-hidden="true">#</a> use case layer</h4>
<ul>
<li>DeFi
<ul>
<li><a href="https://ref.finance" target="_blank" rel="noopener noreferrer">ref.finance</a></li>
</ul>
</li>
<li>Gaming
<ul>
<li><a href="https://berryclub.io/" target="_blank" rel="noopener noreferrer">berry.club</a></li>
</ul>
</li>
<li>Bussiness Development
<ul>
<li>DAO
<ul>
<li><a href="sputnik.fund">Sputnik</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="access-points-layer" tabindex="-1"><a class="header-anchor" href="#access-points-layer" aria-hidden="true">#</a> access points layer</h4>
<ul>
<li>top layer
<ul>
<li>Wallet</li>
<li>Explorer</li>
<li>JSON RPC</li>
</ul>
</li>
</ul>
<hr>
<ul>
<li>
<p>NEAR's infrastructure of <strong>modules</strong> can be broken down and reconfigured for new use cases</p>
<ul>
<li>create new primitives like message protocols
<ul>
<li><a href="https://medium.com/nearprotocol/introducing-machina-the-worlds-first-proof-of-stake-storage-solution-built-on-near-fed2ed23dbfb" target="_blank" rel="noopener noreferrer">Machina</a> is a PoS decentralized storage solution built on NEAR</li>
</ul>
</li>
<li>dApps can use any number of primitives for their use cases
<ul>
<li>how would you create AirBnB on NEAR?</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h3 id="data-and-near" tabindex="-1"><a class="header-anchor" href="#data-and-near" aria-hidden="true">#</a> data and NEAR</h3>
<hr>
<ul>
<li>
<p><strong>data in motion</strong> 🏃</p>
<ul>
<li>data travels accross many different protocols within the network
<ul>
<li>data fetched from centralized and /or decentralized database</li>
<li>transaction data retrieved from JSON RPC and broken down into http packets that are returned to client</li>
<li>data about chain state propagated to entire network like gossip</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>data at rest</strong> 😴</p>
<ul>
<li>immutable data stored on chain</li>
<li>data stored in browser local storage
<ul>
<li>access keys</li>
</ul>
</li>
<li>data stored on local machine
<ul>
<li>access keys</li>
</ul>
</li>
<li>data temporalily stored in memory while dApp is running
<ul>
<li>access keys</li>
</ul>
</li>
<li>data stored on <em>decentralized</em> databases
<ul>
<li>IPFS</li>
<li>Machina</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h3 id="time-on-near" tabindex="-1"><a class="header-anchor" href="#time-on-near" aria-hidden="true">#</a> <em>time</em> on NEAR 🕛</h3>
<ul>
<li>current block height is accessible to anyone with a computer and an internet connection</li>
<li>new blocks are added every second</li>
<li>some blocks contain zero transactions</li>
<li>transactions <em>you</em> make are queued using <strong>nonces</strong> (tally of transactions a given <em>key</em> on <em>your</em> account has made)
<ul>
<li>tx with nonce#4 isn't added to the chain until nonce#3 has been added</li>
</ul>
</li>
</ul>
<hr>
<h2 id="your-relationship-with-near" tabindex="-1"><a class="header-anchor" href="#your-relationship-with-near" aria-hidden="true">#</a> Your Relationship with NEAR</h2>
<hr>
<h3 id="identity-on-near" tabindex="-1"><a class="header-anchor" href="#identity-on-near" aria-hidden="true">#</a> <em>identity</em> on NEAR 🤳</h3>
<ul>
<li>
<p>your mainnet account (<em>yourname</em>.near) allows you to interface with any other account</p>
<ul>
<li>subaccounts you create (<em>myname</em>.yourname.near) can build your reputation</li>
<li>you are paid in $NEAR for your engagement in the network
<ul>
<li>earn to play</li>
<li>earn to learn</li>
</ul>
</li>
</ul>
</li>
<li>
<p>contracts have accounts as well</p>
</li>
<li>
<p>accounts can have zero or one contract deployed to them</p>
</li>
<li>
<p>your account associated with your NEAR wallet does not have a contract deployed on it</p>
</li>
</ul>
<hr>
<h3 id="ownership-on-near" tabindex="-1"><a class="header-anchor" href="#ownership-on-near" aria-hidden="true">#</a> <em>ownership</em> on NEAR 🔑</h3>
<h4 id="you-have-complete-control-of-your-account" tabindex="-1"><a class="header-anchor" href="#you-have-complete-control-of-your-account" aria-hidden="true">#</a> you have complete control of your account</h4>
<ul>
<li>your wallet works like a keychain</li>
<li>you can create keys for your account
<ul>
<li>key pairs - private and public, actually</li>
<li>private key is stored on your machine</li>
<li>public key is used to sign transactions</li>
<li>when you sign a transaction the transaction verifies that your hidden private key and your public key are indeed a valid key pair</li>
</ul>
</li>
<li>you can authorize dApps to add permissioned keys to your account
<ul>
<li>like when you give a valet a special &quot;valet key&quot; to park your car
<ul>
<li>the valet key has just enough functionality to get the task done</li>
<li>dApps basically do the same thing
<ul>
<li>they give you a <strong>functional access</strong> key
<ul>
<li>you can only call certain functions on the dApp's contract with it</li>
<li>you don't have <strong>full access</strong>
<ul>
<li><strong>full access</strong> keys allow you complete control over an account</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>you can de-authorize a dApp on your account
<ul>
<li>this is like signing in with google
<ul>
<li>google confirms you are authorizing the app on your google account
<ul>
<li>you can set special permissions like allowing google to read and edit your calendar</li>
</ul>
</li>
<li>you can de-authorize any web apps associated with you google account too - web3 is very similar</li>
</ul>
</li>
</ul>
</li>
<li>you can delete all keys from your account, and render it inaccessible by anyone (including you!) forever</li>
</ul>
<h4 id="you-are-your-own-security" tabindex="-1"><a class="header-anchor" href="#you-are-your-own-security" aria-hidden="true">#</a> you are your own security 🔏</h4>
<ul>
<li>no one can remove assets from your wallet without your permission</li>
<li>if someone gets your private key, however, they have full access to your account
<ul>
<li>your funds are at the whim of whoever has your private key</li>
<li>⚠️ <strong>!!!NEVER SHARE YOUR PRIVATE KEYS!!!</strong> ⚠️</li>
<li>there are no middlemen in Web3
<ul>
<li>no one at NEAR has the ability to &quot;reset your password&quot;</li>
</ul>
</li>
<li>be vigilant!
<ul>
<li>store your seed phrase outside of any devices connected to the internet</li>
<li>rotate your keys periodically</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>:female-police-officer:  <strong>Beware of phishing scams!</strong> Quite often scammers will try to trick you into revealing your password with fake wallet sites. Always check the url of the web page you are on.</p>
</div>
<h4 id="transactions-are-irreversible" tabindex="-1"><a class="header-anchor" href="#transactions-are-irreversible" aria-hidden="true">#</a> transactions are irreversible</h4>
<ul>
<li>
<p>if you send / receive funds <strong>no one can reverse the transaction</strong></p>
</li>
<li>
<p>your transaction history is available to anyone at anytime</p>
<ul>
<li>hyper-transparency</li>
<li>no privacy on the blockchain
<ul>
<li>do not store anything you aren't ready to share with the rest of the world</li>
</ul>
</li>
</ul>
</li>
<li>
<p>NEAR has standards the NFT contracts must follow to be considered current and credible</p>
<ul>
<li>if an NFT contract lists you as the owner of a digital asset, your ownership is indisputable.</li>
</ul>
</li>
</ul>
<hr>
<h3 id="the-structure-of-near" tabindex="-1"><a class="header-anchor" href="#the-structure-of-near" aria-hidden="true">#</a> the <em>structure</em> of NEAR 🏛️</h3>
<h4 id="near-is-decentralized" tabindex="-1"><a class="header-anchor" href="#near-is-decentralized" aria-hidden="true">#</a> NEAR is <em>decentralized</em></h4>
<ul>
<li>NEAR is community based</li>
<li>NEAR doesn't own any nodes on its network</li>
</ul>
<h4 id="near-is-part-of-web3-and-therefore-relies-on-web2-which-is-very-much-centralized" tabindex="-1"><a class="header-anchor" href="#near-is-part-of-web3-and-therefore-relies-on-web2-which-is-very-much-centralized" aria-hidden="true">#</a> NEAR is part of Web3, and therefore relies on Web2, which is very much centralized</h4>
<hr>
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> resources:</h2>
<p>web3 - start using Brave browser (looks and feels like Chrome) and have ads pay <em>you</em> to view them</p>
<p>NEAR - check out what's being built on NEAR awesomenear.com</p>
<hr>
<h2 id="epilogue" tabindex="-1"><a class="header-anchor" href="#epilogue" aria-hidden="true">#</a> epilogue</h2>
<hr>
<h4 id="what-questions-to-ask" tabindex="-1"><a class="header-anchor" href="#what-questions-to-ask" aria-hidden="true">#</a> what questions to ask?</h4>
<ul>
<li>remember, although we are building something new, the ideas have been around for a long time.
<ul>
<li>at it's core, the web is just requests and responses between clients and servers; if that relationship isn't clear when reviewing a dApp then your questions should investigate that</li>
</ul>
</li>
<li>Hopefully, the analogy of your house and neighborhoods being like computers and networks will help you make sense of distributed systems
<ul>
<li>When you hear &quot;node&quot;, you now know that could mean several different things:
<ul>
<li>some sort of computer, right?
<ul>
<li>probably a computer in a network</li>
</ul>
</li>
<li>did you know &quot;node&quot; could also refer to a programming language called NodeJs?
<ul>
<li>many contracts are built in a &quot;node environment&quot;. When you hear &quot;environment&quot; it's usually a clue that they are talking about NodeJs.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>
