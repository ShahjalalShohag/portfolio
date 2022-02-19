import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.blog ? (
        <a
          href={socialMediaLinks.blog}
          className="icon-button blog"
          target="_blank"
          rel="noopener noreferrer"
          title="Personal Blog"
        >
          <i className="fas fa-blog"></i>
          <span></span>
        </a>
      ) : null}
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}
      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          title="Gmail"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.page}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <i className="fas fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

    {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook Page"
        >
          <i className="fas fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}
      {socialMediaLinks.discord ? (
        <a
          href={socialMediaLinks.discord}
          className="icon-button discord"
          target="_blank"
          rel="noopener noreferrer"
          title="Discord"
        >
          <i className="fab fa-discord"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.spotify ? (
        <a
          href={socialMediaLinks.spotify}
          className="icon-button spotify"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify"
        >
          <i className="fab fa-spotify"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}
      {socialMediaLinks.linktree ? (
        <a
          href={socialMediaLinks.linktree}
          className="icon-button linktree"
          target="_blank"
          rel="noopener noreferrer"
          title="Linktree"
        > 
          
          <i class="fas fa-external-link-square-alt"></i>
         <span> </span>
        </a>
      ) : null}
      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
