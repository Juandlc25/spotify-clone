export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
        //'BQCVU0JQgaVgtGEGZI1iWVxoSs82iQa4EvhlJNk8SS6y0wW3fX-DR1DJtwyABgLBT7oeIWm_w6enxBf8CRGaQC0XLMadRt3HufNxyL2_B_Tul032ws5tawIRMkTCR_unk4IQ9q6VH_sEN4c7ggMlit6ph2CMK8nqMXoZFJR83yVHIdt4',
    top_artists: null,
    spotify: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer