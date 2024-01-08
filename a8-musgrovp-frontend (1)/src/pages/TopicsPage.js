import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="Articles">
                <a href="#Web-Servers">Web Servers</a>
                <a href="#Frontend-Design">Frontend Design</a>
                <a href="#Optimizing-Images">Optimizing Images</a>
                <a href="#Cascading-Stylesheets">Cascading Stylesheets</a>
                <a href="#Forms">Forms</a>
                <a href="#Express">Express</a>
                <a href="#JavaScript">JavaScript</a>
                <a href="#DOM">DOM</a>
            </nav>
            <article id="Web-Servers">
                <h3>Web Servers</h3>
                <p> 
                    The word 'index' as it pertains to websites and servers references the designated homepage of the web server. 
                    Specifically, the file <strong>index.html</strong> in the root directory is called the homepage of the web application. 
                    Additionally, the Apache web server that is used on Oregon State's Engineering server uses index.html for 
                    their 'home' page. However, other servers may use a different naming convention. 
                </p>
                <p> 
                    When going to the <strong>Developer Tools</strong> in Google Chrome (by inputting Ctrl+Shift+I), you are able to see a variety of 
                    information about the source such as: elements, console, sources, and network. The <strong>network tab</strong> in particular has 
                    important information that distinguishes when the file is accessed via a local computer versus the web server. While 
                    the Request Method is the same for both methods (GET) as well as the Status Code (200 OK), the web server has a Remote 
                    Address included. Additionally under <strong>Response Headers</strong>, the local file contains Content-Type and a Last-Modified date; 
                    however, the web server includes additional information such as: Accept-Ranges, Connection, Content-Length, Content-Encoding, 
                    Content-Type, Server, etc. Finally, <strong>Request Headers</strong> for the local file contain information about sec-ch-ua, sec-ch-ua-mobile, 
                    sec-ch-ua-platform; while the web server has much more information from a cookie to user-agent. 
                </p> 
                <p>
                    The favicon.ico is included and returns a 200 status because it is obtained from the server and the server had the icon.
                    On the other hand, main.css and main.js are not included and return a 404 status because the server does have those files.   
                </p>
                <p>
                    The <strong>URL</strong> for the web server is: https://web.engr.oregonstate.edu/~musgrovp/a1-musgrovp/. This URL contains several valuable 
                    ieces of information such as the Scheme which is https. Https is a secure version of the http scheme that allows for encryption. 
                    The URL also contains the subdomains of web and engr and also contains the domain of oregonstate.edu. Finally, it contains the 
                    path to the resources with  ~musgrovp and a1-musgrovp. 
                </p>
            </article>
            <article id="Frontend-Design">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> is a key element of modern web development that focuses on creating the most appropriate user experience. 
                    Elements of frontend design include but are not limited to: visual design of the page, the GUI (graphical user-interface), and the 
                    interactive experience as a whole. A consistent design is important when developing a frontend design as well as an intuitive navigation 
                    system.  More specifically, maintaining consistent color choice is key when thinking about maintaining a particular brand.By focusing 
                    on <strong>usability</strong> (the measure of the quality of a user's experience), a frontend developer can ensure 
                    a high quality design. 
                </p>
                <p>
                    According to World Usability Day, there are five main factors of usability. We call these five factors the Five “E”'s of usability. 
                    These “E”'s are outlined below: 
                </p>
                <dl>
                    <dt><strong> Five "E"s of Usability</strong></dt>
                    <dd>The five key pillars of usability.</dd>
                    <dt><strong>Effective</strong></dt>
                    <dd>The website is effective, and the user will end up with accurate results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>The user can perform tasks in the least number of steps and get results quickly.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>Even if a user has never used the site before, they will understand how to locate their goal and remember for next time.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>No errors or roadblocks are present due to identifying how users' create common errors.</dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>The needs of the intended audience are met in both content and design, and the audience will come back!</dd>
                </dl>
                <p>
                    <strong>Page Layout Tags</strong> are block-level elements that break up the follow of the content from the website by adding a newline both before and after 
                    the tag. Page Layout Tags include: header (which denotes the banner for the site), nav (which takes the user to other pages), main (the primary block),
                    section (which denotes a thematic grouping of content), article (denotes a single, specific topic), aside (content related to an article), figure 
                    (media related to an article), blockquote (large quotes in support of an article), footer (which holds legal or other critical information), and div 
                    (a placeholder for dynamic content). By utilizing these many tags, machines such as search engineer robots can better understand which page includes 
                    which components. 
                </p>
                <p>
                    <strong>Anchors</strong>  link to content by utilizing an 'a' tag and a URL to jump directly to where the URL points. This can be to a source outside the 
                    website with a proper URL or to a separate page on the site with a relative URL. Generally, the 'a' tag is used for outside resources. When navigating 
                    within a website, whether that be page-to-page, section-to-section, or article-to-article, a 'nav' block is typically used. Anchors are helpful in 
                    allowing users to go directly to relevant information without having to waste time navigating. 
                </p>
            </article>
            <article id="Optimizing-Images">
                <h3> Optimizing Images</h3>
                <p>
                    There are six main specifications for optimizing images on the web: <strong>Having a descriptive file name, small file size, exact dimensions, correct file format, 
                    reduced resolution, and color mode</strong>. Having a descriptive file name allows for greater search optimization. Smaller file sizes ensures that you have the fastest 
                    possible load times. Making sure you have exact dimensions helps avoid unnecessarily slow load times if the dimensions are incorrect. Having the correct file 
                    format also avoids in unnecessary hiccups. Reducing the resolution makes older monitors better able to view the site. Finally, having the correct color mode 
                    for your file format enables the image to run without any errors. 
                </p>
                <p>
                    For line art the most common file formats are <strong>.GIF, .PNG, and .SVG</strong>. GIF files have 8-bit transparency and it is a common trend to save short photo or video files as an 
                    animated GIF. PNG files have true transparency and are best for biomorphic shapes and line art with solid colors. Finally, SVG files are mathematically-derived and best 
                    with two-dimensional, interactive, or animated images. On the other hand, <strong>.JPG and WebP</strong> are used for photographic images. Both JPG and WebP compress down to smaller file 
                    sizes while remaining rectangular, but higher compression will reduce the image quality. In the case of WebP, transparent backgrounds are possible with true transparency. 
                </p>
            </article>
            <article id ="Cascading-Stylesheets">
                <h3> Cascading Stylesheets</h3>
                <p>
                    There are many reasons to incorporate stylesheets in websites and apps. Stylesheets allow the creator of websites and apps to have a greater level of control on how their creation is 
                    seen by a visitor. This can allow creators to make a more visually appealing product, which in turn creates a better experience. Stylesheets also allow website or app creation to become 
                    a more artistic expression. By manipulating the colors, locations, and even navigation, a product can become a unique experience to the user. 
                </p>
                <p>
                    The five ways to incorporate styles are <strong>external, embedded, inline, JavaScript template literals, and regular JavaScript</strong>. Externally linked .CSS files are generally 
                    the preferred method to use for an app or website because they are the most efficient. The other four ways are implemented to allow greater control over the styling on the page. 
                    Externally linked rules are overruled by imported external rules, which are overruled by embedded or internal rules, which are overruled by inline rules. By manipulating the way they 
                    incorporate style, creators can have a finer level of control over their creation. 
                </p>
            </article>
            <article id ="Forms">
                <h3>Form usability, elements and attributes, best practices, and accessibility</h3>
                <p>
                    The United States government mandates that websites be accessible in the ADA or Americans with Disabilities Act. <strong>There are 6 main goals to make a website accessible</strong>. 
                    First, a  creator should provide clear instructions above the form and in the labels in order to help users with faulty vision. Two, let users know why you're gathering data and which 
                    fields are required to have better informed users. Three, set the first field to autofocus, this helps users without fine motor control. Four, ensure each form control can be 
                    filled in using the keyboard, which once again, helps those without a mouse or keypad. Fifth, add tab indexing to complex forms, so it is clear what order the fields should be 
                    filled in. Finally, ensure validation messages are screen readable for those in need of such technologies. 
                </p>
                <p>
                    There are several input form tags that can be utilized in an HTML document in order to shape how the user interacts with a website. <strong>Label</strong> is a tag that can be used to help 
                    the user understand the purpose of a data entry. <strong>Fieldset</strong> and legend can break large HTML documents into more logical groups, which help the visually-impaired. 
                    <strong>Input and its variation types (email, checkbox, radio) </strong>enable a document to get user data in the most advantages forms after considering the type of data, 
                    the importance of the data, and how to make the process accessible. <strong>Select</strong> is used when a drop-down list of choices would be the most optimal choice in gathering
                    data. <strong>Textarea</strong> allows uses to submit a message of various lengths directly to the creator. Last of all, the <strong>button</strong> tag offers an 
                    alternative to the input type submit. 
                </p>
                <p>
                    <strong>Form Style </strong>design decisions can be made intentionally to promote usability in a website. A creator can reduce the amount of form fields in order 
                    to reduce friction in the user as they simply try to operate a website. Creating single column sites promote greater usability by reducing confusion in a user 
                    having to jump to multiple columns. Having clear communication to users when an error has occurred and how they can solve it is one of the most important considerations in form style. 
                    Finally, telling users if a field is required or not can help reduce tension when a user is faced with long forms.     
                </p>
            </article>
            <article id ="Express">
                <h3>Node, npm, and Express</h3>
                <p>
                    Several different technologies have been developed in addition to basic HTML and CSS to enhance we create applications. One such application is <strong>Node.js</strong> 
                    which is an open source environment that allows cross-platform environments to develop sever-side and networking applications. Essentially, node.js gives as a platform 
                    to utilize a rich library of JavaScript modules rather than creating them on our own each time. <strong>NPM </strong>is a package manager for Node.js which enables 
                    developers to have an easy -to-navigate way to find relevant Node applications for their needs. Lastly, <strong>Express</strong> provides well-put-together APIs in order to complete 
                    common tasks in web development using Node.js. 
                </p>
            </article>
            <article id ="JavaScript">
                <h3>JavaScript</h3>
                <p>
                    There are a few important elements to know when learning JavaScript, one such element is <strong>data types</strong>. There are several data types in JavaScript: a number, a 
                    Boolean value  (false or true), a string, a symbol, the special values undefined and null, and an object. Each of these data types gives a programmer ways to manipulate data 
                    as need. Other than object type, all other types are called primitive types. 
                </p>
                <p>
                    <strong>Objects</strong> in JavaScript are sets of name-value pairs. When working with objects, we can manipulate the name-value pairs (called properties of the object) by creating, reading, 
                    updating, or deleting the properties. These actions are referred to as <strong>CRUD</strong> in the business. A more specific kind of object is an Array. <strong>Arrays</strong> in JavaScript are objects whose 
                    property names are strings. Having arrays allows programmers to easily index through a series of values. <strong>JSON </strong>(JavaScript Object Notation) is a format used throughout the industry 
                    to exchange data between applications. JSON allows a programming language agnostic way to communicate data and objects between programs. 
                </p>
                <p>
                    <strong>Conditionals and loops</strong> in JavaScript are used in the language essentially how they are used in any other language, to iterate through information based on some defined condition.
                     A couple of things to note in JavaScript when using these structures are JavaScript's <strong>automatic type conversion</strong> and <strong>loose equality operators.</strong> Type conversion means that 
                     JavaScript will automatically transform the data into the correct type for the operation. While seemingly useful, this can lead to confusion down the line, so it is best to 
                     avoid relying on automatic type conversion. Lose equality operators allow a programmer to check if values are loosely equal, such as 42 and '42'. However, it is best practice 
                     to know your types and not use these operators. 
                </p>
                <p>
                    <strong>Object-Oriented Programming </strong>in JavaScript functions similarly to Object-Oriented Programming in other languages. By using objects with an identity, state, and behavior, 
                    programmers can solve complex problems. However, JavaScript, unlike some other languages, can create objects without first declaring a class. The functionality to create 
                    classes then objects is supported by the language, but it is not required to be implemented.
                </p>
                <p>              
                    <strong>Functional programming </strong>in JavaScript uses functions as parameters in order to accomplish complex tasks. This is enabled because in JavaScript, 
                    functions are 'first-class' values. This distinction means that programmers can assign functions to variables, define functions that receive other functions as 
                    arguments, and define functions that return functions. Functional programming is powerful behavior and is behind a lot of modern JavaScript programming, and it is
                    essential to have a solid understanding of the concept. 
                </p>
            </article>
            <article id ="DOM">
                <h3>Manipulating the DOM with JavaScript and Express</h3>
                <p>
                    The Document Object Model or <strong>DOM</strong> is a visual and interactive representation of a web page's structure. The DOM is structured in a tree structure
                    format which allows programmers to manipulate the nodes of the DOM in order to interact with a website. <strong>JavaScript</strong> allows programmers to dynamically  change a 
                    websites DOM. This functionality helps a creator to build more interactive, dynamic websites that create a greater user experience. Additionally, <strong>Express</strong>
                    gives asynchronous function capability. This allows programmers to be able to get information about HTTP requests and handle errors as they occur. 
                </p>
            </article>
         </>
    );
}

export default TopicsPage;