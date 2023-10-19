import Footer from "./components/Footer.jsx"
import SocialLayout from "./components/SocialLayout.jsx"
import ImageLayout from "./components/ImageLayout.jsx"
import FormLayout from "./components/FormLayout.jsx"
import TitleLayout from "./components/TitleLayout.jsx"
import Header from "./components/Header.jsx"
import MainLayout from "./components/MainLayout.jsx"

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <TitleLayout />
        <FormLayout />
        <ImageLayout />
        <SocialLayout />
        <Footer />
      </MainLayout>
    </>
  )
}

export default App
