import { useState, useEffect } from 'react';
import { productService } from '../api/services/productService';
import { ProductListDto, ProductDetailDto } from '../api/types/product';

/**
 * 自定义 Hook：获取所有商品
 */
export const useProducts = () => {
    const [products, setProducts] = useState<ProductListDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await productService.getAllProducts();
                setProducts(data.items);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : '获取商品失败';
                setError(errorMessage);
                console.error('Failed to fetch products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

/**
 * 自定义 Hook：根据 ID 获取单个商品
 */
export const useProduct = (id: number) => {
    const [product, setProduct] = useState<ProductDetailDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await productService.getProductById(id);
                setProduct(data);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : '获取商品详情失败';
                setError(errorMessage);
                console.error('Failed to fetch product:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    return { product, loading, error };
};
