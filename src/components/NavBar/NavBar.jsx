import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {


	return (
		<>
			<div className="navbar bg-base-100">

				{
					// INICIO MENU COMPACTO
				}
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex="0" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex="0"
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/category/Camisas">Camisas</Link>
							</li>
							<li>
								<Link to="/category/Jeans">Jeans</Link>
							</li>
						</ul>
					</div>
					<Link to="/" className="btn btn-outline normal-case text-xl">
						GoyeShop
					</Link>
				</div>

				{
					//INICIO MENU AMPLIO
				}
				<div className="hidden lg:flex">
					<ul className="navbar">
						<Link to="/category/Camisas">
							<li className="btn btn-outline normal-case text-xl">
								Camisas
							</li>
						</Link>

						<Link to="/category/Jeans">
							<li className="btn btn-outline normal-case text-xl">
								Jeans
							</li>
						</Link>
					</ul>
				</div>
				<div className="navbar-end">
					<CartWidget />
				</div>
			</div>
		</>
	)
}

export default NavBar
