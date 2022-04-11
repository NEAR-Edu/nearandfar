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

# 4. You and Web3.0


<div class="asset-container">
    <img :src="$withBase('/images/course/web3_crypto-hist.png')" alt="history of crypto">
</div>

## Introduction

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_intro.png')" alt="web 3 intro" class="slide">
</div>



---

### Web3 is the _decentralized_ or "open" web :open_hands: 


- network interfaces follow new rules
    - no one node is in charge
    - no single NAP
        - _no front desk_

- no one can "turn it off"
    - it's accessible to all
    - it's owned and operated by the people using it
    - there are no middlemen
        - no brokers between you and the stock market
        - no bank fees for managing your money
        - no HR between you and payroll


#### A network of computers across the globe act as one computer sharing a single state

<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_org.png')" alt="web 3 organization" class="slide">
    <img :src="$withBase('/images/course/web3_walle.gif')" alt="wall-e gif" style="position:absolute; top: 20%; left: .2%; max-width:50%;">
</div>

::: tip what's "state" in the neighborhood analogy?

When a new house is built in your neighborhood, all the phone books need to update to reflect the new addition. So, a new phone book is sent out to all the neighbors with the address, etc. of the new house. 

:::

- change state of one, you change state of all
    - we are Borg :robot_face: 
- when one node registers a change in the network (state) it gossips about it to the other nodes
    - gossip spreads about the change in state to the entire network

#### Web3 _interfaces_ are accessed using Web3 accounts

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_el5.png')" alt="web 3 intro" class="slide">
</div>

- "log in with your email" becomes "log in with your Web3 wallet"
- connections to Web3 architecture occur through http connections and **smart contracts**

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_interfaces.png')" alt="smart contracts" class="slide">
</div>

---

### Organization of Web3


<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_smrt-ct.png')" alt="smart contracts" class="slide">
</div>


- they are a set of instructions (like any other program) for updating state/data/transaction history
- the updates that nodes gossip about are triggered by methods in these contracts
- contract methods allow Web3 accounts to either  _view_ state/data/transaction history or _change_ state/data/transaction history
- contracts that take a lot of time to run can congest the network
    - transaction fees (GAS) help prevent this
    - they incentivize developers to optimize their code so it execute faster, and consumes fewer resources (cheaper!:money_with_wings:)



----

### Interconnected layers of Web3

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_layers.png')" alt="web 3 layer model">
</div>

- these layers behave like **modules** and can be broken apart and reconfigured to create new use cases


#### protocol layer 
- base layer
- blockchain architecture
- changes to data are stored as transaction receipts on a digital ledger
    - ledger is copied and distributed to all nodes in the network

#### infrastructure layer
- interoperable building blocks
- modules connect together for specific tasks
    - storage
    - naming service
- **smart contracts** serve as the _back_ end of Web3 infrastructure
    - contracts manage state
        - they are like interpreters 
    - web3 accounts "sign" transactions the same way one might sign a lease agreement or credit card receipt

#### use case layer
- where it all comes together
- DeFi, Gaming

#### access points
- top layer
- users sign into their account(s) and send / receive crypto-currency

----

### Web3 needs Web2... for now

<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_web2.jpeg')" alt="handshake meme">
    <p style="position:absolute;bottom:5%;left:35%;font-weight:bold;color:#fff;">Web2</p>
    <p style="position:absolute;bottom:5%;right:35%;font-weight:bold;color:#fff;">Web3</p>
</div>

- Web3 infrastructure is different than web2, but still new and generally limited, so it can't operate without web2 yet 
    - you still need the centralized web to access the decentralized web
    - it's not immediately apparent when you are using a Web3 app (dApp)

---

### Let's finally talk about the "blockchain"

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_blockchain.png')" alt="Blockchain" class="slide">
</div>

#### The blockchain is..

- transaction history

the blockchain is like a stack of milk crates with each crate containing piles of various transaction receipts. The stack of crates gets higher with every new batch of receipts.


::: tip If the Phone Book behaved like a blockchain

Imagine if instead of receiving a new phone book every time a new neighbor moves in / out, you (and everyone you know) receives a single page from the phone book with just the updated information. 

:::


---

## _Data_ and Web3

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_data-st.jpeg')" alt="Data from Star Trek">
</div>

---

### **Data in motion**

<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_data-in-motion.png')" alt="Web3 data in motion" class="slide">
    <img :src="$withBase('/images/course/web3_gossip.gif')" alt="Gossip protocol" style="position:absolute; right: 0;top: 10%;">
</div>

