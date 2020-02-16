import React from 'react';
import {Grid, Divider} from "@material-ui/core";
import {TEXTURES, BACKGROUNDS} from "./../utils/MinecraftImages";
import {ServersStyles} from "../styles/ServersStyles";
import Theme from './../styles/Theme';

export default class ServersScreen extends React.Component {

    state = {
        width: 1920,
        height: 1080,
        minCardWidth: 495,
        cardWidth: 495,
        cardHeight: 160,
        margins: 51,
        renderXSGrid: false
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    statusColor = (status) => {
        return status === 'ONLINE' ? Theme.greenColor : status === 'ERROR' ? Theme.warningColor : Theme.redColor;
    };

    updateWindowDimensions = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let renderAreaWidth = width * 0.88;
        let renderAreaHeight = height * 0.94;
        let minCardWidth = 495;
        let minCardHeight = 160;

        let renderXSGrid = width < minCardWidth;
        let cardHeight = renderAreaHeight / Math.floor(renderAreaHeight / minCardHeight);

        let cardWidth = renderXSGrid ? renderAreaWidth - 100 : minCardWidth;
        let cardCapacity = renderXSGrid ? 1 : Math.floor(renderAreaWidth / cardWidth);
        let margins = renderXSGrid ? 50 : (renderAreaWidth - (cardWidth * cardCapacity)) / (cardCapacity + 1);

        this.setState({width, height, renderXSGrid, cardWidth, cardHeight, margins});
    };

    serverInstance = (icon, background, name, ip, status, ram, storage, id) => {
        let {renderXSGrid, cardWidth, cardHeight, margins} = this.state;
        let textStyle = {fontSize: renderXSGrid ? '0.70em' : 18, margin: 0};

        return (
            <Grid sm={renderXSGrid} item style={{...ServersStyles.serverCard, width: cardWidth, height: cardHeight, marginRight: margins}} direction='column'>
                <div className='serverCard' style={{...ServersStyles.cardHeader, borderTop: '4px solid ' + this.statusColor(status)}}>
                    <div style={ServersStyles.serverInfo}>
                        <img src={icon} style={ServersStyles.serverIcon} alt='' />
                        <span style={{paddingLeft: 10}}>
                            <p style={textStyle}>{name}</p>
                            <p style={textStyle}>IP: {ip}</p>
                        </span>
                    </div>

                    <div style={{...ServersStyles.serverStatus, backgroundColor: this.statusColor(status)}}>
                        <p style={textStyle}>{status}</p>
                    </div>
                </div>

                <div style={{...ServersStyles.cardFooter, backgroundImage: 'url(' + background + ')'}}>

                    <div style={ServersStyles.gameLogo}>
                        <img src='/assets/images/minecraft/minecraft.png' style={{width: '40%'}} alt='' />
                        <Divider variant='middle'  />
                    </div>
                    <div style={ServersStyles.serverSpecs}>
                        <p style={{fontSize: renderXSGrid ? '0.75em' : 18, paddingLeft: 10, paddingRight: 10}}><i className='fas fa-memory' /> {ram} GB</p>
                        <p style={{fontSize: renderXSGrid ? '0.75em' : 18, paddingLeft: 10, paddingRight: 10}}><i className='fas fa-hdd' /> {storage} GB</p>
                        <p style={{fontSize: renderXSGrid ? '0.75em' : 18, paddingLeft: 10, paddingRight: 10}}><i className='fas fa-fingerprint' /> ID: {id}</p>
                    </div>
                </div>
            </Grid>
        );
    };

    render() {
        let {margins} = this.state;

        return (
            <div style={ServersStyles.serversBody}>
                <Grid container direction='row' wrap='wrap' style={{...ServersStyles.serversGrid, paddingLeft: margins}}>
                    {this.serverInstance(TEXTURES.IRON, BACKGROUNDS.BLURRED1, 'Server 1', '30.99.244.213:35567', 'ONLINE', '8', '50', '654812')}
                    {this.serverInstance(TEXTURES.DIAMOND, BACKGROUNDS.BLURRED2, 'Server 2', '30.99.244.213:35567', 'OFFLINE', '8', '50', '654812')}
                    {this.serverInstance(TEXTURES.ENDSTONE, BACKGROUNDS.BLURRED3, 'Test Server 3', '30.99.244.213:35567', 'ERROR', '8', '50', '654812')}
                </Grid>
            </div>
        );
    }
}