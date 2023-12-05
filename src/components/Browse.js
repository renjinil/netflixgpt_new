
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  const showGpt = useSelector(store=>store.gpt?.showGpt)
  return (
    <div>
      <Header/>
      {showGpt?   <GPTSearch/> :
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
}
    </div>
  )
}

export default Browse
