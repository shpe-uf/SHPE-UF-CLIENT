import React,{Component} from 'react'
import { Header, Menu, Segment, Image, Grid, Icon, Button, Divider, Message, Embed, List, Tab, Container } from 'semantic-ui-react';
import GBMSlidesAccordion from './GBMSlidesAccordion';
import PhotosDisplay from './PhotosDisplay';

const Freshman1011 = "https://shpeuf.s3.amazonaws.com/public/resources/F1011.jpg";
const Freshman1012 = "https://shpeuf.s3.amazonaws.com/public/resources/F1012.jpg";
const Playlist = "https://shpeuf.s3.amazonaws.com/public/resources/playlist.jpg";
const Podcast = "https://shpeuf.s3.amazonaws.com/public/resources/SHPECast.jpg";
const Spotify = "https://shpeuf.s3.amazonaws.com/public/resources/spotify.jpg";
const Stitcher = "https://shpeuf.s3.amazonaws.com/public/resources/stitcher.png";
const CrashCourse = "https://shpeuf.s3.amazonaws.com/public/resources/ConventionCrashCourse.jpg";
const GradSHPEresearch = "https://shpeuf.s3.amazonaws.com/public/resources/GradSHPEresearch.png";
const GradSHPEschool = "https://shpeuf.s3.amazonaws.com/public/resources/GradSHPEschool.png"

const GBMSlidesSegment = () => (
    <div>
        <br/>
        <b>Missed a GBM or want to see any slides again? Find all the slides from this year's SHPE UF GBMs here.</b>
        <Grid divided centered>
            <Grid.Column width={10}>
                <GBMSlidesAccordion/>
            </Grid.Column>
        </Grid>
    </div>
    
)

const F101Segment = () => (
    <div>
    <br/>
    <b>We know entering college can be a both exciting and overwhelming experience, so we got you covered! SHPE UF has put together this Freshman 101 Document Series with everything you should know as an incoming Gator. Learn from our members advice and what they wish they knew as first years!</b>
    <Grid divided centered>
        <Grid.Column width={5}>
            <h6>Getting Ready For UF</h6>
            <Image src={Freshman1011} as="a" size="medium" href="https://drive.google.com/file/d/1DnOL12oH4TSavsWHeANIKwDtNP6UphTw/view" target="_blank"/>
            <Divider/>
            <Button as='a' href='https://drive.google.com/file/d/1DnOL12oH4TSavsWHeANIKwDtNP6UphTw/view' target="_blank"><Icon name='download'/>Download Here</Button>
        </Grid.Column>
        <Grid.Column width={5}>
            <h6>Guide to Your First Semester</h6>
            <Image src={Freshman1012} as="a" href='https://drive.google.com/file/d/1C9MfDgC4eeU2waOI6f8vD8W4z9VTXNOr/view' target="_blank" size="medium" />
            <Divider/>
            <Button as='a' href='https://drive.google.com/file/d/1C9MfDgC4eeU2waOI6f8vD8W4z9VTXNOr/view' target="_blank"><Icon name='download'/>Download here</Button>
            </Grid.Column>
        <Grid.Column width={5}>
            <h6>Keep an eye out for more coming in the future.</h6>
        </Grid.Column>
    </Grid>
    </div>
)

