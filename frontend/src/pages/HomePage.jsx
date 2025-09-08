import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.png" },
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },

	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/shirts", name: "Shirts", imageUrl: "/shirts.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },

	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
	{ href: "/watches", name: "Watches", imageUrl: "/watches.jpg" },
	{ href: "/caps", name: "Caps", imageUrl: "/caps.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-black mb-4'>
					Welcome to the ShopNest
				</h1>
				<p className='text-center text-xl text-gray-600 mb-20'>
					The Smartest way of shopping
				</p>
				<h2 className='text-center text-3xl sm:text-3xl font-bold text-gray-800 mb-10'>Categories</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
