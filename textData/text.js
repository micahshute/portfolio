const introSequenceTxt = [
    "Thanks for visiting my Portfolio Site",
    "This site was built with vanilla JS with no external libraries.\n It is containerized with Docker and is served by nginx running on a small 3-manager-node swarm.",
    "Right now the whole screen is a canvas element. I am drawing all of the graphics using a \"composite\" design pattern to simplify development - it basically allows you to treat simple components and composites (combinations) of simple components very similarly, as long as they know how to draw themselves -- It lets you easily mix, match, and combine elements. I am using the same design pattern to design and control the more \"standard\" portion of this site as well (bottom left door).", 
    "I also use a decorator design pattern to allow elements to be displayed with a delay, to scroll text, and to make text dissapear after a set amount of time. A strategy design pattern is used to simplify and abstract the animation of the sprite",
    "Anyway, control the avatar using W,S,A,D or the arrow keys to explore. You can also go to a generic version of this site by visiting the bottom left door. Thanks for visiting \u{1F531}"
]

const bio = `I graduated from the United States Naval Academy in 2012 with a B.S. in Control Systems Engineering and served as a Submarine Officer for 5 years. During that time, I ran a nuclear power plant, became qualified as Engineer of an S8G nuclear reactor, and drove the ship as the Officer of the Deck.

 In 2017 I resigned my comission to pursue software engineering. Since then, I have completed a M.S. in Computer and Electrical Engineering from the University of Delaware, and completed a full stack web development program through Flatiron School, where I taught as an instructor for that program while I finished my MS.

 I completed my Masters degree with a 4.0 and invitation to Phi Kappa Phi. I am interesed in continous learning, and continue to learn new skills and study Computer Science topics, specifically data structures, algorithms, and design patterns.`


 const projects = [`
 - Rbimg: A ruby gem for reading/writing a PNG img as arrays of pixel data. This gem was written with no outside dependencies except for other self-written gems. I decided to do this while writing a Machine Learning gem and wanted to easily test my algorithms on the MNIST database and be able to visualize it. In the future I want to do some image encryption with AES and wanted an easy way to do that in Ruby.
 I wrote it by reading the PNG specifications from libpng.org and formatting the data accordingly. It generates the PNG signature, compresses/decompresses the data, creates/parses the reuired chunks, unfilters the data if necessary, and either creates the PNG file appropriately or transforms it into the array of numbers which represents its pixels.
 It was fun to do this from scratch and a good reminder that all files and complex data are just information formatted in a particular way. 
 This project served as a good basis for another small ruby gem I made which makes it easy to manipulate and visualize the MNIST database for Machine Learning purposes. 
 Check out the source code:`,
`https://github.com/micahshute/rbimg`,
`- Odins-Eye: A Ruby on Rails fullstack web application with JavaScript. It is a blogging/social app that allows users to write and publish blogs in Markdown (and code blocks with syntax highlighting), react to posts, comment on posts, reply to comments, follow other users, save posts for later viewing, and create/manager virtual classrooms
 See the soure code at: 
`,
`https://github.com/micahshute/odins-eye`,
`Or experience the hosted site for yourself:`,
`https://odins-eye.herokuapp.com/`,
`- digiproc`

]