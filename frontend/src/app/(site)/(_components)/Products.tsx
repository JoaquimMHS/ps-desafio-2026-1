import { sportsItemType } from '@/types/sportsItem';
import styles from './products.module.css';
import ProductCard from './ProductCard';
import { Item } from '@radix-ui/react-dropdown-menu';

export default function Products() {
    const sportsItems: sportsItemType[] = [
        {
            id: '1',
            name: 'Barcelona',
            brand: 'Nike',
            price: 299.99,
            year: 2026,
            image: '/assets/images/barca.png',
            category: 'Camisa',
            amount: 10,
        },
        {
            id: '2',
            name: 'Barcelona',
            brand: 'Nike',
            price: 299.99,
            year: 2026,
            image: '/assets/images/barca.png',
            category: 'Camisa',
            amount: 10,
        },
        {
            id: '3',
            name: 'Barcelona',
            brand: 'Nike',
            price: 299.99,
            year: 2026,
            image: '/assets/images/barca.png',
            category: 'Camisa',
            amount: 10,
        },
        {
            id: '4',
            name: 'Barcelona',
            brand: 'Nike',
            price: 299.99,
            year: 2026,
            image: '/assets/images/barca.png',
            category: 'Camisa',
            amount: 0,
        },
    ]



    return (
        <section className={styles.products} id="products">
            <div className={styles.container}> 
                <h1 className={styles.title}>Nossos Produtos</h1>
                <div className={styles.productsList}>
                    {sportsItems.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                
                </div>     
            </div>
        </section>
    )
}