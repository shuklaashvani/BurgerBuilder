import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';


class Layout extends Component {
     state={
         showsidedrawer:false
     }

     sideDrawerclosedHandler = () => {
         this.setState({showsidedrawer:false});
     }

     ToggleButton= () => {
         const Toggle= !this.state.showsidedrawer;
         this.setState(
             {showsidedrawer:Toggle}
         );
     }

    render(){
       return(
        <Auxx>
        <SideDrawer 
        open={this.state.showsidedrawer}
        closed={this.sideDrawerclosedHandler}/>
        <Toolbar 
        clicked={this.ToggleButton}/>
        <main className={classes.Content}>
           {this.props.children};
        </main>
       </Auxx>
       );
       
    }
}
  


export default Layout;