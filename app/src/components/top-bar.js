import React,{Component} from 'react'



export default class TopBar extends Component{



	render(){


		return (<div className="app-top-bar">
					<div className="app-top-bar-inner">

						<div className="app-top-bar-left">
							<div className="site-name">
								<i className="icon-paper-plane" />
							</div>
					</div>
					<div className="app-top-bar-right">

							<div className="app-top-bar-right-inner">

								<div className="user-profile">
								<div className="user-profile-picture">
									<img src="https://supporttickets.intel.com/resource/1512821324000/ICS_CX_Generic_CSS/inc/styles/img/sign-in-gray-icon-1x1.png" />
								</div>
							</div>
							<ul className="user-profile-menu">
									<li onClick={() => {

										if(this.props.onShowLoginForm){
											this.props.onShowLoginForm(true);
										}

									}} className="user-signin-button">Sign in</li>
							</ul>
							</div>
					</div>


					</div>
			</div>)
	}
}