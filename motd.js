const msgs = [
  "owo ^.=.^ rawr x3, as they say.",
  "I wonder if I've been changed in the night?",
  "This website is powered by: ME in a CAVE with SCRAPS",
  "Anyone else walk digitigrade when you're home alone? Just me? Oh, okay....",
  "On a beautiful beach not far away, I went to visit for a day,<br>got covered with some gooey ooze that changed my DNA....",
  "anatomically correct lizard waifus <a href='https://e621.net/posts/1976031' style='color:skyblue' onclick='return confirm(\"This link leads to a funny picture -- but it has boobies in it. Are you sure?\")'>ONLY!</a>",
  "I. Like. Big birds. Itty-bitty birds. Mississippi Birds. Inner city birds.<br>I like the pretty birds, with the bow tie! Get yo claws did, let it blow dry.<br>I like a big beard, I like a vulture face. I don't discriminate.<br> From the prey birds, to the raptors, you my fave birds, go and slay birds!"
];

document.getElementById('motd').innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
