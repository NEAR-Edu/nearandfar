# Exploring Contracts

No matter what you end up doing in web3, you will eventually need to understand what’s going on in a smart contract since it connects us to the blockchain. 

Just remember, source code is just a set of instructions. It’s written by humans, and should be readable by humans.

## 🔎 Scavenger Hunt

We all know what a scavenger hunts are. They task us with finding certain things in unfamiliar territory. It’s a great way to explore unfamiliar spaces, and that’s exactly what we will be doing today.

This exercise is about getting familiar reading code. There is no writing code, but by the end, you will be able to make sense and reason about what is going on a simple AssemblyScript contract. 

Just pretend you’re strolling through a museum looking at art. 

Some art you might understand, and some might seem very puzzling. 

That’s all you’re doing here. You’re just strolling through a page of code, and seeing what you think of it.

Ok, You ready? Just take 15-20 seconds max to glance through it.

Seriously, it’s fine. It’s just instructions written by a human, so it needs to be readable by humans too!

Ok here it comes...

## Contract

```tsx
import { context, logging, storage, PersistentDeque } from "near-sdk-as";

/**
 * showYouKnow is a
 * - "view" function (ie. does not alter state)
 * - that takes no parameters
 * - and returns nothing
 *
 * - it has the side effect of appending to the log
 */
export function showYouKnow(): void {
  logging.log("showYouKnow() was called");
}

/**
 * sayHello is a
 * - "view" function (ie. does not alter state)
 * - that takes no parameters
 * - and returns a string
 *
 * - it has the side effect of appending to the log
 */
export function sayHello(): string {
  logging.log("sayHello() was called");

  return "Hello!";
}

/**
 * sayMyName is a
 * - "call" function (although it does NOT alter state, it DOES read from context)
 * - that takes no parameters
 * - and returns a string
 *
 * - it has the side effect of appending to the log
 */
export function sayMyName(): string {
  logging.log("sayMyName() was called");

  return "Hello, " + context.sender + "!";
}

/**
 * saveMyName is a
 * - "call" function (ie. alters state)
 * - that takes no parameters
 * - saves the sender account name to contract state
 * - and returns nothing
 *
 * - it has the side effect of appending to the log
 */
export function saveMyName(): void {
  logging.log("saveMyName() was called");

  storage.setString("sender", context.sender);
}

/**
 * saveMyMessage is a
 * - "call" function (ie. alters state)
 * - that takes one parameters
 * - saves the sender account name and message to contract state
 * - and returns nothing
 *
 * - it has the side effect of appending to the log
 */
export function saveMyMessage(message: string): bool {
  logging.log("saveMyMessage() was called");

  assert(message.length > 0, "Message can not be blank.");
  const messages = new PersistentDeque<string>("messages");
  messages.pushFront(context.sender + " says " + message);

  return true;
}

/**
 * getAllMessages is a
 * - "view" function (ie. does not alter state)
 * - that takes no parameters
 * - reads all recorded messages from contract state (this can become expensive!)
 * - and returns an array of messages if any are found, otherwise empty array
 *
 * - it has the side effect of appending to the log
 */
export function getAllMessages(): Array<string> {
  logging.log("getAllMessages() was called");

  const messages = new PersistentDeque<string>("messages");
  let results = new Array<string>();

  while (!messages.isEmpty) {
    results.push(messages.popBack());
  }

  return results;
}
```

In that 20 seconds what do you *think* might be going on? It’s totally fine if you have no idea, and got caught up in the pretty colors (syntax highlighting); that’s supposed to happen.

This is an AssemblyScript code. Contracts built for NEAR can also be written in Rust.

Now that you have a sense of what a contract looks like, let’s start the hunt:

## **First Step: Identifying**

*Note, some of these may only take you **a few seconds** to complete so don't overthink things. This activity is about exposure to smart contracts written using AssemblyScript for the NEAR platform.* 

Find examples of the following (*HINT*: read ****the comments 😉 ):

- [ ]  a contract method that takes no parameters
- [ ]  a contract method that takes one parameter
- [ ]  a contract method that returns something
- [ ]  a contract method that does *not* return something
- [ ]  a contract method that is considered a “view” call
- [ ]  a contract method that is considered a “call” function

Without know much of anything about this contract, you found 4 types of methods(functions), and 2 types of contract-specific methods. Congratulations! You know read your first AssemblyScript contract 🥳

## **Second Step: Reasoning**

*Let’s drill a little deeper, and try to figure out what this contract actually does. You may already have an idea from the previous step, since the developer who wrote this contract comments their code* 🙏

1. From just reading the code(ie method names, comments, parameters, return values, etc.) what do you think a good name for this contract should be? 

1. Look at the very first line of the code that starts with `import`
    1. What would you guess each resource that’s imported from `near-sdk-as` does?
    2. Spend about 10 seconds on each resource, and see where it appears in the code. 
    
    Look at how each one is used, and try to reason what each one might be doing in just a few words:
    
    - [ ]  context
    - [ ]  logging
    - [ ]  storage
    - [ ]  PersistentDeque
    
2. Finally, what general questions do you have about this contract? Is it doing everything you think it should be doing? Based on the name you gave it, what else do you think it should do?

You did it! You’ve both read and reasoned about a smart contract! I mean, there’s a ton more to learn about contracts, but this is a solid first step.