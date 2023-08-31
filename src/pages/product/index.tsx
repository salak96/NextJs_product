import { fetcher } from '@/lib/swr/fetcher';
import ProductView from '@/views/Auth/Product/Main';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from "swr";

const ProductPage = () => {
    const [isLogin, setLogin] = useState(false);
    const [products, setProduct] = useState([]);

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
      );
      console.log(data)
      console.log(error)
      console.log(isLoading)
    // useEffect(() => {
    //     fetch('/api/product')
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProduct(response.data);
    //         });
    // }, []);
    return (
        <>
            <ProductView products={isLoading ? [] : data.data} />
        </>
    );
};

export default ProductPage;
