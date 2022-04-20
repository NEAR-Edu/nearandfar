---
next: '/internet/'
---

![](/images/course/computer_thumbs-up.gif)

# 1. You and Your Computer

## Introduction

### Think of your computer as your house

<div class="asset-container">
    <img :src="$withBase('/images/course/house.png')" alt="home" class="course-asset">
</div>

#### How would you describe your house to a computer?
- It's broken down into smaller rooms maybe?
    - what is a room?
        - a component of your house? :heavy_check_mark: 
- Each room connects via one or more doorways.
- You can add rooms to your house.
- You can upgrade and / or merge existing rooms.
- You can "optimize" the layout so it warms and cools more efficiently or creates feng shui.
- If it burns down, you can rebuild it based on blueprints, and you can replace most of the items in it. Unfortunately, some things may not be replaceable.


### Your Computer is a Machine

#### How do you think your computer is organized?

- you might think of words like "hard drive", and "motherboard"
- your setup might involve 1-2 external monitors, a bluetooth mouse, and wireless keyboard
- you might mention whether your computer is a Mac or Windows or Linux

#### Now think about how you use everything you mentioned. 
- your description of using your mouse is probably different than that of using your keyboard
- you may mention why you chose to buy a Mac as opposed to a Windows computer



## _Interfaces_ of your computer


#### When we talk about how each part of a computer is organized, we are talking about its various _interfaces_

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_sl_kitchen.png')" alt="kitchen" class="slide">
</div>

- let's return to the analogy of your house
    - your kitchen is made up of a collection of interfaces
        - your stove has an interface
        - your fridge has an interface
        - even your faucet has an interface
        - you can interface with your kitchen's circuitry through your breaker panel 


::: tip interfaces
Another way to think about interfacing is human-to-human communication
- we have interfaces of our own to communicate with each other without the need of any technology. They include:
    - our faces
    - our 5 senses
    - our expressions

:::

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_sl_interfaces.png')" alt="diagram of interfaces" class="slide">
</div>


Your computer is organized through two types of **interfaces**

### _peripheral_ interfaces :desktop_computer:
  
- hard drive 
- keyboard
- mouse
- screen


----

### _software_ interfaces :blue_book:

- interface drivers
  - programs or sets of programs
      - set of instructions that tell a piece of hardware how to function
- operating system
  - software that enables other software to communicate with hardware
- applications
  - programs designed for an end user
- scripts
  - set of instructions for another program to use

----

#### All of these interfaces "play" together to extend how your computer is used.

- hardware parts can be put together and taken apart again
- you can add new software and delete other software
- you can easily add multiple monitors, switch out keyboards, add a camera, etc.
- you can even run a _virtual machine_(**vm**), which is essentially a computer running inside your computer. In fact your computer has numerous VMs running at any given time.

#### this ability to break components down, and mix and match them is called _modularity_ :building_construction:
- the rooms in your house can be considered **modules**; same with your TV (a module), and your entertainment system as a whole (also a module).



---

## _Data_ and your Computer

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_data-st.gif')" alt="Data from Star Trek" class="course-asset">
</div>


#### What comes to mind when you hear "data"?

- information? :heavy_check_mark: 
- stuff that is stored on hard drives? :heavy_check_mark: 
- electrical signals? :heavy_check_mark: 

How does information pass through your computer, and how is it stored for later use? 

It may seem trivial, but when we talk about technology, we soon start to look at what data is doing when it's **in motion** and **at rest**

- when we press a key on our keyboard, a signal travels to our computer's brain and registers the key we pressed. It's always listening for something to interface with it.
  
- when we save a file, our computer's operating system gets instructions to store the contents of the file along with information about the file on our hard drive.


<div class="asset-container">
    <img :src="$withBase('/images/course/pc_sl_data.png')" alt="diagram of states of data" class="slide">
</div>

### **data in motion** :runner: 
 
- from keyboard to machine
- from mouse to machine
- from monitor to your eyes
- from speakers to your ears

### **data at rest** :sleeping: 
- database
    - structure of how data is stored
