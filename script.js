// Story passages with images - One Night, Endless Thoughts
const story = {
    titleScreen: {
        time: "",
        isTitle: true,
        text: [],
        choices: [
            { text: "[[Begin the Night]]", target: "start" }
        ]
    },

    start: {
        time: "3:47 AM",
        text: [
            "You are looking at the ceiling.",
            "It is darker than yesterday.",
            "You have been lying here for hours.",
            "The world outside has been silenced by the lockdown."
        ],
        image: "ceiling_clock_sketch_1768278176875.png",
        choices: [
            { text: "[[Close your eyes]]", target: "tryingSleep" },
            { text: "[[Check your phone]]", target: "phone" },
            { text: "[[Sit up]]", target: "sitUp" }
        ]
    },

    tryingSleep: {
        time: "3:51 AM",
        text: [
            "You tell yourself that you need to sleep.",
            "But your mind is running faster than a train.",
            "If you sleep now, tomorrow will come sooner.",
            "You are not ready for tomorrow."
        ],
        image: "boy_room_sketch_1767477937171.png",
        choices: [
            { text: "[[Try harder]]", target: "tryingSleep2" },
            { text: "[[Give up]]", target: "giveUp" }
        ]
    },

    tryingSleep2: {
        time: "4:02 AM",
        text: [
            "Nothing is working.",
            "The silence is heavier than lead.",
            "You remember what your mother said.",
            "She told you that everything would be okay.",
            "But she looked worried when she said it."
        ],
        image: "ceiling_clock_sketch_1768278176875.png",
        choices: [
            { text: "[[Open your eyes]]", target: "giveUp" }
        ]
    },

    sitUp: {
        time: "3:55 AM",
        text: [
            "You are sitting on the edge of the bed.",
            "The floor feels cold.",
            "You should have cleaned your room days ago.",
            "But the energy has been drained from you."
        ],
        image: "messy_room_light_sketch_1768278192343.png",
        choices: [
            { text: "[[Turn on the light]]", target: "lightOn" },
            { text: "[[Stay in the dark]]", target: "darkRoom" }
        ]
    },

    giveUp: {
        time: "4:08 AM",
        text: [
            "The battle for sleep has been lost.",
            "You are the only one awake in this house.",
            "It feels like you are the loneliest person on Earth.",
            "This is the endless night."
        ],
        image: "window_night_sketch_1767477980136.png",
        choices: [
            { text: "[[Turn on the light]]", target: "lightOn" },
            { text: "[[Look out the window]]", target: "windowWatching" }
        ]
    },

    windowWatching: {
        time: "4:12 AM",
        text: [
            "The street is empty.",
            "It is quieter than it used to be.",
            "A car passes by.",
            "Where are they going?",
            "You wonder if they are escaping something too."
        ],
        image: "window_night_sketch_1767477980136.png",
        choices: [
            { text: "[[Go back to bed]]", target: "start" },
            { text: "[[Think specific thoughts]]", target: "overthinking1" }
        ]
    },

    phone: {
        time: "3:49 AM",
        text: [
            "The screen is the brightest thing in the room.",
            "Zero new notifications.",
            "You have been forgotten.",
            "Or maybe everyone else is sleeping like normal people."
        ],
        image: "phone_glow_sketch_1767477951933.png",
        choices: [
            { text: "[[Look at old photos]]", target: "photos" },
            { text: "[[Check messages]]", target: "thinkingMessages" },
            { text: "[[Put it away]]", target: "phoneAway" }
        ]
    },

    photos: {
        time: "3:55 AM",
        text: [
            "2019.",
            "You look much happier than now.",
            "You were surrounded by friends.",
            "They said they would always be there.",
            "Have they kept their promise?"
        ],
        image: "old_photos_sketch_1767477964762.png",
        choices: [
            { text: "[[Scroll further]]", target: "photosDeep" },
            { text: "[[Stop looking]]", target: "phoneAway" }
        ]
    },

    photosDeep: {
        time: "4:00 AM",
        text: [
            "Graduation photos that never happened.",
            "Trips that were cancelled.",
            "Lives that were interrupted.",
            "You feel like you have been robbed.",
            "This is the worst feeling of all."
        ],
        image: "old_photos_sketch_1767477964762.png",
        choices: [
            { text: "[[Get angry]]", target: "anger" },
            { text: "[[Get sad]]", target: "crying" }
        ]
    },

    thinkingMessages: {
        time: "3:58 AM",
        text: [
            "You read the last conversation.",
            "It was sent three weeks ago.",
            "\"We should hang out soon,\" they said.",
            "But nothing has happened since then.",
            "Friendships are dissolving into thin air."
        ],
        image: "unanswered_messages_1767494012032.png",
        choices: [
            { text: "[[Type a message]]", target: "typeMessage" },
            { text: "[[Close the app]]", target: "phoneAway" }
        ]
    },

    typeMessage: {
        time: "4:01 AM",
        text: [
            "You start typing: \"Are you awake?\"",
            "You delete it.",
            "You type: \"I miss you.\"",
            "You delete that too.",
            "Whatever you say might sound desperate.",
            "You don't want to be the desperate one."
        ],
        image: "phone_glow_sketch_1767477951933.png",
        choices: [
            { text: "[[Send \"Hey\"]]", target: "sentMessage" },
            { text: "[[Don't send anything]]", target: "phoneAway" }
        ]
    },

    sentMessage: {
        time: "4:03 AM",
        text: [
            "Sent.",
            "Now you are waiting.",
            "The minutes are stretching longer.",
            "You are checking the screen every second.",
            "Why did you do that?"
        ],
        image: "phone_glow_sketch_1767477951933.png",
        choices: [
            { text: "[[Wait]]", target: "waitingMessage" },
            { text: "[[Regret it]]", target: "anxiety" }
        ]
    },

    anxiety: {
        time: "4:05 AM",
        text: [
            "You feel the panic rising.",
            "What if they think you are weird?",
            "What if they screenshot it and laugh?",
            "Your heart is beating faster than normal.",
            "This was a terrible mistake."
        ],
        image: "anxiety_phone_sketch_1768278733117.png",
        choices: [
            { text: "[[Delete the message]]", target: "phoneAway" },
            { text: "[[Wait anyway]]", target: "waitingMessage" }
        ]
    },

    waitingMessage: {
        time: "4:20 AM",
        text: [
            "Still nothing.",
            "They might be asleep.",
            "Or they might be ignoring you.",
            "You will never know.",
            "This uncertainty is killing you."
        ],
        image: "unanswered_messages_1767494012032.png",
        choices: [
            { text: "[[Put the phone down]]", target: "phoneAway" }
        ]
    },

    overthinking1: {
        time: "4:15 AM",
        text: [
            "Your mind is a mess of wires.",
            "You are thinking about your future.",
            "Or the lack of it.",
            "You should be studying right now.",
            "But the books are gathering dust."
        ],
        image: "abstract_mind_sketch_1768278228282.png",
        choices: [
            { text: "[[Think about school]]", target: "schoolStress" },
            { text: "[[Think about yourself]]", target: "existential" }
        ]
    },

    schoolStress: {
        time: "4:22 AM",
        text: [
            "The notebook is open on your desk.",
            "The pages are blank.",
            "Just like your motivation.",
            "You have been told to choose a career.",
            "\"Decide what you want to be,\" they said.",
            "But you don't even know who you are."
        ],
        image: "blank_notebook_sketch_1768278270002.png",
        choices: [
            { text: "[[Feel the pressure]]", target: "pressure" },
            { text: "[[Ignore it]]", target: "procrastination" }
        ]
    },

    procrastination: {
        time: "4:26 AM",
        text: [
            "You decide to ignore it.",
            "The responsibilities can wait.",
            "You scroll through social media instead.",
            "Other people's lives look more interesting than yours.",
            "This must be the easiest escape."
        ],
        image: "procrastination_sketch_1768278718843.png",
        choices: [
            { text: "[[Keep scrolling]]", target: "emptiness" },
            { text: "[[Feel guilty]]", target: "pressure" }
        ]
    },

    pressure: {
        time: "4:30 AM",
        text: [
            "The pressure is crushing.",
            "Money is tight.",
            "Your parents are whispering in the kitchen.",
            "Debts are being discussed.",
            "You feel like a burden."
        ],
        image: "financial_stress_1767493998184.png",
        choices: [
            { text: "[[Cry]]", target: "crying" },
            { text: "[[Get angry]]", target: "anger" }
        ]
    },

    crying: {
        time: "4:35 AM",
        text: [
            "Tears are falling.",
            "You have held them back for too long.",
            "You are crying because the world is unfair.",
            "You are crying because you are tired.",
            "It is the most honest thing you have done all night."
        ],
        image: "crying_alone_1767493984802.png",
        choices: [
            { text: "[[Let it flow]]", target: "afterCrying" }
        ]
    },

    afterCrying: {
        time: "4:45 AM",
        text: [
            "Your eyes are stinging.",
            "But your chest feels lighter.",
            "Maybe crying was necessary.",
            "It is okay not to be okay.",
            "At least that is what you tell yourself."
        ],
        image: "crying_alone_1767493984802.png",
        choices: [
            { text: "[[Seek comfort]]", target: "refuge" },
            { text: "[[Stare at the wall]]", target: "emptiness" }
        ]
    },

    anger: {
        time: "4:32 AM",
        text: [
            "You clench your fist.",
            "You want to hit something.",
            "You are angry at the virus.",
            "You are angry at the time you have lost.",
            "It is not fair.",
            "It should have been different."
        ],
        image: "anger_clenched_fist_sketch_1768278206101.png",
        choices: [
            { text: "[[Breathe]]", target: "calmDown" },
            { text: "[[Stay furious]]", target: "endingMad" }
        ]
    },

    calmDown: {
        time: "4:40 AM",
        text: [
            "You take a deep breath.",
            "The anger is subsiding.",
            "It leaves you feeling empty.",
            "But calm.",
            "Peace is better than war."
        ],
        image: "boy_room_sketch_1767477937171.png",
        choices: [
            { text: "[[Try to sleep]]", target: "endingSleep" },
            { text: "[[Stay awake]]", target: "endingAwake" }
        ]
    },

    lightOn: {
        time: "4:15 AM",
        text: [
            "The light is flooding the room.",
            "It reveals the mess you live in.",
            "Clothes are scattered on the floor.",
            "An empty life in an empty room.",
            "This is your kingdom."
        ],
        image: "messy_room_light_sketch_1768278192343.png",
        choices: [
            { text: "[[Play games]]", target: "gaming" },
            { text: "[[Turn it off]]", target: "darkRoom" }
        ]
    },

    darkRoom: {
        time: "4:18 AM",
        text: [
            "The darkness is welcoming.",
            "It hides your face.",
            "It hides your shame.",
            "You are safe here.",
            "Nothing can hurt you in the dark."
        ],
        image: "window_night_sketch_1767477980136.png",
        choices: [
            { text: "[[Listen to music]]", target: "music" },
            { text: "[[Reflect]]", target: "existential" }
        ]
    },

    gaming: {
        time: "4:30 AM",
        text: [
            "The computer is humming.",
            "You are escaping into a virtual world.",
            "Here, you are powerful.",
            "Here, you have control.",
            "But it is just an illusion."
        ],
        image: "computer_gaming_sketch_1767478009700.png",
        choices: [
            { text: "[[Play more]]", target: "gamingDeep" },
            { text: "[[Quit game]]", target: "emptiness" }
        ]
    },

    gamingDeep: {
        time: "5:20 AM",
        text: [
            "Your eyes are burning.",
            "The sun is rising outside.",
            "You have spent the whole night killing pixels.",
            "Was it worth it?",
            "You don't know anymore."
        ],
        image: "computer_gaming_sketch_1767478009700.png",
        choices: [
            { text: "[[Finish]]", target: "endingDawn" }
        ]
    },

    music: {
        time: "4:25 AM",
        text: [
            "You put your headphones on.",
            "The music is louder than your thoughts.",
            "It is the only thing that understands you.",
            "This song has been played a thousand times.",
            "But it still hurts."
        ],
        image: "headphones_music_sketch_1767477995231.png",
        choices: [
            { text: "[[Close eyes]]", target: "musicDeep" },
            { text: "[[Take them off]]", target: "emptiness" }
        ]
    },

    musicDeep: {
        time: "4:50 AM",
        text: [
            "You are floating in the melody.",
            "Memories are flooding back.",
            "Faces you haven't seen in months.",
            "Voices you haven't heard.",
            "The music is holding you."
        ],
        image: "headphones_music_sketch_1767477995231.png",
        choices: [
            { text: "[[Keep listening]]", target: "endingMusic" }
        ]
    },

    existential: {
        time: "4:45 AM",
        text: [
            "You look at yourself in the mirror.",
            "Who is that person?",
            "You look older than you feel.",
            "You are asking yourself big questions.",
            "\"What am I doing?\"",
            "\"Where am I going?\""
        ],
        image: "mirror_reflection_sketch_1768278256128.png",
        choices: [
            { text: "[[Stare longer]]", target: "endingExistential" },
            { text: "[[Look away]]", target: "emptiness" }
        ]
    },

    emptiness: {
        time: "4:55 AM",
        text: [
            "There is nothing left to do.",
            "You are just existing.",
            "Waiting.",
            "Breathing.",
            "Maybe that is enough for tonight."
        ],
        image: "boy_room_sketch_1767477937171.png",
        choices: [
            { text: "[[Accept it]]", target: "endingEmpty" }
        ]
    },

    refuge: {
        time: "5:05 AM",
        text: [
            "You find comfort in the small things.",
            "A familiar show.",
            "A warm blanket.",
            "The fact that you are still here.",
            "You are building a fortress against the sadness."
        ],
        image: "familiar_comfort_1767494026532.png",
        choices: [
            { text: "[[Stay here]]", target: "endingRefuge" }
        ]
    },

    phoneAway: {
        time: "4:10 AM",
        text: [
            "The phone is face down.",
            "You are disconnected.",
            "It feels better this way.",
            "Real life is here, in this room."
        ],
        image: "messy_room_light_sketch_1768278192343.png",
        choices: [
            { text: "[[Think]]", target: "overthinking1" },
            { text: "[[Try to sleep]]", target: "tryingSleep" }
        ]
    },

    // ENDINGS
    endingSleep: {
        time: "5:15 AM",
        text: [
            "You are lying down.",
            "Your breathing is slowing.",
            "The demons have been silenced.",
            "Sleep is finally coming.",
            "Goodnight."
        ],
        image: "sleeping_face_sketch_1768278242796.png",
        choices: []
    },

    endingAwake: {
        time: "6:00 AM",
        text: [
            "The birds are singing.",
            "The night has ended.",
            "You did not sleep.",
            "But you survived.",
            "The sun is rising, and you are still here."
        ],
        image: "window_night_sketch_1767477980136.png",
        choices: []
    },

    endingMad: {
        time: "5:30 AM",
        text: [
            "The anger is still there.",
            "It is a fire in your chest.",
            "You will carry this fire into the day.",
            "Maybe you can use it to change things.",
            "Or maybe it will just burn you."
        ],
        image: "anger_clenched_fist_sketch_1768278206101.png",
        choices: []
    },

    endingDawn: {
        time: "5:45 AM",
        text: [
            "The game is over.",
            "Reality is back.",
            "The blue light of dawn enters the room.",
            "Another day has begun.",
            "You will try again tonight."
        ],
        image: "window_night_sketch_1767477980136.png",
        choices: []
    },

    endingMusic: {
        time: "5:22 AM",
        text: [
            "The playlist ends.",
            "The silence is not so scary now.",
            "You feel understood.",
            "Music is the best medicine.",
            "You are ready for the morning."
        ],
        image: "headphones_music_sketch_1767477995231.png",
        choices: []
    },

    endingExistential: {
        time: "5:40 AM",
        text: [
            "You are still looking at yourself.",
            "You don't have the answers.",
            "Maybe nobody does.",
            "You are small in a big universe.",
            "But you matter.",
            "At least to yourself."
        ],
        image: "mirror_reflection_sketch_1768278256128.png",
        choices: []
    },

    endingEmpty: {
        time: "5:10 AM",
        text: [
            "Empty is not bad.",
            "Empty is calm.",
            "You are a vessel waiting to be filled.",
            "Just breathe.",
            "That is enough."
        ],
        image: "boy_room_sketch_1767477937171.png",
        choices: []
    },

    endingRefuge: {
        time: "5:50 AM",
        text: [
            "You are safe.",
            "The world is crazy, but your room is yours.",
            "You have found your peace.",
            "Hold onto it.",
            "It will get better."
        ],
        image: "familiar_comfort_1767494026532.png",
        choices: []
    }
};

