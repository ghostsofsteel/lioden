window.onload = function () {
    chrome.storage.local.get(['enabled', 'enabledSide', 'npcEffectivenessEnabled', 'genderNeutralEnabled', 'genderNeutralEnabledSide', "cosmeticUrlPrimary", "cosmeticUrlSecondary", 'selectedImage', 'selectedBaseImage', 'selectedImage2', 'selectedBaseImage2'], (data) => {
        const isTextReplacementEnabled = data.enabled || false;
		const isTextReplacementEnabledSide = data.enabledSide || false;
        const isNpcEffectivenessEnabled = data.npcEffectivenessEnabled || false;
		const isGenderNeutralEnabledSide = data.genderNeutralEnabledSide || false;
        const isGenderNeutralEnabled = data.genderNeutralEnabled || false;
		const cosmeticUrlPrimary = data.cosmeticUrlPrimary || ' ';
		const cosmeticUrlSecondary = data.cosmeticUrlSecondary || ' ';
        const selectedImage = data.selectedImage || '';
        const selectedBaseImage = data.selectedBaseImage || '';
		const selectedImage2 = data.selectedImage2 || '';
        const selectedBaseImage2 = data.selectedBaseImage2 || '';

        localStorage.setItem('textReplacementEnabled', isTextReplacementEnabled);
		localStorage.setItem('textReplacementEnabledSide', isTextReplacementEnabledSide);
        localStorage.setItem('npcEffectivenessEnabled', isNpcEffectivenessEnabled);
        localStorage.setItem('genderNeutralEnabled', isGenderNeutralEnabled);
		localStorage.setItem('genderNeutralEnabledSide', isGenderNeutralEnabledSide);

if (isNpcEffectivenessEnabled) {
            checkBattleOpponentInfo();
        }
const sidebarLink = document.querySelector("body > div.container.main > div:nth-child(2) > div.sidebar.col-md-3.visible-xs.visible-sm.col-xs-12.visible-md.visible-lg > div.col-md-12.col-xs-6 > a");
		if (sidebarLink) {
      const linkHref = sidebarLink.href;
      const urlIdMatch = linkHref.match(/mid=(\d+)/); 

      if (urlIdMatch && urlIdMatch[1]) {
        const pageId = urlIdMatch[1];

        if (pageId === cosmeticUrlPrimary && isTextReplacementEnabled) {
       if (isTextReplacementEnabled) {
            replaceTextContent();
			console.log("main");
        }
		}
          	  
	  if (pageId === cosmeticUrlPrimary && isGenderNeutralEnabled) {
       if (isGenderNeutralEnabled) {
           replaceWithGenderNeutral();
		   console.log("main");
        }
		}
		if (pageId === cosmeticUrlSecondary && isTextReplacementEnabledSide) {
        if (isTextReplacementEnabledSide) {
            replaceTextContent();
			console.log("side");
        }
		}
       if (pageId === cosmeticUrlSecondary && isGenderNeutralEnabledSide) {
        if (isGenderNeutralEnabledSide) {
            replaceWithGenderNeutral();
			console.log("side");
        }
		}   	  
		}
		}                
    });
	



  function replaceTextContent() {
    const textReplacements = [
		{
            oldText: "King Dynasty",
            newText: "Queen Dynasty"
        },
		{
            oldText: "Do you want to offer studding services to other players? This will mean your male lion will become available for breeding purposes in exchange for SB and/or GB.",
            newText: "Do you want to offer studding services to other players? This will mean your female lion will become available for breeding purposes in exchange for SB and/or GB."
        },
		{
            oldText: "Retiring Your King",
            newText: "Retiring Your Queen"
        },
		{
            oldText: "Main Male",
            newText: "Main Female"
        },
		{
            oldText: "like leading male'sss",
            newText: "like leading female'sss"
        },
		{
            oldText: "Some lions are laying amongst a pile of fresh meat, waiting for the right offer to trade to another male",
            newText: "Some lions are laying amongst a pile of fresh meat, waiting for the right offer to trade to another female"
        },
		{
            oldText: "Hello, King Lion! I have heard you are quite skilled.",
            newText: "Hello, Queen Lion! I have heard you are quite skilled."
        },
		{
            oldText: "Only the most special of lionesses come to these parts of Lioden. Once a week one single receptive female prowls this area in search of her new king. But he shouldn't be just any king - oh no! This female seeks only",
            newText: "Only the most special of lionesses come to these parts of Lioden. Once a week one single receptive female prowls this area in search of her new queen. But she shouldn't be just any queen - oh no! This female seeks only"
        },
        {
            oldText: "males, and is very certain that she can take her pick..",
            newText: "females, and is very certain that she can take her pick.."
        },
		{
            oldText: "Oh look! There is a lioness here... And she's waiting. Are you manly enough to impress her? It will cost",
            newText: "Oh look! There is a lioness here... And she's waiting. Are you womanly enough to impress her? It will cost.."
        },
		{
            oldText: "You strut in front of this female, chest held out proudly and mane puffed out in such a manly, sexy way. At the end of your testosterone-filled display, you let out your loudest, most impressive roar. She gets up and leaves, no doubt to watch the next male, but you notice a glint in her eye. Maybe you're in with a chance..",
            newText: "You strut in front of this female, chest held out proudly and mane puffed out in such a womanly, sexy way. At the end of your estrogen-filled display, you let out your loudest, most impressive roar. She gets up and leaves, no doubt to watch the next male, but you notice a glint in her eye. Maybe you're in with a chance.."
        },
		{
            oldText: "A light wind blows through the area, ruffling your mane.",
            newText: "A light wind blows through the area, ruffling your fur."
        },
        {
            oldText: "You walk across a patch of thorny bushes... And you walk away with a lovely crown in your mane.",
            newText: "You walk across a patch of thorny bushes... And you walk away with a lovely crown atop your head."
        },
		{
            oldText: "You shake the filthy sand from your mane.",
            newText: "You shake the filthy sand from your fur."
        },
		{
            oldText: "Who is that sexy fella? Ohhh.. It's your reflection in the water.",
            newText: "Who is that sexy gal? Ohhh.. It's your reflection in the water."
        },
		{
            oldText: "but he does trust that the king of beasts will make a wise decision.",
            newText: "but he does trust that the queen of beasts will make a wise decision."
        },
		{
            oldText: "The jackal doesn't seem bothered by your presence, so you decide to help it react accordingly upon meeting a true king.",
            newText: "The jackal doesn't seem bothered by your presence, so you decide to help it react accordingly upon meeting a true queen."
        },
		{
            oldText: "You come near, puffing up your fabulous mane, and the female snuggles against you. Score!",
            newText: "You come near, puffing up your fabulous fur, and the female snuggles against you. Score!"
        },
		{
            oldText: "You come near, puffing up your fabulous mane, but she roars at you and snarls whenever you come too near. Women. Eh. Maybe next time?",
            newText: "You come near, puffing up your fabulous fur, but she roars at you and snarls whenever you come too near. Women. Eh. Maybe next time?"
        },
		{
            oldText: "You shake your mane in a slow motion, as you walk by their side for a while. They whisper about you, obviously impressed. As they walk away, they brush their tails against you and leave a gift.",
            newText: "You shake your fur in a slow motion, as you walk by their side for a while. They whisper about you, obviously impressed. As they walk away, they brush their tails against you and leave a gift."
        },
		{
            oldText: "Suddenly feeling just as exhausted as the two males seem, you let out a huffy grunt, hoping to gain the other king's attention. Upon doing so, you softly tread over with your head lowered to show you're friendly, then settle with the two males beneath the shady foliage to take a nice nap. With the relaxing subtle prickle of the other king's tongue grazing your fur methodically, you feel your worries melt away as you succumb to a much-needed snooze.",
            newText: "Suddenly feeling just as exhausted as the two males seem, you let out a huffy grunt, hoping to gain the other king's attention. Upon doing so, you softly tread over with your head lowered to show you're friendly, then settle with the two males beneath the shady foliage to take a nice nap. With the relaxing subtle prickle of the king's tongue grazing your fur methodically, you feel your worries melt away as you succumb to a much-needed snooze."
        },
		{
            oldText: "Y-yeah, I'm talking about Chads like y-you!",
            newText: "Y-yeah, I'm talking about Stacys like y-you!"
        },
		{
            oldText: "When you start to anxiously check out your own mane, one of them grins, gives you some heart shells, then grooms you a little. He confirms that, indeed, your fur is just perfect the way it is, and you should love yourself just as much as your friends do.",
            newText: "When you start to anxiously check out your own fur, one of them grins, gives you some heart shells, then grooms you a little. He confirms that, indeed, your fur is just perfect the way it is, and you should love yourself just as much as your friends do."
        },
		{
            oldText: "Hi, there, big boy! Ohhhh you're so manly and.. fluffy!",
            newText: "Hi, there, big girl! Ohhhh you're so womanly and.. fluffy!"
        },
		{
            oldText: "That mask suits you well. Come back with a Fluffy Bunny Carcass, big boy.",
            newText: "That mask suits you well. Come back with a Fluffy Bunny Carcass, big girl."
        },
		{
            oldText: "Oh there you are, big boy. I’ve been waiting!",
            newText: "Oh there you are, big girl. I’ve been waiting!"
        },
		{
            oldText: "Bring me the bodies of our enemies, big boy.",
            newText: "Bring me the bodies of our enemies, big girl."
        },
		{
            oldText: "Two lambs, big boy.",
            newText: "Two lambs, big girl."
        },
		{
            oldText: "It’s okay, I always have been a lone lioness, it’s better this way. I am way too emotional around you, big boy.",
            newText: "It’s okay, I always have been a lone lioness, it’s better this way. I am way too emotional around you, big girl."
        },
		{
            oldText: "You try to look for a way inside but to no avail. Irritated, you let out a loud roar that echoes in the air. A sudden ruffle of leaves on the other side tells you that someone heard you and ran away in fear. That's right, you're king around here! You head on your way with your ego inflated.",
            newText: "You try to look for a way inside but to no avail. Irritated, you let out a loud roar that echoes in the air. A sudden ruffle of leaves on the other side tells you that someone heard you and ran away in fear. That's right, you're queen around here! You head on your way with your ego inflated."
        },
		{
            oldText: "You're genuinely curious, as you had no idea lionesses could participate in tournaments. She says they can, as long as they're able to match a weight category to challenge an adult male or another lioness. You promise you'll cheer for her once she gets in. Maybe you should go let some feisty leader lionesses know they can fight, too!",
            newText: "You're excited to meet another female combatant! The two of you exchange a few words about how unfair it is that she can't compete. You promise to beat up those knucklehead boy-lions for her. Hopefully your prowess will prove to everybody that females are just as strong as males."
        },
		{
            oldText: "It must be how he made his worshipers feel. You sense his hand stroking your mane.",
            newText: "It must be how he made his worshipers feel. You sense his hand stroking your fur."
        },
		{
            oldText: "Seth pulls your mane to stop you and takes a few steps towards a giant frog that just leaped right on your path.",
            newText: "Seth pulls your tail to stop you and takes a few steps towards a giant frog that just leaped right on your path."
        },
		{
            oldText: "You hide it immediately in your mane.",
            newText: "You hide it immediately in your tail fur."
        },
		{
            oldText: "Murdering lions and stealing their souls, bribing kings like you to collect the remains of his kingdom",
            newText: "Murdering lions and stealing their souls, bribing kings and queens like you to collect the remains of his kingdom"
        },
		{
            oldText: "As you get closer to this weird bubble, you see your own mane and paws begin to stretch in unnatural ways.",
            newText: "As you get closer to this weird bubble, you see your own tail and paws begin to stretch in unnatural ways."
        },
		{
            oldText: "A true king of beasts cares for the proper order of things.",
            newText: "A true queen of beasts cares for the proper order of things."
        },
		{
            oldText: "You follow the humans silently, and they lead you to a source of water. Being the king of beasts as you are, you decide to drink right away, not minding the humans taking pictures of you.",
            newText: "You follow the humans silently, and they lead you to a source of water. Being the queen of beasts as you are, you decide to drink right away, not minding the humans taking pictures of you."
        },
		{
            oldText: "Like the wise king of beasts that you are, you ask the birds to hop on your back and feed on the swarms of locust as you explore.",
            newText: "Like the wise queen of beasts that you are, you ask the birds to hop on your back and feed on the swarms of locust as you explore."
        },
		{
            oldText: "The bird flies away shaken a bit, but obeys the king of beasts.",
            newText: "The bird flies away shaken a bit, but obeys the queen of beasts."
        },
		{
            oldText: "You shake your mane to get rid of the creepy crawlies, then run back out of the swarm. You examine your mane for any insect debris and end up finding something shiny!",
            newText: "You shake your fur to get rid of the creepy crawlies, then run back out of the swarm. You examine your fur for any insect debris and end up finding something shiny!"
        },
		{
            oldText: "You shake your mane to get rid of the creepy crawlies, then run back out of the swarm. You examine your mane for any insect debris and end up finding something shiny!",
            newText: "You shake your fur to get rid of the creepy crawlies, then run back out of the swarm. You examine your fur for any insect debris and end up finding something shiny!"
        },
		{
            oldText: "The Nephelines celebrate your help and embroider their feathers into your mane.",
            newText: "The Nephelines celebrate your help and embroider their feathers into your fur."
        },
		{
            oldText: "The 'snuhflakes' fall on your mane creating a glittering aura.",
            newText: "The 'snuhflakes' fall on your fur creating a glittering aura."
        }

    ];

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      let text = node.nodeValue;

      textReplacements.forEach(({ oldText, newText }) => {
        const escapedOldText = escapeRegExp(oldText);
        text = text.replace(new RegExp(escapedOldText, 'g'), newText);
      });
      node.nodeValue = text;
    }
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

function replaceWithGenderNeutral() {
    const genderNeutralReplacements = [
      {
            oldText: "King Dynasty",
            newText: "Pride Leader Dynasty"
        },
		{
            oldText: "Do you want to offer studding services to other players? This will mean your male lion will become available for breeding purposes in exchange for SB and/or GB.",
            newText: "Do you want to offer studding services to other players? This will mean your leader lion will become available for breeding purposes in exchange for SB and/or GB."
        },
		{
            oldText: "Retiring Your King",
            newText: "Retiring Your Pride Leader"
        },
		{
            oldText: "Main Male",
            newText: "Main Pride Leader"
        },
		{
            oldText: "like leading male'sss",
            newText: "like leading lions'sss"
        },
		{
            oldText: "Some lions are laying amongst a pile of fresh meat, waiting for the right offer to trade to another male",
            newText: "Some lions are laying amongst a pile of fresh meat, waiting for the right offer to trade to another lion"
        },
		{
            oldText: "Hello, King Lion! I have heard you are quite skilled.",
            newText: "Hello, Leader Lion! I have heard you are quite skilled."
        },
		{
            oldText: "Only the most special of lionesses come to these parts of Lioden. Once a week one single receptive female prowls this area in search of her new king. But he shouldn't be just any king - oh no! This female seeks only",
            newText: "Only the most special of lions come to these parts of Lioden. Once a week one single receptive female prowls this area in search of her new leader. But they shouldn't be just any leader - oh no! This female seeks only"
        },
        {
            oldText: "males, and is very certain that she can take her pick..",
            newText: "leaders, and is very certain that she can take her pick.."
        },
		{
            oldText: "Oh look! There is a lioness here... And she's waiting. Are you manly enough to impress her? It will cost",
            newText: "Oh look! There is a lioness here... And she's waiting. Are you magnificent enough to impress her? It will cost.."
        },
		{
            oldText: "You strut in front of this female, chest held out proudly and mane puffed out in such a manly, sexy way. At the end of your testosterone-filled display, you let out your loudest, most impressive roar. She gets up and leaves, no doubt to watch the next male, but you notice a glint in her eye. Maybe you're in with a chance..",
            newText: "You strut in front of this female, chest held out proudly and mane puffed out in such a magnificent, sexy way. At the end of your estrogen-filled display, you let out your loudest, most impressive roar. She gets up and leaves, no doubt to watch the next lion, but you notice a glint in her eye. Maybe you're in with a chance.."
        },
		{
            oldText: "A light wind blows through the area, ruffling your mane.",
            newText: "A light wind blows through the area, ruffling your fur."
        },
        {
            oldText: "You walk across a patch of thorny bushes... And you walk away with a lovely crown in your mane.",
            newText: "You walk across a patch of thorny bushes... And you walk away with a lovely crown atop your head."
        },
		{
            oldText: "You shake the filthy sand from your mane.",
            newText: "You shake the filthy sand from your fur."
        },
		{
            oldText: "Who is that sexy fella? Ohhh.. It's your reflection in the water.",
            newText: "Who is that sexy thang? Ohhh.. It's your reflection in the water."
        },
		{
            oldText: "but he does trust that the king of beasts will make a wise decision.",
            newText: "but he does trust that the leader of beasts will make a wise decision."
        },
		{
            oldText: "The jackal doesn't seem bothered by your presence, so you decide to help it react accordingly upon meeting a true king.",
            newText: "The jackal doesn't seem bothered by your presence, so you decide to help it react accordingly upon meeting a true leader."
        },
		{
            oldText: "You come near, puffing up your fabulous mane, and the female snuggles against you. Score!",
            newText: "You come near, puffing up your fabulous fur, and the female snuggles against you. Score!"
        },
		{
            oldText: "You come near, puffing up your fabulous mane, but she roars at you and snarls whenever you come too near. Women. Eh. Maybe next time?",
            newText: "You come near, puffing up your fabulous fur, but she roars at you and snarls whenever you come too near. Women. Eh. Maybe next time?"
        },
		{
            oldText: "You shake your mane in a slow motion, as you walk by their side for a while. They whisper about you, obviously impressed. As they walk away, they brush their tails against you and leave a gift.",
            newText: "You shake your fur in a slow motion, as you walk by their side for a while. They whisper about you, obviously impressed. As they walk away, they brush their tails against you and leave a gift."
        },
		{
            oldText: "Suddenly feeling just as exhausted as the two males seem, you let out a huffy grunt, hoping to gain the other king's attention. Upon doing so, you softly tread over with your head lowered to show you're friendly, then settle with the two males beneath the shady foliage to take a nice nap. With the relaxing subtle prickle of the other king's tongue grazing your fur methodically, you feel your worries melt away as you succumb to a much-needed snooze.",
            newText: "Suddenly feeling just as exhausted as the two males seem, you let out a huffy grunt, hoping to gain the other king's attention. Upon doing so, you softly tread over with your head lowered to show you're friendly, then settle with the two males beneath the shady foliage to take a nice nap. With the relaxing subtle prickle of the king's tongue grazing your fur methodically, you feel your worries melt away as you succumb to a much-needed snooze."
        },
		{
            oldText: "Y-yeah, I'm talking about Chads like y-you!",
            newText: "Y-yeah, I'm talking about Sigmas like y-you!"
        },
		{
            oldText: "When you start to anxiously check out your own mane, one of them grins, gives you some heart shells, then grooms you a little. He confirms that, indeed, your fur is just perfect the way it is, and you should love yourself just as much as your friends do.",
            newText: "When you start to anxiously check out your own fur, one of them grins, gives you some heart shells, then grooms you a little. He confirms that, indeed, your fur is just perfect the way it is, and you should love yourself just as much as your friends do."
        },
		{
            oldText: "Hi, there, big boy! Ohhhh you're so manly and.. fluffy!",
            newText: "Hi, there, big buddy! Ohhhh you're so strong and.. fluffy!"
        },
		{
            oldText: "That mask suits you well. Come back with a Fluffy Bunny Carcass, big boy.",
            newText: "That mask suits you well. Come back with a Fluffy Bunny Carcass, big buddy."
        },
		{
            oldText: "Oh there you are, big boy. I’ve been waiting!",
            newText: "Oh there you are, big buddy. I’ve been waiting!"
        },
		{
            oldText: "Bring me the bodies of our enemies, big boy.",
            newText: "Bring me the bodies of our enemies, big buddy."
        },
		{
            oldText: "Two lambs, big boy.",
            newText: "Two lambs, big buddy."
        },
		{
            oldText: "It’s okay, I always have been a lone lioness, it’s better this way. I am way too emotional around you, big boy.",
            newText: "It’s okay, I always have been a lone lioness, it’s better this way. I am way too emotional around you, big buddy."
        },
		{
            oldText: "You try to look for a way inside but to no avail. Irritated, you let out a loud roar that echoes in the air. A sudden ruffle of leaves on the other side tells you that someone heard you and ran away in fear. That's right, you're king around here! You head on your way with your ego inflated.",
            newText: "You try to look for a way inside but to no avail. Irritated, you let out a loud roar that echoes in the air. A sudden ruffle of leaves on the other side tells you that someone heard you and ran away in fear. That's right, you're leader around here! You head on your way with your ego inflated."
        },
		{
            oldText: "You're genuinely curious, as you had no idea lionesses could participate in tournaments. She says they can, as long as they're able to match a weight category to challenge an adult male or another lioness. You promise you'll cheer for her once she gets in. Maybe you should go let some feisty leader lionesses know they can fight, too!",
            newText: "You're excited to meet a female combatant! The two of you exchange a few words about how unfair it is that she can't compete. You promise to beat up those knucklehead boy-lions for her. Hopefully your prowess will prove to everybody deserves a chance in the arena."
        },
		{
            oldText: "It must be how he made his worshipers feel. You sense his hand stroking your mane.",
            newText: "It must be how he made his worshipers feel. You sense his hand stroking your fur."
        },
		{
            oldText: "Seth pulls your mane to stop you and takes a few steps towards a giant frog that just leaped right on your path.",
            newText: "Seth pulls your tail to stop you and takes a few steps towards a giant frog that just leaped right on your path."
        },
		{
            oldText: "You hide it immediately in your mane.",
            newText: "You hide it immediately in your tail fur."
        },
		{
            oldText: "Murdering lions and stealing their souls, bribing kings like you to collect the remains of his kingdom",
            newText: "Murdering lions and stealing their souls, bribing leaders like you to collect the remains of his kingdom"
        },
		{
            oldText: "As you get closer to this weird bubble, you see your own mane and paws begin to stretch in unnatural ways.",
            newText: "As you get closer to this weird bubble, you see your own tail and paws begin to stretch in unnatural ways."
        },
		{
            oldText: "A true king of beasts cares for the proper order of things.",
            newText: "A true leader of beasts cares for the proper order of things."
        },
		{
            oldText: "You follow the humans silently, and they lead you to a source of water. Being the king of beasts as you are, you decide to drink right away, not minding the humans taking pictures of you.",
            newText: "You follow the humans silently, and they lead you to a source of water. Being the leader of beasts as you are, you decide to drink right away, not minding the humans taking pictures of you."
        },
		{
            oldText: "Like the wise king of beasts that you are, you ask the birds to hop on your back and feed on the swarms of locust as you explore.",
            newText: "Like the wise leader of beasts that you are, you ask the birds to hop on your back and feed on the swarms of locust as you explore."
        },
		{
            oldText: "The bird flies away shaken a bit, but obeys the king of beasts.",
            newText: "The bird flies away shaken a bit, but obeys the leader of beasts."
        },
		{
            oldText: "You shake your mane to get rid of the creepy crawlies, then run back out of the swarm. You examine your mane for any insect debris and end up finding something shiny!",
            newText: "You shake your fur to get rid of the creepy crawlies, then run back out of the swarm. You examine your fur for any insect debris and end up finding something shiny!"
        },
		{
            oldText: "The Nephelines celebrate your help and embroider their feathers into your mane.",
            newText: "The Nephelines celebrate your help and embroider their feathers into your fur."
        },
		{
            oldText: "The 'snuhflakes' fall on your mane creating a glittering aura.",
            newText: "The 'snuhflakes' fall on your fur creating a glittering aura."
        }
    ];

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      let text = node.nodeValue;

      genderNeutralReplacements.forEach(({ oldText, newText }) => {
        const escapedOldText = escapeRegExp(oldText);
        text = text.replace(new RegExp(escapedOldText, 'g'), newText);
      });
      node.nodeValue = text;
    }
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
};

  function checkBattleOpponentInfo() {
    const npcEffectiveness = {
	"African Rock Python": {
        mostEffective: "Trample",
        noEffect: "Roar",
        leastEffective: "Grab, Kick, Pounce"
    },
	"African Wild Dog": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "",
        leastEffective: "Kick"
    },
	"African Wild Dog Pack": {
        mostEffective: "",
        noEffect: "Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
    },
	"Aiatar": {
        mostEffective: "",
        noEffect: "",
        leastEffective: ""
    },
	"Albino Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "",
        leastEffective: "Kick"
    },
	"Albino Lion": {
        mostEffective: "",
        noEffect: "",
        leastEffective: ""
    },
	"Alphyn": {
        mostEffective: "Trample",
        noEffect: "N/A",
        leastEffective: "Grab, Kick, Pounce, Roar"
    },
	"Alukah": {
        mostEffective: "",
        noEffect: "Roar",
        leastEffective: ""
    },
	"Another Player": {
        mostEffective: "",
        noEffect: "",
        leastEffective: ""
    },
	"Apedemak Cavalry": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Pound, Rest, Roar, Strangle"
    },
	"Apollyon": {
        mostEffective: "Kick",
        noEffect: "Roar",
        leastEffective: "Charge, Claw, Rest, Strangle"
    },
	"Apophis, the Serpent of Chaos": {
        mostEffective: "",
        noEffect: "",
        leastEffective: ""
    },
	"Arabian Wolf": {
        mostEffective: "",
        noEffect: "",
        leastEffective: ""
    },
	"Arabian Wolf Pack": {
        mostEffective: "",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Ariel": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Baboon": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Baboon": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Bahkauv": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Balbok": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Banshee": {
        mostEffective: "N/A",
		noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Barbary Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Barong": {
		mostEffective: "N/A",
		noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Black Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Black Mamba": {
        mostEffective: "Trample",
        noEffect: "Roar",
        leastEffective: "Grab, Kick, Pounce"
    },
	"Black Panther": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Black-Necked Spitting Cobra": {
        mostEffective: "Trample",
        noEffect: "Roar",
        leastEffective: "Grab, Kick, Pounce"
    },
	"Blazing Fiend": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Bodybuilder Lion": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Boerboel Pack": {
        mostEffective: "Claw",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Broken Leopon": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Brown Hyena": {
		 mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Buffalo": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Bull Crocodile": {
        mostEffective: "Kick",
        noEffect: "N/A",
        leastEffective: "Charge, Claw, Strangle"
    },
	"Bull Elephant": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Rest, Strangle"
    },
	"Bull Rhino": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Rest, Strangle"
    },
	"Buraq": {
		mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Cannibal Lion": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Cape Vultures": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Caracal": {
		mostEffective: "Grab, Pounce, Trample",
		noEffect: "N/A",
		leastEffective: "Kick"
	},
	"Celestial Crustacean": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Cernunnos": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Cheetah": {
		mostEffective: "Trample",
		noEffect: "N/A",
		leastEffective: "Grab, Kick, Pounce"
	},
	"Cherubim": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
	},
	"Chimera": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce"
    },
	"Chort": {
		mostEffective: "Kick",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Rest, Strangle"
	},
	"Chuckling Hyenas": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
	},
	"Cluster Drakeling": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Cluster Dustling": {
		mostEffective: "Roar",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Cluster Jellyfish": {
		mostEffective: "Claw",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Cluster Octopus": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Comet Serpent": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "Grab, Pounce"
	},
	"Comet Wyvern": {
		mostEffective: "Claw",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Corrupted Crocodile": {
		mostEffective: "Kick",
		noEffect: "Roar",
		leastEffective: "Charge, Claw, Strangle"
	},
	"Crocodile": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "Charge, Claw, Strangle"
	},
	"Decaying Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Demonic Beast": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
	},
	"Dohne Merino Ram": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Dorsal Lion": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Drought Humans": {
		mostEffective: "Claw",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
	},
	"Dumah": {
		mostEffective: "N/A",
		noEffect: "Roar",
		leastEffective: "N/A"
	},
	"Erelath": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Ethiopian Wolf": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Evil Lion & Co": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
	},
	"Female Cheetah": {
		mostEffective: "Trample",
		noEffect: "N/A",
		leastEffective: "Grab, Kick, Pounce"
	},
	"Female Elephant": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
	},
	"Fiend": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Flaming Lion": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Folded Ears Lion": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Galactic Drakontos": {
		mostEffective: "N/A",
		noEffect: "Roar, Trample",
		leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
	},
	"Gamma Burstling": {
		mostEffective: "Roar",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Gamma Drake": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Gamma Ray Beast": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Gamma Ray Being": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Gelada": {
		mostEffective: "Claw",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Gelada Pack": {
		mostEffective: "Claw",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
	},
	"Genius": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Ghaddar": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Grab, Pounce, Rest, Strangle"
	},
	"Ghaurvan": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "N/A"
	},
	"Giraffe": {
		mostEffective: "N/A",
		noEffect: "N/A",
		leastEffective: "Grab, Pounce"
	},
	"Graveyard Hyena Pack": {
		mostEffective: "N/A",
		noEffect: "Trample",
		leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
	},
	"Great White Shark": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Griffin": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Guarding Talos": {
		mostEffective: "Kick",
		noEffect: "Roar, Trample",
		leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
	},
	"Haizum": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Hellfire Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Hellfire Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Hellhound": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Hippo": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Hippocamp": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Hippogryph": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Roar, Strangle"
    },
	"Hoarding Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Honey Badger": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Charge, Claw, Kick, Strangle"
    },
	"Hooded Vultures": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Humans": {
        mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Hungry AWD": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Hunting Females": {
		mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Inanna": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Infernal Demon": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Infrared Drakeling": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Infrared Loong": {
        mostEffective: "Claw",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce, Rest, Strangle, Trample"
    },
	"Infrared Wyvern": {
        mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Interstellar Drake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Interstellar Drakontos": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Interstellar Snake": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Interstellar Wyvern": {
        mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Jeep": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Pound, Strangle"
    },
	"Kalahari Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Katanga Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Kirin": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Kudu": {
       mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Laharu": {
		mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Lailah": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lamia": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Large Hyena Clan": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Strangle"
    },
	"Leopard": {
       mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Lich Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lion with Snake Eyes": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lioness": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lioness Pack": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Lonely Leopon": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lonely Lion": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Lonely Tiger": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Maalik": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Magnetar Burstling": {
		mostEffective: "Roar",
		noEffect: "Trample",
		leastEffective: "Grab, Pounce, Strangle"
	},
	"Magnetar Ctenophore": {
		mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Magnetar Jellyfish": {
		mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Majestic Ferus Male": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Male Ostrich": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Male Smilus": {
		mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Mandrill": {
		mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Manticore": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Marabou Stork": {
		mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Marabou Storks": {
		mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Marax": {
		mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Marchosias": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Masai Warrior": {
		mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Mating Hyenas": {
		mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
    },
	"Mating Lions": {
		mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
    },
	"Moloch": {
		mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Rest, Strangle"
    },
	"Mountain Gorilla": {
		mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Mummy Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Naamah": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Narasimha": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Nemean Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Nergal": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Nervous Jaguar": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Anemone": {
        mostEffective: "Grab, Pound, Trample",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Beast": {
        mostEffective: "Grab, Pound, Trample",
        noEffect: "N/A",
        leastEffective: "Rest"
    },
	"Neutron Burstling": {
        mostEffective: "Rest",
        noEffect: "Trample",
        leastEffective: "Grab, Pound, Strangle"
    },
	"Neutron Ctenophore": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Cthulhuae": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pound, Strangle"
    },
	"Neutron Drakeling": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pound, Strangle"
    },
	"Neutron Jellyfish": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Kuragei": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Leviathan": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Neutron Nereides": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Neutron Squid": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Neutron Veiled Jellyfish": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Nice Guy": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Nightmare Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Nightmare Spider": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Okó": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Onoskelis": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Ördög": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Roar, Strangle"
    },
	"Pegasus": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce, Roar, Strangle"
    },
	"Pissed Off Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Poacher": {
        mostEffective: "Claw",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Poachers": {
        mostEffective: "Claw",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Preon Beast": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Rest"
    },
	"Preon Ctenophore": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Preon Cthulhuae": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Preon Leviathan": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Prophet Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Prismatic Dragon": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Prismatic Drakaiva": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Prismatic Drake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Prismatic Serpent": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Prismatic Wyvern": {
        mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Psoglav": {
        mostEffective: "Grab, Pounce, Strangle",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Puff Adder": {
        mostEffective: "Trample",
        noEffect: "Roar",
        leastEffective: "Grab, Kick, Pounce"
    },
	"Pulsar Dragon": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Pulsar Drake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Pulsar Windssrah": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Pulsar Wyrm": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Pulsar Wyvern": {
        mostEffective: "Claw",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Pygmy Hippo": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Queen Mother": {
        mostEffective: "Grab, Pounce, Strangle",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Rabid Arabian Wolves": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Strangle"
    },
	"Rabid Bat-Eared Fox": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Brown Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Fallow Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Rabid Hunting Dog": {
        mostEffective: "Claw, Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Hyenas": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Strangle"
    },
    "Rabid Jackal": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Kudu": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Lioness": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Rabid Old Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
    "Rabid Painted Dog": {
        mostEffective: "Claw, Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid Red Fox": {
        mostEffective: "Claw, Grab, Pounce, Trample",
        noEffect: "Roar",
        leastEffective: "Kick"
    },
	"Rabid White Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Rabisu": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Radioactive Serpent": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Radioactive Snake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Rakshasa": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Rangda": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Red Giant Arachnocnid": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Red Giant Ctenophore": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Red Giant Jellyfish": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Red Giant Kuragei": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Red Giant Leviathan": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Red Giant Squidveil": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Claw"
    },
	"Red Hartebeest": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Rejected Young Male": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Rhino": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Rest, Strangle"
    },
	"Rhodesian Ridgeback Pack": {
        mostEffective: "Claw",
        noEffect: "Roar, Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Saharan Cheetah": {
        mostEffective: "Trample",
        noEffect: "N/A",
        leastEffective: "Grab, Kick, Pounce"
    },
	"Scavenging Spotted Hyenas": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Kick, Pounce, Pound, Roar, Strangle"
    },
	"Sea Goat": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce"
    },
	"Sea Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce"
    },
	"Serval": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Shady Poacher": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Shaggy Lioness": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Sharabha": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Simurgh": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Sitri": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Skyrmion Jellyfish": {
        mostEffective: "Claw",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Slithering Minion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Smelly Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Smug Leopard Male": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Snake Cultist": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Solar Drakaiva": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Solar Dustling": {
        mostEffective: "Roar",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Sorcerer Sphinx": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Spotted Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Spotted Hyena Pack": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Kick Pounce, Pound, Roar, Strangle"
    },
	"Starburst Being": {
        mostEffective: "Roar",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Starburst Dragon": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Starburst Drake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Starburst Dustling": {
        mostEffective: "Roar",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Starburst Windssrah": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Starving Black-Backed Jackal": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Starving Brown Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Starving Cheetah": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Starving Leopard": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Starving Spotted Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Stellar Drakaiva": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Stellar Drake": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Stellar Serpent": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Stellar Windssrah": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Stellar Wyrm": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Striped Hyena": {
        mostEffective: "Grab, Pounce, Trample",
        noEffect: "N/A",
        leastEffective: "Kick"
    },
	"Stud Bros": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Tannin": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Rest, Strangle"
    },
	"Transvaal Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"The Cancer": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Transforming Snake Cultist": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Truck": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Pound, Strangle"
    },
	"Tsavo Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Ugallu": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Undead Wildebeest": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Unicorn Zebra": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"V'Kai": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Vanth": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Vashkartzen": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Voidcore Drakeling": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Voidcore Drakontos": {
        mostEffective: "N/A",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Strangle"
    },
	"Voidcore Wyrm": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Vulture Pack": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"Watusi Bull": {
        mostEffective: "Kick, Roar",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce, Rest, Strangle, Trample"
    },
	"Werehyena": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce"
    },
	"Werelioness": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Strangle"
    },
	"Werewolf": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "Grab, Pounce"
    },
	"White-Backed Vulture Pack": {
        mostEffective: "N/A",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Pound, Roar, Strangle"
    },
	"White Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"White Rhino": {
        mostEffective: "Kick",
        noEffect: "Roar, Trample",
        leastEffective: "Charge, Claw, Grab, Pounce, Rest, Strangle"
    },
	"Wildebeest Bull": {
        mostEffective: "Kick",
        noEffect: "Trample",
        leastEffective: "Grab, Pounce, Roar, Strangle"
    },
	"Wraith Lion": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Young Nepheline": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "N/A"
    },
	"Zombie Cheetah": {
        mostEffective: "N/A",
        noEffect: "N/A",
        leastEffective: "Grab, Pounce"
    },
	"Zombie Lion": {
        mostEffective: "N/A",
        noEffect: "Roar",
        leastEffective: "N/A"
    },
	"Zombie Poacher": {
        mostEffective: "Claw",
        noEffect: "Roar",
        leastEffective: "N/A"
    }
};
const battleOpponentInfo = document.getElementById("battle-opponent-info");

  if (battleOpponentInfo) {
    const opponentInfoText = battleOpponentInfo.textContent.trim();

    for (const npc in npcEffectiveness) {
      if (opponentInfoText === npc) {
        injectMultipleTextsAboveFullbox([
          { text: `Most Effective: ${npcEffectiveness[npc].mostEffective}`, color: "green" },
          { text: `No Effect: ${npcEffectiveness[npc].noEffect}`, color: "gray" },
          { text: `Least Effective: ${npcEffectiveness[npc].leastEffective}`, color: "red" }
        ]);
        return;
      }
    }

      injectMultipleTextsAboveFullbox([
        { text: "UNKNOWN OPPONENT", color: "green" },
        { text: "UNKNOWN OPPONENT", color: "black" },
        { text: "UNKNOWN OPPONENT", color: "red" }
      ]);
    }
  }
