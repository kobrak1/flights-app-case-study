import SearchBar from '../../components/searchBar/SearchBar'
import Header from '../../components/header/Header';
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />
      <SearchBar />
    </div>
  )
}

export default HomePage