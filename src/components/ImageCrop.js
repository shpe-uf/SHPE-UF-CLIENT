import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function ImageCrop({ setPhotoFile, values, type, disabled }) {
  const [cropPhoto, setCropPhoto] = useState(null);
  const cropperRef = useRef(null);

  const photoSelectedHandler = useCallback((event) => {
    if (disabled) return;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCropPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [disabled]);

  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;

    if (cropper) {
      const canvas = cropper.getCroppedCanvas({ width: 500, height: 500 });
      if (canvas) {
        const url = canvas.toDataURL('image/jpeg', 0.5);
        return url;
      }
    }
    return null;
  };

  const setImage = () => {
    const croppedUrl = cropImage();
    if (croppedUrl) {
      if (type === 'corporation') values.logo = croppedUrl;
      else if (type === 'profile' || type === 'partner') values.photo = croppedUrl;
      else if (type === 'reimbursementR') values.receiptPhoto = croppedUrl;
      else if (type === 'reimbursementF') values.eventFlyer = croppedUrl;
      else values.picture = croppedUrl;

      setPhotoFile(croppedUrl);
      setCropPhoto(null); // Clear crop photo to hide the cropper
    }
  };

  const clearImage = () => {
    setCropPhoto(null);
  };

  // Reset crop photo when component type changes
  useEffect(() => {
    setCropPhoto(null);
  }, [type]);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={photoSelectedHandler}
        disabled={disabled}
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
          <div style={{ marginTop: 8 }}>
            <Button type="button" onClick={setImage}>
              Select
            </Button>
            <Button type="button" onClick={clearImage} style={{ marginLeft: 8 }}>
              Remove
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default ImageCrop;
