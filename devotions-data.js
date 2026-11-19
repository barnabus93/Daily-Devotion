/*
 * devotionsData: the daily devotions, in order.
 * The app cycles through this list by date, starting from the plan start date in Settings.
 * To add a week, copy one entry, give it the next id, and fill it in.
 *
 * Scripture: NIV. Keep `passage` text word-for-word from the NIV (including “curly quotes”
 * and LORD in capitals where the NIV uses small caps). `ref` is "chapter:verse".
 * family.keyVerses lists the refs (from `passage`) shown on the Action Read card.
 * family.listenFor lists the word forms the Listening Word counter looks for.
 * personal.reality has a `dad` and a `mom` version; the app shows the one picked in Settings.
 * Family cards are written for young kids (about 4–8).
 *
 * Scripture quotations taken from The Holy Bible, New International Version® NIV®.
 * Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission. All rights reserved worldwide.
 */
const devotionsData = [
  {
    id: 1,
    title: "Justified by Faith, Not Rule-Keeping",
    reference: "Galatians 2:15–21",
    passage: [
      { ref: "2:15", text: "“We who are Jews by birth and not sinful Gentiles" },
      { ref: "2:16", text: "know that a person is not justified by the works of the law, but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ and not by the works of the law, because by the works of the law no one will be justified." },
      { ref: "2:17", text: "“But if, in seeking to be justified in Christ, we Jews find ourselves also among the sinners, doesn’t that mean that Christ promotes sin? Absolutely not!" },
      { ref: "2:18", text: "If I rebuild what I destroyed, then I really would be a lawbreaker." },
      { ref: "2:19", text: "“For through the law I died to the law so that I might live for God." },
      { ref: "2:20", text: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me." },
      { ref: "2:21", text: "I do not set aside the grace of God, for if righteousness could be gained through the law, Christ died for nothing!”" }
    ],
    personal: {
      context: "Paul is recounting what he said to Peter at Antioch (2:11–14). Peter had been eating with Gentile believers, then pulled back from their table when the circumcision group arrived, afraid of what they would think. Paul confronted him publicly, because this was not a matter of manners. It was the gospel itself. If Gentiles must take on the law to sit at the table, then Christ is not enough. These verses are the heart of Paul’s answer: no one is justified by works of the law, only by faith in Christ.",
      grace: "Verse 20 gets personal: “the Son of God, who loved me and gave himself for me.” What does it tell you about God that He declares righteous people who could never make themselves righteous? Where is His grace doing what your own effort never could?",
      warning: "Peter, an apostle who had walked with Jesus, slid into rule-keeping out of fear of man (2:12). Where do you see pride or performance here: adding requirements to the gospel, measuring yourself or others by visible standards, or pulling away from believers who don’t fit your circle?",
      reality: {
        dad: "Your kids will learn what earns acceptance from how you respond to them. Does your home run on performance, with love given and withdrawn, or on grace that still calls them to obey? Where are you living for the approval of other men instead of Christ? With your wife: are you quietly keeping score?",
        mom: "Your kids will learn what earns acceptance from how you respond to them. Does your home run on performance, with love given and withdrawn, or on grace that still calls them to obey? Where are you measuring yourself against other moms, or measuring your kids against theirs? With your husband: are you quietly keeping score?"
      },
      prayerStarter: "Lord Jesus, You loved me and gave Yourself for me. I stop trying to earn what You have already given…"
    },
    family: {
      bigIdea: "Some people were telling Jesus’ followers, “You have to keep lots of extra rules before God will accept you.” Paul wrote back: No one gets to God by being good enough. We get to God by trusting Jesus, because Jesus loved us and gave His life for us.",
      keyVerses: ["2:16", "2:20", "2:21"],
      listeningWord: "FAITH",
      listenFor: ["faith"],
      listenAction: "Raise your hand or tap the button every time you hear “FAITH”! (Faith means trusting Jesus.)",
      question1: "Paul says Jesus did something because He loved us. What did Jesus give for us?",
      question1Hint: "He gave Himself, His own life, for us (v. 20).",
      question2: "Jesus loved us before we were good. How can we show love tomorrow to someone who hasn’t been nice to us?",
      prayer: [
        "Jesus, thank You for loving me.",
        "I can’t be good enough on my own.",
        "I trust You to make me right with God.",
        "Help me love others like You love me. Amen."
      ]
    }
  },

  {
    id: 2,
    title: "Living Set Apart, Standing on the Word",
    reference: "1 Peter 1:13–16, 24–25",
    passage: [
      { ref: "1:13", text: "Therefore, with minds that are alert and fully sober, set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming." },
      { ref: "1:14", text: "As obedient children, do not conform to the evil desires you had when you lived in ignorance." },
      { ref: "1:15", text: "But just as he who called you is holy, so be holy in all you do;" },
      { ref: "1:16", text: "for it is written: “Be holy, because I am holy.”" },
      { ref: "1:24", text: "For, “All people are like grass, and all their glory is like the flowers of the field; the grass withers and the flowers fall," },
      { ref: "1:25", text: "but the word of the Lord endures forever.” And this is the word that was preached to you." }
    ],
    personal: {
      context: "Peter writes to believers scattered across Asia Minor. He calls them “exiles,” people living under suspicion and mistreatment because of their faith. He has just described their living hope in Christ (1:3–12), and now he draws the “therefore”: prepare your minds, fix your hope on grace still to come, and be holy like the One who called you. He closes the section by quoting Isaiah 40. People fade like grass, but the word of the Lord endures, and that enduring word is the gospel that was preached to them.",
      grace: "Hope is set “on the grace to be brought to you” (v. 13). Even holiness runs on grace, including grace you haven’t received yet. What does it reveal about God that He calls you to be holy because He is holy, and that His word outlasts everything human?",
      warning: "“Do not conform to the evil desires you had when you lived in ignorance” (v. 14). Which old patterns are still pulling at you? Where are you treating Scripture as optional advice instead of the enduring word of the Lord, or drifting toward voices that tell you what you want to hear?",
      reality: {
        dad: "“Minds that are alert and fully sober” (v. 13). What dulls your mind at the end of the day: the phone, screens, entertainment? What does that cost your wife and kids? If God’s word endures forever, how much of it are your children actually hearing from you?",
        mom: "“Minds that are alert and fully sober” (v. 13). In the constant noise of a day with kids, what dulls or scatters your mind: the phone, scrolling, worry? What would it look like to set your hope on grace instead of on getting everything done? If God’s word endures forever, how much of it are your children hearing from you, and how much is your own soul getting?"
      },
      prayerStarter: "Holy Father, You called me out of ignorance into Your light. Make me holy in all I do…"
    },
    family: {
      bigIdea: "Peter wrote to Christians who were far from home and being treated badly. He told them: God is holy, perfectly good and different from everything else, so His children live differently too. Flowers wilt and people grow old, but God’s Word lasts forever.",
      keyVerses: ["1:15", "1:16", "1:24", "1:25"],
      listeningWord: "HOLY",
      listenFor: ["holy"],
      listenAction: "Tap the button every time you hear “HOLY”! (Holy means totally good and set apart for God.)",
      question1: "Peter says people are like grass and flowers. What happens to grass and flowers? What lasts forever?",
      question1Hint: "They wither and fall. God’s Word lasts forever (v. 24–25).",
      question2: "Being holy means living God’s way even when other people don’t. What’s one way our family can live God’s way tomorrow?",
      prayer: [
        "God, You are holy and good.",
        "Your Word lasts forever.",
        "Help me live Your way,",
        "even when it’s hard. Amen."
      ]
    }
  },

  {
    id: 3,
    title: "Reconciled and Standing Firm",
    reference: "Colossians 1:21–23",
    passage: [
      { ref: "1:21", text: "Once you were alienated from God and were enemies in your minds because of your evil behavior." },
      { ref: "1:22", text: "But now he has reconciled you by Christ’s physical body through death to present you holy in his sight, without blemish and free from accusation—" },
      { ref: "1:23", text: "if you continue in your faith, established and firm, and do not move from the hope held out in the gospel. This is the gospel that you heard and that has been proclaimed to every creature under heaven, and of which I, Paul, have become a servant." }
    ],
    personal: {
      context: "Paul writes to a church he had never visited. It was being pressured by teaching that added spiritual “extras” to Christ (2:8, 16–23). Just before this passage he exalts Christ as Creator, sustainer and head of the church, the one through whom God reconciled all things “by making peace through his blood” (1:15–20). Now he applies it to them: that reconciliation includes you.",
      grace: "Once alienated, enemies in mind, evil in behavior. “But now he has reconciled you.” God took the initiative through Christ’s physical death, and He will present you “holy… without blemish and free from accusation.” What does it reveal about God that He makes peace with His enemies at His own cost?",
      warning: "“If you continue in your faith… and do not move from the hope held out in the gospel” (v. 23). This is not earning salvation. Continuing is how real faith shows itself. What could move you off the hope of the gospel: a new spiritual add-on, slow drift, prayerlessness, isolating yourself from the church?",
      reality: {
        dad: "The gospel is reconciliation, and your home should look like it. Is there tension with your wife that you’re waiting for her to fix first? Is there a child you need to go to after a harsh word? Who in your local church helps keep you “established and firm,” and whom are you helping?",
        mom: "The gospel is reconciliation, and your home should look like it. Is there tension with your husband that you’re waiting for him to fix first? Is there a child you need to go to after a sharp word? Who in your local church, perhaps another mom or an older woman (Titus 2:3–5), helps keep you “established and firm,” and whom are you helping?"
      },
      prayerStarter: "Father, I was far from You and hostile in my mind, but You made peace with me through Christ…"
    },
    family: {
      bigIdea: "Paul reminded the Christians in Colossae: because of the wrong things we do, we were far away from God, like enemies. But Jesus died to bring us back. Now God sees us as clean, with nothing to blame us for, and we keep trusting Jesus every day.",
      keyVerses: ["1:21", "1:22", "1:23"],
      listeningWord: "YOU",
      listenFor: ["you"],
      listenAction: "Point to yourself and tap the button every time you hear “YOU”! God is talking about us!",
      question1: "Before Jesus, were we close to God or far away? What did Jesus do to bring us back?",
      question1Hint: "Far away, like enemies. Jesus died to make peace and bring us back (v. 21–22).",
      question2: "Jesus made peace with us. Is there anyone in our family we need to make peace with tonight, by saying sorry or forgiving?",
      prayer: [
        "Jesus, I was far from God.",
        "You died to bring me back.",
        "Thank You for making me clean.",
        "Help me keep trusting You. Amen."
      ]
    }
  },

  {
    id: 4,
    title: "Rejoice, Pray, Give Thanks",
    reference: "1 Thessalonians 5:16–18",
    passage: [
      { ref: "5:16", text: "Rejoice always," },
      { ref: "5:17", text: "pray continually," },
      { ref: "5:18", text: "give thanks in all circumstances; for this is God’s will for you in Christ Jesus." }
    ],
    personal: {
      context: "Paul planted the church in Thessalonica and had to flee within weeks because of persecution (Acts 17:1–10). He writes to a young church still suffering for their faith (1:6; 2:14; 3:3–4). These three short commands come in a closing list of instructions for life together. They aren’t advice for easy seasons. Paul gave them to believers under pressure.",
      grace: "“This is God’s will for you in Christ Jesus.” We often agonize over God’s will for big decisions, and here it is stated plainly. What does it reveal about God that He wants His people joyful, in constant conversation with Him, and grateful? What grace makes rejoicing possible when circumstances aren’t good?",
      warning: "Paul says give thanks “in” all circumstances, not “for” all circumstances. Where have grumbling, entitlement or prayerless self-reliance crept in? What does a complaining spirit say about what you believe God owes you?",
      reality: {
        dad: "Your kids learn what a man does under stress by watching you. When you walk in the door after a hard day, what do they see: complaining or gratitude, anxiety or prayer? What would “pray continually” look like in your actual day: on the commute, at work, before you discipline?",
        mom: "Your kids learn what to do with stress by watching you. In the middle of the meltdowns, the mess and the long day, what do they see and hear: complaining or gratitude, anxiety or prayer? What would “pray continually” look like in your actual day: in the car, at work or at home, before you discipline?"
      },
      prayerStarter: "Father, I rejoice in You. In this circumstance I choose to give thanks for…"
    },
    family: {
      bigIdea: "Paul wrote to a brand-new church where people were being treated badly for loving Jesus. He told them three things God wants for us every day: be glad in God, talk to Him all the time, and say thank you no matter what happens.",
      keyVerses: ["5:16", "5:17", "5:18"],
      listeningWord: "PRAY",
      listenFor: ["pray"],
      readTimes: 3,
      listenAction: "We’ll read it 3 times! Fold your hands and tap the button every time you hear “PRAY”!",
      question1: "Paul tells us to do three things. Can you remember all three?",
      question1Hint: "Rejoice (be glad), pray, and give thanks.",
      question2: "We can talk to God anytime, not just at dinner. When could each of us pray tomorrow: in the car, at school or work, before bed?",
      prayer: [
        "God, I am glad You are mine.",
        "I can talk to You anytime.",
        "Thank You for today,",
        "the good parts and the hard parts. Amen."
      ]
    }
  },

  {
    id: 5,
    title: "Work Hard, Never Tire of Doing Good",
    reference: "2 Thessalonians 3:6–13",
    passage: [
      { ref: "3:6", text: "In the name of the Lord Jesus Christ, we command you, brothers and sisters, to keep away from every believer who is idle and disruptive and does not live according to the teaching you received from us." },
      { ref: "3:7", text: "For you yourselves know how you ought to follow our example. We were not idle when we were with you," },
      { ref: "3:8", text: "nor did we eat anyone’s food without paying for it. On the contrary, we worked night and day, laboring and toiling so that we would not be a burden to any of you." },
      { ref: "3:9", text: "We did this, not because we do not have the right to such help, but in order to offer ourselves as a model for you to imitate." },
      { ref: "3:10", text: "For even when we were with you, we gave you this rule: “The one who is unwilling to work shall not eat.”" },
      { ref: "3:11", text: "We hear that some among you are idle and disruptive. They are not busy; they are busybodies." },
      { ref: "3:12", text: "Such people we command and urge in the Lord Jesus Christ to settle down and earn the food they eat." },
      { ref: "3:13", text: "And as for you, brothers and sisters, never tire of doing what is good." }
    ],
    personal: {
      context: "Some believers in Thessalonica had stopped working, possibly unsettled by confusion about Christ’s return (2:1–2). They were living off the generosity of others and meddling in everyone’s business. Paul had modeled the opposite: he worked “night and day” to support himself, even though he had a right to be supported. Here he tells the church to deal with idleness. Its purpose is to restore, not to shame (3:14–15: “do not regard them as an enemy, but warn them as you would a fellow believer”).",
      grace: "Even this hard command comes “in the name of the Lord Jesus Christ.” Work is not a curse to escape. It reflects a working God (Genesis 2:15) and loves your neighbor by not being a burden. How has grace freed you to work for Christ rather than for approval, status or fear?",
      warning: "Notice the wordplay: “They are not busy; they are busybodies.” Idleness is not just doing nothing. It fills the gap with meddling. Where is there idleness in you: dodging hard responsibilities, going passive at home, or staying busy in ways that look productive but avoid what matters? (Paul is addressing the unwilling, not the unable.)",
      reality: {
        dad: "It’s easy to work hard at a job and go passive at home. “Never tire of doing what is good” covers dishes, bath time, a 3 a.m. feeding, and leading devotions when you’re worn out. Where is your wife carrying a load you’ve stepped back from? What do your kids learn about work from how you talk about yours?",
        mom: "“Never tire of doing what is good” is written for people who are tired. Much of a mom’s work is unseen and never finished: meals, laundry, a 3 a.m. feeding, the hundredth reminder. Are you serving out of love for Christ, or out of resentment or a need to be noticed? Where do you need to ask your husband for help instead of carrying it silently? What do your kids learn about work from how you talk about yours?"
      },
      prayerStarter: "Lord Jesus, I don’t want to be idle or a burden. Give me strength to keep doing good when I’m tired…"
    },
    family: {
      bigIdea: "Some people in the church stopped working, let everyone else take care of them, and started causing trouble. Paul said: Work hard like we did, help carry the load, and never get tired of doing good.",
      keyVerses: ["3:7", "3:8", "3:10", "3:13"],
      listeningWord: "WORK",
      listenFor: ["work", "worked"],
      listenAction: "Pretend to hammer and tap the button every time you hear “WORK” or “WORKED”!",
      question1: "Did Paul make other people do his work for him, or did he work hard himself?",
      question1Hint: "He worked night and day so he wouldn’t be a burden to anyone (v. 8).",
      question2: "Everyone in our family has jobs that help. What’s one job each of us can do tomorrow without being asked?",
      prayer: [
        "God, thank You for good work to do.",
        "Help me work hard",
        "and help my family without complaining.",
        "Don’t let me get tired of doing good. Amen."
      ]
    }
  },

  {
    id: 6,
    title: "Chosen by Love, Kept by Covenant",
    reference: "Deuteronomy 7:6–9",
    passage: [
      { ref: "7:6", text: "For you are a people holy to the LORD your God. The LORD your God has chosen you out of all the peoples on the face of the earth to be his people, his treasured possession." },
      { ref: "7:7", text: "The LORD did not set his affection on you and choose you because you were more numerous than other peoples, for you were the fewest of all peoples." },
      { ref: "7:8", text: "But it was because the LORD loved you and kept the oath he swore to your ancestors that he brought you out with a mighty hand and redeemed you from the land of slavery, from the power of Pharaoh king of Egypt." },
      { ref: "7:9", text: "Know therefore that the LORD your God is God; he is the faithful God, keeping his covenant of love to a thousand generations of those who love him and keep his commandments." }
    ],
    personal: {
      context: "Moses is preaching to Israel on the plains of Moab, just before they enter the promised land. Right before this he commands them not to intermarry or make covenants with the idolatrous nations (7:1–5). Why should they be different? Because of who they are: a people holy to the LORD, chosen not for size or merit but because He loved them and kept His oath to Abraham, Isaac and Jacob. Peter applies the same language to the church: “a chosen people… God’s special possession” (1 Peter 2:9).",
      grace: "Verses 7–8 are almost circular on purpose: the LORD loved you because He loved you. His love is not a response to your worthiness. And He is “the faithful God, keeping his covenant of love to a thousand generations.” What does it mean that God’s love is rooted in His own character and promises, not your performance?",
      warning: "Israel’s danger was to read being chosen as proof of their superiority. Verse 7 shuts that down: “you were the fewest of all peoples.” Where do you take credit for blessings God gave? Where has spiritual pride crept in, so that you look down on people who don’t yet know Him?",
      reality: {
        dad: "“A thousand generations of those who love him and keep his commandments.” Your faithfulness is one of the ways faith gets handed down, though it can’t save your children for them. What are you handing down? Picture your kids at your age. What do you want them to remember about how their father loved God and their mother?",
        mom: "“A thousand generations of those who love him and keep his commandments.” Timothy’s faith lived first in his grandmother Lois and his mother Eunice (2 Timothy 1:5). Your faithfulness is one of the ways faith gets handed down, though it can’t save your children for them. What are you handing down? Picture your kids at your age. What do you want them to remember about how their mother loved God and their father?"
      },
      prayerStarter: "Faithful God, You chose me not because I was impressive, but because You love me…"
    },
    family: {
      bigIdea: "Moses reminded God’s people: God didn’t pick you because you were big or strong. You were tiny! He chose you because He loves you, and He keeps His promises for a thousand generations: to you, your kids, their kids, and on and on!",
      keyVerses: ["7:7", "7:8", "7:9"],
      listeningWord: "LOVE",
      listenFor: ["love", "loved"],
      listenAction: "Give yourself a big hug and tap the button every time you hear “LOVE” or “LOVED”!",
      question1: "Did God choose His people because they were big and strong? Why did He choose them?",
      question1Hint: "No, they were the smallest! He chose them because He loved them (v. 7–8).",
      question2: "God always keeps His promises. What’s one promise we can make to each other as a family and keep this week?",
      prayer: [
        "God, You chose me because You love me,",
        "not because I’m big or strong.",
        "You always keep Your promises.",
        "Help me love You back. Amen."
      ]
    }
  },

  {
    id: 7,
    title: "New Mercies Every Morning",
    reference: "Lamentations 1:18–20; 3:22–23",
    passage: [
      { ref: "1:18", text: "“The LORD is righteous, yet I rebelled against his command. Listen, all you peoples; look on my suffering. My young men and young women have gone into exile." },
      { ref: "1:19", text: "“I called to my allies but they betrayed me. My priests and my elders perished in the city while they searched for food to keep themselves alive." },
      { ref: "1:20", text: "“See, LORD, how distressed I am! I am in torment within, and in my heart I am disturbed, for I have been most rebellious. Outside, the sword bereaves; inside, there is only death." },
      { ref: "3:22", text: "Because of the LORD’s great love we are not consumed, for his compassions never fail." },
      { ref: "3:23", text: "They are new every morning; great is your faithfulness." }
    ],
    personal: {
      context: "Lamentations is five poems mourning Jerusalem’s destruction by Babylon in 586 BC, traditionally attributed to Jeremiah. In chapter 1 the city speaks as a grieving woman, and her lament is honest: “The LORD is righteous, yet I rebelled.” The judgment was not random. It was the consequence the covenant had warned about for generations. Then, at the very center of the book (3:21–24), the poet calls to mind a hope that holds even in the ruins.",
      grace: "“Because of the LORD’s great love we are not consumed.” The word for love is hesed, God’s steadfast covenant love, the same “covenant of love” from Deuteronomy 7:9 yesterday. His compassions never fail; they are new every morning. What does it mean that God’s faithfulness is greater than our rebellion, and that the poet finds this while still sitting in the rubble?",
      warning: "“I have been most rebellious” (1:20). Jerusalem’s ruin came after long, stubborn sin and ignored warnings. Not every hardship is punishment (see John 9:1–3). But ask honestly: where is unrepented sin costing you, or the people around you? Are there warnings you’ve been brushing off?",
      reality: {
        dad: "“New every morning.” You get a fresh start each day as a husband and father. Yesterday still matters, but God’s mercy is renewed. Is there a failure from this week (a lost temper, distance, neglect) that you need to confess to God, and to your wife or a child, and then walk forward in mercy instead of shame?",
        mom: "“New every morning.” You get a fresh start each day as a wife and mother. Yesterday still matters, but God’s mercy is renewed. Is there a failure from this week (a sharp tone, impatience, comparison, shutting down) that you need to confess to God, and to your husband or a child, and then walk forward in mercy instead of mom guilt?"
      },
      prayerStarter: "LORD, You are righteous, and I have rebelled. Thank You that Your mercies are new this morning…"
    },
    family: {
      bigIdea: "God’s people disobeyed Him for a long, long time, and finally their city was destroyed. A man who loved God (probably the prophet Jeremiah) was very sad and admitted, “We disobeyed.” But he remembered something wonderful: God’s love never runs out, and His kindness is brand new every morning.",
      keyVerses: ["1:18", "3:22", "3:23"],
      listeningWord: "LORD",
      listenFor: ["lord"],
      listenAction: "Raise both hands and tap the button every time you hear “LORD”!",
      question1: "The people in this story disobeyed God. When they were sad, what did they remember about God’s love?",
      question1Hint: "His love never fails, and His mercies are new every morning (3:22–23).",
      question2: "Every morning God gives us a fresh start. Is there anything from today we need to say sorry for, so tomorrow can start fresh?",
      prayer: [
        "God, sometimes I disobey.",
        "I’m sorry.",
        "Thank You that Your love never runs out.",
        "Your kindness is new every morning. Amen."
      ]
    }
  }
];
