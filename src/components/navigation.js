/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import Theme from "../components/theme"

const MenuItems = [



  {
    path: "/about",
    title: "About",
  },
  {
    path: "/kids-martial-arts",
    title: "Kids Classes",
  },
  {
    path: "/adult-martial-arts",
    title: "Adult Classes",
  },
  {
    path: "/prices",
    title: "Prices",
  },
  {
    path: "/martial-arts-schedule",
    title: "Schedule",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "https://at-jiujitsu-nyc.gymdesk.com/login",
    title: "Member Login",
  },
  
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className="site-navigation" sx={navStyle.menu}>
        <button
          aria-label="toggle menu"
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul>
          {listMenuItems}
          <div sx={navStyle.border}></div>
          <div sx={navStyle.theme}>
            <Theme />
          </div>
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
    ul: {
      bg: "siteColor",
    },
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    bg: "borderColor",
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
}
