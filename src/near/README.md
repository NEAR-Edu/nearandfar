# 5. You and NEAR Protocol :fireworks: 

## Introduction

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_intro.png')" alt="NEAR intro" class="slide">
</div>

#### Web3 is a network of blockchain networks, and NEAR is one of them 
- not all blockchains are alike

- **NEAR** is a Layer 1 (L1) blockchain
    - layer 2(L2) blockchains use architecture of existing blockchains
        - Polygon is built on top of Ethereum, which is a layer 1 blockchain
    - NEAR is built from the ground up
        - NEAR has its own chain with its own rules and architecture
- Instead of **PoW** to create trust, NEAR uses Proof of Stake(**PoS**)
    - **PoS** is humans validating transactions, and staking a large amount of money that they will be honest about it
        - validators can earn historical returns on their staking
        - it's cheaper to tell the truth than to lie
        - validators get "kicked" off the network if they don't follow certain rules 
        - PoS is CARBON NEUTRAL :earth_americas: :heart: 


<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_mission.png')" alt="NEAR mission" class="slide">
</div>

## Interfaces on NEAR are similar to other Web3 networks

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_layers.png')" alt="NEAR layer model" class="slide">
</div>

#### **protocol layer** 
- base layer
    - L1 blockchain
- blockchain architecture
    - nodes split into mini processors (sharding) to improve network availability
    - PoS validation
    - localnet for dApp development
    - testnet for testing dApps
    - mainnet for launching dApps


<div class="asset-container">
    <img :src="$withBase('/images/course/near_env.png')" alt="NEAR environments" class="slide">
</div>

#### **infrastructure layer**

- nodes are virtual computers you can download locally
    - when you download a node locally, you can refer to it as a client node since it will be interacting with the network in a similar way that your computer does.

- indexer nodes
    - nodes anyone can run locally to listen to network updates
    - querying all blocks in the chain can be cumbersome
    - Indexer makes it easier to search the blockchain
        - Google indexes web pages so they are easier to find



- block nodes
    - contain copy of the blockchain to increase network availability 

- archival nodes
    - contain copy of the _entire_ blockchain from its genesis


- validator nodes
    - nodes used by validators to review transactions



- [Wallet](wallet.near.org)
    - account management

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_wallet.png')" alt="NEAR wallet" class="slide">
</div>


