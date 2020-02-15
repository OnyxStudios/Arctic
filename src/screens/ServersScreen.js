import React from 'react';
import {Card, Grid, CardMedia, Divider, withStyles} from "@material-ui/core";
import {TEXTURES} from "./../utils/MinecraftImages";
import {ServersStyles, MaterialServerStyles} from "../styles/ServersStyles";

let okStatuses = ['online', 'starting'];
let errorStatuses = ['error', 'offline'];
class ServersScreen extends React.Component {

    serverInstance = (icon, name, ip, status, ram, storage, id) => {
        let {classes} = this.props;

        return (
            <Grid  item className={classes.serverCard}>
                <Card>
                    <CardMedia className={classes.serverIcon} image={icon} component='img' />

                    <Grid container className={classes.serverInfoGrid} direction='row' justify='space-between'>
                        <Grid item>
                            <p>{name}</p>
                            <p>IP: {ip}</p>
                        </Grid>

                        <Grid item>
                            <p style={okStatuses.indexOf(status.toLowerCase()) > -1 ? ServersStyles.running : ServersStyles.offline}>{status}</p>
                        </Grid>
                    </Grid>

                    <Divider variant='middle' />

                    <Grid container justify='space-evenly'>
                        <Grid item><p><i className='fas fa-memory' /> {ram} GB</p></Grid>
                        <Grid item><p><i className='fas fa-hdd' /> {storage} GB</p></Grid>
                        <Grid item><p ><i className='fas fa-fingerprint' /> ID: {id}</p></Grid>
                    </Grid>
                </Card>
            </Grid>
        );
    };

    render() {
        let {classes} = this.props;

        return (
            <Grid container className={classes.serverBody} justify='space-between'>
                {this.serverInstance(TEXTURES.GRASS, 'A Minecraft Server', '30.99.244.213', 'ONLINE', '4', '20', '456782')}
                {this.serverInstance(TEXTURES.COBBLESTONE, 'Another Server', '30.99.244.213:25564', 'OFFLINE', '2', '50', '654238')}
                {this.serverInstance(TEXTURES.BEDROCK, 'Modpack Server', '30.99.244.213:35567', 'ERROR', '8', '50', '654812')}
            </Grid>
        );
    }
}

export default withStyles(MaterialServerStyles)(ServersScreen);