const MediaSegment = ( ) => (
    <div>
    <Header block color='blue'>Playlist and Podcast</Header>
    <Grid divided stackable>
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
            <br/>
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
        <Grid.Column width={5}>
            <h4>Episodes</h4>
                <List divided relaxed>
                    <List.Item href='https://open.spotify.com/episode/7HLm0AsslxrRNGU2PEfh2u?si=707f1ebe40994a8b' target='_blank'>
                        <List.Icon name='spotify' color='black'/>
                        <List.Content><b># 4- SHPEitos Abroad: Insider Scoop</b></List.Content>
                    </List.Item>    
                    <List.Item href='https://open.spotify.com/episode/3Qn5iGwCRDFcmLb7NfcGTF?si=4b1fecd077bb423e' target='_blank'>
                        <List.Icon name='spotify' color='black'/>
                        <List.Content><b># 3- From Directors to E-board: The Experience</b></List.Content>
                    </List.Item>             
                    <List.Item href='https://open.spotify.com/episode/1BB4kWtxklQNztzt8RLUV7?si=6f3dfeaf3c15422f' target='_blank'>
                        <List.Icon name='spotify' color='black'/>
                        <List.Content><b># 2- What Had Happened Was: Crazy Stories</b></List.Content>
                    </List.Item>  
                    <List.Item href='https://open.spotify.com/episode/4jx5Gp9tpZyHKwvAbm7xCC?si=4ed1766417054c9a' target='_blank'>
                        <List.Icon name='spotify' color='black'/>
                        <List.Content><b># 1- Transitioning to College: Perfectly Imperfect</b></List.Content>
                    </List.Item>  
                </List>
        </Grid.Column>
    </Grid>
    {/* <Header block color='blue'>Photos</Header>
    <b>See photos from various SHPE UF events!</b>
    <Grid divided columns={3} stackable>
        <Grid.Column>
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
                <List.Item href='https://drive.google.com/drive/folders/1i8CigEQal-ZJbx4dkPICYtbQDWBXhIst?usp=sharing' target='_blank'>
                    <b>GFT Bingo</b>
                </List.Item>
                <List.Item href='https://drive.google.com/drive/folders/17-acVEIDQRlr6YslWaSONQYNCbhx2k58?usp=sharing' target='_blank'>
                    <b>MasterSHPE</b>
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
                    <b>LeaderSHPE</b>
                </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column>
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
        </Grid.Column>
        <Grid.Column width={4}>
            <PhotosDisplay/>
        </Grid.Column>
    </Grid> */}
    </div>
)

// const CorporateSegment = () => (
//     <div>
//         <br/>
//         <b>Take advantage of our corporate resources to help you advance your professional career!</b>
//         <Divider horizontal>Convention Crash Course</Divider>
//         <Segment inverted>
//             <Embed
//             autoplay={false}
//             hd={true}
//             id='SK3FSh8f32o'
//             placeholder={CrashCourse}
//             source='youtube'
//             />
//         </Segment>
//         <Divider/>
//         <List animated>
//             <List.Item href='https://drive.google.com/drive/folders/1QsdfYtPfIhJkGTYfrep04DLOeBtf8X1G?usp=sharing' target='_blank'>
//                 <b>Bootcamp Workshop Slides</b>
//             </List.Item>
//             <List.Item href='https://docs.google.com/spreadsheets/d/1Ioi_U7l0gLhKZmeUtsWUR3qgjiG1PG_no9ID_2ZDe78/edit?usp=sharing' target='_blank'>
//                 <b>SHPEito LinkedIn Hub</b>
//             </List.Item>
//             <List.Item href='https://drive.google.com/drive/folders/1fAvthXv0F-dpHelVFYl_4NI2l_gOtoL4?usp=sharing' target='_blank'>
//                 <b>LinkedIn SHPE Banners</b>
//             </List.Item>
//             <List.Item href='https://docs.google.com/document/d/1HLDXHC0v_zzPuvR-t9SSbrt8qGsKVQTZ5Q-gcEKJTQA/edit?usp=sharing' target='_blank'>
//                 <b>Behavioral Interview Sample Questions</b>
//             </List.Item>
//             <List.Item href='https://drive.google.com/drive/folders/1gEGK280Y_oKACfFF_od9I-JC2gINS_3t?usp=sharing' target='_blank'>
//                 <b>Sample Resume Drive</b>
//             </List.Item>
//             <List.Item href='https://shpebbq.weebly.com/' target='_blank'>
//                 <b>BBQ With Industry Website</b>
//             </List.Item>
//         </List>
//     </div>
// )