function injectMultipleTextsAboveFullbox(textArray) {
    const centerElement = document.querySelector("center");
    const exploreOverlayElement = document.getElementById("fullbox");

    if (centerElement && exploreOverlayElement) {
      textArray.forEach(textObject => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = textObject.text;
        newParagraph.style.color = textObject.color;
        newParagraph.style.fontWeight = "bold";
        centerElement.insertBefore(newParagraph, exploreOverlayElement);
      });
    }
  }

if (window.location.href.startsWith("https://www.lioden.com/explorearea.php")) {
    function insertBaseImage(imageUrl) {
        if (document.querySelector('.injected-base-image')) {
            return; 
        }
        const exploreOverlayElement = document.getElementById("fullbox");
        if (!exploreOverlayElement) {
            console.error("The <div id='fullbox'> element was not found.");
            return;
        }

        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('injected-base-image'); 
        exploreOverlayElement.style.position = 'relative';
        exploreOverlayElement.parentNode.insertBefore(img, exploreOverlayElement); 

        if (isMobileDevice()) {
            img.style.position = 'absolute'; 
			img.style.left = '56%'; 
            img.style.maxWidth = '120%'; 
            img.style.transform = 'translateX(-50%)'; 
            img.style.zIndex = '80';  
            img.style.pointerEvents = 'none';
        } else {
            img.style.position = 'absolute'; 
            img.style.left = '13.6%'; 
            img.style.maxWidth = '100%'; 
            img.style.zIndex = '80'; 
            img.style.pointerEvents = 'none';
        }
        adjustEyeImagesZIndex();
    }
	
        function insertImage(imageUrl) {
        if (document.querySelector('.injected-skin-image')) {
            return; 
        }
        const exploreOverlayElement = document.getElementById("fullbox");
        if (!exploreOverlayElement) {
            console.error("The <div id='fullbox'> element was not found.");
            return;
        }

        const Simg = document.createElement('img');
        Simg.src = imageUrl;
        Simg.classList.add('injected-slom-image'); 
        exploreOverlayElement.style.position = 'relative';
        exploreOverlayElement.parentNode.insertBefore(Simg, exploreOverlayElement); 

            if (isMobileDevice()) {
                Simg.style.position = 'absolute'; 
                Simg.style.top = '20'; 
                Simg.style.left = '56%'; 
                Simg.style.maxWidth = '120%'; 
                Simg.style.transform = 'translateX(-50%)'; 
                Simg.style.zIndex = '90'; 
                Simg.style.pointerEvents = 'none';
            } else {
                Simg.style.position = 'absolute'; 
                Simg.style.top = '20'; 
                Simg.style.left = '50%'; 
                Simg.style.maxWidth = '100%'; 
                Simg.style.transform = 'translateX(-50%)'; 
                Simg.style.zIndex = '91'; 
                Simg.style.pointerEvents = 'none';
            }
            
        }
    
    function adjustEyeImagesZIndex() {
        chrome.storage.local.get(['eyeZIndexEnabled'], (data) => {
            const eyeZIndexEnabled = data.eyeZIndexEnabled;
            const eyeImages = document.querySelectorAll('img[src^="//static.lioden.com/images/explorenew/ui/eyes/"]');
            eyeImages.forEach((eyeImg) => {
                if (eyeZIndexEnabled) {
                    eyeImg.style.zIndex = '';
                    eyeImg.style.display = 'none'; 
                } else {
                    eyeImg.style.zIndex = '999'; 
                    eyeImg.style.display = 'block'; 
                }
            });
        });
    }
function exploreTextChangeNonFestive() {
    const exploreText = document.querySelector('#explore-log-inner > div');   
    if (exploreText) {
        chrome.storage.local.get('fontSize', (data) => {
            let fontSize = data.fontSize || '13'; 
            exploreText.style.fontSize = `${fontSize}px`; 
			console.log('font-change');
        });
    }
}	
chrome.storage.local.get(['festiveFrameEnabled'], (data) => {
    const festiveFrameEnabled = data.festiveFrameEnabled; 
    if (festiveFrameEnabled) {
function exploreTextChange() {
    const exploreText = document.querySelector('#explore-log-inner > div');   
    if (exploreText) {
        chrome.storage.local.get('fontSize', (data) => {
            let fontSize = data.fontSize || '13'; 
            exploreText.style.textShadow = '0.000em 0.075em #000000, 0.029em 0.069em #000000, 0.053em 0.053em #000000, 0.069em 0.029em #000000, 0.075em 0.000em #000000, 0.069em -0.029em #000000, 0.053em -0.053em #000000, 0.029em -0.069em #000000, 0.000em -0.075em #000000, -0.029em -0.069em #000000, -0.053em -0.053em #000000, -0.069em -0.029em #000000, -0.075em -0.000em #000000, -0.069em 0.029em #000000, -0.053em 0.053em #000000, -0.029em 0.069em #000000, 1px 1px 1px #000000';
            exploreText.style.zIndex = '100';
            exploreText.style.position = 'relative';
            exploreText.style.color = 'white';
            exploreText.style.fontSize = `${fontSize}px`; 
        });
    }
}
 const janImageList = [
    'https://static.lioden.com/images/dynamic/backgrounds/hungry_hyena.png',
	'https://static.lioden.com/images/dynamic/backgrounds/hyenaclans.png',
	'https://static.lioden.com/images/dynamic/backgrounds/hyena_lair.png',
	'https://static.lioden.com/images/dynamic/backgrounds/hyenawastelands.png',
	'https://static.lioden.com/images/dynamic/backgrounds/laharusden.png',
	'https://static.lioden.com/images/dynamic/backgrounds/January_HungryCave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/vulturee_pit.png',
	'https://static.lioden.com/images/dynamic/backgrounds/vultures.png',
	'https://static.lioden.com/images/dynamic/backgrounds/death_shade.png',
	'https://static.lioden.com/images/dynamic/backgrounds/boneriver.png',
	'https://static.lioden.com/images/dynamic/backgrounds/driedbushes.png',
	'https://static.lioden.com/images/dynamic/backgrounds/luckyscavengers.png',
	'https://static.lioden.com/images/dynamic/backgrounds/vulturecliffs.png',
	'https://static.lioden.com/images/dynamic/backgrounds/washedupwhale.png',
	'https://static.lioden.com/images/layout/boneyard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/GreatHungerBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/bone_tree.png',
	'https://static.lioden.com/images/dynamic/backgrounds/cannibal.png',
	'https://static.lioden.com/images/dynamic/backgrounds/whaleden.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Boneyard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/waterfall_dead.png',
	'https://static.lioden.com/images/dynamic/backgrounds/graveyardnight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/fallenelephant.png',
	'https://static.lioden.com/images/dynamic/backgrounds/bone_piles.png',
	'https://static.lioden.com/images/dynamic/backgrounds/dead_tree_refuge.png',
	'https://static.lioden.com/images/dynamic/backgrounds/bone_cave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/graveyardday.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxhungrycrocs.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_endangered.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxcannibal.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_ebone_throne.png',
	'https://static.lioden.com/images/dynamic/backgrounds/vulturesden.png',
	'https://static.lioden.com/images/dynamic/backgrounds/SkeletalCave.png'
];
const febImageList = [
	'https://static.lioden.com/images/explorenew/valentines/twodudesday.png',
	'https://static.lioden.com/images/dynamic/backgrounds/walkbeach.png',
	'https://static.lioden.com/images/dynamic/backgrounds/bondinggiraffes.png',
	'https://static.lioden.com/images/dynamic/backgrounds/charmingnight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romance_01.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romanticflamingolake.png',
	'https://static.lioden.com/images/dynamic/backgrounds/febpond.png',
	'https://static.lioden.com/images/dynamic/backgrounds/febcave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/magichour.png',
	'https://static.lioden.com/images/dynamic/backgrounds/beehive.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romance_03.png',
	'https://static.lioden.com/images/dynamic/backgrounds/readyforadate.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxromanticbeachBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romance_02.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romanticgiraffeplateau.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romantic_hotspring.png',
	'https://static.lioden.com/images/dynamic/backgrounds/romanticwaterfall.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ScratchedRocksBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/solitude_02.png',
	'https://static.lioden.com/images/dynamic/backgrounds/finebymyself.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Loneliness.png',
	'https://static.lioden.com/images/dynamic/backgrounds/solitude_01.png',
	'https://static.lioden.com/images/dynamic/backgrounds/solitarycave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/thelonging.png',
	'https://static.lioden.com/images/dynamic/backgrounds/solitude.png'
];
const marchImageList = [
	'https://static.lioden.com/images/dynamic/backgrounds/bleedingww.png',
	'https://static.lioden.com/images/dynamic/backgrounds/burningcamps.png',
	'https://static.lioden.com/images/dynamic/backgrounds/DestroyedJeep.png',
	'https://static.lioden.com/images/dynamic/backgrounds/DownedHeli.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_endangered.png',
	'https://static.lioden.com/images/dynamic/backgrounds/groundtrap.png',
	'https://static.lioden.com/images/dynamic/backgrounds/GuardingRangers.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_rainbow_love.png',
	'https://static.lioden.com/images/dynamic/backgrounds/snaregraveyard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/thechase.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxfence.png',
	'https://static.lioden.com/images/dynamic/backgrounds/AbijattaShallaNationalPark.png',
	'https://static.lioden.com/images/dynamic/backgrounds/birdpoaching.png',
	'https://static.lioden.com/images/dynamic/backgrounds/burnedcorpses.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_traps.png',
	'https://static.lioden.com/images/dynamic/backgrounds/BenoueNationalPark.png',
	'https://static.lioden.com/images/dynamic/backgrounds/rippedcages.png',
	'https://static.lioden.com/images/dynamic/backgrounds/healingwaters.png',
	'https://static.lioden.com/images/dynamic/backgrounds/HelicopterRs.png',
	'https://static.lioden.com/images/dynamic/backgrounds/steelgraveyard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_ebone_throne.png',
	'https://static.lioden.com/images/dynamic/backgrounds/vanishinggiants.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ferociousfight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/flawlessvictory.png',
	'https://static.lioden.com/images/dynamic/backgrounds/onagerherd.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_anti_poacht.png',
	'https://static.lioden.com/images/dynamic/backgrounds/poaching_leopard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/thelastofgiants.png',
	'https://static.lioden.com/images/dynamic/backgrounds/poaching_buffalo.png'
];
const aprilImageList = [
	'https://static.lioden.com/images/dynamic/backgrounds/drakensberg.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Eastrr_burrow.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Fluffballutopia.png',
	'https://static.lioden.com/images/dynamic/backgrounds/fluffballburrows.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Pondoland_aloe.png',
	'https://static.lioden.com/images/dynamic/backgrounds/springpastures.png',
	'https://static.lioden.com/images/dynamic/backgrounds/spring_chicks.png',
	'https://static.lioden.com/images/dynamic/backgrounds/spring_eggs.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Spring_chicks2.png',
	'https://static.lioden.com/images/dynamic/backgrounds/eastermeadows.png',
	'https://static.lioden.com/images/dynamic/backgrounds/KwaZulu_flowers.png',
	'https://static.lioden.com/images/dynamic/backgrounds/kwazulunatal.png',
	'https://static.lioden.com/images/dynamic/backgrounds/capefloralkingdom.png',
	'https://static.lioden.com/images/dynamic/backgrounds/floweringfynbos.png',
	'https://static.lioden.com/images/dynamic/backgrounds/FloweringPond.png',
	'https://static.lioden.com/images/dynamic/backgrounds/tanglcliff.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Cape_floral_bg.png',
	'https://static.lioden.com/images/dynamic/backgrounds/FlowerGarden.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Colorful_Savannah.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lio_rainbow_paradise.png',
	'https://static.lioden.com/images/dynamic/backgrounds/southafricanmeadows.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ForestThicket_Day.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ForestThicket_Night.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ForestThicket_WetDay.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ForestThicket_WetNight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/NamibianMeadows_Day.png',
	'https://static.lioden.com/images/dynamic/backgrounds/NamibianMeadows_Night.png',
	'https://static.lioden.com/images/dynamic/backgrounds/NamibianMeadows_WetDay.png',
	'https://static.lioden.com/images/dynamic/backgrounds/NamibianMeadows_WetNight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Ngorongoro_Day.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Ngorongoro_Night.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Ngorongoro_WetDay.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Ngorongoro_WetNight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ZambianBush_Day.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ZambianBush_Night.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ZambianBush_WetDay.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ZambianBush_WetNight.png'
];
const mayImageList = [
	'https://static.lioden.com/images/dynamic/backgrounds/CrowdedBackstage.png',
	'https://static.lioden.com/images/dynamic/backgrounds/TrainingArea.png',
	'https://static.lioden.com/images/dynamic/backgrounds/arena_corridors.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ArenaGorgeBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/canyon_death_pit.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ChampionshipArenaBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ChampionshipCanyonValley.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ChampionshipsNightBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/DenTrophies.png',
	'https://static.lioden.com/images/dynamic/backgrounds/GettingEven.png',
	'https://static.lioden.com/images/dynamic/backgrounds/moshpit.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ChampionshipArenaSunrise.png',
	'https://static.lioden.com/images/dynamic/backgrounds/thepassage.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ThroneOfGames.png',
	'https://static.lioden.com/images/dynamic/backgrounds/BloodyPitBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/championswall.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ChampionshipArchAlley.png',
	'https://static.lioden.com/images/dynamic/backgrounds/canyon_01.png',
	'https://static.lioden.com/images/dynamic/backgrounds/erodinggorge.png',
	'https://static.lioden.com/images/dynamic/backgrounds/gorgechampions.png',
	'https://static.lioden.com/images/dynamic/backgrounds/pitofdefeat.png',
	'https://static.lioden.com/images/dynamic/backgrounds/rocky_pit.png',
	'https://static.lioden.com/images/dynamic/backgrounds/RootsOfTheWarriorsBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/trophycave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/TrophyLair.png',
	'https://static.lioden.com/images/dynamic/backgrounds/VictoryRoad.png'
];
 const novImageList = [
    'https://static.lioden.com/images/dynamic/backgrounds/pictograms.png', 
    'https://static.lioden.com/images/dynamic/backgrounds/visionofancestors.png',
	'https://static.lioden.com/images/dynamic/backgrounds/graveyardnight.png',
	'https://static.lioden.com/images/explorenew/shaman/graveyardhyenasday.png',
	'https://static.lioden.com/images/explorenew/shaman/lazarussongday.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ainelguettar.png',
	'https://static.lioden.com/images/dynamic/backgrounds/dreamwalker.png',
	'https://static.lioden.com/images/dynamic/backgrounds/lostinvisions.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ancientfootprints.png',
	'https://static.lioden.com/images/dynamic/backgrounds/echkarformation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/herbgrove.png',
	'https://static.lioden.com/images/dynamic/backgrounds/tannedpelt.png',
	'https://static.lioden.com/images/dynamic/backgrounds/kirkwoodformation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/prehistoricboneyard.png',
	'https://static.lioden.com/images/dynamic/backgrounds/roaringgiant.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxbonfires.png',
	'https://static.lioden.com/images/dynamic/backgrounds/longnecks.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Aorounga_Crater.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ancienthome.png',
	'https://static.lioden.com/images/dynamic/backgrounds/Elhraz_Formation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ElliotFormation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/koumformation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/mammothcave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/TendaguruFormation.png',
	'https://static.lioden.com/images/dynamic/backgrounds/afrovenatorjura.png',
	'https://static.lioden.com/images/dynamic/backgrounds/spinosauruscreta.png',
	'https://static.lioden.com/images/dynamic/backgrounds/giraffatitanjura.png',
	'https://static.lioden.com/images/dynamic/backgrounds/ammonitecave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/amonite_cave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/excavation.png',
    'https://static.lioden.com/images/dynamic/backgrounds/TiyaStelae.png'
];

const decImageList = [
    'https://static.lioden.com/images/dynamic/backgrounds/snowymountaintop.png', 
    'https://static.lioden.com/images/dynamic/backgrounds/snowymorningBG.png', 
    'https://static.lioden.com/images/dynamic/backgrounds/snowyrwenzori.png',
	'https://static.lioden.com/images/explorenew/winter/snowcovernight.png', 
    'https://static.lioden.com/images/explorenew/winter/frozendirtday.png', 
    'https://static.lioden.com/images/explorenew/winter/snowgroundnight.png',
	'https://static.lioden.com/images/explorenew/winter/dunes_snownight.png', 
    'https://static.lioden.com/images/explorenew/winter/frozen_waterfallnight.png', 
    'https://static.lioden.com/images/explorenew/winter/palms_snownight.png',
	'https://static.lioden.com/images/explorenew/winter/frozenvalleyday.png', 
    'https://static.lioden.com/images/dynamic/backgrounds/ice_cave_en.png', 
    'https://static.lioden.com/images/dynamic/backgrounds/frozeninfight.png',
	'https://static.lioden.com/images/dynamic/backgrounds/frozenriver.png',	
	'https://static.lioden.com/images/dynamic/backgrounds/snow_river.png',
	'https://static.lioden.com/images/dynamic/backgrounds/frozensmilus.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxfrozenwaterfall.png',
	'https://static.lioden.com/images/dynamic/backgrounds/snowydenBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/winterdesert.png',
	'https://static.lioden.com/images/dynamic/backgrounds/snowyforest.png',
	'https://static.lioden.com/images/dynamic/backgrounds/SnowyLesothoBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/snowysav.png',
	'https://static.lioden.com/images/dynamic/backgrounds/snowyhut.png',
	'https://static.lioden.com/images/dynamic/backgrounds/pinus.png',
	'https://static.lioden.com/images/dynamic/backgrounds/sparkle_wat.png',
	'https://static.lioden.com/images/dynamic/backgrounds/HighAtlas.png',
	'https://static.lioden.com/images/dynamic/backgrounds/zaxicyglacier.png',
	'https://static.lioden.com/images/dynamic/backgrounds/csnuh.png',
	'https://static.lioden.com/images/dynamic/backgrounds/tippediceberg.png',
	'https://static.lioden.com/images/dynamic/backgrounds/glaciercave.png',
	'https://static.lioden.com/images/dynamic/backgrounds/icecaveBG.png',
	'https://static.lioden.com/images/dynamic/backgrounds/majesticsnuhlion.png',
	'https://static.lioden.com/images/dynamic/backgrounds/koliada.png',
	'https://static.lioden.com/images/dynamic/backgrounds/kulig.png',
    'https://static.lioden.com/images/dynamic/backgrounds/heavycloudsBG.png' 
];

const januaryFestiveImageList = [
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/january%20frame%201.png', 
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/january%20frame%202.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/january%20frame%203.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/january%20frame%204.png'
];
const februaryFestiveImageList = [
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febframe1.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%202.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%203.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%204.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%205.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%206.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/febraury%20frame%207.png'
];
const marchFestiveImageList = [
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame1.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame2.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame3.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame4.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame5.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame6.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MarchFestiveFrame7.png'
];
const aprilFestiveImageList = [
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame1.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame2.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame3.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame4.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame5.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame6.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame7.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/AprilFestiveFrame8.png'
];
const mayFestiveImageList = [
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame1.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame2.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame3.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame4.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame5.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame6.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame7.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/MayFestiveFrame8.png'
];
const novemberFestiveImageList = [
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/november%20frame%201.png', 
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/november%20frame%202.png',
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/November%20Frame%203.png'
];
const decemberFestiveImageList = [
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/december%20frame.png', 
	'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/december%20frame%204.png', 
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/december%20frame%201.png', 
    'https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/december%20frame%203.png'
];


function switchImageListBasedOnMonth() {
    const seasonElements = document.querySelectorAll('.panel-body.small');
    let currentImageList = [];

    if (seasonElements.length >= 1) {
        const firstSeasonElement = seasonElements[0];
        const firstTextContent = firstSeasonElement.textContent.trim().toLowerCase();
        console.log("First element text content detected:", firstTextContent);

        if (firstTextContent.includes('november')) {
            currentImageList = novImageList;  
            console.log("November images loaded");
        } else if (firstTextContent.includes('december')) {
            currentImageList = decImageList;
            console.log("December images loaded");
        }
		 else if (firstTextContent.includes('january')) {
            currentImageList = janImageList;
            console.log("january images loaded");
        }
		else if (firstTextContent.includes('february')) {
            currentImageList = febImageList;
            console.log("february images loaded");
        }
		else if (firstTextContent.includes('march')) {
            currentImageList = marchImageList;
            console.log("march images loaded");
        }
		else if (firstTextContent.includes('april')) {
            currentImageList = aprilImageList;
            console.log("april images loaded");
        }
		else if (firstTextContent.includes('may')) {
            currentImageList = mayImageList;
            console.log("may images loaded");
        }
    }

    if (currentImageList.length === 0 && seasonElements.length >= 2) {
        const secondSeasonElement = seasonElements[1];
        const secondTextContent = secondSeasonElement.textContent.trim().toLowerCase();
        console.log("Second element text content detected:", secondTextContent);

        if (secondTextContent.includes('november')) {
            currentImageList = novImageList;  
            console.log("November images loaded");
        } else if (secondTextContent.includes('december')) {
            currentImageList = decImageList;
            console.log("December images loaded");
        }
		else if (firstTextContent.includes('january')) {
            currentImageList = janImageList;
            console.log("january images loaded");
        }
		else if (firstTextContent.includes('march')) {
            currentImageList = marchImageList;
            console.log("march images loaded");
        }
		else if (firstTextContent.includes('april')) {
            currentImageList = aprilImageList;
            console.log("april images loaded");
        }
		else if (firstTextContent.includes('may')) {
            currentImageList = mayImageList;
            console.log("may images loaded");
        }
    }

    if (currentImageList.length === 0) {
        console.log("No matching month found in the first two season elements.");
    }

    return currentImageList;
}



function getLiodenTime() {
    const seasonElements = document.querySelectorAll('.panel-body.small');
    if (seasonElements.length >= 1) {
        const firstSeasonElement = seasonElements[0];
        const firstTextContent = firstSeasonElement.textContent;
        const liodenTimeMatch = firstTextContent.match(/(\d{1,2}):(\d{2})(am|pm)\s+Lioden time/);
        
        if (liodenTimeMatch) {
            const currentMinute = parseInt(liodenTimeMatch[2], 10); 
            console.log("Lioden time (minute) from first element:", currentMinute);
            return currentMinute;
        }
    }

    if (seasonElements.length >= 2) {
        const secondSeasonElement = seasonElements[1];
        const secondTextContent = secondSeasonElement.textContent;
        const liodenTimeMatch = secondTextContent.match(/(\d{1,2}):(\d{2})(am|pm)\s+Lioden time/);
        
        if (liodenTimeMatch) {
            const currentMinute = parseInt(liodenTimeMatch[2], 10); 
            console.log("Lioden time (minute) from second element:", currentMinute);
            return currentMinute;
        }
    }
    console.log("No Lioden time found in the first two elements.");
    return null;
}


function loadSeasonalImages() {
    const currentImageList = switchImageListBasedOnMonth();
    const currentMinute = getLiodenTime();

    if (currentImageList.length > 0 && currentMinute !== null) {
        const imageIndex = currentMinute % currentImageList.length;
        const selectedImage = currentImageList[imageIndex];
        insertSeasonalImage(selectedImage);

        let festiveImageList = [];
        if (currentImageList === novImageList) {
            festiveImageList = novemberFestiveImageList;
        } else if (currentImageList === decImageList) {
            festiveImageList = decemberFestiveImageList;
        } else if (currentImageList === janImageList) {
            festiveImageList = januaryFestiveImageList;
        } else if (currentImageList === febImageList) {
            festiveImageList = februaryFestiveImageList;
        }
		else if (currentImageList === marchImageList) {
            festiveImageList = marchFestiveImageList;
        
		 }
		else if (currentImageList === aprilImageList) {
            festiveImageList = aprilFestiveImageList;
        }
		else if (currentImageList === mayImageList) {
            festiveImageList = mayFestiveImageList;
        }

        if (festiveImageList.length > 0) {
            const festiveImageIndex = currentMinute % festiveImageList.length;
            const festiveImage = festiveImageList[festiveImageIndex];
            insertFestiveFrame(festiveImage);
        }
    } else {
        console.log("Image list or Lioden time data is missing.");
    }
}



function insertSeasonalImage(imageUrl) {
    const bottomFull = document.querySelector('#fullbox > div');
    if (bottomFull && !bottomFull.querySelector('.seasonal-image')) { 
        const seasonalImage = document.createElement('img');
        seasonalImage.src = imageUrl;
        
        const imageContainer = document.createElement('div');
        if (isMobileDevice()) {
            imageContainer.style.position = 'absolute';  
            imageContainer.style.width = '640px';  
            imageContainer.style.height = '215px'; 
            imageContainer.style.left = '0'; 
            imageContainer.style.top = '64.1%';
            imageContainer.style.zIndex = '65'; 
            imageContainer.style.pointerEvents = 'none'; 
            seasonalImage.style.width = '100%'; 
            seasonalImage.style.height = '100%'; 
            seasonalImage.classList.add('seasonal-image'); 
            seasonalImage.style.objectFit = 'cover'; 
            seasonalImage.style.pointerEvents = 'none';
			chrome.storage.local.get(['festiveFrameEnabled'], (data) => {
			seasonalImage.style.filter =  'contrast(.65) brightness(.55)';
		});
        } else { 
		
            imageContainer.style.position = 'absolute';  
            imageContainer.style.width = '640px';  
            imageContainer.style.height = '215px';
            imageContainer.style.left = '12.2%';
            imageContainer.style.top = '64.1%';
            imageContainer.style.zIndex = '65';
            imageContainer.style.pointerEvents = 'none';             
            seasonalImage.style.width = '100%'; 
            seasonalImage.style.height = '100%'; 
            seasonalImage.classList.add('seasonal-image'); 
            seasonalImage.style.objectFit = 'cover'; 
            seasonalImage.style.pointerEvents = 'none';
			chrome.storage.local.get(['festiveFrameEnabled'], (data) => {
			seasonalImage.style.filter =  'contrast(.65) brightness(.55)';
		});
        }

        const blockEncounterCheckbox = document.querySelector('input[type="checkbox"][id="blockEncounter"]');
        if (blockEncounterCheckbox) {
            imageContainer.style.top = (parseFloat(imageContainer.style.top) - 5) + '%';
        }

        imageContainer.appendChild(seasonalImage); 
        bottomFull.appendChild(imageContainer); 
        bottomFull.style.overflow = 'visible';
        bottomFull.style.position = 'relative'; 
    } else if (bottomFull && bottomFull.querySelector('.seasonal-image')) {
        const seasonalImage = bottomFull.querySelector('.seasonal-image');
        console.log("Updating existing seasonal image with new src:", imageUrl);
        seasonalImage.src = imageUrl; 
    }
    exploreTextChange();
}
 function updateHighContrast(enabled) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: (enabled) => {
                        const img = document.querySelector('.seasonalImage'); 
                        if (img) {
                            img.style.filter = enabled ? 'contrast(1.8) brightness(1.2)' : 'none';
                        }
                    },
                    args: [enabled]
                });
            }
        });
    }

