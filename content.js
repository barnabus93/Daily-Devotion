// Shared plan + personal devotionals. Each day's passage is shared with
// family.js, so you can study it alone, then lead the family through it.
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
      }
    }
  ]
};
