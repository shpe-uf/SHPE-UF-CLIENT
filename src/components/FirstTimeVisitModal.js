import React, { useState, useEffect } from 'react';
import { 
    Button,
    Header,
    Icon,
    Modal,
    Image,
    Grid 
} from 'semantic-ui-react';

function FirstTimeVisitModal() {
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const visited = sessionStorage.getItem('visited');
        if (!visited){
            setOpen(true);
            sessionStorage.setItem('visited', 'true');
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

return (

    <Modal
    onClose={handleClose}
    open={open}
    size="small"
    //className="app-download-modal"
    style={{
        backgroundColor: '#2d2d2d',
        color: '#fff',
        borderRadius: '10px',
      }}
    >
        <Modal.Header style={{ backgroundColor: 'rgb(0, 77, 115)', color: '#fff' }}>
            Welcome to the SHPE UF Website! 
            <Button icon="close" color="grey" onClick={handleClose} />
        </Modal.Header>
        <Modal.Content image style={{ padding: '20px', color: 'grey' }}>
            <Grid>
                <Grid.Column width={5}>
                    <Image 
                    size="medium"
                    //src="src/assets/images/about.js" 
                    src="https://shpeuf.s3.amazonaws.com/public/about/about.jpg" // here do the AWS bucket link
                    style={{ maxHeight: '150px' }}
                    wrapped />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Header style={{ color: '#fff' }}>Download our Mobile app on Appstore or Playstore</Header>
                    <p>Get a better experience with our mobile app. Download now for exclusive features and content!</p>
                </Grid.Column>
            </Grid>
        </Modal.Content>
        <Modal.Actions style={{ backgroundColor: 'rgb(0, 77, 115)', padding: '15px' }}>
        <Button
          style={{ backgroundColor: '#21ba45', color: '#fff' }}
          color="orange"
          onClick={() => window.open('https://play.google.com/store', '_blank')}
        >
          <Icon name="android" /> Download for Android
        </Button>
        <Button
          style={{
            backgroundColor: '#555',
            color: '#fff',
            marginLeft: '10px',
          }}
          // color="green"
          onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
        >
          <Icon name="apple" /> Download for IOS
        </Button>
            {/* <Button color="green" onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}>
                <Icon name="download" /> Download App
            </Button> */}
            {/* <Button color="grey" onClick={handleClose}>
                <Icon name="close" /> Maybe Later
            </Button> */}
        </Modal.Actions>
    </Modal>
);
}

export default FirstTimeVisitModal;