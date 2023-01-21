import React,{Component} from 'react'
import { Header, Menu, Segment, Image, Grid, Icon, Button, Divider, Message, Container, GridColumn, Reveal, List } from 'semantic-ui-react'
  
import Freshman1011 from "../assets/images/resources/F1011.jpg"
import Freshman1012 from "../assets/images/resources/F1012.jpg"
import Playlist from "../assets/images/resources/playlist.jpg"
import Podcast from "../assets/images/resources/SHPECast.jpg"
import Infoslides from "../assets/images/resources/info.jpg"
import Spotify from "../assets/images/resources/spotify.jpg"
import Stitcher from "../assets/images/resources/stitcher.png"
import Facebook from "../assets/images/resources/facebook.png"
import Instagram from "../assets/images/resources/instagram.jpg"
import Tiktok from "../assets/images/resources/tiktok.png"
import LinkedIn from "../assets/images/resources/linkedin.png"
import WhatsApp from "../assets/images/resources/whatsapp.png"

import GBMSlidesAccordion from './GBMSlidesAccordion'

function photoSelect ( ){
    const photos = new Map();

    photos.set(1, '1__i_5ENs2gdHkXSRfZd9d0Fox0erbEuA'); //Gala
    photos.set(2, '1wE6ZXyC600xNo-r37jZoHytEdnqVwkBC'); //Mural Day
    photos.set(3, '14Ovwn9bvb7wBlO_7HR0VG4JC8r5XbNgQ'); //GFT 2022
    photos.set(4, '1ioGpktv64eNRyMNHJ-MQ0qPeEWLp4Eka'); //Pie the E-Board
    photos.set(5, '1C2XFGooHAzfLDWGULiIFeNsRn2IPP2OC'); //BBQ without industry
    photos.set(6, '1ZZKwUf--9H2yj2DcjLFUXXztBDb_-pxW'); //ShadowSHPE
    photos.set(7, '1T80VJJyhkQVaqiTbn2bXM9QQqnExdB7f'); //Beyond LeaderSHPE 1
    photos.set(8, '1uHFU7Ix5q7FW6FgxDhdlAJTyd4FsQAyD'); //Spring 2022 GBM 3
    photos.set(9, '1yXJ7utrPKUGPNq6JUga-1WIP10ZTNJp7'); //LeaderSHPE Fall 2022
    photos.set(10, '1dO51k-NaFmpVwDft9WY_gx0QKXY4EHLZ'); //SHProm 2022


    let index = Math.floor(Math.random() * 10)

    console.log(index)

    return 'https://drive.google.com/uc?export=view&id=' + photos.get(index)

}
    

    


