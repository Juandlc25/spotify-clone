import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from '../StateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
    const [{ discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:2Uei8I20yeQoZIo28k4woo`
        }).then(response => {
            spotify.getMyCurrentPlayingTrack().then(res => {
                dispatch({
                    type: 'SET_ITEM',
                    item: res.item
                })
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                })
            })
        })
    }

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`]
        }).then(response => {
            spotify.getMyCurrentPlayingTrack().then(res => {
                dispatch({
                    type: 'SET_ITEM',
                    item: res.item
                })
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                })
            })
        })
    }
    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body__info'>
                <img
                    src={discover_weekly?.images[0].url}
                    alt=''
                />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Description weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon
                    className='body__shuffle'
                    onClick={playPlaylist}
                />
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow onClick={playSong} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
