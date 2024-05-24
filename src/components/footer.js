/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      MARTIAL ARTS • JIUJITSU • KIDS BJJ • KID KICKBOXING • KIDS MMA • MUAY THAI • KETTLEBELL • SMARTER YOGA •
        KICKBOXING • MMA • TODDLER JIU-JITSU <br></br> 80-22 NORTHERN BLVD • JACKSON HEIGHTS • QUEENS • 11372{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">atjiujistunyc.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
