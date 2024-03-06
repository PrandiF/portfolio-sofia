import React from "react";
import "./style.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.instagram} target="_blank">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href={socialprofils.linkedin} target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Mis redes</p>
    </div>
  );
};