const PhotoSegment = () => (
    <div>
    <Header block color='blue'>Photos</Header>
    <b>See photos from various SHPE UF events!</b>
    <Grid divided columns={3}>
    <GridColumn>
    <b>Spring 2022</b>
    <List animated>
        <List.Item href='https://drive.google.com/drive/folders/17KmyqavvRrn9rfnldstT6uRUil051G6Y' target='_blank'>
            <b>Gala</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1UZQoHdAT3qE3cZK2RH4AgZ8OSJeeLphr' target='_blank'>
            <b>Mural Day</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1PBQLN4uMLUsdzGMCUpAeMlcGot0mYPq8' target='_blank'>
            <b>Elections GBM</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/15FxSRMkx6hcp-NUlsgixOmYilhdvlQ95?usp=sharing' target='_blank'>
            <b>FYLP Painting Social</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1HsuJ1lcdz9d0YxDr3DDtchu_N2hJpNvI?usp=sharing' target='_blank'>
            <b>SHPE Tank</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1OpxGLrLIS-LzFo2ncQc7_VXYOJDqskeQ?usp=sharing' target='_blank'>
            <b>GFT</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1wFL0qbD00KB3ZtV3b73I1zcfO_OxOCjf?usp=sharing' target='_blank'>
            <b>Pie The E-board</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1IsEj3jztpejqgrqWsT580ebYF1pvpzzw?usp=sharing' target='_blank'>
            <b>Spring 2022 GBM #5</b>
        </List.Item>
        <Menu.Item href='https://drive.google.com/drive/folders/1i8CigEQal-ZJbx4dkPICYtbQDWBXhIst?usp=sharing' target='_blank'>
            <b>GFT Bingo</b>
        </Menu.Item>
        <List.Item href='https://drive.google.com/drive/folders/17-acVEIDQRlr6YslWaSONQYNCbhx2k58?usp=sharing' target='_blank'>
            <b>Master SHPE</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1SKm4Q1K5nE8Ex9dvuaN0Hh1G8fUDS7-L?usp=sharing' target='_blank'>
            <b>Spring 2022 GBM #4</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/11-qJYvqSwg658qNpXNWji0ERvnjUX__5?usp=sharing' target='_blank'>
            <b>Spring 2022 GBM #3</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1NGHUG6P4LYY_Ll1GBX9EksaSB7eUmyqJ?usp=sharing' target='_blank'>
            <b>Valentines Day Social</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1_ndcDOr9zR7gEX3RaYi4qPOper1uqP6W?usp=sharing' target='_blank'>
            <b>ShadowSHPE</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1VASympblkIO2u167EWggrbUf0iUey9EJ?usp=sharing' target='_blank'>
            <b>BBQ Without Industry</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1PNHKA1-mCc603EsnBhzaQN5BGKOqGrEi?usp=sharing' target='_blank'>
            <b>Leader SHPE</b>
        </List.Item>
    </List>
    </GridColumn>
    <GridColumn>
    <b>Fall 2022</b>
    <List animated>
        <List.Item href='https://drive.google.com/drive/folders/1pyc9Q1w-_qOwAUdhy9NLZhR9K9JHLNso?usp=share_link' target='_blank'>
            <b>SHPROM 2022</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1mJqrtauD6HU6zYe23ZOSnxoJjGSWwvbw?usp=share_link' target='_blank'>
            <b>Fall 2022 GBM #6</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1YsGbDrwxr0etSG55vJmtzjRMwLL_kzKb?usp=share_link' target='_blank'>
            <b>Bootcamp #3</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/14C6RXARf8mUtO02h_6IzNJ8XfMe6E3kR?usp=share_link' target='_blank'>
            <b>Fall 2022 GBM #3</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1Iu6RjLXTp_ronvESY_SefYyK9_C3hJSG?usp=share_link' target='_blank'>
            <b>Fall 2022 GBM #2</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1ozXrQ_SmGPLR-NUwbXmTSLVRgImkDsH6?usp=share_link' target='_blank'>
            <b>Graduates Meet and Greet</b>
        </List.Item>
        <List.Item href='https://drive.google.com/drive/folders/1Mued25-ujpxJcaBtadPHRn7HtkE9ERuV?usp=share_link' target='_blank'>
            <b>Study Abroad Info Session 2022</b>
        </List.Item>
        <Menu.Item href='https://drive.google.com/drive/folders/1yIkGUd2VqTCr8hKI1C7npFzOKYlR4zRu?usp=share_link' target='_blank'>
            <b>Beyond LeaderSHPE #1</b>
        </Menu.Item>
        <List.Item href='https://drive.google.com/drive/folders/1FCHDFyf7gkh-81Vb-PaUN-mFGYstpTcf?usp=share_link' target='_blank'>
            <b>LeaderSHPE Fall 2022</b>
        </List.Item>
    </List>
    </GridColumn>
    <GridColumn>
        {/*<Reveal animated='move' disabled>
            <Reveal.Content visible>
                <Image src={photoSelect()} alt="drive image" size='medium' />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image src={photoSelect()} alt="drive image" size='medium' />
            </Reveal.Content>
        </Reveal>*/}
        <Image src={photoSelect()} alt="drive image" size='medium' />
        <b>Have pictures of your own from any events? Send them here.</b>
    </GridColumn>
    </Grid>
    <h6>SHPE UF Info Slides</h6>
    <Grid divided>
        <Grid.Column width={5}>
            <Image src={Infoslides} as="a" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank"/>
        </Grid.Column>
        <Grid.Column width={8}>
            <b>WANT TO MORE INFORMATION ON THESE OPPORTUNITIES?</b>
            <p>Check out our SHPE UF: Info Slides to learn more about the programs, events, and opportunities like the ones above!</p>
            <br/><br/><br/>
            <Button icon labelPosition='left' as='a' href='https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf' target='_blank'>
                <Icon name='download' />
                Download Here
            </Button>
        </Grid.Column>
    </Grid>
    </div>
)

