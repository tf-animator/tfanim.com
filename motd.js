const msgs = [
  //"owo ^.=.^ rawr x3, as they say.",
  "I wonder if I've been changed in the night?",
  "This website is powered by: ME in a CAVE with SCRAPS",
  "Anyone else walk digitigrade when you're home alone? Just me? Oh, okay....",
  "On a beautiful beach not far away, I went to visit for a day,<br>got covered with some gooey ooze that changed my DNA....",
  //"scientifically accurate lizard waifus <a href='https://e621.net/posts/1976031' style='color:skyblue' onclick='return confirm(\"This link leads to a funny comic -- but it has boobies in it. Are you sure?\")'>ONLY!</a>",
  //"I like big birds, itty-bitty birds. Mississippi birds, inner city birds.<br>I like the pretty birds, with the bow tie. Get yo claws did, let it blow dry.",
  "He's cool, he's hot like a frozen sun,<br>He's young, and fast, he's the chosen one!",
  //"Beasts all over the shop...<br>You'll be one of them, sooner or later...",
  //"Starting today is the grand transformation,<br>Hide, run away, or go on a vacation.",
];

document.getElementById('motd').innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