- hard drive
    - physical addresses where data is stored as 1s and 0s.

::: tip your home's data

- back to the house analogy. What is the "data" of your house?
    - electricity and water systems?
        - water moving through your pipes when faucet is _on_ vs water stored in your pipes when faucet is _off_
    - pictures on the wall?
    - food in the fridge?
    - what about how your house is used - wear and tear?
        - in a way _you_ are your house's data since it's whole purpose is to handle _you_ in motion and _you_ at rest when you're using it

:::

## _Time_ and your Computer

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_time.gif')" alt="dancing clocks">
</div>

- it may feel strange to talk about time. Isn't it self-evident?
    - not as evident as you might think
    - our computers don't have to rely on time the same way we do
    - time is extremely important in web3, and we will soon learn that our idea of time is essentially thrown out the window when it comes to blockchain. 

- You can set time to whatever you want on your machine, but when two machines with different times talk to each other, we need to agree on what time to use.
    - this is just like when you make travel plans 
        - you need to double check timezones of flight and train times, for instance.

- What if _your_ computer is set 6 hours ahead of _my_ computer?
    - How do our computers do things at the "same" time?

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_sl_time.png')" alt="cpu clock" class="slide">
</div>
    
---

## Your Relationship with Your Computer

<div class="asset-container" style="position: relative; height:500px; top:-.5%;">
    <img :src="$withBase('/images/course/pc_vint.gif')" alt="vintage pc" style="position: absolute; left:50%;margin-right:-50%;top:50%;transform:translate(-50%,-50%);">
    <img :src="$withBase('/images/course/pc_pc.gif')" alt="pc" style="width:35%;position: absolute; left:0;margin-right:-50%;top:30%;transform:rotate(-15deg);">
    <img :src="$withBase('/images/course/hacker.gif')" alt="hacker" style="width:35%;position: absolute; right:0;top:30%;transform:rotate(25deg);">
    <img :src="$withBase('/images/course/canunot.gif')" alt="annoyed girl meme" style="width:25%;position: absolute; left:40%;top:60%;">
</div>

---

### _Identity_ 
    
<div class="asset-container">
    <img :src="$withBase('/images/course/pc_id.gif')" alt="scooby doo unmasking">
</div>

- Your _User Profile_ is your **identity** on your computer
    - _Guest Profile_ can't change your password.
    - but if I have your password, I have your identity as far as your computer is concerned. 
  
<div class="asset-container" style="position:relative; height: 500px;">
    <img :src="$withBase('/images/course/pc_sl_id.png')" alt="pc login page" class="slide">
    <img :src="$withBase('/images/course/spidey.gif')" alt="spidermen" class="animate-flicker" style="position:absolute; top: 55%; left: 50%;transform:translate(-50%,-50%);">
</div>

----

### _Ownership_ 

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_ownership.jpeg')" alt="angry pc user">
</div>

#### What does it mean to "own" your computer?
- just like your house. You can remodel it, tear it down - anything you want, because it's yours, right?
- you can add / remove the programs you want
- you can add / delete files, media and other **digital assets**
- you can replace your mouse, your hard drive, and your monitor
- you can even toss your computer in a pond (make sure to remove it though. We don’t want to pollute any ponds). 



----

## _Structure_ of your Computer :classical_building: 

#### What happens if you do throw your computer in a pond?
- Is the data on it gone forever, because it was all **centralized** on your computer and your computer alone?

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_vint-2.jpeg')" alt="vintage pc">
</div>

- Or is all or much of the data **distributed** accross one or more _other_ machines, and you only lost a portion of your data?

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_dist-1.jpeg')" alt="vintage pc distribution room">
</div>

- Or, even better, is the data not only distributed accross multiple machines, but **decentralized** so that each machine has a copy of _all_ your data? :crossed_fingers:

<div class="asset-container">
    <img :src="$withBase('/images/course/pc_dist.jpeg')" alt="multiple vintage pc">
</div>

---
## Quiz

<div class="asset-container">
  <ClientOnly>
    <Quiz1 :nextChapter="$frontmatter['next']"/> 
  </ClientOnly>
</div>