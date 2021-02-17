import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Header from './Components/ui/Header';
import {makeStyles,} from '@material-ui/core/styles';

const useStyles= makeStyles(theme=>({
        root :{
          ...theme.mixins.toolbar,
        }

}));

function App() {

  const classes= useStyles();
  return (
    <div >
      <Header/>
      <div className={classes.root} />
      <div className={classes.root} />
      <Page2  />
    </div>
  );
}

export default App;
