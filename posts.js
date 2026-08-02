// ─────────────────────────────────────────────────────────────
//  AVALANCH-E — POSTS
//
//  To add a new post: copy one of the blocks below, edit it,
//  and paste it at the top of the POSTS array (order doesn't
//  matter — the site sorts by dateSort automatically).
//
//  Fields:
//    id        — unique URL slug, lowercase, hyphens only
//    dateSort  — 'YYYY-MM-DD' (controls sort order, always use this format)
//    dateLabel — how the date is displayed, e.g. 'March 14, 2026'
//    title     — post title
//    excerpt   — one-line summary shown on the home page
//    paragraphs— array of strings, one per paragraph
//
//  To edit an existing post, just change the text in place.
//  To delete a post, delete its whole { ... } block.
//
//  Straight quotes (') inside text must be escaped like this: \'
//  Regular double quotes (") inside text are fine as-is.
// ─────────────────────────────────────────────────────────────

const POSTS = [
  { id: 'cool-memories-i', dateSort: '2026-03-14', dateLabel: 'March 14, 2026',
    title: 'Cool Memories I',
    excerpt: 'Fragments on simulation, seduction, and the death of the real.',
    paragraphs: [
      'The obscenity of our age is not that everything is hidden, but that everything is exposed — the pornography of total visibility, where even the secret has been made to perform its secrecy for an audience.',
      'We were promised liberation and were given transparency instead, which is a much crueler thing. A secret can be kept. A performance of having nothing to hide can never rest.',
      'Truth has not been suppressed; it has been multiplied past the point of use, like a currency printed until it buys nothing. Hyperinflation of the fact.',
      'Seduction is the only intelligence left to us. Explanation is for those who have already lost.',
      'The map preceded the territory a long time ago. What we now mistake for reality is the territory\'s attempt to resemble its own map, badly, and gratefully.'
    ]
  },
  { id: 'on-authenticity', dateSort: '2026-01-03', dateLabel: 'January 3, 2026',
    title: 'Against Authenticity',
    excerpt: 'The self that must announce itself as real has already lost the argument.',
    paragraphs: [
      'Authenticity is the last mask that claims not to be one. Every other mask admits its status; this one insists it is the face.',
      'To be told "just be yourself" is to receive an order disguised as a permission. Try refusing it and discover how little permission was actually on offer.',
      'The confessional mode — the diary, the personal essay, the deathbed sincerity performed at thirty — is not the opposite of performance. It is performance that has learned to despise its own name.',
      'I trust the liar who knows he is lying more than the sincere man who has simply automated his sincerity. At least the liar is still awake.'
    ]
  },
  { id: 'on-the-death-of-god-and-other-good-news', dateSort: '2025-11-02', dateLabel: 'November 2, 2025',
    title: 'On the Death of God, and Other Good News',
    excerpt: 'We did not kill him. We simply stopped needing an alibi.',
    paragraphs: [
      'God did not die of an argument. No god ever has. He died of irrelevance, which is a much slower and more humiliating death than the one philosophy likes to stage for him.',
      'What frightens the moralist is not that god is dead but that his absence changed nothing on Tuesday morning. The bakery opened. The trains ran late. Meaning did not evacuate the premises — it simply stopped waiting for a landlord.',
      'Those who mourn the death of god are usually mourning the death of an excuse: the excuse not to have invented their own values, their own severities, their own reasons to rise before noon.',
      'I do not ask you to become an atheist. I ask you to notice how much work the word "sin" was doing for you, and whether you are willing to do that work yourself now.'
    ]
  },
  { id: 'on-cruelty-as-a-form-of-honesty', dateSort: '2025-07-19', dateLabel: 'July 19, 2025',
    title: 'On Cruelty as a Form of Honesty',
    excerpt: 'Kindness is often just cowardice with better public relations.',
    paragraphs: [
      'Every ethics of niceness is secretly an ethics of avoidance: better to withhold the true sentence than risk the discomfort of having said it.',
      'I do not recommend cruelty. I recommend noticing how much of what passes for kindness is simply the fear of consequence wearing a gentler word.',
      'The cruelest man I ever met told the truth so plainly that people mistook his honesty for malice, because they had never encountered the former unaccompanied by flattery and assumed it must be the latter.',
      'A compliment costs nothing and is therefore worth exactly that. Save your praise for what has actually earned the risk of your disapproval.'
    ]
  },
  { id: 'notes-on-boredom-as-revolt', dateSort: '2025-04-08', dateLabel: 'April 8, 2025',
    title: 'Notes on Boredom as Revolt',
    excerpt: 'The bored man is the last person the algorithm cannot reach.',
    paragraphs: [
      'Boredom used to be a private failure. Now it is nearly an act of resistance — the one remaining state the feed cannot monetize, because it produces no click, no scroll, no data worth harvesting.',
      'To be entertained continuously is to be governed continuously. The tyrant\'s oldest trick was bread and circuses; ours does not even require the bread.',
      'I have come to suspect my own restlessness. Each time I reach for the device out of boredom, I am not fleeing an empty moment — I am fleeing the only moment in which I might have noticed something true about my life.',
      'Cultivate boredom the way a monk cultivates silence. It is not empty. It is simply not for sale yet.'
    ]
  },
  { id: 'aphorisms-against-the-thesis', dateSort: '2025-01-22', dateLabel: 'January 22, 2025',
    title: 'Aphorisms Against the Thesis',
    excerpt: 'A short defense of the fragment over the argument.',
    paragraphs: [
      'An argument tries to survive its critics. An aphorism does not care whether it survives — it has already said the thing and left the room.',
      'The academic paper is a coffin built slowly, with footnotes for nails. I would rather leave a wound than a monument.',
      'Systems are for those afraid of being caught contradicting themselves. I contradict myself constantly. It is the only sign I am still thinking rather than reciting.',
      'A truth that requires forty pages to defend was probably not true enough to begin with. Say the sharp thing. Let the reader do the forty pages, if they must.',
      'I do not build. I quarry. Let the masons come later, if they dare, and if the stone lets them.'
    ]
  },
  { id: 'on-the-obscenity-of-optimization', dateSort: '2024-09-30', dateLabel: 'September 30, 2024',
    title: 'On the Obscenity of Optimization',
    excerpt: 'The self as a spreadsheet is the final joke played on the soul.',
    paragraphs: [
      'We have arrived at a civilization that measures the sunrise in lumens and calls the accounting "mindfulness."',
      'Optimization is not a neutral method applied to a life; it is a metaphysics smuggled in through the back door of a to-do list, one that quietly decides in advance that the good life is the efficient one.',
      'The most radical thing available to a person today may be to waste an afternoon on purpose, contributing nothing, producing nothing, and to feel no need to caption it.',
      'Every habit tracker is a small confession booth with no priest and no absolution — only a streak, and the terror of breaking it.'
    ]
  },
  { id: 'on-forgetting-well', dateSort: '2022-12-30', dateLabel: 'December 30, 2022',
    title: '2022 Shitpost Supercut',
    excerpt: 'Memory is not a virtue. It is a habit we have failed to interrogate.',
    paragraphs: [
      'The next person who says they’re busy gets kicked in the urethra.',
      'Communities exist to do what cannot be done alone.',
      'We need porcupine scented candles.',
      'We run around getting our ass continually fucked by the posthuman entity that is capitalism and the only lube we have is shitty media.',
      'A fate worse than death: being greedy selfish or stupid.',
      'Sometimes we keep our heads in our asses because that feels like the safest place to put it.',
      'Ladies and germs, there will be no cthulhucene.',
      'If people could commune with the dead, they’d probably only hear one thing: “Fuck you.”.',
      'Just as Heidegger mistook Van Gogh’s shoes for those of a peasant woman, I wonder what I overlook in such a profound but hilarious way..',
      'As soon as you think you’re too good to learn from someone your education has ended.',
      'Life is the excrement of death :: Death is the excrement of life.',
      'Poverty is a wound. Wealth is a disease.',
      'If you have one foot in the past and one in the future you will end up pissing on today.',
      'I’ve spent a third of my life trying to figure out what the fuck is going on.',
      'Every fear conjured about totalitarian states has already been realized by private corporations',
      'Every element of contemporary life feels like an abject failure which rests upon the bodies of lost figures and abandoned dreams and compromises.',
      'Learning to love myself is one of the hardest things I’ve ever done.',
      'Any city that does not take care of its poor is an abject failure.',
      'Common sense is an enemy to philosophy because common sense is merely ideology without a subject.',
      'Is the right to(ward) self determination the ultimate right? What are the limits of self determination, especially in a shared space? In a world of limited configurations of material, are there not things one may aspire to do that are impossible? What are the limits of self determination?',
      'When one is willing to examine and potentially relinquish every thought, idea, belief, and conviction, that is when true philosophy occurs.',
      'Intersectionality is no longer interesting.',
      'I will write to express myself, not to be understood. Those who will understand me will understand me.',
      'People are their most dangerous when they have stopped learning.',
      'If we could speak, the dead would never understand us.',
      'Once I finally get off the couch it’s over for you mfs.',
      '‘Human rights’ is an elusive term for many reasons. Access to the internet was originally a scientific rarity, then a privilege, then a ubiquitous tool, and the internet has become so entangled in life that navigating many facets of the world without it seems grossly inconvenient. Applying for a job, submitting legal documents, etc. is now almost entirely dependent on the internet. So lack of access to the hybrid material and immaterial entity has social, political, and emotional repercussions. To what extent must a lack of access to something constitute a harm in order to generate discussions of rights to it? The right to internet access appears normative. But perhaps there is something underneath this plea. Perhaps there is a form, with internet as it’s content, that gives one an innate desire to pose an argument in the realm of rights. Others having a lack which can potentially mar their social, emotional, mental, physical, political, ideological health raises concerns. However, one could look at the abundance of maladies people face and argue that the addition of any entity with ameliorative potential makes it worthy of right-hood.',
      'People are worthy of having all of their needs and wants met given that they can do so in a healthy way.',
    ]
  }
];
