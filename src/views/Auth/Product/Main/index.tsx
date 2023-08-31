import style from './Product.module.scss';
type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};

const ProductView = ({ products }: { products: ProductType[] }) => {
    console.log(products);
    return (
        <div className={style.product}>
            <h1 className={style.product__title}>Product</h1>
            <div className={style.product__content}>
                {products.length>0 ? (
                    <>
                         {products.map((product: ProductType) => (
                    <div className={style.product__content_item} key={product.id}>
                        <div className={style.product__content__content__image}>
                            <img src={product.image} alt='{product.name}' />
                        </div>
                        <h4 className={style.product__content_item_name}>{product.name.substring(0, 17)}</h4>
                        <p className={style.product__content_item_category}>{product.category}</p>
                        <p className={style.product__content_item_price}>{product.price.toLocaleString('id-ID',{
                            style: 'currency',
                            currency: 'IDR'
                        })}</p>
                    </div>
                ))}
                    </>
                ) : (
                    <div className={style.product__content_skeleton}>
                    <div className={style.product__content_skeleton_image}/>
                    <div className={style.product__content_skeleton_name}/>
                    <div className={style.product__content_skeleton_category}/>
                    <div className={style.product__content_skeleton_price}/>
                </div>
                )}
            </div>
        </div>
    );
};

export default ProductView;
