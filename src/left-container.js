import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";

export default function LeftContainer() {
  const state = useContext(AppContext);
  // Load in categories
  let categories = {};
  state.categories.forEach((cat) => {
    categories[cat.id] = 0;
  });
   // Calculate number of products in each
   let bigCount = 0
   state.products.forEach((product, index) => {
    let curr_category = product.category 
    if ((categories[curr_category] == null)) //hasOwnProperty??
    {
      categories[curr_category] = 1
      bigCount += 1
    } 
    else 
    {
      categories[curr_category] = categories[curr_category] + 1
      bigCount += 1
    }
  })

  function getCategoryNameFromId(id) {
    /* eslint-disable-next-line */
    return state.categories.filter((c) => c.id == id)[0].title;
  }
  return (
    <>
      <div className="LeftSidebar h-100 p-3">
        <nav className="nav flex-column ">
          <Link className = 'nav-link'to="/">
            {/* <FontAwesomeIcon icon={homeIcon} />  */}
            All Products ({bigCount})
          </Link>
          {Object.keys(categories).map((c, i) => {
            return (
              <Link to={`/category/${getCategoryNameFromId(c)}`} className= 'nav-link' key={`categorylink${i}`}>
                {getCategoryNameFromId(c)} ({categories[c]})
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
