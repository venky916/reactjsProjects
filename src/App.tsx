import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Accordian from './components/1.Accordian'
import RandomColor from './components/2.RandomColor'
import StarRating from './components/3.StarRating'
import ImageSlider from './components/4.ImageSlider'
import LoadMoreButton from './components/5.LoadMoreButton'
import TreeView from './components/6.TreeView'
import menus from './components/6.TreeView/data'
import QRCodeGenerator from './components/7.QRCodeGenerator'
import LightDarkTheme from './components/8.LightDarkTheme'
import CustomScrollIndicator from './components/9.CustomScrollIndicator'

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element:<h1>Hello! This is home Page</h1>
  },
    {
      path: '/accordian',
      element: <Accordian />,
    },
    {
      path: '/random-color',
      element: <RandomColor />,
    },
    {
      path: '/star-rating',
      element: <StarRating />,
    },
    {
      path: '/image-slider',
      element: <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}  />,
    },
    {
      path: '/load-more-data',
      element:<LoadMoreButton />
    },
    {
      path: '/treeview',
      element:<TreeView menus={menus}/>
    },
    {
      path: '/qr-code-generator',
      element:<QRCodeGenerator />
    },
    {
      path: '/light-dark',
     element :<LightDarkTheme /> 
    },
    {
      path: "/scroll-indicator",
      element :<CustomScrollIndicator />
    }
  ]);

  return (
    <>
     <RouterProvider router={appRouter} />
    </>
  )
}

export default App
