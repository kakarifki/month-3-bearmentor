import './styles/index.css'
import TopBar from './components/top-bar'
import ListTask from './components/list-tasks'


function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
        {/* Top-bar start */}
        <TopBar />
        {/* Top-bar End */}
        {/* List-tasks start */}
        <ListTask />
        {/* List-tasks End */}


        </>
    )
}

export default App
