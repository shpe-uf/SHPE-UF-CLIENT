import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import InfoCard from "./InfoCard";
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from "../assets/images/mentorshpepics";

import "../Mentorshpe.css";

function MentorSHPE() {

  const placeholder = "https://placehold.co/400x260?text=Image";
  const carouselImages = [img10, img11, img12];
  const quotes = [
  "Member quote #1",
  "Member quote #2",
  "Member quote #3",
];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="body">
      {/* BANNER */}
      <div className="banner">
        <Image src={img1} fluid className="image1" />
        <div className="bannerText">
          <div className="bannerTitle">MentorSHPE</div>
          <div className="bannerSubtitle">
            Guiding the next generation of leaderSHPE
          </div>
        </div>
      </div>

      <div className="mentorSection">
        <div className="mentorLeft">
          <p className="mentorParagraph">
            The MentorSHPE program facilitates one-to-one mentoring relationships
            that support personal and professional growth and development. The
            program is designed to expand professional networks, allow
            participants to gain new knowledge and insights, and build new skills
            for both mentors and mentees. Mentoring matches will work together to
            define expectations, determine goals and a corresponding action plan,
            and outline milestones to track progress. Mentees can select mentors
            based on alignment of goals, specific needs, or characteristics.
          </p>
        </div>

        <div className="mentorRight">
          <div className="mentorImgStack">
            <Image src={img3} className="mentorImgBottom" /> {/* behind */}
            <Image src={img2} className="mentorImgTop" />    {/* in front */}
          </div>
        </div>
      </div>

      <div className="banner2">
        <Image src={img4} className="banner2Bg" />
        <Image src={img5} className="banner2Dots" />
        <Image src={img6} className="banner2People" />
        <p className="banner2Text">
          Use the MentorSHPE platform to connect with a mentor or a mentee. This online
          platform allows for one-on-one mentoring and is open to those in the STEM fields.
          MentorSHPE allows you to easily connect, manage your mentor/mentee relationship,
          and offers tools to guide your relationship.
        </p>
        <button className="ctaButton banner2Button">
          Join Now
        </button>
        <div className="banner2QuoteBlock">
          <p className="banner2Quote">"Isn't this such a great quote?"</p>
          <p className="banner2Quoter">The guy writing this</p>
        </div>
        <Image src={img8} className="imageNextToQuote" />
        <Image src={img7} className="banner2Polygon" />
        <Image src={img9} className="anotherImage" />
        <p className="finalParagraph">
          (Space for page’s additional info,  photos, member testimonies, etc.)
          The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.
        </p>
      </div>

            <div className="mentorCarouselSection">
        <button className="carouselArrow leftArrow" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="mentorCarouselStack">
          <Image
            src={
              carouselImages[
                current === 0 ? carouselImages.length - 1 : current - 1
              ]
            }
            className="mentorCarouselSide leftSide"
          />

          <Image
            src={carouselImages[current]}
            className="mentorCarouselCenter"
          />

          <Image
            src={
              carouselImages[
                current === carouselImages.length - 1 ? 0 : current + 1
              ]
            }
            className="mentorCarouselSide rightSide"
          />
        </div>

        <button className="carouselArrow rightArrow" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="mentorQuotes">
        <p className="topText">Still don’t believe us?</p>
        <p className="bottomText">Listen to what our members have to say.</p>
        <div className="centerText">{quotes[current]}</div>
      </div>

      <div className="ctaSection">
        <h2 className="ctaText">Ready to take the next SHtep?</h2>

        <button className="ctaButton">
          Join Now
        </button>
      </div>

      <div className="cardsSection">
      <InfoCard
        image={placeholder}
        title="New Member Interest Form"
        description="Fill this out if you are interested in learning more about becoming a member of SHPE UF."
        linkText="Fill out the form here!"
      />

      <InfoCard
        image={placeholder}
        title="New Member Website"
        description="Find many additional resources and information if you are interested in becoming a member."
        linkText="Click here to access the site!"
      />

      <InfoCard
        image={placeholder}
        title="SHPE UF Announcements Chat"
        description="Join the SHPE UF WhatsApp chat to stay up to date with all SHPE UF news and events."
        linkText="Click here to access the site!"
      />
    </div>
      
    </div>
  );
}

export default MentorSHPE;