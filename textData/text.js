const introSequenceTxt = [
    "Thanks for visiting my Portfolio Site",
    "This site was built with vanilla JS with no external libraries.\n It is containerized with Docker and is served by nginx running on a small 3-manager-node swarm.",
    "Right now the whole screen is a canvas element. I am drawing all of the graphics using a \"composite\" design pattern to simplify development - it basically allows you to treat simple components and composites (combinations) of simple components very similarly, as long as they know how to draw themselves -- It lets you easily mix, match, and combine elements. I am using the same design pattern to design and control the more \"standard\" portion of this site as well (bottom left door).", 
    "I also use a decorator design pattern to allow elements to be displayed with a delay, to scroll text, and to make text dissapear after a set amount of time. A strategy design pattern is used to simplify and abstract the animation of the sprite",
    "Anyway, control the avatar using W,S,A,D or the arrow keys to explore. You can also go to a generic version of this site by visiting the bottom left door. Thanks for visiting \u{1F531}"
]

const bio = `I graduated from the United States Naval Academy in 2012 and served as a Submarine Office for 5 years. During that time, I ran a nuclear power plant, became qualified as Engineer of an S8G nuclear reacotr, and drove the ship as the Officer of the Deck.

 I resigned my comission in 2017 to pursue software engineering. Since then, I have completed a M.S. in Computer and Electrical Engineering from the University of Delaware, and completed a full stack web development program through Flatiron School, where I taught as an instructor for that program while I finished my MS.

 I completed my Masters degree with a 4.0 and invitation to Phi Kappa Phi. I am interesed in continous learning, and continue to learn new skills and study Computer Science topics, specifically data structures, algorithms, and design patterns.`