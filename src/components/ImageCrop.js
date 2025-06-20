import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function ImageCrop(props) {
  const [cropPhoto, setCropPhoto] = useState(null);
  const [croppedUrl, setCroppedUrl] = useState(null);
  const cropperRef = useRef(null);

  const photoSelectedHandler = useCallback((event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCropPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;

    if (cropper) {
      const canvas = cropper.getCroppedCanvas({ width: 500, height: 500 });
      if (canvas) {
        const url = canvas.toDataURL('image/jpeg', 0.5);
        setCroppedUrl(url);
        return url;
      }
    }
    return null;
  };

  const setImage = () => {
    const croppedUrl = cropImage();
    if (croppedUrl) {
      if (props.type === 'corporation') {
        props.values.logo = croppedUrl;
        props.setPhotoFile(croppedUrl);
      } else if (props.type === 'profile') {
        props.values.photo = croppedUrl;
        props.setPhotoFile(croppedUrl);
      } else if (props.type === 'reimbursementR') {
        props.values.receiptPhoto = croppedUrl;
        props.setPhotoFile(croppedUrl);
      } else if (props.type === 'reimbursementF') {
        props.values.eventFlyer = croppedUrl;
        props.setPhotoFile(croppedUrl);
      } else if (props.type === 'partner') {
        props.values.photo = croppedUrl;
        props.setPhotoFile(croppedUrl);
      }
      setCropPhoto(null); // Clear crop photo to hide the cropper
    }
  };

  // Reset crop photo and cropped URL when props change
  useEffect(() => {
    setCropPhoto(null);
    setCroppedUrl(null);
  }, [props.values.logo, props.type]);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={photoSelectedHandler}
      />
      {cropPhoto && (
        <>
          <Cropper
            src={cropPhoto}
            style={{ height: 400, width: '100%' }}
            initialAspectRatio={1}
            aspectRatio={1}
            guides={false}
            ref={cropperRef}
          />
          <Button
            type="button"
            onClick={setImage}
          >
            Select
          </Button>
        </>
      )}
      {croppedUrl && (
        <div>
          <img src={croppedUrl} alt="Cropped" style={{ width: '100%' }} />
        </div>
      )}
    </>
  );
}

export default ImageCrop;
