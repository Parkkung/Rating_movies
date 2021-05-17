import { Button } from "@material-ui/core";
import App from "../../App";
import "./Header.css";

import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from "@material-ui/icons/Movie";
import firebaseConfig from '../../Firebase'


const Header = () => {
  const history = useHistory();


  return (

    <span onClick={() => window.scroll(0, 0)} className="header">
      <Button
        onClick={() => history.push('/movies')}
        variant="contained"
        endIcon={<MovieIcon/>}

        style={{ height: 50, width: 100, marginTop: 30, right: 410 }}

      >
        Home
      </Button>
      <Button
        onClick={() => history.push('/search')}

        variant="contained"
        color="primary"
        endIcon={<SearchIcon/>}
        style={{ height: 50, width: 180, marginTop: 30, right: 410, marginLeft: 20 }}

      >
        Search Movies
      </Button>

      <Button
        // onClick={fetchSearch}
        variant="contained"
        color="secondary"
        onClick={() => firebaseConfig.auth().signOut()}
        // onClick={() => history.push('/login')}
        style={{ height: 50, width: 100, left: 410, marginTop: 30 }}

      >
        Logout
      </Button>

    </span>



  );
};

export default Header;
