const fillers = {
  "adventurer": ["Shadow Wanderer", "Mystic Guardian", "Eternal Knight", "Celestial Seeker", "Arcane Warrior", "Dimensional Traveller", "Anime Hero", "Silent Watcher", "Moonlit Samurai", "Starborn Mage", "Phantom Thief", "Digital Dreamer", "空の旅人", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Yuki"],
  "pre": ["Neo", "Shin", "Mirai", "Kuro", "Yume", "Hoshi"],
  "post": ["Tokyo", "Eden", "-no Yume", "City", "Academy", "Galaxy", "Chronicles"],
  "people": ["enchanted", "forgotten", "valiant", "enigmatic", "ethereal", "sacred", "noble", "lost", "stoic", "arcane", "celestial", "神秘的な"],
  "item": ["energy sword", "phase blaster", "grimoire", "spirit cloak", "force shield", "quantum gauntlet", "light saber", "arcane staff", "dimensional key", "mystic bow", "cyber katana", "dreamcatcher"],
  "num": ["a dozen", "a hundred", "countless", "infinite", "a myriad of", "an army of", "a legion of", "an echo of", "a whisper of", "a storm of"],
  "looty": ["ethereal", "mystical", "otherworldly", "sacred", "forgotten", "enigmatic", "shimmering", "arcane"],
  "loots": ["crystals", "star fragments", "dream shards", "moonstones", "sun drops", "ether pearls", "relics of power", "dimensions", "phantom petals", "souls", "time echoes", "magic circuits"],
  "baddies": ["shadow fiends", "nebula wraiths", "time eaters", "void specters", "cosmic dragons", "digital demons", "arcane usurpers", "dread knights", "phantom lords", "chaos entities"],
  "message": ["whisper", "echo", "vision", "premonition", "telepathic message", "dream", "astral call", "prophecy", "soul song", "star signal", "time ripple", "cosmic alert"]
}

const template = `$adventurer, heed my $message!

In the depths of $pre$post, a mystery unravels that threatens the balance of our world. The $people people, 
once thriving and joyous, now whisper in hushed tones, fearful of the $baddies that lurk in the shadows. 
An eerie silence has befallen their lands, and a veil of darkness obscures the truth of their plight.

Your renown as a seeker of truths and unraveler of mysteries precedes you. With your $item in hand, 
you stand as their only hope. Venture into the heart of the enigma, brave $adventurer, and shed light 
on that which has been concealed.

Legends whisper of $num $looty $loots hidden away, guarded by the shadows themselves. Only one with your 
unique talents can claim them. Will you answer the call and embark on this quest for truth and redemption?
 The fate of $pre$post and its $people people rests in your hands.
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
  let options = fillers[name];
  if (options) {
    return options[Math.floor(Math.random() * options.length)];
  } else {
    return `<UNKNOWN:${name}>`;
  }
}

function generate() {
  let story = template;
  while (story.match(slotPattern)) {
    story = story.replace(slotPattern, replacer);
  }

  /* global box */
  box.innerText = story;
}

/* global clicker */
clicker.onclick = generate;

generate();
