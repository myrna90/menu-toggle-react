import React, { Component } from 'react';

class Aside extends Component{
    
    constructor(props){
        super(props);
        this.aside = React.createRef();
        this.changeWidth = this.changeWidth.bind(this)
        
    }
    changeWidth(){
        if(this.aside.current.style.width !== '3.44em'){
            this.aside.current.style.width = '3.44em'
        } else {
           this.aside.current.style.width = '12.5em'     
        }
         //this.aside.current.style.width = "3.44em";
    }
    
    render(){
        return(
            
            <div  className="aside" ref={this.aside}>
                <button className="boton"  onClick= {this.changeWidth}>Boton</button>
            </div>
        )
    }
}

export default Aside;


  /*const Menu = ({alignment, children}) => (
   <div className="menu">
        <div className={alignment}>{children}</div>
    </div>
  ); export default Menu;

  class MenuToggle extends Component {
    /*constructor(props) {
        super(props);
    }
    render(){
        return(
        <React.Fragment>
            {this.props.visible && 
            <div className="menu">
                <div className="menu-toggle">
                <div className="contenedor-titulo">
                    <h3 className="h3">Boletines</h3>
                    <div className="btn-config">
                    <i  class="material-icons">settings_applications</i>
                    </div>
                </div>
                <div className="nav-menu">
                    <Menu alignment="right">
                    <Link to="/Dashboard" className="Link"><i class="material-icons md-24">dashboard</i><div className="text-menu">Dashboard</div></Link>
                    <Link to="/Boletines" className="Link"><i class="material-icons md-24">line_weight</i><div className="text-menu">Boletines</div></Link>
                    <Link to="/Soporte" className="Link"><i class="material-icons md-24">help_outline</i><div className="text-menu">Soporte</div></Link>
                    <Link to="/" className="Link link-out"><i class="material-icons md-24">exit_to_app</i><div className="text-menu">Salir</div></Link>
                    </Menu>
                </div>
                </div> 
            </div> }
        </React.Fragment>
        )
    }
}

export default MenuToggle;

class BotonMenu extends Component {
   constructor(props){
        super(props)
        
    }
    render(){
        return(
        <div id="contenedor-dash" className="contenedor-boton boton-boletines">
            <button id="btn" className="boton-dash boton-boletines btn" onClick={this.props.toggleMenu}>Menu!</button>
        </div>
        )
    }
}

export default BotonMenu;

//siempre y cuando tambien tengan su constructor, en cada componente, esto es para
 traer funciones que se encuentran en un componente y poderlas utilizar en otros componentes
 <MenuToggle visible={this.state.visible}/>
 <BotonMenu toggleMenu={this.toggleMenu}/>*/