const F101Segment = () => (
    <div>
    <Header block color='blue'>Freshman 101 Slides</Header>
    <Grid divided>
        <Grid.Column width={4}>
        <h6>Getting Ready For UF</h6>
        <Image src={Freshman1011} as="a" size="medium" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_c768d6e0b4e2454fba4d3dc890b27041.pdf" target="_blank"/>
        <Divider/>
        <Button as='a' href='https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_c768d6e0b4e2454fba4d3dc890b27041.pdf' target="_blank"><Icon name='download'/>Download Here</Button>
        </Grid.Column>
        <Grid.Column width={5}>
        <h6>Guide to Your First Semester</h6>
        <Image src={Freshman1012} as="a" size="medium" />
        <br/>
        <b>Not out yet.</b>
        </Grid.Column>
        <Grid.Column width={7}>
        <h6>Keep an eye out for more coming in the future.</h6>
        </Grid.Column>
    </Grid>
    </div>
)


const MediaSegment = () => (
    <div>
    <Header block color='blue'>SHPE UF Media</Header>
    <Grid divided compact>
        <Grid.Column width={5}>
        <h4>SHPlaylist Vol2: Volvimos</h4>
        <Image src={Playlist} as="a" size="medium" href="https://open.spotify.com/playlist/0n5zoBgHE6CEnaZKAa6oSK" target="_blank"/>
        <br/>
        <b>Enjoy the official SHPE UF curated playlist</b>
        <a class="extra" href="https://open.spotify.com/playlist/0n5zoBgHE6CEnaZKAa6oSK" target="_blank"><b> here!</b></a>
        </Grid.Column>
        <Grid.Column width={5}>
        <h4>SHPECast: Beyond Engineering</h4>
        <Image src={Podcast} as="a" size="medium" href="https://open.spotify.com/show/5RRjRsetNYP2UYDXr6hlsC" target="_blank"/>
        <br/>
        <b>In SHPECast: Beyond Engineering, University of Florida's SHPEitos talk about topics that go beyond engineering, give advice, and have fun with their SHPE Familia.</b>
        <Menu compact>
        <Menu.Item href='https://open.spotify.com/show/5RRjRsetNYP2UYDXr6hlsC' target='_blank'>
            <Image src={Spotify} avatar/>
            <b>Spotify</b>
        </Menu.Item>
        <Menu.Item href='https://listen.stitcher.com/yvap/?af_dp=stitcher://show/657597&af_web_dp=https://www.stitcher.com/show/657597' target='_blank'>
            <Image src={Stitcher} avatar/>
            <b>Stitcher</b>
        </Menu.Item>
        </Menu>
        </Grid.Column>
        <Grid.Column>
            <h4>Episodes</h4>
            <Menu vertical >
                <Menu.Item href='https://open.spotify.com/episode/3Qn5iGwCRDFcmLb7NfcGTF?si=pj9mlR59SVm9FOrdPMyQXg' target='_blank'>
                    <Message><h6>#3</h6><b>From Directors to E-board: The Experience</b></Message>
                </Menu.Item>
                <Menu.Item href='https://open.spotify.com/episode/1BB4kWtxklQNztzt8RLUV7?si=8zj-PqyrSvi-rdTqwA7BlQ' target='_blank'>
                    <Message><h6>#2</h6><b>What Had Happened Was: Crazy Stories</b></Message>
                </Menu.Item>
                <Menu.Item href='https://open.spotify.com/episode/4jx5Gp9tpZyHKwvAbm7xCC?si=MUoXv49CQXC3SjCRhd3nzg' target='_blank'>
                <Message><h6>#1</h6><b>Transitioning to College: Perfectly Imperfect</b></Message>
                </Menu.Item>
            </Menu>
        </Grid.Column>
    </Grid>
    </div>
)

