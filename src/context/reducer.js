export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQAcuQ_Y_IVk3WdhwcvHS9Hd5E1TM2802jCi-Dcob_lDbl0cdY…jjfFe85XLpCJhs9gXnlvUDRp1RQvmj5-dBIa1QWg72CKTxMpq",
};

const reducer = (state, action) => {
  // console.log("Action", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "PLAY_SONG":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};

export default reducer;
