import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './TestComponent.css'

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

interface TallOuterContainerProps {
  dynamicHeight: number;
}
const TallOuterContainer = styled.div.attrs<TallOuterContainerProps>((props) => ({
  style: { height: `${props.dynamicHeight}px` }
}))<TallOuterContainerProps>`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

interface HorizontalTranslateContainerProps {
  translateX: number;
}
const HorizontalTranslateContainer = styled.div.attrs<HorizontalTranslateContainerProps>((props) => ({
  style: { transform: `translateX(${props.translateX}px)` }
}))<HorizontalTranslateContainerProps>`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  margin-right: 75px;
  flex-shrink: 0;
  width: 40vw;
  height: 60vh;
  border-left: solid 1px #000;
  padding-left: 2vw;
`;

const SampleCards = [
  <SampleCard key={`sampleCard-0`} className="timeline-card">
    <span className="timeline-card-year">2017</span>
    <h2>Bellevue College, Java</h2>

    <span>Started my journey towards completing Bachelor's in Computer Science at Bellevue College, Washington.</span>
    <span>This is where I first learned how to code, using Java.</span>
  </SampleCard>,
  <SampleCard key={`sampleCard-1`} className="timeline-card">
    <span className="timeline-card-year">2018</span>
    <h2>HTML + CSS + JavaScript</h2>

    <span>Was not able to learn any other programming languages at school because I had to take other required courses to transfer.</span>
    <span>Dipped my feet into the world of web development. Learned HTML, CSS, and JavaScript through online courses.</span>
  </SampleCard>,
  <SampleCard key={`sampleCard-2`} className="timeline-card">
    <span className="timeline-card-year">2018</span>
    <h2>UCLA, Node.js, C++</h2>

    <span>Graduated Bellevue College with Associate's Degree in Science for transfer with 4.0 GPA.</span>
    <span>Transferred to UCLA to further pursue Bachelors of Science in Computer Science.</span>
    <span>C and C++ are two of the main languages for CS courses at UCLA. Had to use it alot.</span>
    <span>Continued self-learning web development - Node.js.</span>
  </SampleCard>,
  <SampleCard key={`sampleCard-3`} className="timeline-card">
    <span className="timeline-card-year">2019</span>
    <h2>Software Engineering internship at Accelya</h2>

    <span>Got the amazing opportuniy to intern at Accelya (formerly Revenue Management Systems, Inc.).</span>
    <span>Stack: Angular, ASP.NET Core, MySQL, Docker</span>
  </SampleCard>,
  <SampleCard key={`sampleCard-4`} className="timeline-card">
    <span className="timeline-card-year">2020</span>
    <h2>Software Engineering internship at Amazon</h2>

    <span>Never thought I would be able to get the chance to work at one of the biggest and most impactful tech company - Amazon.</span>
    <span>Stack: React.js, Node.js, Java, AWS</span>
  </SampleCard>
];

const calcDynamicHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref: React.RefObject<HTMLDivElement>, setDynamicHeight: any) => {
  const objectWidth = ref.current!.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref: React.RefObject<HTMLDivElement>, setTranslateX: any) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current!.offsetTop;
    setTranslateX(offsetTop);
  });
};

interface HorizontalScrollProps {
  children: any;
}
export const HorizontalScroll: React.FC<HorizontalScrollProps> = (props: HorizontalScrollProps) => {
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight!}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {props.children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};


export const TestComponent: React.FC<{}> = () => {
  const [timeString , setTimeString] = useState<string>(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))

  useEffect(() => {
    let secTimer = setInterval( () => {
      setTimeString(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
    }, 1000)

    return () => clearInterval(secTimer)
  })

  return (
    <div className="intro-section">
      <div className="flex">
        <div className="left">
          <div>
            <h1 className="h1-title">{timeString}</h1>
            <span className="description">I am Harry, a software engineer studying Computer</span>
            <span className="description"> Science at the University of California, Los Angeles</span>
          </div>
          <div>
            <ul>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="skill">
            <h3>Skills</h3>
            <div className="sub-skill">
              <h4>Programming Languages</h4>
              <p>JavaScript/TypeScript, Java, C, C++, C#, Python, HTML, CSS</p>
            </div>
            <div className="sub-skill">
              <h4>Libraries &amp; Frameworks</h4>
              <p>React, Angular, Node.js, Express, ASP.NET Core, MongoDB, AWS CDK, Jest, cypress.io</p>
            </div>
            <div className="sub-skill">
              <h4>Tools &amp; Platforms</h4>
              <p>Git, Docker, AWS</p>
            </div>
          </div>

          <div className="interests section">
            <h3>Interests</h3>
            <span>Front-end</span>
            <span>Back-end</span>
            <span>System design</span>
            <span>Web design</span>
            <span>ML</span>
            <span>(Anything software engineering related)</span>
          </div>

          {/* <div className="work-intro">
            <h2>Work experience ↘</h2>
          </div> */}
        </div>
      </div>

      <div className="work">
        <div className="flex sub-work">
          <div className="left">
            <h1 className="work-left">
              01
            </h1>
            <span>Summer 2020</span>
          </div>
          <div className="right">
            <h3>SDE Intern at Amazon</h3>
          </div>
        </div>
        <div className="flex sub-work">
          <div className="left">
            <h1 className="work-left">
              02
            </h1>
            <span>Summer 2019</span>
          </div>
          <div className="right">
            <h3>Sofware Engineer Intern at Accelya (Formerly Revenue Management Systems, Inc.)</h3>
          </div>
        </div>
      </div>

      <div className="timeline">
        <HorizontalSection>
          <HorizontalScroll>
            <CardsContainer>
              {SampleCards}
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>
      </div>
    </div>
  )
}