import './Container.css'

const Container = (props) => {
    return(
        <div id="maincontent">
            {props.children}
        </div>
    )
}

export default Container