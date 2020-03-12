const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

let cTa = document.getElementById("cta-img");
cTa.setAttribute("src", "img/header-img.png");
// cTa.setAttribute("src", siteContent["nav"]["img-scr"]);
// console.log(cTa);

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

let a = document.getElementsByTagName("a");
a[0].textContent = "Service";
("Service");
a[1].textContent = "Proudct";
("Proudct");
a[2].textContent = "Vision";
("Vision");
a[3].textContent = "Features";
("Features");
a[4].textContent = "About";
("About");
a[5].textContent = "Contact";
("Contact");

let sectionCta = document.getElementsByTagName("button");
sectionCta[0].textContent = "Get started";
// ("Get started");

let sectionText = document.getElementsByTagName("h1");
sectionText[0].textContent = "Dom Is Awesome";

let sectionMain = document.getElementsByTagName("h4");
sectionMain[0].textContent = "Features";
("Features");
sectionMain[1].textContent = "About";
("About");
sectionMain[2].textContent = "Services";
("Services");
sectionMain[3].textContent = "Product";
("Product");
sectionMain[4].textContent = "Vision";
("Vision");
sectionMain[5].textContent = "Contact";
("Contact");
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg");

let sectionContant = document.getElementsByTagName("p");
sectionContant[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
("Features");
sectionContant[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
("About");
sectionContant[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
("Services");
sectionContant[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
("Product");
sectionContant[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
("Vision");
sectionContant[5].textContent = "123 Way 456 Street Somewhere, USA";
("Address");
sectionContant[6].textContent = "1 (888) 888-8888";
("Contact");
sectionContant[7].textContent = "sales@greatidea.io";
("Email");
sectionContant[8].textContent = "Copyright Great Idea! 2018";
("Footer");

// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
let mainNav = (document.querySelectorAll("a").style.color = "green");
// const mainHeader = document.querySelector('.main-header');

// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// let p = document.createElement("p");
// document.body.appendChild(p);

let newNav = document.createElement("a");
newNav.textContent = "chat";
