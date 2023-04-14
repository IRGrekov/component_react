import information from "./InfoJson";
import './style.css';
import badge from './img/ok.svg';
import logosvg from './img/logoPage.svg'

export function InfoPage() {

  const offer = information.offers.list[0];
  // console.log("info", offer)
  // console.log(information.offers.list[0])
  return (
    <div className='ofer' >
      <div className='ofer-header'>
        <p className='ofer-header__name'><strong>{offer.bankId.substring(5)}</strong></p>
        {/* <p className='ofer-header__newBuilding'>Новостройка</p> */}
        <img className='ofer-header__svg' src={logosvg} />
      </div>
      <div className='ofer-info'>
        <div className='ofer-info__topFeature'>
          <img className='ofer-info__topFeatureLogo' src={badge} />
          <p className='ofer-info__topFeatureText'> Ваша лучшая ставка</p>
        </div>
        <div className='ofer-info__featuresReminder'>
          <p className='ofer-info__topFeatureNumbers'> +5</p>
        </div>
      </div>

      <div className='ofer_bet'>
        <p>ставка <strong>{(offer.rate * 100).toFixed(2)}%</strong></p>
        <p>Макс. кредит <strong>{(offer.maxAmount / 1000000).toFixed(1)}млн Р</strong> </p>
        <p>Взнос от <strong>{offer.minInitialPayment * 100}% </strong></p>
      </div>
      <div className='ofer_button'>
        <button className='ofer_button_more'>
          <p className='ofer_button_more__text' >Подробнее</p>
        </button>
      </div>
    </div>
  )
}