const LinksSegment = () => (
    <div>
        <br/>
        <b>Checkout some of our additional resources with these links!</b>
        <Divider/>
        <List animated>
            <List.Item href='https://linktr.ee/shpeuf?utm_source=linktree_profile_share&ltsid=606e08cd-0cad-412b-a9f8-252541adacc8 ' target='_blank'>
                <b>Central SHPE UF Linktree</b>
            </List.Item>
            <List.Item href='https://linktr.ee/shpeufconvention' target='_blank'>
                <b>National Convention Linktree</b>
            </List.Item>
            <List.Item href='https://linktr.ee/shpeufbootcamp' target='_blank'>
                <b>Professional Development & Resources</b>
            </List.Item>
            <List.Item href='https://drive.google.com/drive/folders/1AP0N79ZLef9ilpCrp_hZR6uxHCGJoUvX' target='_blank'>
                <b>Academic SHPEducation Resources</b>
            </List.Item>
            <List.Item href='https://linktr.ee/gradshpeuf' target='_blank'>
                <b>Graduate School & Research Resources</b>
            </List.Item>
            <List.Item href='https://drive.google.com/drive/folders/1PPqsURVaA1sOufVkdfjrgcwaXpGocBSO' target='_blank'>
                <b>SHPE Jr & Highschool Development Resources</b>
            </List.Item>
            <List.Item href='https://linktr.ee/shpeufchats' target='_blank'>
                <b>SHPE Whatsapp Group Chats</b>
            </List.Item>
            <List.Item href='https://linktr.ee/shpeufphotos' target='_blank'>
                <b>Event Photos</b>
            </List.Item>
        </List>
    </div>
)

const GradSegment = () => (
    <div>
    <br/>
    <b>Want to delve deeper into the wonderful world of research and graduate studies? These documents will answer all of your questions when it comes to getting involved and succeeding as a researcher or graduate student!</b>
    <Grid divided centered>
        <Grid.Column width={5}>
            <h6>Research Essentials</h6>
            <Image src={GradSHPEresearch} as="a" size="medium" href="https://drive.google.com/file/d/1DnOL12oH4TSavsWHeANIKwDtNP6UphTw/view" target="_blank"/>
            <Divider/>
            <Button as='a' href='https://drive.google.com/file/d/1DnOL12oH4TSavsWHeANIKwDtNP6UphTw/view' target="_blank"><Icon name='download'/>Download Here</Button>
        </Grid.Column>
        <Grid.Column width={5}>
            <h6>Gradschool Essentials</h6>
            <Image src={GradSHPEschool} as="a" href='https://drive.google.com/file/d/1C9MfDgC4eeU2waOI6f8vD8W4z9VTXNOr/view' target="_blank" size="medium" />
            <Divider/>
            <Button as='a' href='https://drive.google.com/file/d/1C9MfDgC4eeU2waOI6f8vD8W4z9VTXNOr/view' target="_blank"><Icon name='download'/>Download here</Button>
            </Grid.Column>
        {/*<Grid.Column width={5}>
            <h6>Keep an eye out for more coming in the future.</h6>
        </Grid.Column>*/}
    </Grid>
    </div>
)

const OpenRow = ({ rowName }) => {
    if(rowName == 'Freshman 101 Slides') {
        return <F101Segment />
    } 
    if(rowName == 'SHPE UF Media') {
        return <MediaSegment/>
    } 
    if(rowName == 'GBM Slides') {
        return <GBMSlidesSegment />
    } 
    // if(rowName == 'Corporate')
    //     return <CorporateSegment />
    if(rowName == 'Links') {
        return <LinksSegment />
    }
    if(rowName == 'GradSHPE 101') {
        return <GradSegment />
    }
}


const panes = [
    { menuItem: 'GBM Slides', render: () => <Tab.Pane><OpenRow rowName={ 'GBM Slides' }/></Tab.Pane> },
    { menuItem: 'Freshman 101 Slides', render: () => <Tab.Pane><OpenRow rowName={ 'Freshman 101 Slides' }/></Tab.Pane> },
    { menuItem: 'GradSHPE 101', render: () => <Tab.Pane><OpenRow rowName={ 'GradSHPE 101' }/></Tab.Pane> },
    { menuItem: 'SHPE UF Media', render: () => <Tab.Pane><OpenRow rowName={ 'SHPE UF Media' }/></Tab.Pane> },
    //{ menuItem: 'Corporate', render: () => <Tab.Pane><OpenRow rowName={ 'Corporate' }/></Tab.Pane> },
    { menuItem: 'Links', render: () => <Tab.Pane><OpenRow rowName={ 'Links' }/></Tab.Pane> },
    
  ]

export default class ResourcesMenu extends Component {
    
    render() {
        return (
            <div class="wrap">
                <Container stackable>
                    <Tab menu={{ stackable: true, tabular: true, attached: true }} panes={panes}/>
                </Container>
            </div>
        )
    }
}
