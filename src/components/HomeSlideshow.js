import React from "react"
import { Image, Container, Grid, Icon } from "semantic-ui-react"

const ArrowIcon = ({ direction = "left" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`arrow-svg ${direction}`}
    >
      <circle
        cx="32"
        cy="32"
        r="32"
        transform="matrix(-1 0 0 1 64 0)"
        fill="#1070B8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.2177 33.8845C39.7171 33.3845 39.9976 32.7067 39.9976 32C39.9976 31.2934 39.7171 30.6156 39.2177 30.1156L29.1626 20.0569C28.6623 19.5569 27.9839 19.2761 27.2766 19.2762C26.9264 19.2763 26.5796 19.3454 26.2561 19.4795C25.9326 19.6136 25.6386 19.8101 25.391 20.0578C25.1434 20.3055 24.9471 20.5995 24.8131 20.9231C24.6792 21.2467 24.6103 21.5935 24.6103 21.9438C24.6104 22.294 24.6795 22.6408 24.8136 22.9643C24.9477 23.2878 25.1442 23.5818 25.3919 23.8294L33.5608 32L25.3901 40.1707C25.1353 40.4166 24.932 40.7107 24.7921 41.036C24.6522 41.3613 24.5785 41.7112 24.5752 42.0652C24.572 42.4193 24.6393 42.7705 24.7732 43.0983C24.9072 43.4261 25.105 43.7239 25.3553 43.9744C25.6056 44.2249 25.9032 44.423 26.2309 44.5573C26.5585 44.6915 26.9096 44.7591 27.2637 44.7562C27.6178 44.7533 27.9677 44.6799 28.2931 44.5403C28.6186 44.4007 28.9129 44.1977 29.159 43.9431L39.2212 33.8845H39.2177Z"
        fill="white"
      />
    </svg>
);

const DotIcon = ({ active }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      className={`slideshow-dot-svg ${active ? "active" : ""}`}
    >
      <circle cx="5.47314" cy="5.46582" r="5" fill={active ? "black" : "#D9D9D9"} fillOpacity={active ? "0.7" : "1"} />
    </svg>
);
  
function Slideshow({ images, delay, captions }) {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div className="homeSlideshow">
            <div className="homeSlideshowWrapper">
                <div
                    className="homeSlideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image, i) => (
                    <div key={i} className={`homeSlide ${index === i ? "active-slide" : ""}`}>
                        <div className="homeImageWrapper">
                            <Image src={image} className="homeSlideImage" />
                        </div>
                        <div className="slideshowCaption">{captions[i]}</div>
                    </div>
                    ))}
                </div>
            </div>

        <div className="slideshowNavigationArrows">
            <div className="icon left" onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}>
                <ArrowIcon direction="left" />
            </div>
            <div className="icon right" onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}>
                <ArrowIcon direction="right" />
            </div>
        </div>

        <div className="homeSlideshowDots">
            {images.map((_, idx) => (
                <div
                key={idx}
                onClick={() => setIndex(idx)}
                style={{ cursor: "pointer", margin: "0 5px" }}
                >
                <DotIcon active={index === idx} />
                </div>
            ))}
        </div>
        </div>
    );
}

const slide_1 = 'https://shpeuf.s3.us-east-1.amazonaws.com/public/home/Home+Slideshow/Home+Slideshow+Image+1.png'
const slide_2 = 'https://shpeuf.s3.us-east-1.amazonaws.com/public/home/Home+Slideshow/Home+Slideshow+Image+2.png'
const slide_3 = 'https://shpeuf.s3.us-east-1.amazonaws.com/public/home/Home+Slideshow/Home+Slideshow+Image+3.png'

const slideDeck = [
    slide_1,
    slide_2,
    slide_3
];

const captions = [
    "\"Insert very cool quote on the impact SHPE had on me. This quote could be about the great opportunities that SHPE provides academically or for my professional career.\"",
    "\"Another testimonial about the awesome experiences and benefits gained through SHPE.\"",
    "\"Yet another impactful statement about the personal and professional growth thanks to SHPE.\""
];

const HomeSlideshow = () =>{
  return(
    <div className="homeBackgroundContainer">
        <div className="triangleBackground"></div>
        <Container className="homeSlideshowContainer">
            <Grid.Column width={16}>
                <h2 className="slideshowHeading">Hear From Us</h2>
                <Slideshow images={slideDeck} captions={captions} delay={5000} />
            </Grid.Column>
        </Container>
    </div>
  );
};

export default HomeSlideshow;