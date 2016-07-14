
Nowadays we have many different social networks and services for different needs. However, it's hard to see only what you want to see and to not lose the overview. Often you can only subscribe or connect to a specific user without focusing on the content. What if you want to get specific content from a wide spectrum of sources? Register to different networks and subscribe every user who could have something to do with that topic? Why won't you let **qlaster** do that for you?

> **qlaster is a social network where you have better control over your news stream. For improved filtering of specific content, you can create or use predefined filters to attach them to your stream. By linking your account to other <a href="#" data-tooltip="The usage is limited to the provided APIs">social networks</a>, you can obtain the content from a wider range. As a result, it is possible to easily organize and adapt your stream to your needs. The presented concept is unique in the area of social networks and will be free for all end users.**

Filters can be created and shared by every user and can become highly personalized to filter all available networks in a wide range of content. Imagine having Twitter, Reddit, Tumblr, etc. combined in one news stream.
Suddenly you can have an **organized**, **content-focused** and **productive** news stream which you can tailor for your hobbies, work, just for fun or for everything else.

We want to optimize qlaster for mobile screen devices to bring the stream and filters only a swipe away.
Our target user group are all users of social networks but especially users in the age of 16 to 40 years and  those who want to have more control about what they see in their news stream.

The internet and social media platforms are growing every second massively and we want to help you to preserve the overview and to retain the control.

---

### Core Feature: Easily see what happened recently
<div id="startDemo"></div>

We think the visualization of most common social networks is not suitable for the modern web. There are many other ways to provide a better view of the social media data. Often all you got is a never ending list to scroll without having a good overview of what recent content is.

A core feature of qlaster is the so-called **recent stack**. All new posts you got in your stream appearing in an interactive visualization. The displayed content of the list of posts where you can scroll through is defined by the selection of the recent stack. You can select a set of posts by filtering the results or searching for a keyword. In this way, you can easily focus on a specific topic from your recent news when you read your news stream. Another advantage of this concept is to see all new content at a glance without scrolling down. When you read a post, it is moved into the stream history where you can filter and search posts again if you come back later.

<!--We will achieve a great and modern visualization for different social media data allowing the user to work with this information in a very fast and productive way. Also, we were planning a network visualization about the connections between users in a cluster-like representation. Otherwise, we want to create an overview of your chat connections.
In the following, you see a small demo which visualizes the recent stack on your stream.-->


<!-- aker, erste gleich aktiv -->

<div class="demo-wrapper">
    <!--<div class="action-sort">Sort</div>-->

    <div class="filter-wrapper">
        <div class="active-filter-label">Filter: </div>
        <div class="active-filter">All</div>
        <div class="filters">
            <div class="filter selected" data-filter="all">
                <div class="ident all"></div>
                <div class="name">All</div>
            </div>
            <div class="filter" data-filter="4c6f91">
                <div class="ident blue"></div>
                <div class="name">Blue</div>
            </div>
            <div class="filter" data-filter="6fa055">
                <div class="ident green"></div>
                <div class="name">Green</div>
            </div>
            <div class="filter" data-filter="c94a70">
                <div class="ident red"></div>
                <div class="name">Red</div>
            </div>
            <div class="filter" data-filter="a3466c">
                <div class="ident purple"></div>
                <div class="name">Purple</div>
            </div>
        </div>
    </div>

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
    <svg id="newestFeedVisDemo" width="700" height="400"></svg>
    <div id="key-hint">
        You can use the <i class="ion-arrow-left-a"></i> and <i class="ion-arrow-right-a"></i> keys to navigate through the posts.
    </div>

    <div class="demo-post">
        <div class="wrapper">
            <div class="user-img">
                <img src="https://randomuser.me/api/portraits/med/women/69.jpg"/>
            </div>
            <div class="author">
                Jon Doe
            </div>
            <div class="info">
                <i class="ion-reply"></i>
                <i class="ion-heart"></i>
                <div class="created-at">
                    02 Jul. 17:34
                </div>
            </div>
            <div class="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
        </div>
    </div>
</div><br /><br /><br /><br />

<script src='js/jquery.min.js'>{newline}</script>
<script src='js/d3.min.js'>{newline}</script>
<script src='js/nodeGridDemo.js'>{newline}</script>
<script src='js/snippets/feedData.js'>{newline}</script>
<script src='js/snippets/newestFeedVisDemo2.js'>{newline}</script>

<div style="text-align:center;"><img src="images/dots.png"/></div>

_Here you see a small <a href="#" data-tooltip="The demo is still in development and changes are possible.">demo</a> of the recent stack of your stream. You can hover the nodes to see a description of the content. The color shows which filter obtains the post._

---

### The Team

<div class="team-members">
    <div class="team-member">
        <div>
            <!--<img src="images/ava01_white.png" class="team-image"/>-->
        </div>
        <div>
            <p>
                <b>Christoph Biering</b>. <i>Founder</i> - Master student of computer science at the TU Dresden. Started the project and partly take care of the concept. Development of the webserver with the frontend.
            </p>
         </div>
    </div>

    <div class="team-member">
        <div>
            <!--<img src="images/ChristianWinkel.png" class="team-image"/>-->
        </div>
        <div>
            <p>
                <b>Christian Winkel</b>. <i>Co-Founder</i> - Master of computer science. Professional JavaEE developer. Developing on the backend JavaEE server.
            </p>
         </div>
    </div>

    <div class="team-member">
        <div>
            <!--<img src="images/LarsEngeln_sw.png" class="team-image"/>-->
        </div>
        <div>
            <p>
                <b>Lars Engeln</b>. <i>Co-Founder</i> - Master student of media computer science at the TU Dresden. Developing of the visualization concerns.
            </p>
         </div>
    </div>
</div>

---

### What can YOU do for us?
We are only a small group of developers, but we have the passion and skill to implement the idea and build our vision.
But we need **you** to evaluate the idea and concept. Please write your opinion in the comments or send us an <a href="mailto:qlaster@protonmail.com">email</a>.<br />
Any feedback is greatly appreciated! Thank you.

<br /><br />

<div style="font-size: 14px;">The user data are generated by https://randomuser.me/.</div>

<br /><br />

<div class="post-author">Author: Christoph Biering</div>
