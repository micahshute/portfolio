const introSequenceTxt = [
    "Thanks for visiting my Interactive Portfolio Site",
    "This portion of the site is in Beta, proceed at your own risk",
    "You can always turn back by going through the portal to the south",
    "This site was built with vanilla JS with no external libraries.\n It is containerized with Docker and is served by nginx.",
    "I am using a composite design pattern to display the elements on the screen and to change landscapes when the sprite enters different doors", 
    "A composite design pattern is also used to create the structure of the main site which you just came from",
    "A decorator design pattern is used to give the screen's text different attributes and to make any element collidable with the sprite.",
    "Relative => pixel calculations and sprite animation is managed with a Strategy design pattern",
    "Control your sprite using W,S,A,D or the arrow keys, and have fun exploring! Thanks for visiting \u{1F531}"
]

const bio = `I graduated from the United States Naval Academy in 2012 with a B.S. in Control Systems Engineering and served as a Submarine Officer for 5 years. During that time, I ran a nuclear power plant, became qualified as Engineer of an S8G nuclear reactor, and drove the ship as the Officer of the Deck.

 In 2017 I resigned my comission to pursue software engineering. Since then, I have completed a M.S. in Computer and Electrical Engineering from the University of Delaware, and completed a full stack web development program through Flatiron School, where I taught as an instructor while I finished my MS.

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

const languages = {
    ruby: {
        img: '../../public/assets/images/ruby.png',
        label: 'Ruby'
    }, 

    java: {
        img: '../../public/assets/images/java.png',
        label: 'Java'
    },

    python: {
        img: '../../public/assets/images/python.png',
        label: 'Python'
    },

    javascript: {
        img: '../../public/assets/images/js.png',
        label: 'JavaScript'
    },

    swift: {
        img: '../../public/assets/images/swift.jpeg',
        label: 'Swift'
    }
}

const frameworks = {
    rails: {
        img: '../../public/assets/images/rails.png',
        label: "Ruby on Rails"
    },

    react: {
        img: '../../public/assets/images/react.png',
        label: 'React'
    },
    express: {
        img: '../../public/assets/images/nodejsAlt.png',
        label: "ExpressJS"
    },
    
    sinatra: {
        img: '../../public/assets/images/sinatra.png',
        label: "Sinatra"
    },

    redux: {
        img: '../../public/assets/images/redux.png',
        label: "Redux"
    },


    tensorFlow: {
        img: '../../public/assets/images/tensorflow.png',
        label: "TensorFlow"
    },
    reactNative: {
        img: '../../public/assets/images/react.png',
        label: "React Native"
    }
}

const technologies = {
    postgres: {
        img: '../../public/assets/images/postgres.png',
        label: "PostgreSQL"
    },

    mongo: {
        img: '../../public/assets/images/mongo.jpeg',
        label: "MongoDB"
    },

    html: {
        img: '../../public/assets/images/html.png',
        label: "HTML5"
    },

    css: {
        img: '../../public/assets/images/css.png',
        label: "CSS"
    },

    github: {
        img: '../../public/assets/images/github.png',
        label: "Github"
    },

    matlab: {
        img: '../../public/assets/images/matlab.jpeg',
        label: 'Matlab'
    }
}

const certifications = {
    java: {
        img: '../../public/assets/images/java.png',
        label: "Java SE8 OCA Qualified"
    },

    triplebyte: {
        img: '../../public/assets/images/triplebyte.png',
        label: 'Triplebyte Certified Generalist Software Engineer'
    },

    pkp: {
        img: '../../public/assets/images/pkp.png',
        label: 'Phi Kappa Phi Honor Society'
    },

    eit: {
        img: '../../public/assets/images/ncees.jpeg',
        label: "EIT - Electrical And Computer Eng."
    }
}

const otherSkills = {
    submarine: {
        img: '../../public/assets/images/sub.png',
        label: 'Performing in high-responsibility roles'
    },
    leadership: {
        img: '../../public/assets/images/leadership.png',
        label: 'Leading teams'
    },
    nuclear: {
        img: '../../public/assets/images/power.png',
        label: 'Understanding complex systems'
    },
    learning: {
        img: '../../public/assets/images/bulb.png',
        label: "Continuous learning and improvement"
    }

}
const resumeLink = "https://docs.google.com/document/d/1FBJBXWZxaofwN12zgTqkvkCanTCjN_ZF5SigoPU3waE/edit?usp=sharing"
const about = `I am a <span class="emph1">Software Engineer</span> who is passionate about <span class="emph2">solving difficult problems with elegant code</span>, <span class="emph3">being challenged</span>, and most imporantly <span class="emph4">continuous learning.</span>`

const QUOTES = [
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon"
    },
    {
        
        quote: "Education never ends. It is a series of lessons, with the greatest for the last.",
        author: "Sherlock Holmes"
    },
    {
        quote: "Simplicity, carried to the extreme, becomes elegance.",
        author: "Jon Franklin"
    },
    {
        quote: "Make everything as simple as possible, but not simpler.",
        author: "Albert Einstein"
    },
    {
        quote: "The best way to predict the future is to implement it.",
        author: "David Heinemeier Hansson"
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        quote: "Truth can only be found in one place: the code.",
        author: "Robert Martin"
    }
]
