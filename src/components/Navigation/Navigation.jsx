import { Link } from "react-router-dom"

export default function Navigation() {
return(
  <nav>
    <ul>
      <li>
        <Link to='/'>Dictionary</Link>
      </li>
      <li>
        <Link to='/addWord'>Add new word</Link>
      </li>
      <li>
        <Link to='/testWord'>Test yourself</Link>
      </li>
      <li>
        <Link to='/results'>Results</Link>
      </li>
    </ul>
  </nav>
  )  
};