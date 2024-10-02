import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import "../App.css";


const Header: React.FC = () => {
	return (
		<header className="relative w-full bg-white text-black border-b border-gray-200 h-24">
			<div className="flex items-center justify-between px-4 h-full">
				{/* Logo */}
				<div className="flex-shrink-0">
					<Link to="/">
						{/* <img
							src={logo}
							alt="Adidas logo"
							className="h-20 w-auto object-contain"
						/> */}
					</Link>
				</div>

				{/* User Menu */}
				<div className="flex items-center space-x-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Search"
							className="pl-8 pr-2 py-2 bg-gray-100 rounded-full text-sm w-48"
						/>
						<Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
					</div>
					<User className="w-6 h-6" />
					<div className="relative">
						<Heart className="w-6 h-6" />
						<span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full w-4 h-4 flex items-center justify-center">
							1
						</span>
					</div>
					<ShoppingBag className="w-6 h-6" />
				</div>
			</div>

			{/* Centered Navigation */}
			<nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
				<ul className="flex justify-center space-x-8">
					<li>
						<Link to="/men" className="font-bold text-lg">
							MEN
						</Link>
					</li>
					<li>
						<Link to="/women" className="font-bold text-lg">
							WOMEN
						</Link>
					</li>
					<li>
						<Link to="/kids" className="font-bold text-lg">
							KIDS
						</Link>
					</li>
					<li>
						<Link to="/sports" className="text-lg">
							SPORTS
						</Link>
					</li>
					<li>
						<Link to="/brands" className="text-lg">
							BRANDS
						</Link>
					</li>
					<li>
						<Link to="/outlet" className="text-lg">
							OUTLET
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
