
Nowadays we have many different social networks and services for different needs. At the one hand this is very good for the individuality and a broad range of social media but on the other hand, it's hard to see only what you want to see and to not lose the overview. Often you can only subscribe or connect to a specific user without focusing on the content. What if you want to get specific content from a wide spectrum of sources? Register to different networks and subscribe every user who could have something to do with that topic? Why won't you let **qlaster** do that for you?

> **qlaster is a social network where you have better control over your news feed called stream. You can create or use predefined filters to attach them to your stream to filter for specific content in qlaster and other linked <a href="#" data-tooltip="The usage is limited to the provided APIs">common social networks</a>. As a result, it is possible to easily organize, filter and adapt your stream to your needs.**

The social media information your stream contains **depends on the filters which are attached**. Filters can be created and shared by every user and can become highly refined and tailored to filter the networks in a massive range of content.

Suddenly you can have an **organized**, **content-focused** and **productive** news feed which you can tailor for your hobbies, work, just for fun or for everything else. The internet and social media platforms are growing every second massively, we want to help to preserve the overview, and you don't even have to be active on these networks directly. Imagine having Twitter, Reddit, Tumblr, etc. combined in one news feed.

We want to optimize qlaster for mobile screen devices to bring the stream and filters only a swipe away.
Our target user group are all users of social networks but especially users in the age of 16 to 40 years and  those who want to have more control about what they see in their news feed.

---

### Easily see what happened recently
<div id="startDemo"></div>

We think the visualization of common social networks is not suitable for the modern web. There are many other ways to provide a better view of the social media data. Today, all you got is a never ending list to scroll.

A core feature of qlaster is the so-called **recent stack**. All new posts you got in your stream appearing in an interactive visualization. The displayed content of the list of posts where you can scroll through is defined by the selection of the recent stack. You can select a set of posts by filtering the results or searching for a keyphrase. So you can focus on a specific topic.

We want to achieve a great and modern visualization for different social media data allowing the user to work with this information in a very fast and productive way. Also, we were planning a network visualization about the connections between users in a cluster-like representation. Otherwise, we want to create an overview of your chat connections.
In the following, you see a small demo which visualizes the recent stack on your stream.


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

_Here you see a small <a href="#" data-tooltip="The demo is to show the idea but isn't finished yet.">demo</a> of the recent stack of your stream. You can hover the nodes to see a description of the content. The color shows which filter obtains the post._

The advantage of this concept is to see all new content at a glance without scrolling down.
You can filter the stack and select a set of posts.
In the real application, the selected set is displayed as a list of posts below the visualization. As a result, you can focus on specific topics and have an organized news feed.

When you read a post, it is moved into the stream history where you can filter and search posts again if you come back later.

<!--### The features and what we have been planning to do

- Creating fully customizable stream to organize and control what you want to see
- Link your account to multiple networks like Twitter, Facebook etc. to get a wide spectrum of data
    - You can use the networks even if you are not directly active there
- Filters ...
- Having an optimal experience on small mobile devices due to space-filling visualizations
- Interactive visualizations for streams, chat, content sharing etc. to have a modern, productive and fast interface to interact with this information
- Connection to users with the help of email addresses even when they aren't on qlaster-->

<!--- An interactive cluster view where you can organize your friends, create events, share content in specific groups and sort and filter the content for what you want to see
- We want to create an interactive chat overview visualization to have a optimal chat view in realtime-->

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
We are only a small group of developers, but we have the passion and skill to implement the idea and implement our vision.
But we need **you** to evaluate the idea and concept. Please write your opinion in the comments or send us an <a href="mailto:qlaster@protonmail.com">email</a>.<br />
Any feedback is greatly appreciated! Thank you.

<br /><br />
<div class="post-author">Author: Christoph Biering</div>
