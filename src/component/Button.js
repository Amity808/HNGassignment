import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';
import Footer from './footer';

function Button(props) {
  return (
    <div className='container-small'>
        <img src="./images/IMG_7107.jpg" alt="pho" id='profile__img' />
        <p>Bolarinwa MuhdSodiq</p>
        <a href="#slack" id='slack'>Amity</a>
        <div className='containe-anchor'>
        <a href='https//wwww.twitter.com/Bolarinwamuhd1' id='twitter'>{props.twitter}</a>
        
        <a href='https://training.zuri.team/' id='btn__zuri'>{props.team}</a>
        <a href='http://books.zuri.team' id='books'>{props.book}</a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=Amity' id='book__python'>{props.python}</a>
        <a href='https://background.zuri.team' id='pitch'>{props.content}</a>
        <a href='https://books.zuri.team/design-rules' id='book__design'>{props.design}</a>
        <a href="/contact">{props.contact}</a>
        <Link to="/contact">{props.contact}</Link>
        </div>
          
        <div>
          <img src="./images/slack.png" alt="zuri" id='social-media'/>
          <img src="./images/github.png" alt="git" id='social-media'/>
        </div>
        <Footer />
    </div>
  )
}

export default Button
