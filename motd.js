const msgs = [
  "owo ^.=.^ rawr x3",
  "Today's shader compiles on the first try.",
  "I wonder if I've been changed in the night?",
  "This website is powered by: ME in a CAVE with SCRAPS",
  "Anyone else walk digitigrade when you're home alone? Just me? Oh, okay....",
  "On a beautiful beach not far away, I went to visit for a day,<br>got covered with some gooey ooze that changed my DNA....",
  "anatomically correct lizard waifus <a href='https://e621.net/posts/1976031' style='color:skyblue' onclick='return confirm(\"This link leads to a funny picture -- but it has boobies in it (omg!). Are you sure?\")'>ONLY!</a>",
];

document.getElementById('motd').innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
