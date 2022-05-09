import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
	return (
		<>
			<div className="navbar bg-base-100">
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
								<Link to="/category/Camizas">Camizas</Link>
							</li>
							<li>
								<Link to="/category/Pantalones">Pantalones</Link>
							</li>
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						GoyeShop
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<Link to="/category/Camizas">Camizas</Link>
						</li>
						<li>
							<Link to="/category/Pantalones">Pantalones</Link>
						</li>
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
