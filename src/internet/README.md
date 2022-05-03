---
next: '/web2/'
---

<!-- <ClientOnly>
  <SheildDetect/> 
</ClientOnly> -->

# 2. You and the Internet

---
## Introduction

<div class="asset-container" style="position:relative;top:-25px;">
    <img :src="$withBase('/images/course/int_sl_intro.png')" alt="neighborhood and network" class="slide">
</div>

### The Internet is a Network (of networks) of Computers :satellite:

#### Think of your neighborhood. How is it organized?

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_net.png')" alt="neighborhood" class="slide">
</div>

- houses connect to each other through shared **interfaces**
    - electrical grids
    - sewage
    - waste management
- each house has its own address
- clusters of houses comprise neighborhoods
- apartment buildings can be considered neighborhoods with each floor being a cluster of condos, have one main entrance, and maybe a front desk, to handle traffic in / out of the building
- neighborhoods help cities manage how resources are distributed
- some neighborhoods are very densely populated :house_buildings::house_buildings::house_buildings:
- some neighborhoods are spread out :house::desert::desert::house:

## _Interfaces_ of the Internet

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_ip.png')" alt="network diagram" class="slide">
</div>

#### the internet is organized in a similar way to your neighborhood

- networks generally have one Network Access Point (NAP) to handle traffic in / out of the network
- networks facilitate traffic (data) across the internet
- some networks are densely populated :computer:  :computer:  :computer: 
- some are sparsely populated:computer:    :desert:    :desert:  :computer:

### peripheral interfaces
- clusters ( or **modules**) of computers, called **nodes**, comprise networks
    - these network computers are not designed to be used like your personal computer
    -  they are referred to as **nodes** to help clarify the distinction


### software interfaces
- computers connect to each other through their network **interfaces**
    - ethernet 2.0
    - IEEE 802.11 
    - VPC / VPN
- each computer has an address



::: tip mailboxes

When you mail a letter, you must properly address it, add correct postage, and any other rules or protocols set up by your region's mail delivery system or it will be returned. 

Networking **nodes** and **modules** isn't all that different (I mean, it is! But you get the idea )

:::

----

#### Neighborhood health relies on people getting along, usually through some set of rules every neighbor agrees to follow
- some neighborhoods have HOAs 
- some neighborhoods have community boards
- some employ neighborhood watch shifts
- some have regular block parties

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_net-health.png')" alt="neighborhood and network" class="slide">
</div>

---

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_net-diag-simple.png')" alt="neighborhood and network" class="flex-multi-row">
    <img :src="$withBase('/images/course/int_sl_net-diag-mid.png')" alt="neighborhood and network" class="flex-multi-row">
    <img :src="$withBase('/images/course/int_sl_net-diag-big.png')" alt="neighborhood and network" class="flex-multi-row">
</div>
<small style="margin: 0 0 0 25%;">three diagrams demonstrating progressively complex network systems</small>

----

#### _Network_ health relies on good node-to-node communication, and good module-to-module communication 

- each network has at least one Network Access Point (**NAP**)
    - _i.e. a front desk_
        - outsiders must talk to the front desk of your apartment building in order to talk to you
- these connections need to agree on basic rules called **protocols** that every **node** and **module** (cluster of nodes) must follow
- network protocols ensure that a connection between any two **nodes** will be available, reliable, and consistent 24 / 7


#### The set of rules that comprise how the internet works are called Internet Protocols (IP)
- Each node connected to the internet must have its own **IP address** so other nodes can find it. 


---

## _Data_ and the internet

<div class="asset-container">
    <img :src="$withBase('/images/course/int_data-st.jpg')" alt="Twin Datas from Star Trek">
</div>

#### Internet data is about connectivity

