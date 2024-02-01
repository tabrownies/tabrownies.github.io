import Image from "next/image";
import styles from "./page.module.css";

// components
import ProjectBlurb from "./components/ProjectBlurb";

// interfaces
import Project from "./interfaces/Project";

// assets
import headshot from "../../public/assets/images/me/headshot.jpeg";

// project list
const projects: Project[] = [
  {
    title: 'KMeans Image Filter',
    imageSrc: 'Projects/KMeansImageFilter/kmeans_star_wars.png',
    description:
      'I developed a simple web application which uses KMeans clustering to apply an interesting filter to images. The filter groups similar colors and reduces the number of different color values in the image from hundreds or thousands to 5-10 while maintaining the overall detail in the image. This is the filter I used to create the Star Wars image above. (This project is still in development.)',
    link: 'Projects/KMeansImageFilter/kmeanImageFilter/index.html',
  },
  {
    title: 'Reverse Indexing',
    imageSrc: 'Projects/ReverseIndexing/reverse_indexing.png',
    description:
      'As a research lead in the Family History Technology Lab, I made the Reverse Indexing application 12 times more efficient in both storage usage and speed. Then realizing the output from Reverse Indexing was often erroneous, I built a pipeline from the existing application to a new iOS and Android mobile app used to clean up the annotation errors. These features support over ten thousand users as they electronically archive millions of records every year.',
    link: 'https://indexing.familytech.byu.edu/home',
  },
  {
    title: 'Ragnar Rankings',
    imageSrc: 'Projects/RagnarScraper/ragnar.png',
    description:
      "I competed in a relay race called the Ragnar. Although the team rankings were released and included individual times, I couldn't easily compare my personal times against other individual racers'. I developed a Python program which reads the contents of Ragnar's results website and sorts the racers individually, revealing my actual placement in the race.",
    link: 'https://www.runragnar.com/?section=31%20Days%20Challange',
  },
  {
    title: 'PS2X GitHub Contribution',
    imageSrc: 'Projects/PS2XContribution/PS2_Dualshock2_Controller.jpeg',
    description:
      'After using an open source Arduino library in a number of personal projects, I contributed to its development on GitHub. The library translates the input from a Playstation 2 controller so an Arduino microcontroller can understand it. The pull request (still unmerged) is found here.',
    link: 'https://github.com/madsci1016/Arduino-PS2X/pull/32',
  },
  {
    title: 'Mario Kart Data Science',
    imageSrc:
      'Projects/MarioKartDatascience/mariokart_datascience/analysis_pages/mk8d_wr_comp/mario_regression_separated.png',
    description:
      'I love to play Mario Kart 8 Deluxe and have performed data science on courses and kart/character choices using world record times as a metric. This was accomplished using web-scrapping, KMeans Clustering, and linear regression.',
    link: '#', // Add the link to your Mario Kart project here
  },
  {
    title: 'Website Orrery',
    imageSrc: 'Projects/WebsiteOrrery/website_orrery_screenshot2.jpg',
    description:
      'A simple website mimicking the rotation of the planets around the sun. It was programmed using HTML, CSS, and Javascript.',
    link: 'Projects/WebsiteOrrery/planetaryOrbit/index.html',
  },
  {
    title: 'Junkyard Joystick',
    imageSrc: 'Projects/Joystick/joystick.jpeg',
    description:
      'Built primarily out of old cardboard boxes, bottle caps, and other materials I scavenged from my family\'s recycling bin over a winter break, this joystick is built completely from used materials and basic electronic components. It is powered by an Arduino microcontroller and can act as a mouse on Windows and MacOS computers.',
    link: 'https://www.arduino.cc/',
  },
  {
    title: 'Roman Numeral Converter',
    imageSrc: 'Projects/RomanNumeralConverter/RomanNumeralConverterScreenshot.jpg',
    description:
      'A simple web application that converts numbers between Roman Numerals and Arabic Numerals. It can be accessed here.',
    link: 'projects/RomanNumeralConverter/RomanNumeralConverter/index.html',
  },
  {
    title: 'Brick Breaker',
    imageSrc: 'Projects/BrickBreaker/brickBreakerScreenshot.jpg',
    description:
      'A simple brick-breaker game I built in eighth grade using basic Javascript and an HTML canvas. While inspired by a similar game on my dad\'s Blackberry, the design, implementation, and code were all original to me. Play it here.',
    link: 'Projects/BrickBreaker/Brick-Breaker/index.html',
  },
  {
    title: 'Pure CSS Maze Game',
    imageSrc: 'Projects/CssGame/theGame.png',
    description:
      'Unlike other online games which rely on a scripting language to accept user input, update the game display, and alert the user when they win (or lose), THE GAME exclusively employs HTML and CSS to implement its functionality.',
    link: 'Projects/CssGame/THE_GAME/index.html',
  },
  {
    title: 'Brown Robotics',
    imageSrc: '/assets/images/home/brown_robotics.jpeg',
    description:
      'After placing fourth in a national robotics competition, I marketed a week long summer robotics class for youth. I developed a curriculum and taught 10 teenagers the basics of programming, engineering, and robotics. After the first week of classes, both the youth and their parents requested a second session, which I then provided.',
    link: 'https://tsaweb.org/events-conferences/recent-national-tsa-conferences',
  },
];

export default function Home() {
  return (
    <main>
      <h2>Hi, my name is Timothy Brown</h2>
      <div>
        <Image src={headshot} alt="Picture of Timothy's Face"></Image>
      </div>
      <p>
        I am a problem solver and inventor.
        My goal is to develop technology products that simplify people's lives and save them time, thus saving
        them money.
      </p>
      <h2>My Experience</h2>
      {projects.map((project, index) => (
        <ProjectBlurb key={index} project={project} />
      ))}
    </main>
  );
}
