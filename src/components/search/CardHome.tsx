import { CardHomeProps } from 'types/props';
import { iconMercadoLibre, notFoundImage } from '../../assets';
import { moneyFormat } from '../../helpers';

export const CardHome = ({ name, price, sourceImage, link, isLowerPrice }: CardHomeProps) => {

    const isGifBase64 = sourceImage.includes('gif;base64');
    if (isGifBase64) sourceImage = notFoundImage;

    return (
        <article>
            <div className='product-name'>
                <p>{name}</p>
            </div>
            <a className="product-card" href={link} target="_blank">
                <img
                    alt="product"
                    src={sourceImage}
                    className='product-image'
                />
                <div className='card-content'>
                    <div className='product-price'>
                        <p className='price'><span>$</span>{moneyFormat(price)}</p>
                        <img alt='mercadolibre' src={iconMercadoLibre} />
                    </div>
                    {isLowerPrice && (
                        <div className='product-winner'>
                            <p>Precio más bajo</p>
                        </div>
                    )}
                </div>
            </a>
        </article>
    );
};