import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* NeoMart */}
      <h1 className="neomart-title">
        <span className="neo-text">Neo</span>
        <span className="mart-text">Mart</span>
      </h1>

      {/* Title */}
      <h2 className="about-title">About Developer</h2>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-photo">
            <img src="/ajit.jpg" alt="Developer" className="photo-img" />
          </div>
          <h3 className="dev-name">Ajit Huded</h3>
        </div>

        {/* Long Description */}
        <div className="dev-description">
          <p className="fade-in delay-1">
            Hi, I’m <strong>Ajit Huded</strong>, a 2nd-year engineering student at
            Jain College of Engineering and Research, Udyambhag, Belagavi. While
            I’m still studying, my curiosity for technology constantly pushes me
            to explore new tools, frameworks, and ideas outside the syllabus. For
            me, learning isn’t just about passing exams — it’s about building
            things that make people say “Wow.”
          </p>

          <p className="fade-in delay-2">
            My journey into development began with nothing more than excitement
            to create something unique. One day, I thought — “What if I could
            actually build something real and useful?” That’s when I started
            experimenting with AI-powered tools. They gave me the ability to
            bring my creative visions to life faster, and every little project
            made me more confident that I could make something bigger. I wasn’t
            just coding — I was creating.
          </p>

          <p className="fade-in delay-3">
            Over time, I realized that this isn’t just a hobby for me. It’s a
            passion. I enjoy combining clean code with visually appealing designs
            that feel modern, smooth, and intuitive. Whether it’s front-end
            interfaces or back-end logic, I want my work to have both brains and
            beauty. My dream is to start my own company — not just to run a
            business, but to lead a team that builds meaningful, professional
            projects that have a real impact.
          </p>

          <p className="fade-in delay-4">
            Outside of coding, I’m always brainstorming new ideas, exploring the
            latest trends in technology, and finding inspiration from design,
            art, and innovation. I believe in lifelong learning and never
            settling for “good enough.” The satisfaction I get when someone uses
            and appreciates my work is unmatched, and it motivates me to aim
            higher with every project I take on.
          </p>

          <p className="fade-in delay-5">
            This portfolio and everything inside it is a reflection of my
            creativity, excitement, and commitment to growth. I’m still at the
            start of my journey, but I see a future where my ideas don’t just
            stay in my mind — they change the way people interact with
            technology. And this is only the beginning.
          </p>
        </div>
      </div>
    </div>
  );
}