import { useState } from "react";
import { CardHomeProps, ProductRecord } from "types/props";
import { URL_API_ENDPOINTS } from "../constants/constans";
import { regularFetch, showUserMessage } from "../helpers";

export const useSearchProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<CardHomeProps[]>([]);

    const onSearch = async (searchValue: string) => {
        if (searchValue.trim().length < 3) {
            showUserMessage({
                icon: "info",
                title: "Información",
                message: "Por favor ingrese al menos 3 carácteres para realizar la búsqueda."
            });
            return;
        }

        setLoading(true);
        const { ok, data } = await regularFetch(
            {
                url: URL_API_ENDPOINTS.SEARCH_PRODUCTS,
                body: { filter: searchValue }
            }
        ).finally(() => setLoading(false));

        if (ok) {
            const result: ProductRecord[] = data;
            console.log(result, 'color: green;');

            if (result.length === 0) {
                showUserMessage({
                    icon: "info",
                    title: "Información",
                    message: "No se encontraron resultados para su búsqueda."
                });
                return;
            }

            const mapResponse = result.map((r): CardHomeProps => (
                {
                    name: r.nombre,
                    price: r.precio,
                    sourceImage: r.imagen,
                    link: r.link,
                    description: r.descripcion
                })
            );

            setProducts(mapResponse);
        }
    };

    return { onSearch, products, loading };
};