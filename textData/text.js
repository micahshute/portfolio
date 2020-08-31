const introSequenceTxt = [
    "Thanks for visiting my Portfolio Site",
    "This site was built with vanilla JS with no external libraries.\n It is containerized with Docker and is served by nginx.",
    "I am using a composite design pattern to display the elements on the screen and to change landscapes when the sprite enters different doors", 
    "A decorator design pattern is used to give the screen's text different attributes and to make any element collidable with the sprite.",
    "Relative => pixel calculations and sprite animation is managed with a Strategy design pattern",
    "Control your sprite using W,S,A,D or the arrow keys, and have fun exploring! Thanks for visiting \u{1F531}"
]

const bio = `I graduated from the United States Naval Academy in 2012 with a B.S. in Control Systems Engineering and served as a Submarine Officer for 5 years. During that time, I ran a nuclear power plant, became qualified as Engineer of an S8G nuclear reactor, and drove the ship as the Officer of the Deck.

 In 2017 I resigned my comission to pursue software engineering. Since then, I have completed a M.S. in Computer and Electrical Engineering from the University of Delaware, and completed a full stack web development program through Flatiron School, where I taught as an instructor for that program while I finished my MS.

 I completed my Masters degree with a 4.0 and invitation to Phi Kappa Phi. I am interesed in continous learning, and continue to learn new skills and study Computer Science topics, specifically data structures, algorithms, and design patterns.`


 const projects = {
    rbimg: 
        {
            description: `A ruby gem for reading/writing a PNG img as arrays of pixel data. This gem was written with no outside dependencies except for other self-written gems. I decided to do this while writing a Machine Learning gem and wanted to easily test my algorithms on the MNIST database and be able to visualize it. In the future I want to do some image encryption with AES and wanted an easy way to do that in Ruby.
 I wrote it by reading the PNG specifications from libpng.org and formatting the data accordingly. It generates the PNG signature, compresses/decompresses the data, creates/parses the reuired chunks, unfilters the data if necessary, and either creates the PNG file appropriately or transforms it into the array of numbers which represents its pixels.
 It was fun to do this from scratch and a good reminder that all files and complex data are just information formatted in a particular way. 
 This project served as a good basis for another small ruby gem I made which makes it easy to manipulate and visualize the MNIST database for Machine Learning purposes.`,
            sourceCode: `https://github.com/micahshute/rbimg`
        },
    odinsEye:
            {
                description: `A Ruby on Rails fullstack web application with JavaScript. It is a blogging/social app that allows users to write and publish blogs in Markdown (and code blocks with syntax highlighting using Kramdown), react to posts, comment on posts, reply to comments, follow other users, save posts for later viewing, and create/manage virtual classrooms.`,
                sourceCode: `https://github.com/micahshute/odins-eye`,
                hostedSite: `https://odins-eye.herokuapp.com/`
            },
    space:
            {
                description: `An app which uses a custom (Newtonian) physics machine to simulate gravitational pulls between two bodies. Bodies can be entered into the simulator at initial velocities to allow orbitals to form. Time can be sped up to observe slowly-evolving situations quickly. Features pre-made mass objects which accurately depict planets and masses in our solar system.`,
                sourceCode: `https://github.com/micahshute/gravity-sim`
            },
    blogs:
            {
                description: `I have multiple blogs published on Cantors Paradise. My writing is largely CS-related, and includes an intro to Big O and sorting, Dijkstra's Algorithm in O(nlgn), Intro to Principal Component Analysis, the Monty Hall Problem, and the Fast Fourier Transform`,
                sourceCode: `https://medium.com/@micah.shute`
            },
    digiproc:
            {
                description: `Ruby gem for digital signal processing - allows FFT calculation, filtering, encoding/decoding, companding, simulation of different probability distributions, among other things`, 
                sourceCode: `https://github.com/micahshute/digiproc`
            }
        
}

const blogs = {
    dijkstra: {
        title: "Dijkstra's Shortest Path Algorithm",
        description: "Walkthrough of Dijkstra's Algorithm, Graphs, and Heaps, how to make it O(nlgn), and working code in Python",
        link: "https://medium.com/cantors-paradise/dijkstras-shortest-path-algorithm-in-python-d955744c7064?source=friends_link&sk=6c6b81ab7f472d3f8540840a794196bc"
    },
    pca: {
        title: "Principal Component Analysis",
        description: "Breakdown of intuition and mathematics behind PCA, with custom working Ruby code to demonstrate",
        link: "https://medium.com/cantors-paradise/principal-component-analysis-the-basics-of-dimensionality-reduction-9ecd10d98737?source=friends_link&sk=68364bdc5cbf431001a89f92ab1f1654"
    },
    bigo: {
        title: "Intro to Big O and Sorting",
        description: "Overview of asymptotic runtime analysis and demonstrations applying it to basic sorting algorithms",
        link: "https://medium.com/cantors-paradise/basics-of-big-o-sorting-94d0c04d0f53?source=friends_link&sk=d2d70f92e9b7107976850bd995306563"
    },
    fft: {
        title: "The Fast Fourier Transform",
        description: "What is the Fast Fourier Transform, and how to program it in O(nlgn) time",
        link: "https://medium.com/@micah.shute/divide-and-conquer-the-fast-fourier-transform-f61cb060710b?source=friends_link&sk=36f9dead2df4a74d118bb5ee54d679ab"
    },
    monty: {
        title: "Understanding the Monty Hall Problem",
        description: "Intuition, math, and code behind why you should switch doors",
        link: "https://medium.com/cantors-paradise/understanding-the-monty-hall-problem-e9aa24cc62ac?source=friends_link&sk=08ef79379758252070b8ba66e0bbbdb5"
    }
}
