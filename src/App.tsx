import './App.css'
import Sidebar from './components/Sidebar/Sidebar'; // 稍后创建
import MainContent from './components/MainContent/MainContent';
import RScaleScreen from "r-scale-screen"; // 稍后创建

function App() {

  return (
      <>
          <RScaleScreen height={1080} width={1920}>
              <div className="app-container">
                  <MainContent /> {/* 内容区放在前面，方便 CSS 结构 */}
                  <Sidebar />     {/* 侧边栏 */}
              </div>
          </RScaleScreen>
      </>
  )
}

export default App
