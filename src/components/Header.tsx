import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../App.css";

const Header: React.FC = () => {
	const loginUser = useSelector((state: RootState) => state.user.loginUser);
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	const handleSignUpClick = () => {
		navigate("/signup");
	};

	return (
		<header className="w-full bg-white text-black border-b border-gray-200">
			<div className="flex items-center justify-between px-4 py-2 h-24">
				{/* Logo */}
				<div className="w-1/4 flex-shrink-0">
					<Link to="/">
						<img
							src="/img/logo.jpg"
							alt="Adidas logo"
							className="h-20 w-auto object-contain"
						/>
					</Link>
				</div>

				{/* Centered Navigation */}
				<nav className="w-1/2 flex justify-center">
					<ul className="flex space-x-8">
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
							<Link to="/carts" className="font-bold text-lg">
								CARTS
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

				{/* User Menu */}
				<div className="w-1/4 flex items-center justify-end space-x-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Search"
							className="pl-8 pr-2 py-2 bg-gray-100 rounded-full text-sm w-48"
						/>
						<Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
					</div>
					{loginUser ? (
						<>
							<User className="w-6 h-6" />
							<div className="relative">
								<Heart className="w-6 h-6" />
								<span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full w-4 h-4 flex items-center justify-center">
									1
								</span>
							</div>
							<ShoppingBag className="w-6 h-6" />
						</>
					) : (
						<div className="flex space-x-2">
							<button
								onClick={handleLoginClick}
								className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded transition duration-300"
							>
								Login
							</button>
							<button
								onClick={handleSignUpClick}
								className="px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded transition duration-300"
							>
								Sign Up
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