- **data** travels through the internet from one node to another until it reaches it's destination IP address. 
- think of it as the difference between a letter and the entire postal system
    - what is the "data" of a letter?
        - journal entry? :heavy_check_mark: 
        - to / from addresses? :heavy_check_mark: 
        - stamp? :heavy_check_mark: 

    - what is the "data" of a postal system?
        - routes? :heavy_check_mark: 
        - zipcodes? :heavy_check_mark: 
        - letter / package volume? :heavy_check_mark: 
    
#### data is handled in two basic ways on the internet

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_data.png')" alt="neighborhood and network" class="slide">
</div>

### **data in motion** :runner: 
  - data is broken down into packets
  - data reassembles when it reaches its destination

### **data at rest** :sleeping: 
  - some data is cached at NAPs
      - _your building's front desk "caches" info for all tenants_
          - i.e. _"Notice to all tenants: there will be..."_
  - service outages :skull_and_crossbones: 
      - nodes go offline
      - routers fail
      - congestion :traffic_light: 
  - data packets are cached in the nearest node
  - networks spin back up, and data packets resume travel
  - errors often occur when systems shutdown mid-execution

----

## _Time_ and the internet :clock11: 

<div class="asset-container">
    <img :src="$withBase('/images/course/int_time_sync-diag.png')" alt="network time diagram" style="max-width: 40%;">
    <img :src="$withBase('/images/course/int_sl_net-sync-time.png')" alt="network time sync diagram">
</div>

- Network Time Protocols (NTP) help networks sync time
    - one node is cast as the **layer 1** source of truth 
    - other nodes that sync with this node become **layer 2** nodes
    - other nodes that sync to layer 2 nodes become **layer 3** nodes, etc.
    - accuracy to 1ms
        - that's a long time for modern networks
        - if I have $100 and a super fast connection, I can wire you $100, my friend Bob $100, and my other friend Alice $100 - all before my bank realizes what happened.

- Your internet relies on whatever the network _thinks_ is the correct time.
    - it assumes the time given it by the network is trustworthy

#### We need to adjust and re-adjust how our computers measure time
- Y2K
    - Date formatted as YY instead of YYYY
        - '97...'98...'99...:fearful:
- Y2038
    - Unix time
        - counting the seconds since 1970
    - Imagine if a system could only count to 2,147,483,648 seconds 
        - and resets to zero each second after that...
        - we don't need to imagine it - just wait until 2038

  
---

## Your Relationship with the Internet

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_the-web.png')" alt="the 90s web" class="slide">
</div>

----

### _Identity_ 

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_comic.png')" alt="early internet comic" class="slide">
</div>

- Your IP Address is your identity
    - I may not know _who_ you are, but I know _where_ you're calling from


----

### _Ownership_ 

#### Who owns the internet? Not you!

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_own.png')" alt="internet ownership" class="slide">
</div>

- you don't own your apartment building or the roads and sidewalks that make it accessible


- businesses built their own networks and eventually agreed to connect those networks
- network owners can take a node or entire network offline
- your computer's access to the internet is entirely governed by centralized networks 
    - You are at their mercy
    - You pay for a service, not a right
- you have no say in how internet protocols are decided

----

## _Structure_ of the internet :classical_building: 

<div class="asset-container">
    <img :src="$withBase('/images/course/int_sl_struct.png')" alt="neighborhood and network" class="slide">
</div>

- The Internet is **distributed**
    - It doesn't go down when one node or network goes offline
        - _your_ internet going down isn't the same as _the_ internet going down

- The Internet _used_ to be **decentralized**
    - One computer connected to another computer, and so on

- The Internet quickly became **centralized**
    - each network has one access point (NAP)
        - one door to open or close
        - one point of failure for the entire network
    - network owners in control
        - access decided by a small group of people
        - vast distributed systems with numerous access points still controlled by a a handful of decision makers

---

## Quiz

<div class="asset-container">
  <ClientOnly>
    <Quiz2 :nextChapter="$frontmatter['next']"/> 
  </ClientOnly>
</div>
