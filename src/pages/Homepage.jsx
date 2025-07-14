import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import All from "../assets/categories/all.png";
import Men from "../assets/categories/men.png";
import Women from "../assets/categories/women.png";
import Kids from "../assets/categories/kids.png";

const categories = [
  { id: 'all', label: 'All Products', img: All },
  { id: 'menfashion', label: 'Men Fashion', img: Men},
  { id: 'womenfashion', label: 'Women fashion', img: Women },
  { id: 'kids', label: 'Kids', img:Kids  },
];


const sortOptions = [
  'Relevance',
  'New Arrivals',
  'Price (High to Low)',
  'Price (Low to High)',
  'Ratings',
  'Discount',
];

const categoryOptions = ['Men', 'Women', 'Kids'];

const genderOptions = ['Men', 'Women', 'Girls', 'Boys'];

const Homepage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [address, setAddress] = useState('Delivering to Sapotara - 322202');
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [showOfferPopup, setShowOfferPopup] = useState(false);


  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
    setShowCategoryOptions(false);
    setShowGenderOptions(false);
  };

  const toggleCategoryOptions = () => {
    setShowCategoryOptions(!showCategoryOptions);
    setShowSortOptions(false);
    setShowGenderOptions(false);
  };

  const toggleGenderOptions = () => {
    setShowGenderOptions(!showGenderOptions);
    setShowSortOptions(false);
    setShowCategoryOptions(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleGenderChange = (gender) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const handleAddressSave = () => {
    if (newAddress.trim() !== '') {
      setAddress(`Delivering to location - ${newAddress.trim()}`);
      setShowAddressInput(false);
      setNewAddress('');
    }
  };


  const toggleOfferPopup = () => {
    setShowOfferPopup(!showOfferPopup);
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <div className="homepageContainer">
      {/* Search Bar */}
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
      </div>

      {/* Address Display */}
      <div className="addressContainer">
        <span>{address}</span>
        <button
          className="addressEditButton"
          onClick={() => setShowAddressInput(true)}
          aria-label="Edit address"
        >
          &#x25BC;
        </button>
      </div>

      {/* Address Input Modal */}
      {showAddressInput && (
        <div className="addressModal">
          <div className="addressModalContent">
            <h3>Add New Address</h3>
            <input
              type="text"
              placeholder="Enter pincode"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="addressInput"
            />
            <div className="addressButtons">
              <button onClick={handleAddressSave}>Save</button>
              <button onClick={() => setShowAddressInput(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div className="categoriesSection" role="list">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="categoryCard"
            role="listitem"
            tabIndex={0}
            aria-label={cat.label}
            onClick={() => handleCategoryClick(cat.id)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleCategoryClick(cat.id);
            }}
          >
            <img src={cat.img} alt={cat.label} className="categoryImage" />
            <span className="categoryLabel">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Offer Banner */}
      <div
        className="offerBanner"
        onClick={toggleOfferPopup}
        role="button"
        tabIndex={0}
        aria-label="Show offer details"
      >
        <div className="offerBannerContent">
          <span>MAHA INDIAN SAVINGS SALE</span>
          <span>UP TO 70% OFF</span>
          <span>19-20 JULY</span>
          <button className="wishlistNowButton">Wishlist Now</button>
        </div>
      </div>

      {/* Offer Popup */}
      {showOfferPopup && (
        <div className="offerPopup">
          <div className="offerPopupContent">
            <h3>Special Offer!</h3>
            <p>Get 80% off on selected items. Limited time only!</p>
            <button onClick={toggleOfferPopup}>Close</button>
          </div>
        </div>
      )}

      {/* Crazy Product Showcase Section */}
      <section className="crazyProductShowcase">
        <h2 className="sectionTitle">BEST PRODUCTS</h2>
        <div className="productCardsContainer">
          {[  
            {
              id: 1,
              name: "Trendy Embroidery Tshirts Women",
              img: "https://tse3.mm.bing.net/th/id/OIP.ehVuwTslW4XefmQ6AhHlTgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
            },
            {
              id: 2,
              name: "Trendy Embroidery Tshirts Men",
              img: "https://tse4.mm.bing.net/th/id/OIP.6taFM--8l94hLSn_LHD-PgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 3,
              name: "Lehnga - Lugdi",
              img: "https://i.ytimg.com/vi/HLRmhQMw61o/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDT01DlG5POdOH2JW7_TEhjsH07Rw",
            },
            {
              id: 4,
              name: "Trendy Embroidery Shirts",
              img: "https://content.backcountry.com/images/items/large/MLY/MLY00DO/NATSTR_D5.jpg",
            },
            {
              id: 5,
              name: "kids Embroidery Shoes",
              img: "https://i.pinimg.com/736x/ef/8f/dc/ef8fdce7a72a03d1879d96f9288b4758--embroidery-stitches-hand-embroidery.jpg",
            },
            {
              id: 6,
              name: "Bulk Order",
              img: "https://th.bing.com/th/id/OIP.Ns8PiqnnMoCHK1yU8JLQCwHaEu?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            },
          ].map((product) => (
            <div key={product.id} className="productCard">
              <div className="productImageWrapper">
                <img src={product.img} alt={product.name} className="productImage" />
                <div className="glowEffect"></div>
              </div>
              <h3 className="productName">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* New Modern Product Cards Section */}
      <section className="modernProductShowcase">
        <h2 className="sectionTitle">EXPLORE OUR PRODUCTS</h2>
        <div className="modernProductCardsContainer">
          {[
            {
              id: 101,
              name: "Elegant Silk Saree",
              price: "1200/- Rs",
              img: "https://cdn.sareeka.com/image/data2020/embroidered-silk-saree-141031.jpg",
            },
            {
              id: 102,
              name: "Casual Denim Jacket",
              price: "800/- Rs",
              img: "https://tse4.mm.bing.net/th/id/OIP.m7uDUn7c1RIXFYULoNtL7gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 103,
              name: "Leather Handbag",
              price: "1500/- Rs",
              img: "https://tse1.explicit.bing.net/th/id/OIP.BXOrs8uDUjd-OHge2FPTsQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 104,
              name: "Running Shoes",
              price: "1999/- Rs",
              img: "https://ts2.mm.bing.net/th?id=OIP.AL7KsJkfYw52fTjQjDeEowHaEq&pid=15.1",
            },
            {
              id: 105,
              name: "Classic Wristwatch",
              price: "13900/- Rs",
              img: "https://th.bing.com/th/id/OIP.ZcEiw8XBEeK-BVPd7GZdKQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 106,
              name: "Summer Hat",
              price: "400/- Rs",
              img: "https://th.bing.com/th/id/R.2fe60e9fd76662f46fce4d8372e4e1dd?rik=QtaHnNEAi0zbSA&riu=http%3a%2f%2fimage27.stylesimo.com%2fo_img%2f2018%2f06%2f07%2f255267-10550660%2fwomen-s-big-brim-hat-floppy-foldable-straw-hat-summer-beach-hat-with-bowknot.jpg&ehk=cpRBx0IzrD9FA00IfTOxkc4RNoq4c%2bg8aOT%2fuMkrqyM%3d&risl=&pid=ImgRaw&r=0",
            },
            {
              id: 107,
              name: "Elegant Skirt",
              price: "900/- Rs",
              img: "https://th.bing.com/th/id/R.6baf28eff37b6bd729c1c95e60a1bc2c?rik=RSB3V8icvFX5lQ&pid=ImgRaw&r=0",
            },
            {
              id: 108,
              name: "Wallet With Emroidered Design",
              price: "1300/- Rs",
              img: "https://tse3.mm.bing.net/th/id/OIP.XEzN_PWVP9fu_nAe8_WdSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 109,
              name: "Kurti with Emroidered Design",
              price: "700/- Rs",
              img: "https://tse3.mm.bing.net/th/id/OIP.XEzN_PWVP9fu_nAe8_WdSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 110,
              name: "Stylish Cotton Tshirt Men",
              price: "500/- Rs",
              img: "https://th.bing.com/th/id/R.517f86635f4a0b08f3dcde70b77fadeb?rik=GcfcdZa6B0zxBQ&pid=ImgRaw&r=0",
            },
          ].map((product) => (
            <div key={product.id} className="modernProductCard">
              <div className="modernProductImageWrapper">
                <img src={product.img} alt={product.name} className="modernProductImage" />
              </div>
              <h3 className="modernProductName">{product.name}</h3>
              <p className="modernProductPrice">{product.price}</p>
              <button className="buyNowButton">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
