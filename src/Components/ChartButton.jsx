import React from 'react'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector} from 'react-redux'
import DropdownButton from './DropdownButton'
import { updateChartList } from '../redux/currency'
const ChartButton = () => {
    const chart =["Horizontal-barChart","Line-Chart","Vertical-Barchart"]
  const {chartlist}=useSelector(state=>state.curr)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
      dispatch(updateChartList(e))
      console.log(chartlist)
        
    }
  return (
    <div >
    <DropdownButton name={chartlist} list={chart} handleChange={handleChange}/>

    </div>
  )
}

export default ChartButton