### **Data at rest**

<div class="asset-container p-rel">
    <img :src="$withBase('/images/course/web3_sl_data-at-rest.png')" alt="Web3 data at rest" class="slide">
    <img :src="$withBase('/images/course/web3_data-at-rest.png')" alt="web3 data diagram" style="position:absolute; left: 0;top: 30%;">
</div>

---

## _Time_ and Web3 :clock1030: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_time.png')" alt="consensus diagram" class="slide">
</div>


#### The blockchain is... 
- a clock :exploding_head: 


### Time is measured in _block height_
- each block added to the chain increases its height 
- some blockchains add a new block at a constant rate even if the block is empty of updates to transaction history
    - this allows for planning
        - _"let's meet at 3pm"_ becomes _"let's meet when the block height reaches 89489830340"_


<div class="asset-container">
    <img :src="$withBase('/images/course/web3_sl_time-2.png')" alt="consensus diagram" class="slide">
</div>

- community board meetings exist for the purpose of finding consensus community-related initiatives. Community-based blockchain networks are no different, and people don't always agree

- sometimes two nodes with different block heights claim to have the most current (highest) chain
    - ( generally ) longest chain wins

- sometimes nodes do not agree with the consensus and continue with _their_ version of the blockchain
    - if other nodes join them, then a fork is created
        - two versions now exist
            - Ethereum vs Ethereum _classic_

- sometimes infrastructure updates require a fork
    - if a node with the old version of the chain exists, the old infrastructure is still accessible

        - you can keep your old phone books, and use them, but they will become more and more unreliable
        - you can keep your computer from 1997, but it won't be able to "dial into" today's internet like it did when Austin Powers was in theaters. 
  

#### trustless proofs provide integrity of the blockchain so you can trust the time it gives

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_pow-pos.jpeg')" alt="types of consensus protocols" class="slide">
</div>


- proof that a transaction is valid can be achieved through cryptography
    - if anything changes in one block, all subsequent blocks are _immediately_ invalidated
        - we see this in time travel movies
            - change the past, you change the future 
    - _mining_ or Proof of Work (**PoW**) is how BitCoin and Ethereum create trust in their networks
    - PoW has become very energy-intensive as the blockchains that rely on it continue to grow
        - other proof concepts are being employed in new and existing blockchain networks to address these and related issues

---

## Your Relationship with Web3

<p style="font-size:2vw"> <strong>time</strong>: enabled by a chain of discrete “data moments”</p>
<p style="font-size:2vw"> <strong>identity</strong>: enabled by public/private key cryptography</p>
<p style="font-size:2vw"> <strong>money</strong>: time + value</p>
<p style="font-size:2vw"> <strong>ownership</strong>: identity + money</p>
<p style="font-size:2vw"> <strong>provenance</strong>: identity + money + time</p>


### _Identity_ :selfie: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_id.png')" alt="types of identification protocols" class="slide">
</div>

- your web3 account is your identity
- no Oauth
- your offline identity is yours to reveal or keep hidden as you see fit
- the account(s) you use to explore the space build reputation
    - reputation / street cred helps build trust in the platform
- active engagement in the community is core to a successful, community-run web

----


### _Ownership_ :key: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_own.png')" alt="diagram of ownership in web3" class="slide">
</div>

- _you_ own your data, and _you_ own the network

    - no. seriously!
    - everything is flipped on its head
    - you earn money from simply engaging the network
    - ad companies pay _you_ to see their ads rather than google

- networks have their own economies based on their specific token or **crypto-currency**
    - Bitcoin, ether, doge, $NEAR
        - if it's not Bitcoin, then it's an altcoin
    - tokens in your wallet are yours to do as you wish
        - if your country freezes bank accounts, your crypto is still safe and accessible
    - digital assets are yours
        - whatever digital assets are associated with your account are yours for as long as you desire
        - there is no repo man 
        - you are your own security

----

## _Structure_ of Web3 :classical_building: 

<div class="asset-container">
    <img :src="$withBase('/images/course/web3_struct.png')" alt="centralized vs decentralized internet" class="slide">
</div>

- Web3 is _decentralized_

    - there is no single point of entry or failure 
    - if one node goes offline, the data is preserved on all the other nodes
    - no _one_ controls the network
    - everyone controls the network
    - the wealth that is generated by the network is distributed among the people using it

- Web3 relies on Web2 to exist
    
    - Web3's infrastructure is decentralized
    - Web3's access layer relies on Web2 servers
    - contracts compile to webassembly so they can run in Web2 browsers