- [Explorer](https://explorer.near.org/)
    - transaction history of any account

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_exp.png')" alt="NEAR explorer" class="slide">
</div>


- [JSON RPC](https://docs.near.org/docs/api/rpc) (Response-Procedure-Call) 
    - API for interacting with the blockchain


<div class="asset-container">
    <img :src="$withBase('/images/course/near_rpc-diag.png')" alt="NEAR explorer" class="slide">
</div>


#### **use case layer**
- DeFi
    - [ref.finance](https://ref.finance)
- Gaming
    - [berry.club](https://berryclub.io/)
- Bussiness Development
    - DAO
        - [Sputnik](sputnik.fund) 

#### **access points layer**
- top layer
    - Wallet
    - Explorer
    - JSON RPC


- NEAR's infrastructure of **modules** can be broken down and reconfigured for new use cases
    
    - create new primitives like message protocols
        - [Machina](https://medium.com/nearprotocol/introducing-machina-the-worlds-first-proof-of-stake-storage-solution-built-on-near-fed2ed23dbfb) is a PoS decentralized storage solution built on NEAR
    - dApps can use any number of primitives for their use cases
        - how would you create AirBnB on NEAR? 

<div class="asset-container">
    <img :src="$withBase('/images/course/near_eco.jpeg')" alt="NEAR ecosystem" class="slide">
</div>

---

## **_Data_** and NEAR

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_data-st.png')" alt="NEAR ecosystem" class="slide">
</div>

----

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_data-states.png')" alt="NEAR ecosystem" class="slide">
</div>

### **data in motion** :runner: 
  - data travels accross many different protocols within the network
      - data fetched from centralized and /or decentralized database 
      - transaction data retrieved from JSON RPC and broken down into http packets that are returned to client
      - data about chain state propagated to entire network like gossip


### **data at rest** :sleeping: 
  - immutable data stored on chain
  - data stored in browser local storage
      - access keys
  - data stored on local machine
      - access keys
  - data temporalily stored in memory while dApp is running
      - access keys
  - data stored on _decentralized_ databases
      - IPFS
      - Machina


----

## **_Time_** on NEAR :clock12: 

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_time-diag.png')" alt="NEAR block height" class="slide">
</div>

- current block height is accessible to anyone with a computer and an internet connection
- new blocks are added every second
- some blocks contain zero transactions
- transactions _you_ make are queued using **nonces** (tally of transactions a given _key_ on _your_ account has made)
    - tx with nonce#4 isn't added to the chain until nonce#3 has been added

----

## Your Relationship with NEAR

<div class="asset-container">
    <img :src="$withBase('/images/course/near_basics-diag.png')" alt="NEAR ecosystem" class="slide">
</div>

----

### **_Identity_** :selfie: 

<div class="asset-container">
    <img :src="$withBase('/images/course/near_sl_id.png')" alt="NEAR Transaction diagram" class="slide">
</div>

- your mainnet account (_yourname_.near) allows you to interface with any other account
    - subaccounts you create (_myname_.yourname.near) can build your reputation
    - you are paid in $NEAR for your engagement in the network
        - earn to play
        - earn to learn

- contracts have accounts as well
- accounts can have zero or one contract deployed to them
- your account associated with your NEAR wallet does not have a contract deployed on it

----

### **_Ownership_** :key: 

<div class="asset-container">
    <img :src="$withBase('/images/course/near_tokens.jpg')" alt="NEAR token usecases" class="slide">
</div>

#### **you have complete control of your account**
- your wallet works like a keychain
- you can create keys for your account
    - key pairs - private and public, actually
    - private key is stored on your machine
    - public key is used to sign transactions
    - when you sign a transaction the transaction verifies that your hidden private key and your public key are indeed a valid key pair
- you can authorize dApps to add permissioned keys to your account
    - like when you give a valet a special "valet key" to park your car
        - the valet key has just enough functionality to get the task done
        - dApps basically do the same thing
            - they give you a **functional access** key
                - you can only call certain functions on the dApp's contract with it
                - you don't have **full access** 
                    - **full access** keys allow you complete control over an account
- you can de-authorize a dApp on your account
    - this is like signing in with google
        - google confirms you are authorizing the app on your google account
            - you can set special permissions like allowing google to read and edit your calendar
        - you can de-authorize any web apps associated with you google account too - web3 is very similar
- you can delete all keys from your account, and render it inaccessible by anyone (including you!) forever

#### **you are your own security** :lock_with_ink_pen: 
- no one can remove assets from your wallet without your permission
- if someone gets your private key, however, they have full access to your account
    - your funds are at the whim of whoever has your private key
    - :warning: **!!!NEVER SHARE YOUR PRIVATE KEYS!!!** :warning: 
    - there are no middlemen in Web3
        - no one at NEAR has the ability to "reset your password"
    - be vigilant! 
        - store your seed phrase outside of any devices connected to the internet
        - rotate your keys periodically



::: warning

**Beware of phishing scams!** Quite often scammers will try to trick you into revealing your password with fake wallet sites. Always check the url of the web page you are on. 

:::


#### **transactions are irreversible**
- if you send / receive funds **no one can reverse the transaction**
- your transaction history is available to anyone at anytime
    - hyper-transparency
    - no privacy on the blockchain
        - do not store anything you aren't ready to share with the rest of the world

- NEAR has standards the NFT contracts must follow to be considered current and credible
    - if an NFT contract lists you as the owner of a digital asset, your ownership is indisputable.

----

## _Structure_ of NEAR :classical_building: 


#### NEAR is _decentralized_
- NEAR is community based
- NEAR doesn't own any nodes on its network

#### NEAR is part of Web3, and therefore relies on Web2, which is very much centralized

<div class="asset-container">
    <img :src="$withBase('/images/course/near_splash.jpg')" alt="NEAR ecosystem" class="slide">
</div>

---

## Epilogue

---

#### **what questions to ask?**
- remember, although we are building something new, the ideas have been around for a long time.
    - at it's core, the web is just requests and responses between clients and servers; if that relationship isn't clear when reviewing a dApp then your questions should investigate that 
- Hopefully, the analogy of your house and neighborhoods being like computers and networks will help you make sense of distributed systems
    - When you hear "node", you now know that could mean several different things:
        - some sort of computer, right?
            - probably a computer in a network
        - did you know "node" could also refer to a programming language called NodeJs?
            - many contracts are built in a "node environment". When you hear "environment" it's usually a clue that they are talking about NodeJs.

---
## Quiz


<div class="asset-container">
  <ClientOnly>
    <Quiz5/> 
  </ClientOnly>
</div>

## What Next?

- [Smart Contract Scavenger Hunt](/activities/)

- [Check our NEAR University](//near.university)

- [Keep Learning!](//near.academy/)

 - [Take an NEAR Certification course](//airtable.com/shrr8CbYRDHflkgI9?prefill_schedule=rec36OOvSYh1Roh8n)

- [Learn the Fundamentals of Computer Science](https://www.youtube.com/playlist?list=PLhQjrBD2T383f9scHRNYJkior2VvYjpSL)