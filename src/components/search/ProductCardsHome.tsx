import { ProductCardsHomeProps } from "types/props";
import { CardHome } from "./CardHome";

export const ProductCardsHome = ({ products }: ProductCardsHomeProps) => {
    if (products.length === 0) return null;

    const minPriceIndex = products
        .reduce((minIndex, product, index, arr) =>
            product.price < arr[minIndex].price ? index : minIndex, 0);

    return (
        <section className="cards-container">
            {products.map((p, index) => (
                <CardHome
                    key={index}
                    {...p}
                    isLowerPrice={index === minPriceIndex}
                />
            ))}
            <p className="information-cards">Al seleccionar un producto podrás acceder al enlace original publicado en Mercado Libre.</p>
        </section>
    );
};