// Current passage
let currentPassage = "titleScreen";

// Create fireflies
function createFireflies() {
    const container = document.getElementById('fireflies');
    for (let i = 0; i < 40; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animationDelay = Math.random() * 12 + 's';
        firefly.style.animationDuration = (Math.random() * 6 + 8) + 's';
        container.appendChild(firefly);
    }
}

// Render passage with new left-right layout
function renderPassage(passageName) {
    const passage = story[passageName];
    const container = document.getElementById('passage');

    container.innerHTML = '';
    container.style.opacity = '0';

    setTimeout(() => {
        // Title screen
        if (passage.isTitle) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'title-screen';

            const title = document.createElement('h1');
            title.textContent = 'The Endless Night';
            titleDiv.appendChild(title);

            const subtitle = document.createElement('div');
            subtitle.className = 'subtitle';
            subtitle.textContent = 'Sleepless in 2021 — A story about insomnia, isolation, and lost time';
            titleDiv.appendChild(subtitle);

            passage.choices.forEach((choice, index) => {
                const link = document.createElement('a');
                link.className = 'choice';
                link.textContent = choice.text;
                link.style.animationDelay = '2s';
                link.href = '#';
                link.onclick = (e) => {
                    e.preventDefault();
                    currentPassage = choice.target;
                    renderPassage(choice.target);
                };
                titleDiv.appendChild(link);
            });

            container.appendChild(titleDiv);
        } else {
            // Create layout container
            const layoutDiv = document.createElement('div');
            layoutDiv.className = 'passage-layout';

            // Image section (left)
            // Always render image section if possible, fallback or specific checks can be added
            // Since we ensured all nodes have images, we can assume passage.image exists.
            if (passage.image) {
                const imageSection = document.createElement('div');
                imageSection.className = 'passage-image-section';

                const imgContainer = document.createElement('div');
                imgContainer.className = 'image-container';
                const img = document.createElement('img');
                img.src = passage.image;
                img.alt = '';
                imgContainer.appendChild(img);
                imageSection.appendChild(imgContainer);

                layoutDiv.appendChild(imageSection);
            }

            // Content section (right)
            const contentDiv = document.createElement('div');
            contentDiv.className = 'passage-content';

            // Time
            if (passage.time) {
                const timeEl = document.createElement('div');
                timeEl.className = 'time';
                timeEl.textContent = passage.time;
                contentDiv.appendChild(timeEl);
            }

            // Text
            passage.text.forEach((line, index) => {
                const p = document.createElement('p');
                p.textContent = line;
                p.style.animationDelay = (index * 0.3) + 's';
                contentDiv.appendChild(p);
            });

            // Silence
            if (passage.choices.length > 0) {
                const silence = document.createElement('div');
                silence.className = 'silence';
                contentDiv.appendChild(silence);
            }

            // Choices
            passage.choices.forEach((choice, index) => {
                const link = document.createElement('a');
                link.className = 'choice';
                link.textContent = choice.text;
                link.style.animationDelay = ((passage.text.length * 0.3) + (index * 0.2) + 0.5) + 's';
                link.href = '#';
                link.onclick = (e) => {
                    e.preventDefault();
                    currentPassage = choice.target;
                    renderPassage(choice.target);
                };
                contentDiv.appendChild(link);
            });

            // Ending marker with restart button
            if (passage.choices.length === 0) {
                const endingDiv = document.createElement('div');
                endingDiv.className = 'ending-section';

                const endMarker = document.createElement('div');
                endMarker.className = 'ending fade-slow';
                endMarker.textContent = '— THE END —';
                endingDiv.appendChild(endMarker);

                const restartBtn = document.createElement('a');
                restartBtn.className = 'choice restart-btn';
                restartBtn.textContent = '[[Start Over]]';
                restartBtn.style.animationDelay = '3s';
                restartBtn.href = '#';
                restartBtn.onclick = (e) => {
                    e.preventDefault();
                    currentPassage = 'titleScreen';
                    renderPassage('titleScreen');
                };
                endingDiv.appendChild(restartBtn);

                contentDiv.appendChild(endingDiv);
            }

            layoutDiv.appendChild(contentDiv);
            container.appendChild(layoutDiv);
        }

        container.style.opacity = '1';
    }, 300);
}

// Initialize
createFireflies();
renderPassage(currentPassage);
