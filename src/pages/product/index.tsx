import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};
const ProductPage = () => {
    const [isLogin, setLogin] = useState(false);
    const { push } = useRouter();
    // useEffect(() => {
    //     if (!isLogin) {
    //         push('/auth/login');
    //     }
    // }, []);
    const [product, Setproduct] = useState([]);
    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            .then((response) => {
                Setproduct(response.data);
            });
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
            {product.map((product: productType) => {
                return (
                    <div key={product.id}>
                        <p>{product.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductPage;
