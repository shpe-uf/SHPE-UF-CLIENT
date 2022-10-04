import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCrop(props) {

  const [cropPhoto, setCropPhoto] = useState(null);
  const [croppedUrl, setCroppedUrl] = useState(null);
  const [crop, setCrop] = useState({unit: '%', width: 30, aspect: 1/1});
  const [imageRef, setImageRef] = useState(null);

  function photoSelectedHandler(event) {
    if (event.target.files.length > 0) {
      let a = new FileReader();
      a.readAsDataURL(event.target.files[0]);
      a.onload = function (e) {
        setCropPhoto(e.target.result);
      };
    }
  }

  function setImage() {
    setCrop({unit: '%', width: 30, aspect: 1/1});
    setCropPhoto(null);
    if (props.type === 'corporation') {
      props.values.logo = croppedUrl;
      props.setPhotoFile(croppedUrl);
    } else if(props.type === 'profile') {
      props.values.photo = croppedUrl;
      props.setPhotoFile(croppedUrl);
    } else if(props.type === 'reimbursementR') {
      props.values.receiptPhoto = croppedUrl;
      props.setPhotoFile(croppedUrl);
    }  else if(props.type === 'reimbursementF') {
      props.values.eventFlyer = croppedUrl;
      props.setPhotoFile(croppedUrl);
    }
  }

  function getCroppedImg(image, crop) {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      )
      setCroppedUrl(canvas.toDataURL("image/jpeg"))
  }

  return (
    <>
      <Form.Input
        type="file"
        label="Photo"
        error={props.errors.photo ? true : false}
        onChange={(() => props.onChange, photoSelectedHandler)}
      />
      {cropPhoto && 
        <>
          <ReactCrop
            src={cropPhoto}
            crop={crop}
            onImageLoaded={(photo) => setImageRef(photo)}
            onComplete={(crop) => (imageRef && crop.width && crop.height) && getCroppedImg(imageRef, crop)}
            onChange={(crop) => setCrop(crop)}
          />
          <Button
            onClick={()=>setImage()}
          >
            Select
          </Button>
        </>
      }
    </>
  )
}

export default ImageCrop;