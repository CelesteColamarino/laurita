import React from "react";
import {Sidebar} from "./Sidebar.jsx";
import {Footer} from "./Footer.jsx";
import {Albums} from "./Albums.jsx";

export class Main extends React.Component{
  constructor(props){
    super(props);
    }

  render(){
    return(

      <div id="main" className="container-fluid">
        <Sidebar/>
        <Albums/>
        <Footer/>
      </div>

    )
  };
}



      {/*<ul>{this.state.albums.map((album)=>{return (<li>{album.name}</li>)})}</ul>*/}