const SocialMediaSegment = () => (
    <div>
        <Header block color='blue'>Social Media</Header>
        <h6>Follow SHPE UF on Social Media</h6>
        <p>Stay up to date with all our events and opportunities.</p>
        <Menu compact>
            <Menu.Item href='https://www.facebook.com/groups/SHPEUF/' target='_blank'>
            <Segment textAlign='right'>
                <Image src={Facebook} avatar floated='left'/>
                <h5>SHPE UF</h5>
            </Segment>
            </Menu.Item>
            <Menu.Item href='https://instagram.com/shpeuf' target='_blank'>
                <Segment textAlign='right'>
                <Image src={Instagram} avatar floated='left'/>
                <h5>shpeuf</h5>
                </Segment>
            </Menu.Item>
            <Menu.Item href='https://tiktok.com/@byshpeitos' target='_blank'>
                <Segment textAlign='right'>
                <Image src={Tiktok} avatar floated='left'/>
                <h5>bySHPEitos</h5>
                </Segment>
            </Menu.Item>
            <Menu.Item href='https://www.linkedin.com/company/shpeuf/' target='_blank'>
                <Segment>
                <Image src={LinkedIn} avatar floated='left'/>
                <h5>UFSHPE</h5>
                </Segment>
            </Menu.Item>
            <Menu.Item href='https://www.linkedin.com/company/shpeuf/' target='_blank'>
                <Segment>
                <Image src={WhatsApp} avatar floated='left'/>
                <h5>UFSHPE</h5>
                </Segment>
            </Menu.Item>
        </Menu>
    </div>
)

const GBMSlidesSegment = () => (
    <div>
        <Header block color='blue'>GBM Slides</Header>
        <GBMSlidesAccordion/>
    </div>
    
)

const OpenRow = ({ rowName }) => {
    if(rowName == 'Freshman 101 Slides') {
        return <F101Segment />
    } 
    if(rowName == 'Photos') {
        return <PhotoSegment />
    }
    if(rowName == 'SHPE UF Media') {
        return <MediaSegment/>
    } 
    if(rowName == 'Social Media') {
        return <SocialMediaSegment/>
    }
    if(rowName == 'GBM Slides') {
        return <GBMSlidesSegment />
    } 
    return <F101Segment />
}


export default class ResourcesMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeRow: 'Freshman 101 Slides'
        }
    }
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeRow: name })
    

    render() {
        const { activeRow } = this.state
    
        return (
            <div>
        <Menu>
            <Menu.Item 
            name='Freshman 101 Slides'
            active={activeRow === 'Freshman 101 Slides'}
            onClick={this.handleItemClick}>
            {<h5>Freshman 101 Slides</h5>}
            </Menu.Item>
            <Menu.Item 
            name='Photos'
            active={activeRow === 'Photos'}
            onClick={this.handleItemClick}>
            {<h5>SHPE UF Photos</h5>}
            </Menu.Item>
            <Menu.Item 
            name='SHPE UF Media'
            active={activeRow === 'SHPE UF Media'}
            onClick={this.handleItemClick}>
            {<h5>SHPE UF Media</h5>}
            </Menu.Item>
            <Menu.Item 
            name='Social Media'
            active={activeRow === 'Social Media'}
            onClick={this.handleItemClick}>
            {<h5>Social Media</h5>}
            </Menu.Item>
            <Menu.Item 
            name='GBM Slides'
            active={activeRow === 'GBM Slides'}
            onClick={this.handleItemClick}>
            {<h5>GBM Slides</h5>}
            </Menu.Item>
            <Menu.Item 
            active={activeRow === 'Relevant Links'}
            onClick={this.handleItemClick}
            disabled>
            </Menu.Item>
            <Menu.Item 
            active={activeRow === 'Relevant Links'}
            onClick={this.handleItemClick}
            disabled>
            </Menu.Item>
            <Menu.Item 
            active={activeRow === 'Relevant Links'}
            onClick={this.handleItemClick}
            disabled>
            </Menu.Item>
        </Menu>
        <div>
        <Segment>
            <OpenRow rowName={ activeRow }/>
        </Segment>
        </div>
            </div>
        )
    }
}