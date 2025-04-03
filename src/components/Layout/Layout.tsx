import RScaleScreen from "r-scale-screen";
import MainContent from "../MainContent/MainContent.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

function Layout() {
    return (
        <RScaleScreen height={1080} width={1920}>
            <div className="app-container">
                <MainContent /> {/* 内容区放在前面，方便 CSS 结构 */}
                <Sidebar />     {/* 侧边栏 */}
            </div>
        </RScaleScreen>
    );
}

export default Layout;
