/*1. Заполните логику так, чтобы нажатие «+» увеличивало соответствующее число:
handleIncreaseClick
2. Нужно добавить обработчик событий для "-", чтобы при нажатии на него соответствующий
 товар уменьшился. Если нажать «–» при счёте 1, товар автоматически удалится из корзины.
 Убедитесь, что он никогда не показывает 0.
*/
import { useState } from "react";

const initialProducts = [
    {
        id: 0,
        name: "Baklava",
        count: 1,
    },
    {
        id: 1,
        name: "Cheese",
        count: 5,
    },
    {
        id: 2,
        name: "Spaghetti",
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		setProducts(products.map((product) => {
			if (product.id === productId) {
				return {...product, count: product.count++};
			} else return product;
		}));
		// Или подробней:
		// const nextProducts = products.map((product) => {
		// 	if (product.id === productId) {
		// 		return {...product, count: product.count++};
		// 	} else return product;
		// });
		// setProducts(nextProducts);
	}

	function handleDeleteClick(productId) {
        let nextProducts = products.map((product) => {
        	if (product.id === productId) {
        		return {...product, count: product.count--};
        	} else return product;
		});

		nextProducts = nextProducts.filter(p => p.count > 0);

        setProducts(nextProducts);
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id} className="list">
                    {product.name} (<b>{product.count}</b>)
                    <button
                        className="button-inset button-inset--small"
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                    <button
                        className="button-inset button-inset--small"
                        onClick={() => {
                            handleDeleteClick(product.id);
                        }}
                    >
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}
