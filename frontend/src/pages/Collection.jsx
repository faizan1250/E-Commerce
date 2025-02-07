import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Productitems from '../components/Productitems';


const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowfilter] = useState(false);
  const [filterProducts, setFilterproducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productscopy = products.slice();

    // Debugging logs
    // console.log('Initial Products:', productscopy);
    // console.log('Search:', search);
    // console.log('ShowSearch:', showSearch);

    // Apply search filter
    if (search) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log('After Search Filter:', productscopy);
    }

    // Apply category filter
    if (category.length > 0) {
      productscopy = productscopy.filter((item) => category.includes(item.category));
    }

    // Apply sub-category filter
    if (subCategory.length > 0) {
      productscopy = productscopy.filter((item) => subCategory.includes(item.subcategory));
    }

    // Apply sorting
    switch (sortType) {
      case 'low-high':
        productscopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productscopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    // console.log('Filtered Products:', productscopy);
    setFilterproducts(productscopy);
  };

  // Apply filtering and sorting whenever dependencies change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType, products, search]);

  return (
    
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowfilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              alt=""
            />
          </p>
          {/* Category Filters */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Men" onChange={toggleCategory} /> Men
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Women" onChange={toggleCategory} /> Women
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory} /> Kids
              </p>
            </div>
          </div>
          {/* Subcategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-6 ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Collection */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="ALL" text2="COLLECTIONS" />
            {/* Products Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, idx) => (
              <Productitems
                key={idx}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      
    
  );
};

export default Collection;