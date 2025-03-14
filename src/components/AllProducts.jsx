import React, { useState, useEffect, useRef } from "react";
import StoreItems from "./StoreItems";
import LoadingAnimatPulse from "../components/LoadingAnimatPulse";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Pagination States
  const itemsPerPage = 10; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const storeProducts = async () => {
      try {
        const url = "https://api.escuelajs.co/api/v1/products";
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);

        if (data.length > 0 && data[0].updatedAt) {
          const updatedDate = new Date(data[0].updatedAt);
          setUpdatedAt(updatedDate.toLocaleString());
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    storeProducts();
  }, []);

  // Sorting function
  const sortProducts = (order) => {
    let sortedProducts = [...products];

    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
    setSortOrder(order);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Pagination Functions
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get products for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <ol className="flex items-center whitespace-nowrap my-6 mx-4">
        <li className="inline-flex items-center">
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600"
            to="/"
          >
            Home
          </Link>
          <svg
            className="shrink-0 mx-2 size-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>
        <li className="inline-flex items-center">
          <p className="flex items-center text-sm font-semibold text-gray-800 truncate cursor-pointer">
            Store
          </p>
        </li>
      </ol>

      {/* Updated At Display */}
      {updatedAt && (
        <div className="mx-4 my-4 text-gray-600 text-sm">
          <p>
            Products last updated on:{" "}
            <span className="font-semibold">{updatedAt}</span>
          </p>
        </div>
      )}

      {/* Sorting Dropdown */}
      <div className="relative inline-flex mx-4" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex justify-center items-center gap-2 py-3 text-sm bg-none text-black rounded-full cursor-pointer font-semibold shadow-xs"
        >
          {sortOrder === "lowToHigh"
            ? "Sort: Price Low to High"
            : sortOrder === "highToLow"
            ? "Sort: Price High to Low"
            : "Sort by Price"}
          <svg
            className={`w-2.5 h-2.5 text-white transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full w-72 mt-2 bg-white shadow-lg rounded-xl">
            <ul className="py-2">
              <li>
                <button
                  className="block w-full text-left px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                  onClick={() => sortProducts("lowToHigh")}
                >
                  Sort by price: Low to High
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                  onClick={() => sortProducts("highToLow")}
                >
                  Sort by price: High to Low
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-4 mt-6 gap-4">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <LoadingAnimatPulse />
              </div>
            ))
          : currentProducts.map((element) => (
              <div key={element.id} className="w-full">
                <StoreItems
                  image={element.images?.[0] || "default-image-url.jpg"}
                  title={
                    element.title ? element.title.slice(0, 12) : "No Title"
                  }
                  desc={
                    element.description
                      ? element.description.slice(0, 60)
                      : "No Description"
                  }
                  price={element.price}
                  category={element.category}
                />
              </div>
            ))}
      </div>

      {/* Pagination */}
      <nav className="flex justify-center my-8">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <li>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="hidden md:text-sm sm:px-4 sm:py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
          </li>

          <div className="flex overflow-x-auto space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 text-sm sm:px-4 sm:py-2 border rounded-lg ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </div>

          <li>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="hidden md:text-sm sm:px-4 sm:py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AllProducts;
