import { useState, useEffect } from "react";
import axios from "axios";
import Toastify from "toastify-js";

import Card from "../components/Card";
import baseUrl from "../../api/baseUrl";
import loading from "../assets/loading.svg";

const HomePage = () => {
  const [cuisines, setCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("0");

  // const [sort, setSort] = useState("");
  const [currentSort, setCurrentSort] = useState(0);
  const pagination = convertTotalPageToArray();

  const [cat, setCat] = useState("");

  async function fetchCuisines() {
    try {
      setIsLoading(true);

      let data;

      if (!+currentCategory) {
        if (search) {
          data = (await axios.get(`${baseUrl}/pub/cuisines?search=${search}`))
            .data;
        } else if (
          currentSort === "createdAt" ||
          currentSort === "-createdAt"
        ) {
          data = (
            await axios.get(
              `${baseUrl}/pub/cuisines?page=${currentPage}&sort=${currentSort}`
            )
          ).data;
        } else {
          data = (
            await axios.get(`${baseUrl}/pub/cuisines?page=${currentPage}`)
          ).data;
        }

        setCuisines(data?.data?.data);
        setCurrentPage(+data?.data?.currentPage);
        setTotalPage(data?.data?.totalPage);
      } else {
        console.log(currentCategory);
        data = (
          await axios.get(
            `${baseUrl}/pub/categories?filter[category]=${+currentCategory}`
          )
        ).data;

        setCuisines(data?.data[0].Cuisines);
        // setCat(data?.data[0].name);
        // console.log(data?.data[0].Cuisines);
      }

      // const { data } = await axios.get(
      //   `${baseUrl}/pub/cuisines?search=${search}&page=${currentPage}`
      // );
      // console.log(data.data.query);

      // setCuisines(data?.data?.data);
      // setCurrentPage(+data?.data?.currentPage);
      // setTotalPage(data?.data?.totalPage);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "white",
          color: "red",
          border: "2px dashed red",
          borderRadius: "1rem",
          boxShadow: "0px 2px 10px black",
        },
      }).showToast();
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/pub/categories`);

      // console.log(data);
      setCategories(data?.data);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "white",
          color: "red",
          border: "2px dashed red",
          borderRadius: "1rem",
          boxShadow: "0px 2px 10px black",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchCuisines();
  }, [currentPage, currentCategory, currentSort]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function convertTotalPageToArray() {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }

    return arr;
  }

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  }

  function handleSearch(e) {
    e.preventDefault();
    // setCurrentPage(1);
    setCurrentCategory("0");
    setCurrentSort("0");
    // setCat("");

    // setTimeout(() => {
    fetchCuisines();
    // }, 0);
  }

  function handleFilter(e) {
    setCurrentCategory(e.target.value);
    setCurrentSort("0");

    // fetchCuisines();

    setSearch("");
  }

  function handleSort(e) {
    setCurrentSort(e.target.value);
    setSearch("");
    setCurrentCategory("0");
    // fetchCuisines();
  }

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* search */}

      <form
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 mt-8"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search cuisines..."
          className="border bg-orange-50 px-4 py-2 rounded-md w-full sm:w-80"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            // fetchCuisines();
          }}
        />
        <button
          type="submit"
          className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* filter & sort */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mb-6 items-center text-sm">
        {/* filter */}
        <div className="flex items-center gap-2">
          <label className="font-semibold">Filter by:</label>
          <select
            className="border border-terra bg-white px-2 py-1 rounded"
            value={currentCategory}
            onChange={handleFilter}
          >
            <option value="0">None</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* sort */}
        <div className="flex items-center gap-2">
          <label className="font-semibold">Sort by:</label>
          <select
            className="border border-terra bg-white px-2 py-1 rounded"
            value={currentSort}
            onChange={handleSort}
          >
            <option value="0">None</option>
            <option value="-createdAt">Newest</option>
            <option value="createdAt">Oldest</option>
          </select>
        </div>
      </div>

      {/* cuisines grid */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <img src={loading} />
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {currentCategory === 0
            ? cuisines?.map((cuisine) => (
                <Card key={cuisine.id} cuisine={cuisine} />
              ))
            : cuisines?.map((cuisine) => (
                <Card key={cuisine.id} cuisine={cuisine} />
              ))} */}

          {cuisines?.map((cuisine) => (
            <Card key={cuisine.id} cuisine={cuisine} cat={cat} />
          ))}
        </section>
      )}

      {/* pagination */}
      {!+currentCategory && (
        <nav className="flex gap-4 justify-center items-center my-8">
          <button
            type="button"
            className="bg-orange-700 text-white px-4 py-2 rounded-sm hover:bg-orange-900 transition duration-200"
            onClick={handlePrev}
          >
            Prev
          </button>

          <div className="flex gap-2">
            {pagination.map((page) => (
              <button
                type="button"
                className={
                  page === currentPage
                    ? "bg-orange-400 text-white px-2 py-1 rounded-sm hover:bg-orange-900 transition duration-200 underline"
                    : "bg-orange-700 text-white px-2 py-1 rounded-sm hover:bg-orange-900 transition duration-200"
                }
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="bg-orange-700 text-white px-3 py-2 rounded-sm hover:bg-orange-900 transition duration-200"
            onClick={handleNext}
            disabled={currentPage >= totalPage}
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
};

export default HomePage;
