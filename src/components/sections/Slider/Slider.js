import "./Slider.css"
// icons
import { RiFacebookCircleFill, RiYoutubeFill, RiLinkedinBoxFill, RiInstagramFill, RiMapPinFill } from '../icons'

const Slider = (props) => {
  const info = {
    description: "A unique café located in the heart of Los Angeles. Always fresh coffee and biscuits. Open for indoor dining and to-go orders.",
  }
  const social_media = [
    {name: 'facebook',     linkIcon: <RiFacebookCircleFill/>,   path: '#'},
    {name: 'instagram',    linkIcon: <RiInstagramFill/>,        path: '#'},
    {name: 'youtube',      linkIcon: <RiYoutubeFill/>,          path: '#'},
    {name: 'linkedin',     linkIcon: <RiLinkedinBoxFill/>,      path: '#'},
  ]
  const address = {
    address: " Morocco, Agadir",
    linkIcon: <RiMapPinFill/>,
  }
  return (
    <div className="slid">
      <div className="slid_img">
        <div className="slid_content_td">
          <div className="slid_content">
            <p className="slid_type"><span>CAFÉ</span> / RESTAURANT</p>
            <div className="social_media">
              {social_media.map((name_lin, index) => (
                <span key={index} id={name_lin.name} className={name_lin.name}><a href={name_lin.path}>{name_lin.linkIcon}</a></span>
              ))}
            </div>
            <h2 className="slid_title">{props.title}</h2>
            <p className="slid_description">{info.description}</p>
            <button className="slid_btn">Make reservation</button>
          </div>
          <div className="slid_add_social">
            <div className="address">
              <span>{address.linkIcon} {address.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider