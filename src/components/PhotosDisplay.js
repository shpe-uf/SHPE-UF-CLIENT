import React,{Component} from 'react'
import { Divider, Button, Segment, Image, Reveal, Container } from 'semantic-ui-react'

import a from "../assets/images/photosdisplay/BC.png"
import b from "../assets/images/photosdisplay/BLSHPE.png"
import c from "../assets/images/photosdisplay/FGBM2.jpg"
import d from "../assets/images/photosdisplay/FGBM3.png"
import e from "../assets/images/photosdisplay/FGBM6.png"
import f from "../assets/images/photosdisplay/GMG.png"
import g from "../assets/images/photosdisplay/LSHPE.jpg"
import h from "../assets/images/photosdisplay/SAIS.jpg"
import i from "../assets/images/photosdisplay/SHPROM.png"
import j from "../assets/images/photosdisplay/BLSHPE2.png"
import k from "../assets/images/photosdisplay/LSHPE2.jpg"
import l from "../assets/images/photosdisplay/GMG2.png"
import m from "../assets/images/photosdisplay/MD.png"
import n from "../assets/images/photosdisplay/PIE.png"
import o from "../assets/images/photosdisplay/FYLPPS.png"
import p from "../assets/images/photosdisplay/GALA.jpg"
import q from "../assets/images/photosdisplay/FGBM62.jpg"

function photoSelect ( ){
    const photos = new Map();

    photos.set(0, a); 
    photos.set(1, b); 
    photos.set(2, c); 
    photos.set(3, d); 
    photos.set(4, e); 
    photos.set(5, f); 
    photos.set(6, g); 
    photos.set(7, h); 
    photos.set(8, i); 
    photos.set(9, j); 
    photos.set(10, k); 
    photos.set(11, l); 
    photos.set(12, m); 
    photos.set(13, n); 
    photos.set(14, o); 
    photos.set(15, p); 
    photos.set(16, q);


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