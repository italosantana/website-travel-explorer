import { Banner } from './components/Banner/Banner'
import './index.css';
import { Categories } from './components/Categories/Categories';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';
import { Container, ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Banner />
        <Categories />
        <Testimonial />
        <Newsletter />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
