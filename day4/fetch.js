const getProductsData = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching products data:', error);
        throw error;
    }
}
getProductsData();

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(err => console.log('Error fetching products data:', err));