function SearchSection () {
   return (
    <>
        <div className=" p-2">
            <input type="text" placeholder="Search by name or category" 
              className="w-3/4 bg-gray-300 p-1 rounded pl-3"
            ></input>
            <button className="bg-orange-700 ml-2 py-1 px-3 rounded text-gray-200/80">Search</button>
        </div>
    </>
   )
}

export default SearchSection