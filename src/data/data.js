
import img1 from '../assets/watchlist.com.jpg'
import img2 from '../assets/comfystore.jpg'
import img3 from '../assets/crypto hunter.jpg'

export const projectData = [
  {
    id: 3,
    title: 'Crypto Hunter',
    desc: 'This project is made to track cryptocurrency prices, and add cryptocurrencies to your watchlist to track the price of  particular cryptocurrency',
    features: [
      { id: 1, name: 'Realtime Cryptocurrency Price tracking' },
      {
        id: 2,
        name: 'Chart view for better understanding of cryptocurrency over the time',
      },
      {
        id: 3,
        name: 'Authentication and Adding crypto coin to your watchlist',
      },
    ],
    techStacks: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Redux Toolkit' },
      { id: 3, name: 'Styled Component' },
      { id: 4, name: 'Axios' },
      { id: 5, name: 'Material UI' },
      { id: 6, name: 'ChartJS' },
      { id: 7, name: 'Firebase' },
    ],
    img: img3,
    url: 'https://crypto-hunter-v1.netlify.app/',
    repo: 'https://github.com/shyamayadav154/cyrpto-hunter',
  },
  {
    id: 2,
    title: 'Comfy Store',
    desc: 'An e-commerce website for furniture. It demonstrates features such as a shopping cart, payment, and delivery.',
    features: [
      { id: 1, name: 'Attractive UI/UX' },
      { id: 2, name: 'Search,Sort & Filter Product Functionality' },
      { id: 3, name: 'Add To Cart Functionality' },
    ],
    techStacks: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Redux' },
      { id: 3, name: 'SASS' },
      { id: 4, name: 'Axios' },
      { id: 5, name: 'Styled-Components' },
    ],
    img: img2,
    url: 'https://comfy-store-v1.netlify.app/',
    repo: 'https://github.com/shyamayadav154/comfy-store',
  },

  {
    id: 1,
    title: 'WatchList.com',
    desc: 'An entertainment website,  to help you make your movies & series list to watch in the future and the list of movies you have viewed in past.',
    features: [
      { id: 1, name: 'Trending Movies & Series list' },
      { id: 2, name: 'Search And Add Movies to your list' },
      {
        id: 3,
        name: 'See Movie Details (e.g: Trailer,Description,Rating,Casts',
      },
    ],
    techStacks: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Context' },
      { id: 3, name: 'Local Storage' },
      { id: 4, name: 'CSS' },
      { id: 5, name: 'API' },
      { id: 6, name: 'Framer Motion' },
    ],
    img: img1,
    url: 'https://watchlistcom.netlify.app/',
    repo: 'https://github.com/shyamayadav154/Watchlist-Private-',
  },
]

export const aboutData = [
  {
    id: 1,
    info: ' Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology',
    desc: [
      {
        id: 1,
        paragraph:
          " I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.",
      },
      {
        id: 2,
        paragraph:
          ' I also like sharing content related to the stuff that I have learned in Web Development so it can help other people in the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming. ',
      },
    
    ],
    skills: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'SASS' },
      { id: 4, name: 'React' },
      { id: 5, name: 'Redux' },
      { id: 6, name: 'GIT' },
      { id: 7, name: 'GitHub' },
      { id: 8, name: 'Responsive Design' },
      { id: 9, name: 'Webpack' },

    ],
  },
]
