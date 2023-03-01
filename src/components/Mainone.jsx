import imageone from '../images/howtoimage.PNG'


function Mainone() {
    var imageHowTo = imageone;

    return (
        <div className='div-main-one'>
            <div>
                <h2 className='main-one-title'>How it works?</h2>
                <p className='main-one-paragraph'>TradeTrackz helps traders track their trading performance and optimize their strategies.<br/> Using TradeTrackz is easy and straightforward: <br/> <br/>users simply submit information about their transactions, <br/>including the stock name, entry and exit prices, and trade size. <br/> <br/> Once the information is submitted, TradeTrackz calculates the total profit and loss (P/L) for each trade, as well as the overall P/L for the portfolio. <br/> <br/>Additionally, TradeTrackz calculates the user's win rate, which is the percentage of winning trades out of all the trades taken. <br/>

                    With TradeTrackz, traders can easily track their performance over time, identify patterns, and adjust their strategies accordingly. <br/> <br/> The application provides clear and concise insights into trading performance, allowing users to make informed decisions about their trades.<br/> <br/> Whether you are a seasoned trader or just starting out, TradeTrackz is an invaluable tool for improving your trading skills and maximizing your profits.</p> 
            </div>
            <div className='div-main-one-image'>
                <img src={imageHowTo} className='main-one-image' />
            </div>
        </div >

    )
}


export default Mainone;