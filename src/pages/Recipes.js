import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Recipes(){
  const searches = [ 'Pizza', 'Burgar', 'Cookies', 'Juice', 'Briyani', 'Salad', 'Ice cream', 'Lasagna', 'Pudding', 'Soup'
  ]

  return (
    <div>
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
              {searches.map((search, index) => (<div key = {index} style={{animationDelay: index * .1 + "s"}} className="search-items">
                 {search}
              </div>))}
              <div className="search-box">
                <input type="text" placeholder="Search..."/>
                <button className="btn"><FontAwesomeIcon icon={faSearch}/></button>
                
              </div>
            </div>
        </div>
    </div>
  )
}