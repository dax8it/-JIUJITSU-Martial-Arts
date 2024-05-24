/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiTelegramFill,
} from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <a href={icons.url} target="_blank" aria-label="link to Facebook" rel="noopener noreferrer">
            <RiFacebookBoxFill alt="Facebook icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <a href={icons.url} target="_blank" aria-label="link to Twitter" rel="noopener noreferrer">
            <RiTwitterFill alt="Twitter icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <a href={icons.url} target="_blank" aria-label="link to Linkedin" rel="noopener noreferrer">
            <RiLinkedinBoxFill alt="Linkedin icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <a href={icons.url} target="_blank" aria-label="link to Youtube" rel="noopener noreferrer">
            <RiYoutubeFill alt="Youtube icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Instagram" rel="noopener noreferrer">
            <RiInstagramFill alt="Instagram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <a href={icons.url} target="_blank" aria-label="link to Github" rel="noopener noreferrer">
            <RiGithubFill alt="Github icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Telegram" rel="noopener noreferrer">
            <RiTelegramFill alt="Telegram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "tiktok" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaTiktok alt="tiktok icon" />
          </a>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
   <Layout className="page">
          <Seo />
          
          <div className="wrapper">
            <div>
              <h1 className="title">{frontmatter.title}</h1>
              <p
                className="tagline"
                sx={{
                  color: "muted",
                }}
              >
                {frontmatter.tagline}
              </p>
              <div>
              {Image ? (
                <GatsbyImage
                  image={Image}
                  alt={frontmatter.title + " - Featured image"}
                  className="featured-image"
                />
              ) : (
                ""
              )}
            </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <Link
                to={frontmatter.cta.ctaLink}
                className="button"
                sx={{
                  variant: "variants.button",
                }}
              >
                {frontmatter.cta.ctaText}
                <span className="icon -right">
                  <RiArrowRightSLine />
                </span>
              </Link>
              <div
                className="social-icons"
                sx={{
                  variant: "variants.socialIcons",
                }}
              >
                {sIcons}
              </div>
            </div>   
          </div>
          <hr />
          <div class="wrapper">
              <div class="container-home kids-section">
                  <h2 class="heading-kids">Kids Martial Arts</h2>
                  <p class="paragraph-kids">Martial arts is a structured system of training designed to improve physical fitness, mental discipline, and self-defense skills.</p>
                  <ul class="list-kids">
                      <li><a href="https://www.atjiujitsunyc.com/kids-jiujitsu-classes-in-queens/">Kids Jiu-Jitsu</a></li>
                      <li><a href="https://www.atjiujitsunyc.com/kids-kickboxing-classes-in-queens/">Kids Kickboxing</a></li>
                      <li><a href="https://www.atjiujitsunyc.com/kids-mma/">Kids MMA</a></li>
                  </ul>
              </div>
              <div class="container-home adults-section">
                  <h2 class="heading-adults">Adults Martial Arts</h2>
                  <p class="paragraph-adults">Maybe this will work we shall see.</p>
                  <ul class="list-adults">
                      <li><a href="#">Full-Body Workout</a></li>
                      <li><a href="#">Cardio King</a></li>
                      <li><a href="#">Shed Those Pounds</a></li>
                      <li><a href="#">Flexibility & Mobility</a></li>
                  </ul>
              </div>
              <Link
                      to={frontmatter.cta.ctaLink}
                      className="button"
                      sx={{
                        variant: "variants.button",
                      }}
                    >
                      {frontmatter.cta.ctaText}
                      <span className="icon -right">
                        <RiArrowRightSLine />
                      </span>
              </Link>
          </div>
    <hr />

    
      <BlogListHome data={posts} />
  </Layout>
  )
}

export default HomePage
