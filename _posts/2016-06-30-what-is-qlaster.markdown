
<!--#### Reinvent social media with streams. Filter for content not for the user, everywhere.-->

Nowadays we have many different social networks and services for different needs. At the one hand this is very good for the individuality and a wide spectrum(!) of social media but on the other hand it's hard to see only what you want to see and to don't lose the overview of a wide range of information. Often you can only subscribe or connect to a specific user without focus on the content. What if you want to get specific content from a wide spectrum of sources? Register to different networks and subscribe every user who could have something to do with that topic? Why you don't let **qlaster** do that for you?

> **Our plan is to create a meta network which helps you to manage your newsfeed, chats and events and providing a more modern interface with an interactive visualization.
You can connect your account with all common social networks[^1] to browse news, users, chats and to share content yourself. For that you can create social streams on which you have the possibilty to attach filters to adapt them (the streams) to your needs. With that you could achieve only seeing what you want to see on your stream actually.**

You can filter the networks in a massive range of content, from filtering the content of a user up to search a specific keyphrase[^2]. You can also make your stream public to share it with your friends or the whole community.

Suddenly you can have a **organized**, **content-focused** and **productive** newsfeed which you can tailor for your hobbies, work, just for fun or everything else. The internet and social media platforms are growing every second massively, we want to help to preserve the overview, and you even don't have to be active on these networks directly.
We want to optimize qlaster for mobile screen devices to bringing your streams everywhere.

The following infographic visualize the structure of the concept.

<!--![info](images/infographic.png "info")

_Figure 1. With qlaster you can create multiple streams to have a customized newsfeed provided by qlaster and other linked services like Twitter or Instagram._-->

---

### Visualize to reinvent your social network experience

We think the visualization of common social networks are not suitable for the modern web. There are many other ways to provide a better view to the social media data. Today, all you got is a never ending list to scroll.

That's the reason why we want to achieve a great and modern visualization for different social media data allowing the user to work with these information in a very fast and productive way. Also we were planning a network visualization about the connections between users in a cluster-like representation. Otherwise we want to create an overview for your chat connections.
But in the following you see a demo which visualize the newest feed in a specific stream. With that you can check the newest posts you got without scrolling down the page.


<!-- aker, erste gleich aktiv -->

<div class="demo-wrapper">
    <div class="tooltip">
        <div class="avatar">
            <img src=""/>
        </div>
        <div class="info">
            <div class="author"></div>
            <div class="date"></div>
        </div>
        <div class="text"></div>
        <div class="image">
            <img src=""/>
        </div>
    </div>
    <svg id="newestFeedVisDemo" width="400" height="400"></svg>
</div>


<script src='js/jquery.min.js'>{newline}</script>
<script src='js/d3.min.js'>{newline}</script>
<script src='js/nodeGridDemo.js'>{newline}</script>
<script src='js/snippets/feedData.js'>{newline}</script>
<script src='js/snippets/newestFeedVisDemo.js'>{newline}</script>
_Figure 1. Here you see a small demo of a stream. You can hover the nodes to see a
description of the content. In the real application you would have some additional options, like sorting, getting more information or refusing the post. The great advantage of this concept is to see all new content at a glance without scrolling down._

<!--![streams](images/stream-big.png "streams")-->

---

### The features and what we have been planning to do

- Creating fully customizable streams to organize and control what you want to see
- Link your account to multiple networks like Twitter, Facebook etc. to get a wide spectrum of information
    - You can use the networks even if you are not fully active in them
- Having an optimal experience on small mobile devices due to space filling visualizations
- Interactive visualizations for streams, chat, content sharing etc. to have a modern, productive and fast interface to interact with these information
    - An interactive cluster view where you can organize your friends, create events, share content in specific groups and sort and filter the content for what you want to see
    - We want to create an interactive chat overview visualization to have a optimal chat view in realtime
- register user per email.. automatische email senden bei event etc.
    // chat zwischen email and qlaster user

---

### The Team

- **Christoph Biering**. _Founder_ - Master student of computer science at the TU Dresden. I have started the project and partly 'll take care of the conception. Development of the webserver with the frontend.

- **Christian Winkel**. _Co-Founder_ - Master of computer science. Professional JavaEE developer. Developing on the backend JavaEE server.

- **Lars Engeln**. _Co-Founder_ - Master student of media computer science at the TU Dresden. Developing of the visualization concerns.

---

### What can YOU do for us?
We are only a small group of developer but we have the passion and skill to create ...
But we need you to evaluate the idea and concept .... So any feedback is greatly appreciated! Thank you.

[^1]: The connection to the various social services are limited to the provided api of them.
[^2]: For example you want to filter all Twitter tweets with the keyphrase '30min Workout' you will get all of them without subscribe to a specific user. There are many other possibilties to customize the streams but this is explained later.
