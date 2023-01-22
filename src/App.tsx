import './styles/app.scss'

import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

export function App() {
  return(
    <div className="app">
      <div className='container'>
       <Header />
       <SummaryTable />
      </div>
    </div>
  )
}
