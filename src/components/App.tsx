import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Work } from './work/Work'
import { Link } from 'react-scroll';
import { TestComponent } from './testcomponent/TestComponent';

const Wrapper = styled.div`
  color: #000;
  background-attachment: fixed;
  width: 100%;
`

function Navbar() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link
            className="nav-link"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <React.Fragment>
      <div className="background-image"></div>
      {/* <div className="container">
        <Wrapper>
          <Navbar />
          <div className="content">
            <div className="intro">
              <h1>
                I AM HARRY, A SOFTWARE ENGINEER STUDYING AT UNIVERSITY OF CALIFORNIA, LOS ANGELES.
              </h1>
            </div>
          </div>
          <Work/>
        </Wrapper>
      </div> */}
      <div>
        <TestComponent />
      </div>
    </React.Fragment>
  )
}

export default App