function insertFestiveFrame(frameImageUrl) {
    const bottomFull = document.querySelector('#fullbox > div');
    if (bottomFull) {
        const existingFrame = bottomFull.querySelector('.festive-frame');
        if (existingFrame) {
            existingFrame.src = frameImageUrl;
            return;
        }
        
        const frameImage = document.createElement('img');
        frameImage.src = frameImageUrl;

        const frameContainer = document.createElement('div');
		 if (isMobileDevice()) {
        frameContainer.classList.add('festive-frame-container');
		
        frameContainer.style.position = 'absolute';
        frameContainer.style.width = '640px'; 
        frameContainer.style.zIndex = '66';  
        frameContainer.style.left = '0';       
        frameContainer.style.pointerEvents = 'none';            
        frameImage.style.objectFit = 'cover'; 
		 frameContainer.style.top = '0';      
        frameImage.classList.add('festive-frame');
		frameImage.style.pointerEvents = 'none';
        
		} else { 
		frameContainer.classList.add('festive-frame-container');
        frameContainer.style.position = 'absolute';
        frameContainer.style.width = '640px'; 
        frameContainer.style.zIndex = '66';  
        frameContainer.style.left = '12.2%';
        frameContainer.style.top = '0';          
		frameContainer.style.pointerEvents = 'none';   		
        frameImage.style.objectFit = 'cover'; 
        frameImage.classList.add('festive-frame');                
        frameImage.style.pointerEvents = 'none';
		}
        console.log("Adding new festive frame image with src:", frameImage.src);
        frameContainer.appendChild(frameImage);
        bottomFull.appendChild(frameContainer);
    }
	exploreTextChange();
}
loadSeasonalImages();
const mutationObserver = new MutationObserver(() => {
	 adjustEyeImagesZIndex();
    exploreTextChange();
	loadSeasonalImages();
});
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});
	}
});
const mutationObserver = new MutationObserver(() => {
adjustEyeImagesZIndex();
exploreTextChangeNonFestive();
});
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});
    chrome.storage.local.get(['festiveFrameEnabled', 'selectedBaseImage', 'selectedImage', 'cosmeticUrlPrimary', 'selectedBaseImage2', 'selectedImage2', 'cosmeticUrlSecondary'], (data) => {
        const selectedBaseImage = data.selectedBaseImage || '';
		const selectedImage = data.selectedImage || '';
		const cosmeticUrlPrimary = data.cosmeticUrlPrimary || '';
		const selectedBaseImage2 = data.selectedBaseImage2 || '';
		const selectedImage2 = data.selectedImage2 || '';
		const cosmeticUrlSecondary = data.cosmeticUrlSecondary || '';
		const festiveFrameEnabled = data.festiveFrameEnabled;
		const sidebarLink = document.querySelector("body > div.container.main > div:nth-child(2) > div.sidebar.col-md-3.visible-xs.visible-sm.col-xs-12.visible-md.visible-lg > div.col-md-12.col-xs-6 > a");
		if (sidebarLink) {
      const linkHref = sidebarLink.href;
      const urlIdMatch = linkHref.match(/mid=(\d+)/); 

      if (urlIdMatch && urlIdMatch[1]) {
        const pageId = urlIdMatch[1];

        if (pageId === cosmeticUrlPrimary && selectedImage) {
        if (selectedImage) {
            console.log('Selected  image URL from storage:', selectedImage);
            insertImage(selectedImage);
        }
		}

        if (pageId === cosmeticUrlPrimary && selectedBaseImage) {
        if (selectedBaseImage) {
            console.log('Selected base image URL from storage:', selectedBaseImage);
            insertBaseImage(selectedBaseImage);
        }
		}

        if (pageId === cosmeticUrlSecondary && selectedImage2) {
        if (selectedImage2) {
            console.log('Selected  image URL from storage:', selectedImage2);
            insertImage(selectedImage2);
        }
		}   
        if (pageId === cosmeticUrlSecondary && selectedBaseImage2) {
        if (selectedBaseImage2) {
            console.log('Selected base image URL from storage:', selectedBaseImage2);
            insertBaseImage(selectedBaseImage2);
        }
		}
	  }
	}
    });
    function isMobileDevice() {
        return window.innerWidth <= 768; 
    }
}
if (window.location.href.startsWith('https://www.lioden.com/lion.php')) {
let breedOnlyCounter = 0; 
let rmaExclusiveCounter = 0;
let pietyCounter = 0; 
function getBaseColorTd() {
    const baseTd = [...document.querySelectorAll('td')].find(td => td.textContent.trim() === "Base");
    return baseTd ? baseTd.parentNode.querySelector('td:nth-child(2)') : null;
}
function getMarkingsTd() {
    const markingsTd = [...document.querySelectorAll('td[rowspan="7"]')].find(td => td.innerHTML.includes(':'));
    return markingsTd || null;
}


function createTooltipModal() {
    const tooltipModal = document.createElement("div");
    tooltipModal.id = "tooltipModal";
    tooltipModal.classList.add("tooltip-modal");

    const tooltipContent = document.createElement("div");
    tooltipContent.classList.add("tooltip-content");

    const tooltipText = document.createElement("span");
    tooltipText.id = "tooltipText"; 

    const closeButton = document.createElement("button");
    closeButton.id = "closeTooltip";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", closeTooltip);

    tooltipContent.appendChild(tooltipText);
    tooltipContent.appendChild(closeButton);
    tooltipModal.appendChild(tooltipContent);

    document.body.appendChild(tooltipModal);
}

function showTooltip(text) {
    const tooltipModal = document.getElementById("tooltipModal");
    const tooltipText = document.getElementById("tooltipText");
    tooltipText.innerHTML = text;  
    tooltipModal.style.display = "block";  
}


function closeTooltip() {
    document.getElementById("tooltipModal").style.display = "none"; 
}


function addTooltipStyles() {
    const styles = `
        .tooltip-modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;
        }
        .tooltip-content {
            font-size: 16px;
        }
        .tooltip-modal button {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
        .tooltip-modal button:hover {
            background-color: #d32f2f;
        }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

createTooltipModal();
addTooltipStyles();


	function checkBaseColor() {
    const baseColorTd = getBaseColorTd();
    if (baseColorTd) {
        const baseColorText = baseColorTd.textContent.trim();
        const breedOnlyBaseColors = [
            "Acacia", "Amber", "Anjeer", "Argent", "Ashen", "Buff", "Buttercream", "Cameo", "Cassis", "Champagne", "Chartreux", "Cimmerian", "Cinnabar", "Cocoa", "Dandelion", "Desolate", "Dinar", "Ebony", "Fiery", "Finch", "Flaxen", "Flint", "Frost", "Fulvous", "Goldenrod", "Goridhe", "Honey", "Latte", "Maroon", "Nacarat", "Noctis", "Platinum", "Powder", "Prune", "Red", "Sapela", "Scallop", "Senegal", "Shedua", "Slate", "Snowpard", "Soot", "Sulphur", "Sunkissed", "Taupe", "Teardrop", "Tusk", "Udara", "Umber", "Abyssinian", "Ambrosia", "Bandit", "Beet", "Bushveld", "Celestial", "Damu", "Dawn", "Haze", "Jellyfish", "Kimanjano", "Leonid", "Lilac", "Mandarin", "Mushroom", "Nomad", "Nudar", "Orchid", "Outlaw", "Pearl", "Pecora", "Prismatic", "Ripe", "Ruffian", "Sahara", "Scoundrel", "Sepia", "Sidereal", "Skyward", "Stratosphere", "Sunrise", "Sunset", "Sunspot", "Ukame", "Vagabond", "Wine", "Aether", "Arabica", "Asiatic", "Basalt", "Black Rose", "Cairngorm", "Celsian", "Citrine", "Cloudburst", "Constellation", "Elysian", "Ember", "Ennead", "Esker", "Gilded", "Gleam", "Hellebore", "Hexaplex", "Hoarfrost", "Madagascar", "Majivu", "Mistletoe", "Mudstone", "Nadir", "Nether", "Nun", "Ogdoad", "Olive", "Plague", "Pulsar", "Qahir", "Ra", "Rime", "Rose Gold", "Serruria", "Smog", "Snowflake", "Soul", "Sphinx", "Squall", "Styx", "Temporal", "Witch", "Zloto", "Asali", "Dhahabi", "Maziwa", "Mobola", "Iris", "Opalescent", "Horizon", "Ganache",
        ];
        const breedOnlySkinColors = [
            "Clouded", "Greige", "Pale", "Peach", "Bunting", "Echo", "Eggshell Blue", "Ink", "Lilac", "Plum", "Quail", "Sandstone", "Welsummer", "Badawi", "Ruffian",
        ];
               const hoverTexts = {
            "Arabica": "Buttercream, Buttermilk x Black = Arabica",
            "Buttercream": "Buttercream, Buttermilk x Black = Arabica",
            "Buttermilk": "Buttercream, Buttermilk x Black = Arabica",
            "Black": "Buttercream, Buttermilk x Black = Arabica &#013; Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
            "Asiatic": "Dun, Gray x Cream, White = Asiatic",
            "Dun": "Dun, Gray x Cream, White = Asiatic",
            "Gray": "Dun, Gray x Cream, White = Asiatic",
            "Cream": "Dun, Gray x Cream, White = Asiatic &#013; Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
            "White": "Dun, Gray x Cream, White = Asiatic",
            "Basalt": "Meteorite x Flint, Opal, Sterling = Basalt",
            "Meteorite": "Meteorite x Flint, Opal, Sterling = Basalt",
            "Flint": "Meteorite x Flint, Opal, Sterling = Basalt &#013; Blazing, Fiery x Flint, Pewter = Ember &#013; Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
            "Opal": "Meteorite x Flint, Opal, Sterling = Basalt &#013; Hematite, Moonstone, Opal x Glass = Celsian &#013; Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
            "Sterling": "Meteorite x Flint, Opal, Sterling = Basalt",
            "Black Rose": "Cinnabar x Jet, Obsidian, Onyx = Black Rose &#013; Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir",
            "Cinnabar": "Cinnabar x Jet, Obsidian, Onyx = Black Rose &#013; Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
            "Jet": "Cinnabar x Jet, Obsidian, Onyx = Black Rose &#013; Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
            "Obsidian": "Cinnabar x Jet, Obsidian, Onyx = Black Rose &#013; Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
            "Onyx": "Cinnabar x Jet, Obsidian, Onyx = Black Rose &#013; Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
            "Cairngorm": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm",
            "Celestial": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
            "Ice": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Ice x Divine, Ebony = Elysian &#013; Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season.&#013; Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season. Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time. &#013; Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam.",
            "Sidereal": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
            "Skyward": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
            "Cocoa": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm",
            "Ethereal": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm",
            "Pearl": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Maroon x Heavenly, Nacre, Pearl = Serruria &#013; Can only be bred during Day Time.",
            "Slate": "Celestial, Ice, Sidereal, Skyward x Cocoa, Ethereal, Pearl, Slate = Cairngorm &#013; Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
			"Celsian": "Hematite, Moonstone, Opal x Glass = Celsian",
			"Hematite": "Hematite, Moonstone, Opal x Glass = Celsian &#013; Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
			"Moonstone": "Hematite, Moonstone, Opal x Glass = Celsian",
			"Glass": "Hematite, Moonstone, Opal x Glass = Celsian &#013; Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex &#013; Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam.",
			"Citrine": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine &#013; Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex",
			"Kimanjano": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
			"Topaz": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
			"Cherry Blossom": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
			"Fulvous": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
			"Sulphur": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine",
			"Xanthic": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine &#013; Caramel x Xanthic = Olive &#013; Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Elysian": "Ice x Divine, Ebony = Elysian",
			"Divine": "Ice x Divine, Ebony = Elysian",
			"Ebony": "Ice x Divine, Ebony = Elysian &#013; Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir &#013; Ebony x Ivory = Soul",
			"Ember": "Blazing, Fiery x Flint, Pewter = Ember",
			"Blazing": "Blazing, Fiery x Flint, Pewter = Ember &#013; Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together.",
			"Fiery": "Cinnabar, Kimanjano, Topaz, Xanthic x Cherry Blossom, Fiery, Fulvous, Sulphur = Citrine &#013; Blazing, Fiery x Flint, Pewter = Ember &#013; Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Pewter": "Blazing, Fiery x Flint, Pewter = Ember",
			"Ennead": "Ankh x Incense x Mummy OR Ogdoad x Ra = Ennead &#013; Ennead x Ra = Ogdoad",
			"Ankh": "Ankh x Incense x Mummy = Ennead",
			"Incense": "Ankh x Incense x Mummy = Ennead",
			"Mummy": "Ankh x Incense x Mummy = Ennead",
			"Ogdoad": "Inpu x Sutekh x Ubaste OR Ennead x Ra = Ogdoad &#013; Ogdoad x Ra = Ennead &#013; Ennead x Ogdoad = Ra",
			"Ra": "Deshret x Nefer x Wepwawet OR Ennead x Ogdoad = Ra &#013; Ogdoad x Ra = Ennead &#013; Ennead x Ra = Ogdoad",
			"Gilded": "Anubis x Bast x Seth OR Rose Gold x Sphinx = Gilded &#013; Gilded x Rose Gold = Sphinx &#013; Gilded x Sphinx = Rose Gold",
			"Anubis": "Anubis x Bast x Seth = Gilded",
			"Bast": "Anubis x Bast x Seth = Gilded &#013; Unholy x Bast, Sunset = Temporal &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Temporal x Temporal parents together.",
			"Seth": "Anubis x Bast x Seth = Gilded",
			"Rose Gold": "Alabaster x Sha x Velvet OR Gilded x Sphinx = Rose Gold &#013; Rose Gold x Sphinx = Gilded &#013; Gilded x Rose Gold = Sphinx",
			"Sphinx": "Chaos x Duat x Maat OR Gilded x Rose Gold = Sphinx &#013; Rose Gold x Sphinx = Gilded &#013; Gilded x Sphinx = Rose Gold",
			"Hellebore": "Lilac x Goldenrod, Udara = Hellebore &#013; Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir",
			"Lilac": "Lilac x Goldenrod, Udara = Hellebore",
			"Goldenrod": "Lilac x Goldenrod, Udara = Hellebore",
			"Udara": "Lilac x Goldenrod, Udara = Hellebore",
			"Hexaplex": "Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex &#013; Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Festive": "Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex",
			"Teardrop": "Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex",
			"Haliotis": "Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex",
			"Labradorite": "Citrine, Festive, Teardrop x Glass, Haliotis, Labradorite = Hexaplex",
			"Madagascar": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar",
			"Sapela": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar",
			"Sepia": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar",
			"Shedua": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar",
			"Unholy": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar &#013; Cloudburst x Unholy = Squall &#013; Unholy x Bast, Sunset = Temporal &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Temporal x Temporal parents together.",
			"Ivory": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar &#013; Ebony x Ivory = Soul",
			"Nacre": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar &#013; Maroon x Heavenly, Nacre, Pearl = Serruria &#013; Can only be bred during Day Time.",
			"Sunset": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar &#013; Unholy x Bast, Sunset = Temporal &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Temporal x Temporal parents together.",
			"Supernal": "Sapela, Sepia, Shedua, Unholy x Ivory, Nacre, Sunset, Supernal = Madagascar",
			"Mudstone": "Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
			"Asali": "Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
			"Maziwa": "Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
			"Mobola": "Asali, Maziwa, Mobola x Flint, Slate = Mudstone",
			"Nadir": "Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir",
			"Ardor": "Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir",
			"Rhodonite": "Black Rose, Ebony x Ardor, Hellebore, Rhodonite = Nadir",
			"Inpu": "Inpu x Sutekh x Ubaste = Ogdoad",
			"Sutekh": "Inpu x Sutekh x Ubaste = Ogdoad",
			"Ubaste": "Inpu x Sutekh x Ubaste = Ogdoad",
			"Plague": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Augur": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Harbinger": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Haruspex": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Seer": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Gregarious": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague &#013; Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Locust": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Swarm": "Augur, Harbinger, Haruspex, Seer x Gregarious, Locust, Swarm = Plague",
			"Qahir": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
			"Buff": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
			"Cameo": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
			"Hallowed": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir",
			"Russet": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir &#013; Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Chartreux": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir &#013; Albino x Chartreux, Korat, Maltese = Cloudburst &#013; Can only be bred during Wet Season.",
			"Glacial": "Buff, Cameo, Hallowed, Russet x Chartreux, Glacial, Hematite, Opal = Qahir &#013; Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season. Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time. &#013; Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam.",
			"Deshret": "Deshret x Nefer x Wepwawet = Ra",
			"Nefer": "Deshret x Nefer x Wepwawet = Ra",
			"Wepwawet": "Deshret x Nefer x Wepwawet = Ra",
			"Chaos": "Chaos x Duat x Maat = Sphinx",
			"Duat": "Chaos x Duat x Maat = Sphinx",
			"Maat": "Chaos x Duat x Maat = Sphinx",
			"Alabaster": "Alabaster x Sha x Velvet = Rose Gold",
			"Sha": "Alabaster x Sha x Velvet = Rose Gold",
			"Velvet": "Alabaster x Sha x Velvet = Rose Gold",
			"Styx": "Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
			"Noctis": "Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
			"Titanium": "Noctis x Jet, Obsidian, Onyx, Titanium = Styx",
			"Nun": "Horus x Khnum x Thoth = Nun",
			"Horus": "Horus x Khnum x Thoth = Nun",
			"Khnum": "Horus x Khnum x Thoth = Nun",
			"Thoth": "Horus x Khnum x Thoth = Nun",
			"Olive": "Caramel x Xanthic = Olive",
			"Caramel": "Caramel x Xanthic = Olive",
			"Soul": "Ebony x Ivory = Soul",
			"Squall": "Cloudburst x Unholy = Squall",
			"Zloto": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zarafshan": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zarasa": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zarbanu": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zarin": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zer": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Zivar": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Brass": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Bronze": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Chestnut": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Chocolate": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season. &#013;Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Dikela": "Zarafshan, Zarasa, Zarbanu, Zarin, Zer, Zivar x Black, Brass, Bronze, Chestnut, Chocolate, Dikela, Russet = Zloto &#013; Can only be bred during Dry Season.",
			"Gleam": "Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam",
			"Dawn": "Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam",
			"Witch": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Blood Moon": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Haunted": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Prismatic": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together. &#013; Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Shard": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Wicked": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Inferno": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together. &#013; Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together.",
			"Scoundrel": "Blood Moon, Haunted, Prismatic, Shard, Wicked x Fiery, Hexaplex, Inferno, Scoundrel, Xanthic = Witch &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Witch x Witch parents together.",
			"Temporal": "Unholy x Bast, Sunset = Temporal &#013; Can only be bred during the month of October. &#013; Outside of October, it can only be bred pairing Temporal x Temporal parents together.",
			"Snowflake": "Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time.",
			"Albino": "Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Albino x Blonde, Dark Vanilla, Vanilla = Smog &#013; Can only be bred during Dry Season. &#013; Albino x Chartreux, Korat, Maltese = Cloudburst &#013; Can only be bred during Wet Season.",
			"Arctic": "Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season. &#013; Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time. &#013; Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together. &#013; Dawn x Arctic, Blue Poinsettia, Cotton Candy, Glacial, Ice, Kunzite, Glass = Gleam.",
			"Aufeis": "Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season. Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time.",
			"Frostbitten": "Albino x Arctic, Aufeis, Frostbitten, Glacial, Ice = Snowflake &#013; Can only be bred during Wet Season. &#013; Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time.",
			"Smog": "Albino x Blonde, Dark Vanilla, Vanilla = Smog &#013; Can only be bred during Dry Season.",
			"Blonde": "Albino x Blonde, Dark Vanilla, Vanilla = Smog &#013; Can only be bred during Dry Season.",
			"Dark Vanilla": "Albino x Blonde, Dark Vanilla, Vanilla = Smog &#013; Can only be bred during Dry Season.",
			"Vanilla": "Albino x Blonde, Dark Vanilla, Vanilla = Smog &#013; Can only be bred during Dry Season.",
			"Serruria": "Maroon x Heavenly, Nacre, Pearl = Serruria &#013; Can only be bred during Day Time.",
			"Maroon": "Maroon x Heavenly, Nacre, Pearl = Serruria &#013; Can only be bred during Day Time.",
			"Heavenly": "Maroon x Heavenly, Nacre, Pearl = Serruria &#013; Can only be bred during Day Time. &#013; Sahara x Angelic, Heavenly, Parhelion = Horizon",
			"Rime": "Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time.",
			"Hoarfrost": "Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time. &#013; Orchid x Arctic, Aufeis, Frostbitten, Glacial, Hoarfrost, Ice, Snowflake = Rime &#013; Can only be bred during Wet Season at Day Time.",
			"Pulsar": "Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together.",
			"Anjeer": "Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together.",
			"Prune": " Arctic, Anjeer, Blazing, Inferno, Prune = Pulsar &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Pulsar x Pulsar parents together.",
			"Mistletoe": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Bushveld": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Citron": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Green": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Moss Agate": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Cream Darker": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Cream Lighter": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Fawn": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Murk": "Bushveld, Citron, Green, Moss Agate, Murk x Cream, Cream Darker, Cream Lighter, Fawn = Mistletoe &#013; Can only be bred during the month of December. &#013; Outside of December, it can only be bred pairing Mistletoe x Mistletoe parents together.",
			"Majivu": "Ukame x Ashen, Dusty, Haze = Majivu &#013; Can only be bred during Dry Season.",
			"Ukame": "Ukame x Ashen, Dusty, Haze = Majivu &#013; Can only be bred during Dry Season.",
			"Ashen": "Ukame x Ashen, Dusty, Haze = Majivu &#013; Can only be bred during Dry Season.",
			"Dusty": "Ukame x Ashen, Dusty, Haze = Majivu &#013; Can only be bred during Dry Season.",
			"Haze": "Ukame x Ashen, Dusty, Haze = Majivu &#013; Can only be bred during Dry Season.",
			"Esker": "Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season.",
			"Ragdoll": "Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season.",
			"Reindeer": "Ragdoll, Reindeer x Arctic, Aufeis, Glacial, Ice = Esker &#013; Can only be bred during Wet Season.",
			"Aether": "Angelic x Demonic = Aether &#013; Can only be bred during Day Time.",
			"Nether": "Angelic x Demonic = Nether &#013; Can only be bred during Night Time.",
			"Angelic": "Angelic x Demonic = Aether &#013; Can only be bred during Day Time. &#013; Angelic x Demonic = Nether &#013; Can only be bred during Night Time. &#013; Sahara x Angelic, Heavenly, Parhelion = Horizon",
			"Parhelion": "Sahara x Angelic, Heavenly, Parhelion = Horizon",
			"Horizon": "Sahara x Angelic, Heavenly, Parhelion = Horizon",
			"Sahara": "Sahara x Angelic, Heavenly, Parhelion = Horizon",
			"Ganache": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Dhahabi": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Goridhe": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Honey": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Dinar": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Ochre": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Ripe": "Dhahabi, Goridhe, Honey x Chocolate, Dinar, Gregarious, Ochre, Ripe = Ganache",
			"Demonic": "Angelic x Demonic = Aether &#013; Can only be bred during Day Time. &#013; Angelic x Demonic = Nether &#013; Can only be bred during Night Time.",
			"Cloudburst": "Albino x Chartreux, Korat, Maltese = Cloudburst &#013; Can only be bred during Wet Season. &#013; Cloudburst x Unholy = Squall",
			"Korat": "Albino x Chartreux, Korat, Maltese = Cloudburst &#013; Can only be bred during Wet Season.",
			"Maltese": "Albino x Chartreux, Korat, Maltese = Cloudburst &#013; Can only be bred during Wet Season.",
			"Constellation": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Interstellar": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together. &#013; Interstellar x Arctic, Aufeis, Frostbitten, Glacial, Ice, Snowflake = Hoarfrost &#013; Can only be bred during Wet Season at Night Time. ",
			"Demiurge": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Leonid": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Ambrosia": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Mauve": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Mulberry": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Rhubarb": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
			"Ruddy": "Celestial, Demiurge, Interstellar, Leonid, Sidereal, Skyward x Ambrosia, Mauve, Mulberry, Prismatic, Rhubarb, Ruddy = Constellation &#013; Can only be bred during the month of July. &#013; Outside of July, it can only be bred pairing Constellation x Constellation parents together.",
        };

          const match = baseColorText.match(/(.*)\s+\((.*) Skin\)/);
        if (match && match[1]) {
            const baseColorName = match[1].trim();
            const skinColorName = match[2] ? match[2].trim() : '';
            const hoverText = hoverTexts[baseColorName] || "No combo bases use this base.";

            if (breedOnlyBaseColors.includes(baseColorName)) {
                let strongElement = `<strong class="base-color"`;               
                if (hoverTexts[baseColorName]) {
                    strongElement += ` title="${hoverText}" style="text-decoration: underline;">${baseColorName}</strong>`;
                } else {
                    strongElement += `>${baseColorName}</strong>`;
                }
                baseColorTd.innerHTML = strongElement + (skinColorName ? ` (${skinColorName} Skin)` : '');             
                if (hoverTexts[baseColorName]) {
                    document.querySelectorAll('.base-color').forEach(element => {
                        element.addEventListener('click', function() {
                            showTooltip(hoverText);
                        });
                    });
                }

                breedOnlyCounter++;
                console.log(`Found breed-only base color: ${baseColorName}. Total count: ${breedOnlyCounter}`);
            } else if (hoverTexts[baseColorName]) {

                const regularElement = `<span title="${hoverText}" style="text-decoration: underline;" class="base-color">${baseColorName}</span>`;
                baseColorTd.innerHTML = regularElement + (skinColorName ? ` (${skinColorName} Skin)` : '');

                document.querySelectorAll('.base-color').forEach(element => {
                    element.addEventListener('click', function() {
                        showTooltip(hoverText);
                    });
                });
            } else {
               
                baseColorTd.innerHTML = baseColorName + (skinColorName ? ` (${skinColorName} Skin)` : '');
            }

            
            if (breedOnlySkinColors.includes(skinColorName)) {
                const skinColorElement = `<strong class="skin-color">${skinColorName}</strong>`;
                baseColorTd.innerHTML = baseColorTd.innerHTML.replace(skinColorName, skinColorElement);

                document.querySelectorAll('.skin-color').forEach(element => {
                    element.addEventListener('click', function() {
                        showTooltip(hoverText);
                    });
                });

                breedOnlyCounter++;
                console.log(`Found breed-only skin color: ${skinColorName}. Total count: ${breedOnlyCounter}`);
            }
        }
    } else {
        console.log('Base color element not found.');
    }
}


function checkEyeColor() {
    const eyeColorTd = [...document.querySelectorAll('td')].find(td => td.textContent.trim() === "Eyes");
    const eyeColorSelector = eyeColorTd ? eyeColorTd.parentNode.querySelector('td:nth-child(2)') : null;
    if (eyeColorSelector) {
        const eyeColorText = eyeColorSelector.textContent.trim();
        const breedOnlyEyeColors = [
            "Albinoid", "Celadon", "Ceramic", "Chamotte", "Coconut", "Cordovan", "Glass", "Glaze", "Mosaic", "Moss", "Smalti", "Slate", "Terracotta", "Tessera", "Dove", "Epicene", "Gem", "Maroon", "Peral", "Rose", "Daisy", "Flax", "Gazania", "Hyacinth", "Iris", "Apricot", "Banana", "Grape", "Guava", "Hetero Blue & Ice", "Hetero Cucumber & Saffron", "Hetero Denim & Jade", "Hetero Earth & Intense Gold", "Hetero Ice & Blue", "Hetero Intense Gold & Earth", "Hetero Intense Salt & Malachite", "Hetero Jade & Denim", "Hetero Malachite & Intense Salt", "Hetero Saffron & Cucumber", "Axion", "Dawn", "Draconid", "Galaxy", "Neutron", "Preon", "Starshine", "Stellar", "Sunglow", "Maneater", "Vicious", "Burnish", "Clay", "Dunt", "Eglomise", "Faience", "Mire", "Porcelain", "Rose Ebony", "Rose Quartz", "Terrazzo", "Aquamarine", "Coffee", "Cosmic", "Dusk", "Euphorbia", "Pine", "Shamal", "Spacetime", "Wistful", "Aegean", "Cherimoya", "Fern", "Kiwifruit", "Ocean", "Phase", "Sectoral Amber & Ice", "Sectoral Apricot & Sapphire", "Sectoral Aqua & Grape", "Sectoral Brown & Blue", "Sectoral Crystal & Fire Opal", "Sectoral Crystal & Lavender", "Sectoral Draconid & Reptile", "Sectoral Green & Blue", "Sectoral Ice & Green", "Sectoral Pink & Violet", "Sectoral Red & Jet", "Sectoral Sapphire & Albinoid", "Sectoral Tyrian & Indigo", "Sectoral Yellow & Green", "Pearl", "Blue Iris", "Primrose", "Sectoral Pink & Ice", "Sectoral Pink & Mint", "Sectoral Colorbomb", "Sectoral Tranquility", "Birman", "Golden Shine", "Gliese", "Void", "Calathea",
        ];
        if (breedOnlyEyeColors.includes(eyeColorText)) {
            eyeColorSelector.innerHTML = `<strong>${eyeColorText}</strong>`; 
            breedOnlyCounter++;
            console.log(`Found breed-only eye color: ${eyeColorText}. Total count: ${breedOnlyCounter}`);
        }
    } else {
        console.log('Eye color element not found.');
    }
}
function checkManeType() {
    const maneTypeTd = [...document.querySelectorAll('td')].find(td => td.textContent.trim() === "Mane Type");
    const maneTypeSelector = maneTypeTd ? maneTypeTd.parentNode.querySelector('td:nth-child(2)') : null;
    if (maneTypeSelector) {
        const maneTypeText = maneTypeSelector.textContent.trim();
        const breedOnlyManeTypes = [
            "Pariah", "Royal", "Savage", "Tsavo", 
        ];
        if (breedOnlyManeTypes.includes(maneTypeText)) {
            maneTypeSelector.innerHTML = `<strong>${maneTypeText}</strong>`;
            breedOnlyCounter++;
            console.log(`Found breed-only mane type: ${maneTypeText}. Total count: ${breedOnlyCounter}`);
        }
    } else {
        console.log('Mane type element not found.');
    }
}
function checkManeColor() {
    const maneColorTd = [...document.querySelectorAll('td')].find(td => td.textContent.trim() === "Mane Color");
    const maneColorSelector = maneColorTd ? maneColorTd.parentNode.querySelector('td:nth-child(2)') : null;
    if (maneColorSelector) {
        const maneColorText = maneColorSelector.textContent.trim();
        const breedOnlyManeColors = [
            "Algae", "Amber", "Anjeer", "Ashen", "Briar", "Cameo", "Champagne", "Chartreux", "Cimmerian", "Cinnabar", "Cocoa", "Dinar", "Ebony", "Fiery", "Flaxen", "Flint", "Fulvous", "Goldenrod", "Honey", "Lilac", "Nacarat", "Orchid", "Pearl", "Pistachio", "Platinum", "Prune", "Ruffian", "Scoundrel", "Sepia", "Shedua", "Slate", "Taupe", "Ukame", "Umber", "Clay", "Copal", "Marigold", "Aether", "Cairngorm", "Citrine", "Elysian", "Madagascar", "Nether", "Qahir", "Serruria", "Soul", "Tusk", "Basalt", "Abyssinian", "Beet", "Damu", "Mushroom", "Nudar", "Ripe", "Sahara", "Sunspot", "Wine", "Seal", "Spice",
        ];
        if (breedOnlyManeColors.includes(maneColorText)) {
            maneColorSelector.innerHTML = `<strong>${maneColorText}</strong>`;
            breedOnlyCounter++;
            console.log(`Found breed-only mane color: ${maneColorText}. Total count: ${breedOnlyCounter}`);
        }
    } else {
        console.log('Mane color element not found.');
    }
}
function checkMarkings() {
    const markingsTd = getMarkingsTd();
    if (markingsTd) {
        const markingsTextLines = markingsTd.innerHTML.split('<br>').map(line => line.trim()).filter(line => line.length > 0);
        const breedOnlyMarkings = [
           "Celestial Agouti", "Celestial Cover", "Celestial Shine", "Celestial Speckles", "Dawn Dapple", "Dawn Lace", "Dawn Margay", "Dawn Shine", "Jellyfish Ardeida", "Jellyfish Inverted Maracaja", "Jellyfish Maracaja", "Jellyfish Quail Flecks", "Leonid Coat", "Leonid Feline", "Leonid Smoke", "Leonid Undershine", "Prismatic Feline", "Prismatic Glaze", "Prismatic Smoke", "Prismatic Undercover", "Sidereal Cover", "Sidereal Glaze", "Sidereal Points", "Sidereal Shine", "Skyward Cover", "Skyward Crumbing", "Skyward Shine", "Skyward Undercover", "Stratosphere Feline", "Stratosphere Lycaon", "Stratosphere Undertone", "Stratosphere Vitiligo", "Bandit Cloud", "Bandit Feline", "Bandit Mirage", "Bandit Unders", "Nomad Feline", "Nomad Mottled Vents", "Nomad Rogue", "Nomad Shepherd", "Outlaw Cheetah", "Outlaw Feline", "Outlaw Mottled Fissures", "Outlaw Rogue", "Ruffian Feline", "Ruffian Panther", "Ruffian Siamese", "Ruffian Soft Unders", "Scoundrel Feline", "Scoundrel Inverted Brawl", "Scoundrel Pelage", "Scoundrel Undersides", "Ukame Feralis", "Ukame Marble", "Ukame Rugged Unders", "Ukame Undercover", "Vagabond Mirage", "Vagabond Mottled Fissures", "Vagabond Nuzzle", "Vagabond Reverse Indri", "Auburn Heavy Rosette", "Briar Heavy Rosette", "Bushveld Heavy Rosette", "Dark Brown Heavy Rosette", "Doubloon Heavy Rosette", "Ebony Heavy Rosette", "Fiery Heavy Rosette", "Ginger Heavy Rosette", "Goridhe Heavy Rosette", "Noctis Heavy Rosette", "Onyx Heavy Rosette", "Red Heavy Rosette", "Seal Heavy Rosette", "Inverted Heavy Rosette Bone", "Inverted Heavy Rosette Cream", "Inverted Heavy Rosette Fiery", "Inverted Heavy Rosette Gold", "Inverted Heavy Rosette Saffron", "Inverted Heavy Rosette Silky", "Inverted Heavy Rosette White", "Inverted Rosette Cream", "Inverted Rosette Fallow", "Inverted Rosette Fiery", "Inverted Rosette Gold", "Inverted Rosette Saffron", "Inverted Rosette Silky", "Inverted Rosette White", "Bone Inverted Shaded Rosette", "Cream Inverted Shaded Rosette", "Fiery Inverted Shaded Rosette", "Gold Inverted Shaded Rosette", "Saffron Inverted Shaded Rosette", "Silky Inverted Shaded Rosette", "White Inverted Shaded Rosette", "Inverted Soft Rosette Bone", "Inverted Soft Rosette Cream", "Inverted Soft Rosette Fiery", "Inverted Soft Rosette Gold", "Inverted Soft Rosette Saffron", "Inverted Soft Rosette Silky", "Inverted Soft Rosette White", "Briar Rosette", "Brown Rosette", "Bushveld Rosette", "Cream Rosette", "Dark Brown Rosette", "Fiery Rosette", "Ginger Rosette", "Gold Rosette", "Goridhe Rosette", "Noctis Rosette", "Onyx Rosette", "Seal Rosette", "Auburn Shaded Rosette", "Briar Shaded Rosette", "Bushveld Shaded Rosette", "Dark Brown Shaded Rosette", "Doubloon Shaded Rosette", "Ebony Shaded Rosette", "Fiery Shaded Rosette", "Ginger Shaded Rosette", "Goridhe Shaded Rosette", "Noctis Shaded Rosette", "Onyx Shaded Rosette", "Red Shaded Rosette", "Seal Shaded Rosette", "Auburn Soft Rosette", "Briar Soft Rosette", "Bushveld Soft Rosette", "Dark Brown Soft Rosette", "Doubloon Soft Rosette", "Ebony Soft Rosette", "Fiery Soft Rosette", "Ginger Soft Rosette", "Goridhe Soft Rosette", "Noctis Soft Rosette", "Onyx Soft Rosette", "Red Soft Rosette", "Seal Soft Rosette", "Mottled Rosette", "Mottled Stripes", "Phantom Rosette", "Almond Inverted Cover", "Bone Inverted Cover", "Cinnabar Belly", "Cinnabar Coat", "Cinnabar Face", "Cinnabar Inverted Brindle", "Cinnabar Inverted Cover", "Cinnabar Luster", "Cinnabar Marozi", "Cinnabar Points", "Cinnabar Roan", "Cinnabar Sable", "Cinnabar Smudge", "Cinnabar Snout", "Cinnabar Socks", "Cinnabar Underbelly", "Cinnabar Undercoat", "Cinnabar Unders", "Cinnabar Undersides", "Cinnabar Undertone", "Cinnabar Vesture", "Leg Banding Cinnabar", "Tail Banding Cinnabar", "Clay Back", "Clay Brindle", "Clay Face", "Clay Mask", "Clay Paws", "Clay Points", "Clay Roan", "Clay Sable", "Clay Shell", "Clay Shepherd", "Clay Smudge", "Clay Snout", "Leg Banding Clay", "Tail Banding Clay", "Copal Back", "Copal Brindle", "Copal Coat", "Copal Face", "Copal Marozi", "Copal Mask", "Copal Points", "Copal Roan", "Copal Sable", "Copal Smudge", "Copal Snout", "Leg Banding Copal", "Tail Banding Copal", "Coral Inverted Cover", "Cream Inverted Cover", "Leg Banding Marigold", "Marigold Belly", "Marigold Eye Rims", "Marigold Face", "Marigold Inverted Brindle", "Marigold Inverted Cover", "Marigold Luster", "Marigold Points", "Marigold Roan", "Marigold Sable", "Marigold Smudge", "Marigold Socks", "Marigold Underbelly", "Marigold Undercoat", "Marigold Unders", "Marigold Undersides", "Marigold Undertone", "Marigold Vesture", "Tail Banding Marigold", "Quartz Inverted Cover", "Royal Inverted Cover", "Saffron Inverted Cover", "Shell Inverted Cover", "Silky Inverted Cover", "White Inverted Cover", "Abyssinian Cloud", "Abyssinian Feline", "Abyssinian Undersides", "Abyssinian Vitiligo", "Beet Inverted Brindle", "Beet Merle Thick", "Beet Ocelot", "Beet Vitiligo", "Damu Brindle", "Damu Feline", "Damu Snuggle", "Damu Underbelly", "Mushroom Burmese", "Mushroom Cheetah", "Mushroom Smoke", "Mushroom Underglaze", "Nudar Feline", "Nudar Marble", "Nudar Rogue", "Nudar Underfelt", "Ripe Cover", "Ripe Dim", "Ripe Dust", "Ripe Soft Unders", "Sahara Agouti", "Sahara Quagga", "Sahara Undershine", "Sahara Vitiligo", "Sunspot Feline", "Sunspot Pelage", "Sunspot Reverse Indri", "Sunspot Undercover", "Wine Crackle", "Wine Glaze", "Wine Margay", "Wine Siamese", "Cimmerian Pardus", "Dark Brown Pardus", "Gold Pardus", "Mottled Pardus", "Pale Pardus", "Strawberry Pardus",
        ];
        markingsTextLines.forEach(line => {
            const match = line.match(/<b>[^<]*<\/b>\s*([^<]*)/);
            if (match && match[1]) {
                const markingName = match[1].trim();
                if (breedOnlyMarkings.includes(markingName)) {
    const boldedLine = line.replace(markingName, `<strong>${markingName}</strong>`);
    markingsTd.innerHTML = markingsTd.innerHTML.replace(line, boldedLine);
    breedOnlyCounter++;
    console.log(`Found breed-only marking: ${markingName}. Total count: ${breedOnlyCounter}`);
			}
          }
        });
    } else {
        console.log('Markings <td> element not found.');
    }
}
let tier2Markings = [];

function checkTierTwoMarkings() {
    const markingsTd = [...document.querySelectorAll('td[rowspan="7"]')].find(td =>
        td.innerHTML.includes('<b>Slot')
    );

    if (!markingsTd) {
        console.log('Markings container not found for Tier 2 check.');
        return [];
    }

    const tierSpans = markingsTd.querySelectorAll('span.text-muted');
    const foundMarkings = [];

    tierSpans.forEach(span => {
        if (span.textContent.trim() === 'Tier 2') {
            const smallElement = span.closest('small');
            if (smallElement) {
                let previousElement = smallElement.previousSibling;
                while (previousElement) {
                    if (
                        previousElement.nodeType === Node.TEXT_NODE &&
                        previousElement.nodeValue.trim() !== ''
                    ) {
                        const markingName = previousElement.nodeValue.trim();
                       
							breedOnlyCounter++;
                        foundMarkings.push({
                            name: markingName,
                            slot: extractSlotFromHtml(smallElement.parentNode.innerHTML)
                        });

                        const boldText = document.createElement('strong');
                        boldText.textContent = markingName;
                        smallElement.parentNode.insertBefore(boldText, smallElement);
                        smallElement.parentNode.insertBefore(document.createTextNode(' '), smallElement);
                        previousElement.nodeValue = ' ';
                        break;
                    } else if (previousElement.nodeType === Node.ELEMENT_NODE) {
                        break;
                    }
                    previousElement = previousElement.previousSibling;
                }
            }

            span.innerHTML = 'Tier 2';
        }
    });

    return foundMarkings;
}


function getWikiMarkingData() {
    return new Promise(resolve => {
        chrome.runtime.sendMessage({ action: 'getMarkingRarityData' }, response => {
            if (response && response.data) {

                resolve(response.data);
            } else {

                resolve([]);
            }
        });
    });
}

function extractSlotFromHtml(html) {
    const match = html.match(/Slot\s*(\d+)\s*:/);
    return match ? parseInt(match[1], 10) : null;
}

function parseLionMarkings() {
    const td = document.querySelector('td[rowspan="7"]');
    if (!td) return [];

    const lines = td.innerHTML.split('<br>');
    const markings = [];

    lines.forEach((line) => {
        const match = line.match(/<b>Slot\s*(\d+):<\/b>\s*([^<]+)/);
        if (match) {
            const slotNumber = parseInt(match[1], 10);
            let markingName = match[2].trim();
            markingName = markingName.replace(/<.*?>/g, '').split(' (')[0].trim();

            markings.push({ markingName, slotNumber });
        }
    });

    return markings;
}



function getSlotNumberForMarking(td, markingName) {
    const lines = td.innerHTML.split('<br>');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        const match = line.match(/<b>Slot\s*(\d+):<\/b>\s*([^<]+)<small>/);

        if (match) {
            const slotNumber = parseInt(match[1], 10); 
            const currentMarkingName = match[2].trim(); 

           

           
            if (currentMarkingName === markingName) {
                
                return slotNumber;
            }
        } 
    }

    return null;
}



const compareLionMarkingsWithWiki = (lionMarkings, wikiMarkingData) => {
    if (!lionMarkings || !wikiMarkingData) {
      
        return;
    }

    

    let combinedLog = "";

    lionMarkings.forEach((marking) => {
        

        const wikiEntry = wikiMarkingData.find(entry => {
            const wikiName = entry.markingName.replace(/\u00A0/g, ' ').trim().toLowerCase();
            const lionName = marking.markingName.replace(/\u00A0/g, ' ').trim().toLowerCase();
            return wikiName === lionName;
        });

        if (wikiEntry) {
           

            const lionSlot = `Slot ${marking.slotNumber}`.trim();
       

           
            const matchingSlot = wikiEntry.slots.find(slot => {
                const formattedSlot = slot.slot.trim();
              
                return formattedSlot === lionSlot;
            });

            if (matchingSlot) {
                console.log(`${lionSlot} ${marking.markingName} — Kings: ${matchingSlot.kings}, Lions: ${matchingSlot.lions}`);
                combinedLog += `${lionSlot} ${marking.markingName} — Kings: ${matchingSlot.kings}, Lions: ${matchingSlot.lions}\n`;
            } else {
                console.log(`No slot data for ${lionSlot} in wiki for "${marking.markingName}"`);
                combinedLog += `No slot data for ${lionSlot} in wiki for "${marking.markingName}"\n`;
            }
        } else {
            console.log(` No data found for marking: ${marking.markingName}`);
            
        }
    });

    console.log(combinedLog || "No markings to report.");
	window.combinedLog = combinedLog; 
};


async function initMarkingCheck() {
    const lionMarkings = await parseLionMarkings(); 
    if (lionMarkings.length > 0) {
        const wikiMarkingData = await getWikiMarkingData(); 
        compareLionMarkingsWithWiki(lionMarkings, wikiMarkingData);
    }
}

initMarkingCheck();

function checkTierSixMarkings() {
    const markingsTd = [...document.querySelectorAll('td[rowspan="7"]')].find(td => {
        return td.innerHTML.includes('<b>Slot');
    });

    if (markingsTd) {
        const tierSpans = markingsTd.querySelectorAll('span.text-muted');
        tierSpans.forEach(span => {
            if (span.textContent.trim() === 'Tier 6') {
                rmaExclusiveCounter++;
                const smallElement = span.closest('small');

                if (smallElement) {
                    let previousElement = smallElement.previousSibling;
                    while (previousElement) {
                        if (previousElement.nodeType === Node.TEXT_NODE && previousElement.nodeValue.trim() !== '') {                          
                            const boldText = document.createElement('strong');
                            boldText.textContent = previousElement.nodeValue.trim(); 
                            smallElement.parentNode.insertBefore(boldText, smallElement);
 
                            const spaceText = document.createTextNode(' ');
                            smallElement.parentNode.insertBefore(spaceText, smallElement);
                            previousElement.nodeValue = ' '; 
                            break; 
                        } else if (previousElement.nodeType === Node.ELEMENT_NODE) {
                            break;
                        }
                        previousElement = previousElement.previousSibling;
                    }
                }
                span.innerHTML = 'Tier 6';  
                console.log('Found Tier 6 marking. Total RMA exclusive count:', rmaExclusiveCounter);
            }
        });
    } else {
        console.log('Markings container not found for Tier 6 check.');
    }
}
function checkPiety() {
    const markingsTd = getMarkingsTd();
    if (markingsTd) {
        const markingsTextLines = markingsTd.innerHTML.split('<br>').map(line => line.trim()).filter(line => line.length > 0);
        const pietyOnlyMarkings = [
           "Blue Ardeida", "Brown Ardeida", "Cherry Ardeida", "Cream Ardeida", "Dark Brown Ardeida", "Heather Ardeida", "Henna Ardeida", "Merlot Ardeida", "Noctis Ardeida", "Red Ardeida", "Saffron Ardeida", "Tan Ardeida", "White Ardeida", "Blue Cozy", "Fallow Cozy", "Noctis Cozy", "Onyx Cozy", "Red Cozy", "Tan Cozy", "Black Glaze", "Brown Glaze", "Cherry Glaze", "Dark Brown Glaze", "Heather Glaze", "Henna Glaze", "Quartz Glaze", "Scoria Glaze", "Tan Glaze", "Tangor Glaze", "White Glaze", "Cherry Inverted Cover", "Blue Nuzzle", "Cherry Nuzzle", "Merlot Nuzzle", "Noctis Nuzzle", "Red Nuzzle", "White Nuzzle", "Blue Pelt Heavy", "Brown Pelt Heavy", "Cherry Pelt Heavy", "Henna Pelt Heavy", "Merlot Pelt Heavy", "Noctis Pelt Heavy", "Onyx Pelt Heavy", "Blue Reverse Vitiligo Mash", "Cherry Reverse Vitiligo Mash", "Noctis Reverse Vitiligo Mash", "Onyx Reverse Vitiligo Mash", "Red Reverse Vitiligo Mash", "Saffron Reverse Vitiligo Mash", "Steele Reverse Vitiligo Mash", "White Reverse Vitiligo Mash", "Blue Ridge", "Dark Brown Ridge", "Onyx Ridge", "Red Ridge", "Tan Ridge", "Shaded Black", "Shaded Brown", "Shaded Dark Brown", "Shaded Henna", "Shaded Noctis", "Shaded Onyx", "Black Shoulders", "Brown Shoulders", "Dark Brown Shoulders", "Henna Shoulders", "Onyx Shoulders", "Blue Snuggle", "Brown Snuggle", "Cherry Snuggle", "Merlot Snuggle", "Noctis Snuggle", "Tan Snuggle", "White Tip Toe", "Bone Undershine", "Cherry Undershine", "Cream Undershine", "Quartz Undershine", "Saffron Undershine", "White Undershine", "Blue Upendezi", "Cherry Upendezi", "Noctis Upendezi", "Onyx Upendezi", "Red Upendezi", "Rose Upendezi", "Steele Upendezi", "Tan Upendezi", "Bone Venter", "Cherry Venter", "Cream Venter", "Quartz Venter", "White Venter", "Golden Belly", "Bone Bottom", "Cream Bottom", "Steele Bottom", "White Bottom", "Black Cloak", "Chocolate Cloak", "Clay Cloak", "Copal Cloak", "Henna Cloak", "Noctis Cloak", "Onyx Cloak", "Red Cloak", "Scoria Cloak", "Steele Cloak", "Tangor Cloak", "Black Ear Backs", "Noctis Ear Backs", "Onyx Ear Backs", "Chocolate English Spots", "Clay English Spots", "Cream English Spots", "Henna English Spots", "Noctis English Spots", "Onyx English Spots", "Scoria English Spots", "White English Spots", "Blue Freckles 1", "Blue Freckles 2", "Blue Freckles 3", "Chocolate Freckles 1", "Chocolate Freckles 2", "Chocolate Freckles 3", "Cream Freckles 1", "Cream Freckles 2", "Cream Freckles 3", "Gold Freckles 1", "Gold Freckles 2", "Gold Freckles 3", "Noctis Freckles 1", "Noctis Freckles 2", "Noctis Freckles 3", "Red Freckles 1", "Red Freckles 2", "Red Freckles 3", "White Freckles 1", "White Freckles 2", "White Freckles 3", "Cream Inverted Brindle", "Noctis Inverted Brindle", "Tangor Inverted Brindle", "White Inverted Brindle", "Black Lahore Plumage", "Chocolate Lahore Plumage", "Clay Lahore Plumage", "Copal Lahore Plumage", "Henna Lahore Plumage", "Noctis Lahore Plumage", "Onyx Lahore Plumage", "Red Lahore Plumage", "Scoria Lahore Plumage", "Copal Limb Patch", "Noctis Limb Patch", "Onyx Limb Patch", "Red Limb Patch", "White Limb Patch", "Black Marble", "Brown Marble", "Copal Marble", "Dark Brown Marble", "Golden Marble", "Henna Marble", "Steele Marble", "Tangor Marble", "Black Nose Tip", "Dark Brown Nose Tip", "Henna Nose Tip", "Noctis Nose Tip", "Onyx Nose Tip", "Copal Patch", "Noctis Patch", "Onyx Patch", "Red Patch", "White Patch", "White Puma", "Auburn Quail Flecks", "Brown Quail Flecks", "Dark Brown Quail Flecks", "Fiery Quail Flecks", "Henna Quail Flecks", "Noctis Quail Flecks", "Onyx Quail Flecks", "Red Quail Flecks", "Scoria Quail Flecks", "Steele Quail Flecks", "Black Siamese", "Brown Siamese", "Chocolate Siamese", "Dark Brown Siamese", "Henna Siamese", "Noctis Siamese", "Onyx Siamese", "Scoria Siamese", "Steele Siamese", "Blue Ticking", "Cream Ticking", "Gold Ticking", "Noctis Ticking", "Onyx Ticking", "Red Ticking", "White Ticking", "White Torso", "Coral Trim", "Cream Trim", "Marigold Trim", "Royal Trim", "Shell Trim", "Steele Trim", "White Trim", "Gold Undercover", "Tangor Undercover", "Bone Balbok", "Brown Balbok", "Cream Balbok", "Gold Balbok", "Henna Balbok", "Quartz Balbok", "Red Balbok", "Royal Balbok", "Shell Balbok", "Silky Balbok", "White Balbok", "Black Blotches", "Brown Blotches", "Dark Brown Blotches", "Gold Blotches", "Noctis Blotches", "Onyx Blotches", "White Blotches", "Gold Cobweb", "Noctis Cobweb", "Onyx Cobweb", "Red Cobweb", "Tangor Cobweb", "White Cobweb", "Black Debris", "Blue Debris", "Brown Debris", "Cream Debris", "Dark Brown Debris", "Fallow Debris", "Noctis Debris", "Onyx Debris", "Red Debris", "Resin Debris", "Scoria Debris", "Black Domino", "Brown Domino", "Dark Brown Domino", "Fallow Domino", "Gold Domino", "Henna Domino", "Noctis Domino", "Onyx Domino", "Resin Domino", "Scoria Domino", "Tangor Domino", "Brown Dust", "Cream Dust", "Fallow Dust", "Golden Dust", "Noctis Dust", "Onyx Dust", "Black Flux", "Cimmerian Flux", "Dark Brown Flux", "Fallow Flux", "Noctis Flux", "Scoria Flux", "Steele Flux", "White Flux", "Bone Foreshadow", "Cream Foreshadow", "Noctis Foreshadow", "Onyx Foreshadow", "Silky Foreshadow", "White Foreshadow", "Bone Frosty Roan", "Briar Frosty Roan", "Coral Frosty Roan", "Cream Frosty Roan", "Golden Frosty Roan", "Marigold Frosty Roan", "Pistachio Frosty Roan", "Quartz Frosty Roan", "Royal Frosty Roan", "Shell Frosty Roan", "Silky Frosty Roan", "White Frosty Roan", "Blue Hindquarters", "Brown Hindquarters", "Cream Hindquarters", "Dark Brown Hindquarters", "Gold Hindquarters", "Noctis Hindquarters", "Onyx Hindquarters", "Red Hindquarters", "White Hindquarters", "Brown Mirage", "Cream Mirage", "Golden Mirage", "Heather Mirage", "Henna Mirage", "Noctis Mirage", "Onyx Mirage", "Red Mirage", "White Mirage", "Black Smoke", "Brown Smoke", "Fallow Smoke", "Noctis Smoke", "Onyx Smoke", "White Smoke", "Bone Taper", "Cream Taper", "Fallow Taper", "Golden Taper", "Noctis Taper", "Onyx Taper", "Silver Taper", "White Taper", "Cream Tuxedo", "Noctis Tuxedo", "Onyx Tuxedo", "Royal Tuxedo", "Shell Tuxedo", "Silky Tuxedo", "Silver Tuxedo", "White Tuxedo", "Blue Vitiligo 3", "Blue Vitiligo 6", "Red Vitiligo 3", "Red Vitiligo 6", "Gold Web", "Noctis Web", "Onyx Web", "Red Web", "Tangor Web", "White Web", "Bone Inverted Merle Thick", "Coral Inverted Merle Thick", "Cream Inverted Merle Thick", "Royal Inverted Merle Thick", "Silky Inverted Merle Thick", "White Inverted Merle Thick", "Black Merle Thick", "Cimmerian Merle Thick", "Copal Merle Thick", "Noctis Merle Thick", "Onyx Merle Thick", "Seal Merle Thick", "Black Sheep Spots", "Chocolate Sheep Spots", "Clay Sheep Spots", "Copal Sheep Spots", "Cream Sheep Spots", "Henna Sheep Spots", "Noctis Sheep Spots", "Onyx Sheep Spots", "Red Sheep Spots", "Scoria Sheep Spots", 
        ];
        markingsTextLines.forEach(line => {
            const match = line.match(/<b>[^<]*<\/b>\s*([^<]*)/);
            if (match && match[1]) {
                const markingName = match[1].trim();
                if (pietyOnlyMarkings.includes(markingName)) {
    const boldedLine = line.replace(markingName, `<em>${markingName}</em>`);
    markingsTd.innerHTML = markingsTd.innerHTML.replace(line, boldedLine);
    pietyCounter++;
    console.log(`Found piety marking: ${markingName}. Total count: ${pietyCounter}`);
			}
          }
        });
    } else {
        console.log('Markings <td> element not found.');
    }
}
chrome.runtime.sendMessage({ requestBreedOnlyState: true }, (response) => {
    if (response.breedOnlyEnabled) {
        checkBaseColor();
        checkEyeColor();
        checkManeType();
        checkManeColor();
        checkMarkings();
        checkTierTwoMarkings();
        checkTierSixMarkings();
		checkPiety();
    
const markingsHeader = [...document.querySelectorAll('th')].find(th => th.textContent.trim() === "Appearance");
if (markingsHeader) {
    const spanElement = document.createElement('span');
    if (pietyCounter > 0 && rmaExclusiveCounter > 0){
		spanElement.textContent = `-  ${breedOnlyCounter} Breed-Only Traits + ${rmaExclusiveCounter} RMA Exclusive Traits + ${pietyCounter} Piety Marks`;
	} else if (rmaExclusiveCounter > 0) {
        spanElement.textContent = `-  ${breedOnlyCounter} Breed-Only Traits + ${rmaExclusiveCounter} RMA Exclusive Traits`;
    } else if (pietyCounter > 0) {
        spanElement.textContent = `-  ${breedOnlyCounter} Breed-Only Traits + ${pietyCounter} Piety Traits`;
    }else {
        spanElement.textContent = `-  ${breedOnlyCounter} Breed-Only Traits`;
    }
    markingsHeader.appendChild(spanElement);
}

if (window.innerWidth > 768) {


const markingsTooltipHeader = [...document.querySelectorAll('th')].find(th => th.textContent.trim() === "Markings");

if (markingsTooltipHeader) {
    const button = document.createElement('button');
    button.textContent = "Show Marking Rarity";  
    button.style.marginLeft = "10px";  
    button.style.cursor = "pointer"; 
	 button.classList.add('button');

    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.maxWidth = '350px';
    tooltip.style.whiteSpace = 'pre-wrap';  
    tooltip.style.display = 'none'; 
    tooltip.style.zIndex = '1000'; 


    document.body.appendChild(tooltip);


    markingsTooltipHeader.appendChild(button);


    button.addEventListener('click', () => {
        
        const combinedLog = window.combinedLog || ""; 

        tooltip.textContent = combinedLog || "No markings to report."; 
        tooltip.style.display = 'block'; 

     
        const buttonRect = button.getBoundingClientRect();
        tooltip.style.top = `${buttonRect.bottom + window.scrollY + 5}px`;
        tooltip.style.left = `${buttonRect.left}px`;
    });

   
    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.style.display = 'none'; 
        }
    });
} else {
    console.log("Markings header not found.");
}
}
	}
});

	}
function displayLionessText(lionessType) {
    chrome.storage.local.get([`${lionessType}LionessText`], function(result) {
        const text = result[`${lionessType}LionessText`] || '';
        if (text) {
            const claimingContainer = document.getElementById("claiming-container");
            if (claimingContainer) {
                if (!document.getElementById("lioness-text-display")) {
                    const displayDiv = document.createElement("div");
                    displayDiv.id = "lioness-text-display";
                    displayDiv.style.marginBottom = "10px";
                    displayDiv.style.fontSize = "22px";
                    displayDiv.style.fontWeight = "bold";
                    displayDiv.textContent = text;
                    claimingContainer.parentNode.insertBefore(displayDiv, claimingContainer);
                }
            }
        }
    });
}

const lionessImages = document.querySelectorAll("img");

for (let img of lionessImages) {
    const src = img.src;
    if (src.includes("https://static.lioden.com/images/dynamic/lioness/good/")) {
        displayLionessText("good");
        break; 
    } else if (src.includes("https://static.lioden.com/images/dynamic/lioness/kind/")) {
        displayLionessText("kind");
        break;
    } else if (src.includes("https://static.lioden.com/images/dynamic/lioness/neutral/")) {
        displayLionessText("neutral");
        break; 
    } else if (src.includes("https://static.lioden.com/images/dynamic/lioness/snarky/")) {
        displayLionessText("snarky");
        break; 
    } else if (src.includes("https://static.lioden.com/images/dynamic/lioness/evil/")) {
        displayLionessText("evil");
        break; 
    }
}

const huntButton = document.querySelector('input[name="sendhunt"]');
if (huntButton) {
  huntButton.addEventListener('click', () => {
    console.log('Hunt button clicked');
    chrome.runtime.sendMessage({ action: 'startHunt' });
  });
} else {
  console.log('Hunt button not found');
}
const beetleButton = document.querySelector('input[name="battle"]');
if (beetleButton) {
  beetleButton.addEventListener('click', () => {
    console.log('beetle button clicked');
    chrome.runtime.sendMessage({ action: 'startBeetle' });
  });
} else {
  console.log('Beetle button not found');
}

const flirtButton = document.querySelector('input[name="flirt"]');
if (flirtButton) {
  flirtButton.addEventListener('click', () => {
    console.log('flirt button clicked');
    chrome.runtime.sendMessage({ action: 'startFlirt' });
  });
} else {
  console.log('Flirt button not found');
}
function handlePatrolButton() {
  const patrolButton = document.querySelector('input[name="patrol"]');
  
  if (patrolButton) {
    patrolButton.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'startPatrol' });
    });
  }
}
const treasureButton = document.querySelector('button[name="findTreasure"]');
  
  if (treasureButton) {
    treasureButton.addEventListener('click', () => {
      console.log('Treasure button clicked');
      chrome.runtime.sendMessage({ action: 'startTreasure' });
    });
  } else {
    console.log('Treasure button not found');
  }

const observer = new MutationObserver(() => {
  handlePatrolButton();
});

observer.observe(document.body, { childList: true, subtree: true });


function convertLionIDsToLinks() {
    console.log("Function called.");

    const sections = ["Cubs Born!", "Lions Aged Up!"];

    sections.forEach(sectionTitle => {
        console.log(`Processing section: ${sectionTitle}`);

        const sectionHeader = [...document.querySelectorAll('h3')].find(h3 => h3.textContent.trim() === sectionTitle);
        console.log(`${sectionTitle} Header:`, sectionHeader);

        if (sectionHeader) {
            const relevantNodes = [];
            let currentNode = sectionHeader.nextSibling;
            while (currentNode) {
                if (currentNode.nodeName === "H3") break; 
                if (currentNode.nodeType === Node.TEXT_NODE || currentNode.nodeName === "SPAN") {
                    relevantNodes.push(currentNode);
                }
                currentNode = currentNode.nextSibling;
            }
            relevantNodes.forEach(node => {
                const originalContent =
                    node.nodeType === Node.TEXT_NODE ? node.textContent : node.innerHTML;

                console.log("Original Content:", originalContent);

                const lionIdRegex = /#(\d{12})/g;
                const updatedContent = originalContent.replace(lionIdRegex, (match, id) => {
                    return `<a href="https://www.lioden.com/lion.php?id=${id}">${match}</a>`;
                });
                if (node.nodeType === Node.TEXT_NODE) {
                    const newElement = document.createElement("span");
                    newElement.innerHTML = updatedContent;
                    node.parentNode.replaceChild(newElement, node);
                } else {
                    node.innerHTML = updatedContent;
                }
            });

            console.log(`${sectionTitle} Replacement complete.`);
        }
    });
}

window.addEventListener('load', convertLionIDsToLinks);

function enablePaw() {
    chrome.storage.local.get(['pawEnabled'], (data) => {
        const pawEnabled = data.pawEnabled;

        if (pawEnabled) {
            const dynamicStyle = document.createElement("style");
            dynamicStyle.id = "customPaw";
            dynamicStyle.innerText = `
                html {
    cursor: url('https://static.lioden.com//images/whackasnake/paw.png') 16 16, auto !important;
}

a, area, input, button, select, textarea, .hoverable, .clickable, .link {
    cursor: url('https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/paw.png') 16 16, auto !important;
}

#fra_chatContainer::before, .clickable-area, .hover-area {
    cursor: url('https://static.lioden.com//images/whackasnake/paw.png') 16 16, auto !important;
}

/* If you have elements with explicit cursor styles in the page, overwrite them */
* {
    cursor: url('https://static.lioden.com//images/whackasnake/paw.png') 16 16, auto !important;
}

/* Specific elements that could override the default cursor */
button, input[type="button"], input[type="submit"], .btn, .link, .interactive, .clickable {
    cursor: url('https://raw.githubusercontent.com/ghostsofsteel/lioden/refs/heads/main/paw.png') 16 16, auto !important;
}

            `;
            document.head.appendChild(dynamicStyle);  
        } else {
            const existingStyle = document.getElementById('customPaw');
            if (existingStyle) {
                existingStyle.remove();
            }
        }
    });
}


function applyCustomCss() {
	
    chrome.storage.local.get(['cssUrl', 'cssUrlSIDE', 'cosmeticUrlPrimary', 'cosmeticUrlSecondary',], (data) => {
        const cssUrl = data.cssUrl;
		const cssUrlSIDE = data.cssUrlSIDE;
	const cosmeticUrlPrimary = data.cosmeticUrlPrimary || '';
	const cosmeticUrlSecondary = data.cosmeticUrlSecondary || '';
const sidebarLink = document.querySelector("body > div.container.main > div:nth-child(2) > div.sidebar.col-md-3.visible-xs.visible-sm.col-xs-12.visible-md.visible-lg > div.col-md-12.col-xs-6 > a");
		if (sidebarLink) {
      const linkHref = sidebarLink.href;
      const urlIdMatch = linkHref.match(/mid=(\d+)/); 

      if (urlIdMatch && urlIdMatch[1]) {
        const pageId = urlIdMatch[1];

        if (pageId === cosmeticUrlPrimary && cssUrl) {
        const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.type = 'text/css';
            cssLink.href = cssUrl;

            document.head.appendChild(cssLink);
		}
       if (pageId === cosmeticUrlSecondary && cssUrlSIDE) {
        if (cssUrlSIDE) {
            const cssLinkSIDE = document.createElement('link');
            cssLinkSIDE.rel = 'stylesheet';
            cssLinkSIDE.type = 'text/css';
            cssLinkSIDE.href = cssUrlSIDE;

            document.head.appendChild(cssLinkSIDE);
        }
		}   
	  }
		}
    });
}

if (window.location.href.startsWith("https://www.lioden.com/") && !window.location.href.includes("/territory.php")) {
    applyCustomCss();
    enablePaw();
}

