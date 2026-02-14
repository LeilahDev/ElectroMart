function SearchSection () {
   return (
    <>
        <div className="p-2  sm:flex sm:justify-end">
            <input type="text" placeholder="Search by name or category" 
              className="w-3/4 bg-gray-300 p-1 rounded pl-3 md:w-1/2 lg:w-1/4"
            ></input>
            <button className="bg-orange-700 ml-2 py-1 px-3 rounded text-gray-200/80 md:mr-6 lg:mr-40 lg:px-8">Search</button>
        </div>
    </>
   )
}

export default SearchSection