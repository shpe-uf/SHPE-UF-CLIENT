import React,{Component} from 'react'
import { Divider, Button, Segment, Image, Reveal, Container } from 'semantic-ui-react'

const photoLinks = [
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/BC.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/BLSHPE.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/FGBM2.jpg",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/FGBM3.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/FGBM6.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/GMG.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/LSHPE.jpg",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/SAIS.jpg",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/SHPROM.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/BLSHPE2.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/LSHPE2.jpg",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/GMG2.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/MD.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/PIE.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/FYLPPS.JPG",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/GALA.jpg",
  "https://shpeuf.s3.amazonaws.com/public/resources/photosdisplay/FGBM62.jpg"
];

function photoSelect ( ){
    const photos = new Map();

    photos.set(0, photoLinks[0]); 
    photos.set(1, photoLinks[1]); 
    photos.set(2, photoLinks[2]); 
    photos.set(3, photoLinks[3]); 
    photos.set(4, photoLinks[4]); 
    photos.set(5, photoLinks[5]); 
    photos.set(6, photoLinks[6]); 
    photos.set(7, photoLinks[7]); 
    photos.set(8, photoLinks[8]); 
    photos.set(9, photoLinks[9]); 
    photos.set(10, photoLinks[10]); 
    photos.set(11, photoLinks[11]); 
    photos.set(12, photoLinks[12]); 
    photos.set(13, photoLinks[13]); 
    photos.set(14, photoLinks[14]); 
    photos.set(15, photoLinks[15]); 
    photos.set(16, photoLinks[16]);


    let index = Math.floor(Math.random() * 14)

    return photos.get(index)
}


const PhotosDisplay = () => (
  <div>
    <Container>
      <Image src={photoSelect()} fluid/>
    </Container>
  </div>
  )

  export default PhotosDisplay