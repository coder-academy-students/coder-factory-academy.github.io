// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cfa: require('../assets/cfa.svg'),
  architecture: require('../assets/docker-architecture.svg'),
  compare: require('../assets/compare.png'),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#fff",
  secondary: "#404040",
  tertiary: "#45a8c6",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image width="40%" src={images.cfa} />
          <Heading textColor="secondary">Coding Kickstarter</Heading>
          <Text textColor="tertiary"> </Text>
          <Text textColor="tertiary">Wi-fi: CFA-Wireless</Text>
          <Text textColor="tertiary">Password: nUw977GY</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary">Agenda</Heading>
          <List textColor="primary">
            <ListItem>Introductions</ListItem>
            <ListItem>Why learn to code?</ListItem>
            <ListItem>What is Ruby on Rails?</ListItem>
            <ListItem>Create your first Rails web application</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">Introduction</Heading>
            <List>
              <ListItem transition={["fade"]}>Ruegen Aschenbrenner</ListItem>
              <ListItem>Company tech evangelist</ListItem>
              <ListItem>Programmer in many languages</ListItem>
              <ListItem>10+ years experience in developement</ListItem>
            </List>
        </Slide>

        <Slide>
            <Heading size={4} textColor="tertiary">Why learn to code?</Heading>
            <Text textColor="secondary">Learning to code, changes your life.</Text>
            <br/>
            <Text textColor="secondary">
              Once you know how to build apps with code, a whole new world of possibilities open up for you and you will never look back.
            </Text>
        </Slide>



        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary">How you will feel</Heading>

            <List textColor="secondary">
              <ListItem>Overwhelmed</ListItem>
              <ListItem>Confused</ListItem>
              <ListItem>Frustrated</ListItem>
              <ListItem>Annoyed</ListItem>
              <ListItem>Surprised</ListItem>
              <ListItem>Excited</ListItem>
              <ListItem>Amazed</ListItem>
              <ListItem>Joyous</ListItem>
            </List>

        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary">What is Ruby on Rails?</Heading>
          <br />
          <Text textColor="primary">
            "Ruby on Rails is an open-source web application framework that is optimised for developer happiness and sustainable productivity. It's lets you write beautiful code by favouring convention over configuration."
          </Text>
          <Cite textColor="primary">rubyonrails.org</Cite>

        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary">What is Ruby?</Heading>
          <br />
          <Text textColor="primary">
            Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
          </Text>
          <Cite textColor="primary">http://en.wikipedia.org/wiki/Ruby_(programming_language)</Cite>

        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary">History of Rails</Heading>
          <br />
          <Text textColor="primary">
            David Heinemeier Hansson (DHH) extracted Ruby on Rails from his work on Basecamp, a project management tool by 37signals.
          </Text>
          <Text textColor="primary">It was first released as open source in July 2004.</Text>

        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Web Application Framework</Heading>
          <br />
          <Text textColor="primary">
            A software framework that is designed to support the development of dynamic websites, web applications, web services and web resources.
          </Text>
          <Text textColor="primary">
            Frameworks provide libraries for database access, templating frameworks and session management, and they often promote code reuse.
          </Text>

        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Fin</Quote>
            <Cite>Thankyou</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
