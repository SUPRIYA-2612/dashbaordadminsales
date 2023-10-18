import React, { useState } from 'react';
import classNames from 'classnames';

const popularProducts = [
  {
    id: '3432',
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
    product_price: '$1499.00',
    product_stock: 341,
    date: '2023-10-06',
  },
  {
    id: '7633',
    product_name: 'Samsung Galaxy Buds 2',
    product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
    product_price: '$399.00',
    product_stock: 24,
    date: '2023-10-25',
  },
  {
    id: '6534',
    product_name: 'Asus Zenbook Pro',
    product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
    product_price: '$899.00',
    product_stock: 56,
    date: '2023-02-17',
  },
  {
    id: '9234',
    product_name: 'LG Flex Canvas',
    product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
    product_price: '$499.00',
    product_stock: 98,
    date: '2023-02-15',
  },
  {
    id: '4314',
    product_name: 'Apple Magic Touchpad',
    product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
    product_price: '$699.00',
    product_stock: 0,
  },

];

function ProductTable() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredProducts = popularProducts.filter((product) => {
    const productDate = new Date(product.date); 
  
    if (filter === 'all') {
      return true; // Include all products
    } else if (filter === 'last10') {
      // Filter products based on the last 10 days
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      return productDate >= tenDaysAgo;
    } else if (filter === 'last30') {
      // Filter products based on the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return productDate >= thirtyDaysAgo;
    }
  });

  return (
    <div className="w-full p-4 ">
     <strong className="text-gray-700 font-bold">Product Sell</strong>
      <div className="mb-5 flex flex-col lg:flex-row justify-between items-center">
       
        <input
          type="text"
          placeholder="Search product..."
          className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex mt-2 lg:mt-0">
          <select
            className="w-full lg:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="last10">Last 10 Days</option>
            <option value="last30">Last 30 Days</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="w-full text-gray-700 bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts
              .filter((product) =>
                product.product_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2">{product.product_name}</td>
                  <td className="px-4 py-2">
                    <img
                      src={product.product_thumbnail}
                      alt={product.product_name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td
                    className={classNames(
                      product.product_stock === 0
                        ? 'text-red-500'
                        : product.product_stock > 50
                        ? 'text-green-500'
                        : 'text-orange-500',
                      'px-4 py-2'
                    )}
                  >
                    {product.product_stock === 0
                      ? 'Out of Stock'
                      : product.product_stock + ' in Stock'}
                  </td>
                  <td className="px-4 py-2">{product.product_price}</td>
                  <td className="px-4 py-2">20</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
