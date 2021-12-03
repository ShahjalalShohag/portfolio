import React, { useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import ProblemSetting from "./ProblemSettings/ProblemSetting";
import ProblemSolving from "./ProblemSolving/ProblemSolving";
import Achievement from "./achievement/Achievement";
import RealBigProjects from "./RealBigProjects/RealBigProjects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ContactUs from "../components/contactForm";
import SocialMediaConnections from "./SocialMediaConnections/socialMediaConnections";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  // const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  // const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  // const changeTheme = () => {
  //   setIsDark(!isDark);
  // };

  const darkPref = false;
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Skills />
        {/* <StackProgress /> */}
        <Education />
        <WorkExperience />
        <ProblemSolving/>
        <ProblemSetting/>
        <Achievement />
        <Projects />
        <RealBigProjects/>
        <StartupProject />
        <Blogs />
        <Talks />
        <SocialMediaConnections/>
        <Twitter />
        {/* <Podcast /> */}
        <Profile />
        {/* <ContactUs/> */}
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
