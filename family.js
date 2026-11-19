// Family devotionals, written for a 5-year-old (with a baby brother in the room).
// Shown as slides on the TV. Keyed by day number, matching PLAN.days in content.js.
// As the kids grow, rewrite this file. content.js doesn't need to change.
//
// Shape of each day:
//   icon:     a big picture for the title slide
//   story:    short paragraphs, one per slide
//   ask:      two questions for the 5-year-old (one recall question, one "you" question)
//   parents:  something Mom and Dad share out loud
//   activity: a hands-on thing to do together

const FAMILY = {
  1: {
    icon: "🎣",
    story: [
      "Simon and Andrew were brothers. They were fishermen. Every day they threw big nets into the lake to catch fish.",
      "One day Jesus walked by and called to them: \"Come, follow me!\"",
      "Right away they dropped their nets and went with Jesus. Then Jesus called two more brothers, James and John. They followed Him too!",
      "Jesus wanted them to be His friends and helpers. And Jesus wants us to follow Him too."
    ],
    ask: ["What were the brothers doing when Jesus called them?", "Would you like to be Jesus' helper? What could you do to help?"],
    parents: "Tell him how you started following Jesus.",
    activity: "Play Follow the Leader! Take turns being the leader. Following Jesus means doing what He shows us."
  },
  2: {
    icon: "🌊",
    story: [
      "Jesus and His friends got in a boat to cross a big lake. Jesus was tired, so He fell asleep on a pillow.",
      "Then a big storm came! The wind blew. Waves splashed into the boat. His friends were scared, so they woke Jesus up: \"Help us!\"",
      "Jesus stood up and said to the wind and the waves, \"Quiet! Be still!\" And everything got calm.",
      "His friends said, \"Wow! Even the wind and the waves obey Jesus!\""
    ],
    ask: ["What did Jesus say to the storm?", "What makes you scared? Did you know Jesus is with you then too?"],
    parents: "Tell him about a time you were scared and asked God for help.",
    activity: "Make a storm! Rub your hands, pat your legs and stomp your feet. When Dad says \"Be still!\", everyone freezes and gets quiet."
  },
  3: {
    icon: "🏠",
    story: [
      "Jesus was teaching in a house. So many people came that nobody else could get in!",
      "Four friends carried a man on a mat. He couldn't walk. They wanted Jesus to help him, but the door was blocked.",
      "So they climbed onto the roof, made a hole, and lowered their friend down, right in front of Jesus!",
      "Jesus said, \"Your sins are forgiven. Get up and walk!\" And the man stood up and walked home, praising God!"
    ],
    ask: ["How did the friends get their friend to Jesus?", "How can you help a friend?"],
    parents: "Tell him about a friend who helped you know Jesus.",
    activity: "Put a stuffed animal on a towel and carry it together across the room, like the four friends. Then pick someone your family will pray for this week."
  },
  4: {
    icon: "🌳",
    story: [
      "Zacchaeus was a short man who took money that wasn't his. People didn't like him.",
      "When Jesus came to town, a big crowd came. Zacchaeus couldn't see! So he climbed up a tree.",
      "Jesus stopped under the tree and said, \"Zacchaeus, come down! I'm coming to your house today!\"",
      "Zacchaeus was so happy. He said, \"I'll give back the money I took, and even more!\" Jesus loved him and changed his heart."
    ],
    ask: ["Where did Zacchaeus climb so he could see Jesus?", "Jesus loved Zacchaeus even when he did wrong. Does Jesus love you when you do wrong?"],
    parents: "Tell him about a time you said sorry and made something right.",
    activity: "Get small like Zacchaeus, then climb an imaginary tree as high as you can! Then ask: is there anything we need to say sorry for today?"
  },
  5: {
    icon: "🍞",
    story: [
      "Lots and lots of people came to hear Jesus, more than 5,000! Soon everyone was hungry.",
      "A boy had a small lunch: five loaves of bread and two fish. He gave it to Jesus.",
      "Jesus said thank you to God for the food. Then He broke it and shared it...",
      "...and there was enough for everyone! There were even 12 baskets of food left over!"
    ],
    ask: ["What was in the boy's lunch?", "What is something you can share?"],
    parents: "Tell him about a time God used something small that you gave.",
    activity: "Snack time! Count out 5 crackers and 2 fish crackers. Before you eat, say thank you to God, just like Jesus did."
  },
  6: {
    icon: "🐑",
    story: [
      "Jesus told a story about a shepherd who had 100 sheep.",
      "One day, one little sheep got lost! The shepherd kept the other sheep safe and went looking for the lost one.",
      "He looked and looked, over hills and behind rocks, until he found it!",
      "He carried the sheep home on his shoulders and threw a party. Jesus said God is that happy when we come back to Him."
    ],
    ask: ["What did the shepherd do when he found the sheep?", "How does God feel about you?"],
    parents: "Tell him how hard you would look for him if he were lost, and that God loves him even more than that.",
    activity: "Hide a stuffed animal \"sheep.\" Let him find it, then cheer and carry it around on your shoulders!"
  },
  7: {
    icon: "🚣",
    story: [
      "Jesus' friends were in a boat at night. The wind was blowing hard.",
      "Then they saw Jesus walking on top of the water! Jesus said, \"Don't be afraid. It's me!\"",
      "Peter said, \"Can I come too?\" Jesus said, \"Come!\" Peter stepped out of the boat and walked on the water!",
      "But Peter looked at the waves, got scared, and started to sink. \"Jesus, save me!\" Jesus grabbed his hand right away."
    ],
    ask: ["What happened when Peter looked at the waves?", "What did Jesus do when Peter called for help?"],
    parents: "Tell him about a time you trusted Jesus to help you do something hard.",
    activity: "Lay a blanket on the floor for \"water.\" Walk across it while looking at Dad the whole time. Then: can he say this week's memory verse without help?"
  },
  8: {
    icon: "🧥",
    story: [
      "Joseph had 11 brothers. His dad gave him a special, colorful coat.",
      "His brothers were jealous. They got so mad that they put Joseph in a deep hole.",
      "Then they sold him to men who were going far away to Egypt. Joseph was all alone.",
      "But Joseph wasn't really alone. God was with him the whole time."
    ],
    ask: ["What special present did Joseph's dad give him?", "Is God with you even when you feel sad or alone?"],
    parents: "Tell him one thing you love about him, and one thing you love about his baby brother.",
    activity: "Wrap him in a colorful blanket \"coat.\" Then let him tell Mom, Dad and his baby brother one thing he loves about each of them."
  },
  9: {
    icon: "🤗",
    story: [
      "In Egypt, God helped Joseph. Joseph became a great leader and saved up lots of food.",
      "Years later, there was no food back home. Joseph's brothers came to Egypt to buy some, and they didn't know it was Joseph!",
      "When they found out, they were scared: \"Will Joseph be mean to us?\"",
      "But Joseph hugged them and said, \"I forgive you. God turned the bad thing into something good.\""
    ],
    ask: ["Was Joseph mean to his brothers, or did he forgive them?", "What do we say when we forgive someone?"],
    parents: "Tell him about a time you forgave someone. Maybe it was each other!",
    activity: "Practice together: \"I'm sorry. Will you forgive me?\" and \"I forgive you!\" Then give everyone a big hug."
  },
  10: {
    icon: "🪨",
    story: [
      "A giant named Goliath was very big and very loud. Everyone was scared of him.",
      "A shepherd boy named David said, \"I'm not scared. God helped me fight a lion and a bear. He'll help me now!\"",
      "David picked up five smooth stones and took his sling. He said, \"God will win this fight!\"",
      "David swung his sling. The stone flew and hit Goliath, and the giant fell down! God helped David win."
    ],
    ask: ["What did David use to fight Goliath?", "Who helped David be brave?"],
    parents: "Tell him about a time God helped you be brave.",
    activity: "Mark how tall he is on the wall with tape. Then mark 9 feet. That's how tall Goliath was! Make a list of times God has helped your family."
  },
  11: {
    icon: "🦁",
    story: [
      "Daniel loved God. Every day he prayed to God three times.",
      "Some mean men made a rule: \"No praying to God, or you'll be thrown to the lions!\"",
      "Daniel kept praying anyway. So he was put in a den with hungry lions.",
      "But God sent an angel to shut the lions' mouths! In the morning Daniel was safe. God took care of him."
    ],
    ask: ["What did God do to the lions?", "When can we pray to God?"],
    parents: "Tell him when and where you like to pray.",
    activity: "Roar like lions! When Dad says \"Shut!\", everyone closes their mouth tight. Then pick 3 times to pray together this week: breakfast, dinner and bedtime."
  },
  12: {
    icon: "🐋",
    story: [
      "God told Jonah, \"Go to the city of Nineveh.\" But Jonah said no and got on a boat going the other way!",
      "God sent a big storm. Jonah knew it was because he ran away. The sailors put him in the sea, and the storm stopped.",
      "Then a giant fish swallowed Jonah! He was inside for three days. Jonah prayed, \"I'm sorry, God.\"",
      "The fish spit Jonah out onto the beach. This time Jonah obeyed God and went."
    ],
    ask: ["What swallowed Jonah?", "What should we do when God, or Mom and Dad, tell us to do something?"],
    parents: "Tell him about a time you didn't want to obey God, and what happened.",
    activity: "Play \"Jonah Says\" (like Simon Says). Practice obeying right away!"
  },
  13: {
    icon: "👑",
    story: [
      "Esther was a queen. A bad man named Haman made a plan to hurt Esther's people.",
      "Esther needed to ask the king for help. But going to the king without being invited was very dangerous!",
      "Esther asked everyone to pray for her. Then she bravely went to see the king.",
      "The king held out his golden scepter and listened. Esther told him about the bad plan, and her people were saved!"
    ],
    ask: ["Who did Esther go to see, even though she was scared?", "What did Esther ask people to do before she went?"],
    parents: "Tell him about a time you had to be brave to help someone.",
    activity: "Make a paper crown. Then name someone who needs to be brave and pray for them together."
  },
  14: {
    icon: "🎵",
    story: [
      "Paul and Silas told people about Jesus. Some people got angry and put them in jail.",
      "At midnight they were hurting. But they sang songs to God! The other prisoners listened.",
      "Suddenly there was an earthquake! The doors opened and the chains fell off!",
      "The jailer was scared. Paul said, \"We're all here. Believe in Jesus!\" That night the jailer and his whole family believed in Jesus."
    ],
    ask: ["What did Paul and Silas do in jail at midnight?", "What song can we sing to God?"],
    parents: "Tell him your hope that your whole family will love Jesus together.",
    activity: "Sing a worship song together. Then celebrate: you finished two weeks of family devotions!"
  }
};
