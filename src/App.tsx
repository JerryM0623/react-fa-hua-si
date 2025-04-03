import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FaHuiPage from "./pages/FaHuiPage.tsx";
import FoshiPage from "./pages/FoShiPage.tsx";
import SiWuPage from "./pages/SiWuPage.tsx";
import FaWuPage from "./pages/FaWuPage.tsx";
// import HuoDongPage from "./pages/HuoDongPage.tsx";
import YiGongPage from "./pages/YiGongPage.tsx";

function App() {

  return (
      <>
          <BrowserRouter>
              {/* 👇 Routes 包裹所有顶级 Route */}
              <Routes>
                  {/* 父 Route (Layout Route) 也是 Routes 的直接子元素 */}
                  <Route path="/" element={<Layout />}>
                      {/* 👇 嵌套的 Route 也是其直接父 Route 的子元素，这没问题 */}
                      {/* 这些最终也是通过 <Outlet/> 在 <Routes> 的上下文中渲染的 */}
                      <Route path="fahui" element={<FaHuiPage />} />
                      <Route path="foshi" element={<FoshiPage />} />
                      <Route path="siwu" element={<SiWuPage />} />
                      <Route path="fawu" element={<FaWuPage />} />
                      {/* <Route path="huodong" element={<HuoDongPage />} /> */}
                      <Route path="yigong" element={<YiGongPage />} />
                  </Route>
                  {/* 其他顶级 Route */}
                  {/* <Route path="/login" element={<LoginPage />} /> */}
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
