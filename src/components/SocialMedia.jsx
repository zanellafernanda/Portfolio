import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/fernanda-zanella/" className="app__social-linkedin" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/zanellafernanda/" className="app__social-github" target="_blank" rel="noreferrer" ><AiFillGithub /></a>
      </div>
    </div>
  )
}

export default SocialMedia;