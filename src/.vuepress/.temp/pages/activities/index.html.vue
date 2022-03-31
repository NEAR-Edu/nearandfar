<template><h1 id="exploring-contracts" tabindex="-1"><a class="header-anchor" href="#exploring-contracts" aria-hidden="true">#</a> Exploring Contracts</h1>
<p>No matter what you end up doing in web3, you will eventually need to understand what’s going on in a smart contract since it connects us to the blockchain.</p>
<p>Just remember, source code is just a set of instructions. It’s written by humans, and should be readable by humans.</p>
<h2 id="🔎-scavenger-hunt" tabindex="-1"><a class="header-anchor" href="#🔎-scavenger-hunt" aria-hidden="true">#</a> 🔎 Scavenger Hunt</h2>
<p>We all know what a scavenger hunts are. They task us with finding certain things in unfamiliar territory. It’s a great way to explore unfamiliar spaces, and that’s exactly what we will be doing today.</p>
<p>This exercise is about getting familiar reading code. There is no writing code, but by the end, you will be able to make sense and reason about what is going on a simple AssemblyScript contract.</p>
<p>Just pretend you’re strolling through a museum looking at art.</p>
<p>Some art you might understand, and some might seem very puzzling.</p>
<p>That’s all you’re doing here. You’re just strolling through a page of code, and seeing what you think of it.</p>
<p>Ok, You ready? Just take 15-20 seconds max to glance through it.</p>
<p>Seriously, it’s fine. It’s just instructions written by a human, so it needs to be readable by humans too!</p>
<p>Ok here it comes...</p>
<h2 id="contract" tabindex="-1"><a class="header-anchor" href="#contract" aria-hidden="true">#</a> Contract</h2>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="shiki" style="background-color: #22272e"><code><span class="line"><span style="color: #F47067">import</span><span style="color: #ADBAC7"> { context, logging, storage, PersistentDeque } </span><span style="color: #F47067">from</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot;near-sdk-as&quot;</span><span style="color: #ADBAC7">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * showYouKnow is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;view&quot; function (ie. does not alter state)</span></span>
<span class="line"><span style="color: #768390"> * - that takes no parameters</span></span>
<span class="line"><span style="color: #768390"> * - and returns nothing</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">showYouKnow</span><span style="color: #ADBAC7">()</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">void</span><span style="color: #ADBAC7"> {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;showYouKnow() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * sayHello is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;view&quot; function (ie. does not alter state)</span></span>
<span class="line"><span style="color: #768390"> * - that takes no parameters</span></span>
<span class="line"><span style="color: #768390"> * - and returns a string</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">sayHello</span><span style="color: #ADBAC7">()</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7"> {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;sayHello() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">return</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot;Hello!&quot;</span><span style="color: #ADBAC7">;</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * sayMyName is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;call&quot; function (although it does NOT alter state, it DOES read from context)</span></span>
<span class="line"><span style="color: #768390"> * - that takes no parameters</span></span>
<span class="line"><span style="color: #768390"> * - and returns a string</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">sayMyName</span><span style="color: #ADBAC7">()</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7"> {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;sayMyName() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">return</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot;Hello, &quot;</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">+</span><span style="color: #ADBAC7"> context.sender </span><span style="color: #F47067">+</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot;!&quot;</span><span style="color: #ADBAC7">;</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * saveMyName is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;call&quot; function (ie. alters state)</span></span>
<span class="line"><span style="color: #768390"> * - that takes no parameters</span></span>
<span class="line"><span style="color: #768390"> * - saves the sender account name to contract state</span></span>
<span class="line"><span style="color: #768390"> * - and returns nothing</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">saveMyName</span><span style="color: #ADBAC7">()</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">void</span><span style="color: #ADBAC7"> {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;saveMyName() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  storage.</span><span style="color: #DCBDFB">setString</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;sender&quot;</span><span style="color: #ADBAC7">, context.sender);</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * saveMyMessage is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;call&quot; function (ie. alters state)</span></span>
<span class="line"><span style="color: #768390"> * - that takes one parameters</span></span>
<span class="line"><span style="color: #768390"> * - saves the sender account name and message to contract state</span></span>
<span class="line"><span style="color: #768390"> * - and returns nothing</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">saveMyMessage</span><span style="color: #ADBAC7">(</span><span style="color: #F69D50">message</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7">)</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #F69D50">bool</span><span style="color: #ADBAC7"> {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;saveMyMessage() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #DCBDFB">assert</span><span style="color: #ADBAC7">(message.</span><span style="color: #6CB6FF">length</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">&gt;</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">0</span><span style="color: #ADBAC7">, </span><span style="color: #96D0FF">&quot;Message can not be blank.&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">const</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">messages</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">=</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">new</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">PersistentDeque</span><span style="color: #ADBAC7">&lt;</span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7">&gt;(</span><span style="color: #96D0FF">&quot;messages&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"><span style="color: #ADBAC7">  messages.</span><span style="color: #DCBDFB">pushFront</span><span style="color: #ADBAC7">(context.sender </span><span style="color: #F47067">+</span><span style="color: #ADBAC7"> </span><span style="color: #96D0FF">&quot; says &quot;</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">+</span><span style="color: #ADBAC7"> message);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">return</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">true</span><span style="color: #ADBAC7">;</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #768390">/**</span></span>
<span class="line"><span style="color: #768390"> * getAllMessages is a</span></span>
<span class="line"><span style="color: #768390"> * - &quot;view&quot; function (ie. does not alter state)</span></span>
<span class="line"><span style="color: #768390"> * - that takes no parameters</span></span>
<span class="line"><span style="color: #768390"> * - reads all recorded messages from contract state (this can become expensive!)</span></span>
<span class="line"><span style="color: #768390"> * - and returns an array of messages if any are found, otherwise empty array</span></span>
<span class="line"><span style="color: #768390"> *</span></span>
<span class="line"><span style="color: #768390"> * - it has the side effect of appending to the log</span></span>
<span class="line"><span style="color: #768390"> */</span></span>
<span class="line"><span style="color: #F47067">export</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">function</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">getAllMessages</span><span style="color: #ADBAC7">()</span><span style="color: #F47067">:</span><span style="color: #ADBAC7"> </span><span style="color: #F69D50">Array</span><span style="color: #ADBAC7">&lt;</span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7">&gt; {</span></span>
<span class="line"><span style="color: #ADBAC7">  logging.</span><span style="color: #DCBDFB">log</span><span style="color: #ADBAC7">(</span><span style="color: #96D0FF">&quot;getAllMessages() was called&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">const</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">messages</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">=</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">new</span><span style="color: #ADBAC7"> </span><span style="color: #DCBDFB">PersistentDeque</span><span style="color: #ADBAC7">&lt;</span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7">&gt;(</span><span style="color: #96D0FF">&quot;messages&quot;</span><span style="color: #ADBAC7">);</span></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">let</span><span style="color: #ADBAC7"> results </span><span style="color: #F47067">=</span><span style="color: #ADBAC7"> </span><span style="color: #F47067">new</span><span style="color: #ADBAC7"> </span><span style="color: #6CB6FF">Array</span><span style="color: #ADBAC7">&lt;</span><span style="color: #6CB6FF">string</span><span style="color: #ADBAC7">&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">while</span><span style="color: #ADBAC7"> (</span><span style="color: #F47067">!</span><span style="color: #ADBAC7">messages.isEmpty) {</span></span>
<span class="line"><span style="color: #ADBAC7">    results.</span><span style="color: #DCBDFB">push</span><span style="color: #ADBAC7">(messages.</span><span style="color: #DCBDFB">popBack</span><span style="color: #ADBAC7">());</span></span>
<span class="line"><span style="color: #ADBAC7">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ADBAC7">  </span><span style="color: #F47067">return</span><span style="color: #ADBAC7"> results;</span></span>
<span class="line"><span style="color: #ADBAC7">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><p>In that 20 seconds what do you <em>think</em> might be going on? It’s totally fine if you have no idea, and got caught up in the pretty colors (syntax highlighting); that’s supposed to happen.</p>
<p>This is an AssemblyScript code. Contracts built for NEAR can also be written in Rust.</p>
<p>Now that you have a sense of what a contract looks like, let’s start the hunt:</p>
<h2 id="first-step-identifying" tabindex="-1"><a class="header-anchor" href="#first-step-identifying" aria-hidden="true">#</a> <strong>First Step: Identifying</strong></h2>
<p><em>Note, some of these may only take you <strong>a few seconds</strong> to complete so don't overthink things. This activity is about exposure to smart contracts written using AssemblyScript for the NEAR platform.</em></p>
<p>Find examples of the following (<em>HINT</em>: read ****the comments 😉 ):</p>
<ul>
<li>[ ]  a contract method that takes no parameters</li>
<li>[ ]  a contract method that takes one parameter</li>
<li>[ ]  a contract method that returns something</li>
<li>[ ]  a contract method that does <em>not</em> return something</li>
<li>[ ]  a contract method that is considered a “view” call</li>
<li>[ ]  a contract method that is considered a “call” function</li>
</ul>
<p>Without know much of anything about this contract, you found 4 types of methods(functions), and 2 types of contract-specific methods. Congratulations! You know read your first AssemblyScript contract 🥳</p>
<h2 id="second-step-reasoning" tabindex="-1"><a class="header-anchor" href="#second-step-reasoning" aria-hidden="true">#</a> <strong>Second Step: Reasoning</strong></h2>
<p><em>Let’s drill a little deeper, and try to figure out what this contract actually does. You may already have an idea from the previous step, since the developer who wrote this contract comments their code</em> 🙏</p>
<ol>
<li>
<p>From just reading the code(ie method names, comments, parameters, return values, etc.) what do you think a good name for this contract should be?</p>
</li>
<li>
<p>Look at the very first line of the code that starts with <code>import</code></p>
<ol>
<li>What would you guess each resource that’s imported from <code>near-sdk-as</code> does?</li>
<li>Spend about 10 seconds on each resource, and see where it appears in the code.</li>
</ol>
<p>Look at how each one is used, and try to reason what each one might be doing in just a few words:</p>
<ul>
<li>[ ]  context</li>
<li>[ ]  logging</li>
<li>[ ]  storage</li>
<li>[ ]  PersistentDeque</li>
</ul>
</li>
<li>
<p>Finally, what general questions do you have about this contract? Is it doing everything you think it should be doing? Based on the name you gave it, what else do you think it should do?</p>
</li>
</ol>
<p>You did it! You’ve both read and reasoned about a smart contract! I mean, there’s a ton more to learn about contracts, but this is a solid first step.</p>
</template>
