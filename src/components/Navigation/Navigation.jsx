import { Link } from "react-router-dom"

export default function Navigation() {
return(
  <nav>
    <Link to='/'>Dictionary</Link>
    {' '}
    <Link to='/addWord'>Add new word</Link>
    {' '}
    <Link to='/testWord'>Test yourself</Link>
    {' '}
    <Link to='/results'>Results</Link>
  </nav>
  )  
};