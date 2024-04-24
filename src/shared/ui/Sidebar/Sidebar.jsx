import { Link } from "react-router-dom"
import { HomeIcon } from "../../icons/HomeIcon"
import { LogoIcon } from "../../icons/Logo/LogoIcon"
import { FavouritesIcon } from "../../icons/FavouritesIcon"
import { TrendingIcon } from "../../icons/TrendingIcon"
import { CalendarIcon } from "../../icons/CalendarIcon"
import { CommunityIcon } from "../../icons/CommunityIcon"
import { SocialIcon } from "../../icons/SocialIcon"
import { SettingsIcon } from "../../icons/SettingsIcon"
import { LogOutIcon } from "../../icons/LogOutIcon"

export const Sidebar = () => {
  return (
	<div className="sidebar">
		<LogoIcon />
		<Link to="/" className={({ isActive }) => isActive ? "sidebar-links active" : "sidebar-links"}>
  			<div className="sidebar-links sidebar-home">
    			<div className="sidebar-icon"><HomeIcon /></div>
    			Home
  			</div>
		</Link>
		<Link to='/' className="sidebar-links simple" activeclassname="active">
			<div className="sidebar-icon"><FavouritesIcon /></div>
			Favourites
		</Link>
		<Link to='trending' className="sidebar-links simple" activeClassName="active">
			<div className="sidebar-icon"><TrendingIcon /></div>
			Trending
		</Link>
		<Link to='/' className="sidebar-links simple">
			<div className="sidebar-icon"><CalendarIcon /></div>
			Coming soon
		</Link>
		<Link to='/' className="sidebar-links community">
			<div className="sidebar-icon"><CommunityIcon /></div>
			Community
		</Link>
		<Link to='/' className="sidebar-links social">
			<div className="sidebar-icon"><SocialIcon /></div>
			Social
		</Link>
		<Link to='/' className="sidebar-links simple">
			<div className="sidebar-icon"><SettingsIcon /></div>
			Settings
		</Link>
		<Link to='/' className="sidebar-links simple">
			<div className="sidebar-icon"><LogOutIcon /></div>
			Logout
		</Link>
	</div>
  )
}
