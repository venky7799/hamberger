import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({history}) => {
  // // State of our Menu
  // const [state, setState] = useState({
  //   initial: false,
  //   clicked: null,
  //   menuName: "Menu"
  // });
  // // State of our button
  // const [disabled, setDisabled] = useState(false);

  // //Use Effect
  // useEffect(() => {
  //   //Listening for page changes.
  //   history.listen(() => {
  //     setState({ clicked: false, menuName: "Menu" });
  //   });
  // }, [history]);

  // // Toggle menu
  // const handleMenu = () => {
  //   disableMenu();
  //   if (state.initial === false) {
  //     setState({
  //       initial: null,
  //       clicked: true,
  //       menuName: "Close"
  //     });
  //   } else if (state.clicked === true) {
  //     setState({
  //       clicked: !state.clicked,
  //       menuName: "Menu"
  //     });
  //   } else if (state.clicked === false) {
  //     setState({
  //       clicked: !state.clicked,
  //       menuName: "Close"
  //     });
  //   }
  // };

//for menu change
  const [state,setState]= useState({
    initial:false,
    clicked:null,
    menuItem:"Menu"
  });
  //for disable the menu
  const [disabled,setDisabled]= useState(false);

  //for listen the page changes
  useEffect(()=>{
    history.listen((e)=>{setState({
      clicked:false,
      menuItem:"Menu"
    })})
  })

  
  const handleMenu=()=>{
    disableMenu();
    if(state.initial===false){
      setState({
        initial:null,
        clicked:true,
        menuItem:"Close"
      })
      console.log(1)
    }else if(state.clicked===true){
      setState({
        clicked:!state.clicked,
        menuItem:"Menu"
      })
    console.log(state.menuItem) 

    }else if(state.clicked===false){
      setState({
        clicked:!state.clicked,
        menuItem:"Close"
      })
    console.log(state.menuItem) 

    }
  }


  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu" >
              <button  onClick={handleMenu}>Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state}/>
    </header>
  );
};

export default withRouter(Header);
