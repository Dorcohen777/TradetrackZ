import ani2 from '../images/ani2.gif';


function Maintwo() {

    const imageTwo = ani2;

    return (

        <div className='main-two-container'>

            <div className='image-two-container'>
                <img src={imageTwo} className='image-two' />
            </div>

            <div className='information-two-container'>
                <h1 className='title-main-two'>Make Informed Trading Decisions with TradeTrackz</h1>
                <p className='paragraph-main-two'> Boost Your Trading Performance with TradeTrackz
                    Gain valuable insights into your portfolio and make informed decisions to maximize your profits.
                </p>
            </div>

        </div>

    )
}

export default Maintwo;