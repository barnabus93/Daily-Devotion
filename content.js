// Devotional plan. Each day shares one passage between both modes:
// study it alone (personal), then lead the family through it (family).
// Memory verses are quoted from the World English Bible (public domain).
// To extend the plan, add weeks and days following the same shape.

const PLAN = {
  weeks: [
    {
      week: 1,
      theme: "Who Is Jesus?",
      memoryVerse: { text: "Jesus Christ is the same yesterday, today, and forever.", ref: "Hebrews 13:8" }
    },
    {
      week: 2,
      theme: "Trusting God When It's Hard",
      memoryVerse: { text: "When I am afraid, I will put my trust in you.", ref: "Psalm 56:3" }
    }
  ],

  days: [
    // ───────────── WEEK 1 ─────────────
    {
      day: 1, week: 1, title: "Follow Me", passage: "Mark 1:16-20",
      personal: {
        reflection: [
          "Jesus calls these men in the middle of an ordinary workday. They aren't scholars or leaders. They're tradesmen with nets in their hands. Look at the promise: \"I will make you into fishers for people.\" Jesus takes responsibility for who they'll become. Their part is to follow.",
          "James and John leave their father Zebedee in the boat. Following Jesus puts every loyalty in order, even good ones like work, family and ambition. For most men that doesn't mean quitting your job. It means settling who sets the direction of your life, and coming back to that every morning."
        ],
        questions: [
          "What \"nets\" am I gripping that compete with following Jesus right now?",
          "Where am I trying to make myself into a better man instead of letting Him do the making?"
        ],
        prayer: "Lord Jesus, You called me before I was ready, and You still do. Help me follow You today at work, at home, and in my thoughts. Make me into the man You intend, for my wife and my sons."
      },
      family: {
        story: [
          "One morning by a big lake called the Sea of Galilee, two brothers named Simon and Andrew were throwing their fishing net into the water. Catching fish was their job. They did it every day.",
          "Jesus walked along the shore and called to them: \"Come, follow me, and I will make you fishers of people!\" Right away they dropped their nets and went with Him.",
          "A little farther down the shore, two more brothers, James and John, were sitting in their boat with their dad, fixing their nets. Jesus called them too, and they got up and followed Him.",
          "These men weren't famous or important. They probably smelled like fish! But Jesus chose them to be His friends and helpers, and He would teach them everything they needed to know."
        ],
        questions: {
          little: "What were the brothers doing when Jesus called them?",
          older: "They left their nets right away. What would have been hard about leaving?",
          parents: "Mom and Dad: tell about one thing that was hard to give up when you started following Jesus, or that still is."
        },
        activity: "Play Follow the Leader for a minute. Then talk about it: following Jesus means going where He leads, even when we can't see the whole path."
      }
    },
    {
      day: 2, week: 1, title: "Even the Wind Obeys Him", passage: "Mark 4:35-41",
      personal: {
        reflection: [
          "\"Teacher, don't you care that we are dying?\" The disciples take Jesus' sleep as proof that He doesn't care. But asleep isn't the same as absent, and Jesus' rest wasn't neglect. It came from complete security in the Father.",
          "Notice how the story ends. After the calm they are \"greatly afraid,\" more than they were in the storm. Their fear of the waves turns into awe at who is in the boat. When storms hit your home, your family looks to you. Your steadiness can't come from controlling the waves. It has to come from knowing who is in the boat with you."
        ],
        questions: [
          "What storm am I in right now where I've been quietly asking, \"Don't You care?\"",
          "When pressure hits, what does my family see in me? What would trust look like in front of them?"
        ],
        prayer: "Jesus, You speak and the wind obeys. I bring You the storm I'm in. Settle my heart so I can be steady for my family, not because I'm in control, but because You are."
      },
      family: {
        story: [
          "One evening Jesus said to His friends, \"Let's cross to the other side of the lake.\" So they got into a boat and started across. Jesus was tired, so He lay down in the back of the boat on a cushion and fell asleep.",
          "Suddenly a huge storm came! The wind howled and big waves crashed into the boat, filling it with water. The disciples were terrified. They woke Jesus up: \"Teacher, don't you care that we're going to drown?\"",
          "Jesus stood up and spoke to the wind and the waves: \"Peace! Be still!\" And right away the wind stopped and the lake became completely calm.",
          "Jesus asked them, \"Why are you so afraid?\" The disciples looked at each other and whispered, \"Who is this? Even the wind and the waves obey Him!\""
        ],
        questions: {
          little: "What did Jesus say to the wind and the waves?",
          older: "Jesus was asleep during the storm. Did that mean He didn't care? How do you know?",
          parents: "Mom and Dad: tell about a time you were scared and how God helped you."
        },
        activity: "Go around and have each person name one thing that scares them. Then pray together: \"Jesus, You are bigger than ___.\""
      }
    },
    {
      day: 3, week: 1, title: "Friends Who Carry", passage: "Mark 2:1-12",
      personal: {
        reflection: [
          "\"Jesus, seeing their faith...\" Their faith: the four friends who dug through a roof. The paralyzed man was carried to Jesus by other people's faith. Every man needs people like that, and every father is meant to be one, carrying his kids to Jesus in prayer long before they can walk there themselves.",
          "Then Jesus says something no one expected: \"Your sins are forgiven.\" The man came for his legs, and Jesus dealt with his heart first. The healing came too, but as proof that Jesus has authority to forgive. We usually pray about our circumstances. Jesus goes after the deeper need."
        ],
        questions: [
          "Who are the men carrying me to Jesus, and who am I carrying? If I can't name anyone, what's one step I can take?",
          "In my prayers for my family, am I asking only for circumstances to change, or for hearts too?"
        ],
        prayer: "Lord, thank You for the people who have carried me to You. Make me that kind of friend, husband and father. Give me the courage to dig through whatever roof stands between my family and You."
      },
      family: {
        story: [
          "Jesus was teaching inside a house, and so many people came that it was packed. There wasn't even room by the door!",
          "Four friends showed up carrying a man on a mat. Their friend couldn't walk, and they knew Jesus could help him. But they couldn't get in. So they climbed up on the roof, dug a big hole in it, and lowered their friend down right in front of Jesus!",
          "Jesus saw how much they trusted Him. He said to the man, \"Son, your sins are forgiven.\" Some people grumbled, because only God can forgive sins. So Jesus showed them He really is God's Son: He told the man, \"Get up, pick up your mat, and go home.\"",
          "And the man stood up, picked up his mat, and walked out while everyone watched. They were amazed and praised God!"
        ],
        questions: {
          little: "How did the friends get their friend to Jesus?",
          older: "Jesus forgave the man before He healed his legs. Why do you think He did that first?",
          parents: "Mom and Dad: who is a friend who helped you know Jesus better?"
        },
        activity: "Think of a friend or neighbor who needs help or prayer. Choose one thing your family will do for them this week."
      }
    },
    {
      day: 4, week: 1, title: "Jesus Came Looking", passage: "Luke 19:1-10",
      personal: {
        reflection: [
          "Zacchaeus was rich, dishonest and despised. Jesus stops under the tree, calls him by name, and invites Himself over before Zacchaeus has repented of anything. The crowd grumbles. Then the change comes: half his goods to the poor, and anyone he cheated repaid four times over.",
          "The order matters. Zacchaeus doesn't change in order to be welcomed. He changes because he was welcomed. \"The Son of Man came to seek and to save that which was lost.\" Grace comes first, and change follows. Think about how your sons experience you after they've failed. Do they have to earn their way back, or are they welcomed into a relationship that then changes them?"
        ],
        questions: [
          "Do I really believe Jesus wants to be at my table on my worst days, not just my good ones?",
          "When my boys mess up, does my response look more like Jesus' or like the grumbling crowd's?"
        ],
        prayer: "Jesus, You came looking for me. Thank You for welcoming me before I deserved it. Let that grace change me, and let it shape how I treat my wife and sons when they fall short."
      },
      family: {
        story: [
          "In the city of Jericho lived a man named Zacchaeus. He was a tax collector, and he cheated people by taking extra money for himself. Nobody liked him. He was also very short!",
          "One day Jesus came to town, and a huge crowd gathered. Zacchaeus wanted to see Jesus, but he couldn't see over all the people. So he ran ahead and climbed up a sycamore tree.",
          "When Jesus got to that tree, He stopped, looked up, and said, \"Zacchaeus, hurry and come down. I'm going to your house today!\" Zacchaeus scrambled down, so happy. But the crowd grumbled: \"Why is Jesus going to that bad man's house?\"",
          "Meeting Jesus changed Zacchaeus's heart. He said, \"I'll give half of what I own to the poor, and anyone I cheated, I'll pay back four times as much!\" Jesus said, \"I came to find and save people who are lost.\""
        ],
        questions: {
          little: "Where did Zacchaeus climb so he could see Jesus?",
          older: "Why were people upset that Jesus went to Zacchaeus's house? Why did Jesus go anyway?",
          parents: "Mom and Dad: how did knowing Jesus change something about the way you live?"
        },
        activity: "Make something right. If anyone in the family owes someone an apology or needs to give something back, do it today."
      }
    },
    {
      day: 5, week: 1, title: "Not Enough, Until It Is", passage: "John 6:1-14",
      personal: {
        reflection: [
          "Philip does the math: two hundred days' wages wouldn't be enough. Andrew finds a boy with five barley loaves and two fish, then adds, \"But what are these among so many?\" Both are realistic. Both leave Jesus out of the calculation.",
          "Jesus takes the small offering, gives thanks for it before anything has multiplied, and feeds everyone, with twelve baskets left over. You will rarely feel you have enough time, patience or energy for your marriage and your kids. The question isn't whether you have enough. It's whether you'll put what you have in His hands."
        ],
        questions: [
          "Where am I doing Philip's math instead of bringing what I have to Jesus?",
          "What small, ordinary thing can I offer my wife or sons today?"
        ],
        prayer: "Lord, what I have looks small next to what my family needs. I give it to You anyway: my time, my attention, my patience. Thank You for it, and multiply it."
      },
      family: {
        story: [
          "A huge crowd, more than 5,000 people, followed Jesus up onto a hillside to hear Him teach. As the day went on, everyone got hungry. But there was no food and no store nearby.",
          "Jesus asked His friend Philip, \"Where can we buy bread for all these people?\" Philip said, \"Even if we worked for months, we couldn't buy enough!\"",
          "Then Andrew said, \"There's a boy here with five small loaves of bread and two fish. But that won't go very far.\" The boy gave his lunch to Jesus.",
          "Jesus had everyone sit down on the grass. He held up the bread and fish and thanked God for it. Then He passed it out, and it kept going and going until everyone had eaten as much as they wanted! The leftovers filled twelve baskets."
        ],
        questions: {
          little: "What food did the boy give to Jesus?",
          older: "Jesus could have made food out of nothing. Why do you think He used a kid's lunch?",
          parents: "Mom and Dad: tell about a time God used something small that you gave."
        },
        activity: "At your next meal, before eating, have everyone say one thing they're thankful for, just like Jesus gave thanks before He shared the food."
      }
    },
    {
      day: 6, week: 1, title: "The One", passage: "Luke 15:1-7",
      personal: {
        reflection: [
          "Start with the setting: the Pharisees grumble, \"This man welcomes sinners, and eats with them.\" The parable is Jesus' answer. The shepherd leaves the ninety-nine for the one. When he finds it, there's no lecture. He puts it on his shoulders, rejoicing, and throws a party.",
          "It's easy to read yourself into the ninety-nine, the reliable ones. But the gospel says you were the one, and He came for you. Someday one of your sons may wander. This passage shows what a father does then: go after him, carry him home, and rejoice."
        ],
        questions: [
          "Do I see myself as someone Jesus went looking for, or as someone who never really needed finding?",
          "How do I respond to people who have wandered: with grumbling, or with pursuit?"
        ],
        prayer: "Good Shepherd, You came after me and carried me home. Keep my heart soft toward the lost, and if my sons ever wander, give me Your patience and Your joy in bringing them back."
      },
      family: {
        story: [
          "Some people complained that Jesus spent time with people who had done bad things. So Jesus told them a story.",
          "\"Imagine you're a shepherd with 100 sheep. One day you count them: 97, 98, 99... one is missing! What do you do? You leave the 99 safe together and go looking for the lost one, over hills and through bushes, until you find it.",
          "\"When you find it, you don't yell at it. You lift it up onto your shoulders, so happy, and carry it all the way home. Then you call your friends and neighbors: 'Celebrate with me! I found my lost sheep!'\"",
          "Then Jesus said, \"That's how it is in heaven. There is a big celebration when even one lost person comes back to God.\""
        ],
        questions: {
          little: "How many sheep did the shepherd have? How many got lost?",
          older: "Why would the shepherd leave 99 sheep just to find one?",
          parents: "Mom and Dad: tell the kids how you would look for them if they were ever lost, and that God loves them even more than that."
        },
        activity: "Hide a stuffed animal \"sheep\" somewhere in the house and let the kids find it. When it's found, celebrate loudly. That's how God feels about us!"
      }
    },
    {
      day: 7, week: 1, title: "Out of the Boat", passage: "Matthew 14:22-33",
      personal: {
        reflection: [
          "Jesus sent the disciples into that boat. They are in the storm because they obeyed. Then He comes walking on the water: \"Cheer up! It is I! Don't be afraid.\" Peter asks to come, and he walks, until he looks at the wind instead of Jesus and starts to sink.",
          "\"Lord, save me!\" Immediately Jesus reaches out and catches him. Yes, there is a rebuke: \"Why did you doubt?\" But Peter is the only one who got out of the boat. Failing while stepping toward Jesus still puts you closer to Him than staying safe in the boat. And sinking is where you find out how quickly He catches you."
        ],
        questions: [
          "Where might Jesus be asking me to step out of the boat: in my faith, my marriage or my leadership at home?",
          "What has my attention lately, the wind or Jesus?"
        ],
        prayer: "Jesus, call me out onto the water. When I start to sink, I'll cry out to You, and I trust You to catch me. Keep my eyes on You."
      },
      family: {
        story: [
          "After feeding the huge crowd, Jesus sent His disciples ahead in a boat while He went up a mountain to pray. In the night, a strong wind blew and the waves pushed the boat around.",
          "Very early in the morning, the disciples saw someone walking toward them on top of the water! They screamed, \"It's a ghost!\" But Jesus called out, \"Don't be afraid. It's me!\"",
          "Peter said, \"Lord, if it's really You, tell me to come to You on the water.\" Jesus said, \"Come.\" So Peter climbed out of the boat and walked on the water toward Jesus!",
          "But when Peter looked at the big wind and waves, he got scared and began to sink. \"Lord, save me!\" he cried. Right away Jesus grabbed his hand and pulled him up. When they climbed into the boat, the wind stopped, and the disciples worshiped Jesus: \"You really are the Son of God!\""
        ],
        questions: {
          little: "What happened when Peter looked at the waves instead of Jesus?",
          older: "Peter sank, but he was the only one brave enough to get out of the boat. What can we learn from both parts?",
          parents: "Mom and Dad: share a time you trusted Jesus and stepped out to do something hard."
        },
        activity: "Review this week's memory verse. Can everyone say it without looking? Celebrate finishing Week 1!"
      }
    },

    // ───────────── WEEK 2 ─────────────
    {
      day: 8, week: 2, title: "Thrown in a Pit", passage: "Genesis 37:3-4, 18-28",
      personal: {
        reflection: [
          "This story starts with a father's mistake. \"Israel loved Joseph more than all his children,\" and he made it obvious with the coat. The brothers' hatred was their own sin, but Jacob's favoritism fed it. For a father of two boys, that deserves a careful look.",
          "God isn't mentioned once in this chapter. Joseph is thrown into a pit and sold, and heaven seems silent. But two chapters later we read, \"Yahweh was with Joseph.\" He was there the whole time. Sometimes God's presence only becomes clear looking back. Trusting Him means believing that before you can see it."
        ],
        questions: [
          "Is there any way, even unintentionally, that I treat my sons differently in a way that could breed resentment between them?",
          "Where do I need to trust that God is working in a situation where He seems silent?"
        ],
        prayer: "Father, guard me from favoritism. Help each of my sons know he is fully loved. And where You seem silent in my own life, give me faith that You are still with me."
      },
      family: {
        story: [
          "Long ago, a man named Jacob had twelve sons. His favorite was Joseph, and he gave Joseph a beautiful, colorful coat. Joseph's older brothers were so jealous that they couldn't even say a kind word to him.",
          "One day Jacob sent Joseph to check on his brothers, who were taking care of sheep far away. When the brothers saw him coming in that coat, they said, \"Here comes the dreamer! Let's get rid of him.\"",
          "They pulled off his coat and threw him into a deep, empty pit. Then some traders came by on camels, heading to Egypt. The brothers sold Joseph to them for twenty pieces of silver.",
          "Joseph was taken far away from home. It seemed like everything had gone wrong. But God had not forgotten Joseph. He was with him the whole time, and He had a plan."
        ],
        questions: {
          little: "What special gift did Joseph's dad give him?",
          older: "Jealousy made the brothers do something terrible. How does jealousy start out small?",
          parents: "Mom and Dad: tell each son one thing you love about him that's special to him."
        },
        activity: "Brothers: each of you tell the other one thing you like about him. (Parents too: tell each other!)"
      }
    },
    {
      day: 9, week: 2, title: "God Meant It for Good", passage: "Genesis 50:15-21",
      personal: {
        reflection: [
          "Years have passed. Joseph is second in command in Egypt and has saved his family from famine. When their father dies, the brothers panic and expect revenge. Joseph weeps. \"Am I in the place of God? You meant evil against me, but God meant it for good.\"",
          "Joseph's forgiveness rests on two convictions: God is the judge, not him, and God is sovereign even over other people's sin against him. Then he \"spoke kindly to them.\" His forgiveness reassured them. It wasn't held over their heads. In marriage, forgiving is the easy part to say. The hard part is not keeping a ledger to bring up later."
        ],
        questions: [
          "Is there someone, including my wife, whom I've \"forgiven\" but still hold a debt over?",
          "Where have I seen God bring good out of something meant for harm?"
        ],
        prayer: "God, You alone are judge. Help me release the debts I'm holding. Let my forgiveness be kind and complete, especially toward my wife, the way Yours is toward me."
      },
      family: {
        story: [
          "In Egypt, Joseph went through hard times. He was a servant and was even put in jail when he did nothing wrong. But God was with him. Eventually God helped Joseph explain the king's dreams, and the king made Joseph the second most important ruler in all of Egypt!",
          "Joseph stored up food, so when a famine came and no food would grow, Egypt still had plenty. Joseph's brothers came from far away to buy food. They didn't recognize him, but Joseph knew them. Eventually he told them who he was, and the whole family moved to Egypt.",
          "After their father Jacob died, the brothers got scared: \"Now Joseph will pay us back for what we did!\" They bowed down and begged him to forgive them.",
          "Joseph cried and said, \"Don't be afraid. You meant to hurt me, but God turned it into something good. He used it to save many lives.\" Joseph forgave them and promised to take care of them and their kids."
        ],
        questions: {
          little: "Did Joseph get even with his brothers, or did he forgive them?",
          older: "Joseph said God turned something bad into something good. What does that mean?",
          parents: "Mom and Dad: share (in a kid-appropriate way) a time you forgave each other."
        },
        activity: "Practice the words together: \"I'm sorry. Will you forgive me?\" and \"I forgive you.\" Agree to use them this week."
      }
    },
    {
      day: 10, week: 2, title: "The Battle Is the Lord's", passage: "1 Samuel 17:32-50",
      personal: {
        reflection: [
          "This passage is easy to flatten into \"face your giants.\" But David's confidence isn't in himself. He remembers the lion and the bear: \"Yahweh who delivered me... will deliver me.\" And he says it outright: \"The battle is Yahweh's.\" His courage was built from remembering God's past faithfulness.",
          "Saul's armor didn't fit, so David fought as the man God had made him, not as a copy of someone else. He also fought as Israel's representative, one man standing in for the whole people. That points to a greater Son of David who fought the battle we couldn't. Your family doesn't need you to be a giant-slayer. They need you to point them to the One who already won."
        ],
        questions: [
          "What \"lions and bears\" has God already brought me through? Do I remember them when new fears come?",
          "What borrowed armor am I relying on: someone else's methods, image or strength?"
        ],
        prayer: "Lord, the battle is Yours. Thank You for every past rescue. Help me face what's in front of me in Your strength, as the man You made me, and point my sons to Jesus, who won the real victory."
      },
      family: {
        story: [
          "The army of Israel was facing their enemies, the Philistines. Every day a giant named Goliath, more than nine feet tall, wearing heavy armor, shouted, \"Send someone to fight me!\" All of Israel's soldiers were afraid.",
          "A young shepherd named David came to bring food to his brothers. He heard Goliath and said, \"I'll fight him! God helped me fight off a lion and a bear to protect my sheep, and He'll help me now.\"",
          "King Saul gave David his own armor, but it was way too big. So David took it off. He picked up five smooth stones from a stream and took his sling. Goliath laughed at him. But David said, \"You come with a sword, but I come in the name of the Lord. The battle belongs to the Lord!\"",
          "David put a stone in his sling, swung it around, and let it fly. It hit Goliath right in the forehead, and the giant fell flat on his face! God gave Israel the victory."
        ],
        questions: {
          little: "What did David use to fight Goliath?",
          older: "David said, \"The battle belongs to the Lord.\" Who was David really trusting?",
          parents: "Mom and Dad: tell about a \"lion or bear,\" a time God helped you before, that gives you courage now."
        },
        activity: "Start a family \"Lion & Bear List\": write down times God has helped your family. Keep it somewhere you'll see it and add to it."
      }
    },
    {
      day: 11, week: 2, title: "Just as He Had Done Before", passage: "Daniel 6:10-23",
      personal: {
        reflection: [
          "When the decree is signed, Daniel doesn't make a dramatic statement. He goes home, opens his windows toward Jerusalem, and prays three times a day, \"as he did before.\" His courage in the crisis grew out of decades of ordinary faithfulness. The habit kept him steady.",
          "Your sons will remember your habits far longer than your speeches. Whether they saw you pray, open your Bible and keep coming back to God on unremarkable days will shape them more than any single lesson. This very practice of sitting down each day is building that habit."
        ],
        questions: [
          "Which of my spiritual habits would I keep even if it cost me something?",
          "Do my sons actually see me pray and read Scripture, or is my faith invisible to them?"
        ],
        prayer: "Lord, make me faithful in the ordinary days so I'm steady in the hard ones. Let my sons see a father who prays, not just one who tells them to."
      },
      family: {
        story: [
          "Daniel loved God and prayed to Him three times every day. He worked for King Darius and did such a good job that the king planned to put him in charge of everything. The other leaders were jealous and wanted to get Daniel in trouble.",
          "They tricked the king into making a new law: \"For 30 days, nobody can pray to anyone except the king. Anyone who breaks this law will be thrown to the lions!\"",
          "Daniel heard about the law, but he went home, opened his window, and prayed to God just like he always did. The jealous men caught him, and the king sadly had to throw Daniel into a den full of hungry lions.",
          "The king couldn't sleep all night. Early in the morning he ran to the den: \"Daniel! Did your God save you?\" Daniel called back, \"Yes! God sent His angel and shut the lions' mouths!\" Daniel wasn't hurt at all, because he trusted God."
        ],
        questions: {
          little: "What did God do to the lions' mouths?",
          older: "Daniel could have prayed secretly. Why do you think he kept praying by his open window?",
          parents: "Mom and Dad: tell the kids when and how you like to pray."
        },
        activity: "Choose regular family prayer times for this week, like Daniel's three times a day: maybe breakfast, dinner and bedtime."
      }
    },
    {
      day: 12, week: 2, title: "Running from God", passage: "Jonah 1:1-17",
      personal: {
        reflection: [
          "Jonah runs in exactly the opposite direction. Later he admits why (4:2): he knew God was gracious and merciful and didn't want Nineveh to get that mercy. His running wasn't confusion. It was resistance.",
          "His disobedience endangers everyone on the ship. And while the storm rages, Jonah sleeps below deck. Compare that with Jesus asleep in a storm out of perfect trust. Then God sends a fish. It's a rescue, not just a punishment. When a husband and father runs, his family is in the boat with him. And God's pursuit is often tougher and kinder than we expect."
        ],
        questions: [
          "Is there something God has clearly told me to do, or to stop doing, that I've been avoiding?",
          "Who else is in my boat and affected by my running?"
        ],
        prayer: "Lord, I don't want to run from You. Show me where I've been heading toward Tarshish. Thank You for pursuing me even when I resist. Bring me back, and keep my family safe in Your hands."
      },
      family: {
        story: [
          "God told a man named Jonah, \"Go to the big city of Nineveh and tell the people to stop doing evil.\" But Jonah didn't want to go. Instead, he got on a ship sailing the opposite direction!",
          "Out at sea, God sent a huge storm. The sailors were terrified and threw cargo overboard to keep the ship from sinking. Where was Jonah? Asleep at the bottom of the boat!",
          "The sailors woke him up. Jonah admitted, \"This storm is my fault. I'm running from God. Throw me into the sea, and it will be calm.\" They didn't want to, but finally they did. The storm stopped right away.",
          "But God wasn't finished with Jonah. He sent a giant fish to swallow him! Jonah was inside the fish for three days and three nights. He prayed and told God he was sorry. Then God had the fish spit Jonah out onto dry land, and this time Jonah went to Nineveh."
        ],
        questions: {
          little: "What swallowed Jonah?",
          older: "Why do you think Jonah ran away instead of obeying God?",
          parents: "Mom and Dad: share a time you didn't want to obey God, and what happened."
        },
        activity: "Play \"Jonah Says\" (like Simon Says). Then talk: is there anything that feels hard to obey right now, for kids or for parents?"
      }
    },
    {
      day: 13, week: 2, title: "For Such a Time as This", passage: "Esther 4:12-16",
      personal: {
        reflection: [
          "God's name never appears in Esther, yet His hand is everywhere. Mordecai puts it plainly: \"Who knows if you haven't come to the kingdom for such a time as this?\" Esther's place wasn't an accident. Neither is yours. You are this woman's husband, these boys' father, and you're in this job and this neighborhood, in this year.",
          "Notice what Esther does before she acts: \"Go, gather together all the Jews... and fast for me.\" Her courage starts with dependence and community, not a solo act of nerve. \"If I perish, I perish.\" Real courage is willing to pay a price, and it doesn't walk in alone."
        ],
        questions: [
          "What might I have been placed here \"for such a time as this\" to do, at home or beyond it?",
          "Before hard things, do I ask others to pray for me, or do I go it alone?"
        ],
        prayer: "Sovereign God, You placed me in this family and this moment on purpose. Give me courage to act when it matters, and humility to ask for prayer before I do."
      },
      family: {
        story: [
          "A young Jewish woman named Esther became queen of Persia. But a wicked man named Haman tricked the king into making a law to destroy all the Jewish people, Esther's people!",
          "Esther's cousin Mordecai begged her to ask the king for help. But there was a rule: anyone who went to see the king without being invited could be killed, unless the king held out his golden scepter.",
          "Mordecai said, \"Maybe God made you queen for such a time as this.\" Esther said, \"Ask everyone to pray and fast for me for three days. Then I'll go to the king, even if it costs my life.\"",
          "When Esther walked in, the king held out his golden scepter. She was safe! Esther bravely told the king about Haman's evil plan, and her people were saved. God used Esther's courage to rescue them."
        ],
        questions: {
          little: "Who did Esther go to see, even though she was scared?",
          older: "What did Esther do first, before she went to the king? Why was that important?",
          parents: "Mom and Dad: tell about a time you had to be brave to help someone else."
        },
        activity: "Have each person name someone who needs courage right now (a friend, teacher, relative) and pray for them together."
      }
    },
    {
      day: 14, week: 2, title: "Singing at Midnight", passage: "Acts 16:22-34",
      personal: {
        reflection: [
          "Beaten, bloodied and locked in stocks in the inner prison, Paul and Silas are praying and singing hymns at midnight, \"and the prisoners were listening.\" Worship came before deliverance, not after it. Someone is always listening to how you respond to suffering, and often it's your kids.",
          "When the earthquake opens the doors, they stay, for the sake of the jailer. \"Believe in the Lord Jesus Christ, and you will be saved, you and your household.\" That night the jailer washes their wounds, his whole household is baptized, and he rejoices, \"having believed in God with all his household.\" A whole household turned to God is the hope behind everything you're doing with these devotions."
        ],
        questions: [
          "What would worship \"at midnight\" look like in the hardest thing I'm facing?",
          "What is my real hope for my household, and am I praying for it by name?"
        ],
        prayer: "Lord Jesus, let me praise You at midnight, before the doors open. Save my household: my wife and each of my sons. Let our home be one that rejoices in You together."
      },
      family: {
        story: [
          "Paul and Silas were telling people about Jesus in the city of Philippi. Some people got angry, and they had Paul and Silas beaten and thrown in jail. The jailer locked their feet in heavy wooden blocks.",
          "It was midnight, and they were hurting. But instead of complaining, Paul and Silas prayed and sang songs to God! All the other prisoners were listening.",
          "Suddenly a big earthquake shook the jail! The doors flew open and everyone's chains came loose. The jailer woke up, saw the open doors, and was terrified that the prisoners had escaped. But Paul shouted, \"Don't worry! We're all still here!\"",
          "The jailer fell down in front of them: \"What must I do to be saved?\" They said, \"Believe in the Lord Jesus, and you will be saved, you and your family.\" That very night the jailer and his whole family believed in Jesus and were baptized, and they were so full of joy!"
        ],
        questions: {
          little: "What did Paul and Silas do in jail at midnight?",
          older: "Why do you think singing to God in a hard time would make a difference?",
          parents: "Mom and Dad: tell the kids your biggest hope for your family when it comes to Jesus."
        },
        activity: "Sing a worship song together, the way Paul and Silas did. Then celebrate: you finished two weeks of family devotions!"
      }
    }
  ]
};
