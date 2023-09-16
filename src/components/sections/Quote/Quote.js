import './Quote.css'

const Quote = (props) => {
  return (
    <div className='Quote'>
        <div className='container quf'>
            <div className='quote_title'>
                <span>Today's</span>
                <p>Quote</p>
            </div>
            <h3 className='quote_des'>{props.quote}</h3>
        </div>
    </div>
  )
}

export default Quote