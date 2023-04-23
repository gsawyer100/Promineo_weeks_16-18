import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function One() {
  return (
    <div>
      <h2>1</h2>
    </div>
  );
}

function Two() {
  return (
    <div>
      <h2>2</h2>
    </div>
  );
}

function Three() {
  return (
    <div>
      <h2>3</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default function App() {
  return (
    <div>
      <h1>12ftLadder</h1>
      <p>Are you trying to read an article but 
      you need to go through a paywall in order 
      to do so? Fear not! 12ft.io allows you access
      access internet articles behind paywalls.</p> 
    
      <h1>supercook</h1>
      <p>This website allows you to figure out
      what kind food recipes you can make based on 
      what foods you already have in your cabinet.</p> 
      
      <h1>Tinywow</h1>
      <p>Tinywow has all sorts of tools 
      to make content creation easy. 
      It has pdf tools, an AI image generator, a background remover,
      and lots of tools at your disposal. </p> 

      <h1>Allsides</h1>
      <p>If your looking for news articles that cater to all 
      sides of the political spectrum, this is place to be. </p> 

      <h1>Secondfortune</h1>
      <p>Is the first fortune cookie not enough for you?
        Go to www.secondfortune.com for another one?
      </p>

      <h1>Freesoff</h1>
      <p>Here is a place to find free software, tutorials and methods, ebooks
        and other thins.
      </p>
      <h1>Gethuman</h1>
      <p>Are you tired of having to speak to robots on the phone?
        GetHuman helps you speak to human beings at companies faster!
      </p>

      <h1>Musclewiki</h1>
      <p>In this website you can pick specific bodyparts you want to work on 
        and you will get specific workouts for those bodyparts.
      </p>

      <h1>Promo</h1>
      <p>Promo lets you resize images to fit 
        your desired proportions for social media content.
      </p>

      <h1>Memes</h1>
      <p>This website allows you to stay on top of 
        trending memes.
      </p>

      <h1>Cloudconvert</h1>
      <p>If you are looking to convert videos to an mp4 format, 
        cloudconvert is a great site to use.</p>

        <h1>Wirestock</h1>
      <p>If you're trying to sell videos, photos, and vectors online
        wirestock.io is good place to go.
      </p>
    </div>
  );
}



