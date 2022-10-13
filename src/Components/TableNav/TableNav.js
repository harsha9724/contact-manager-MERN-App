
import Calendar from "../../Images/calender.png"
import downArrow from "../../Images/downArrow.png"
import filter from "../../Images/list.png"
import verticleLine from "../../Images/verticleLine.png"
import Delete from "../../Images/delet.png"
import Import from "../../Images/sort.png"
import Export from "../../Images/export.png"

import "./TableNav.css"

const TableNav = () => {

    return (
        <div className='table-nav-container'>
            <div className='left-nav'>
                <div className='nav-items'>
                    <img src={Calendar} alt="" />
                    <span>Select Date</span>
                    <img src={downArrow} alt="" />
                </div>
                <div className='nav-items'>
                    <img src={filter} alt="" />
                    <span>Filter</span>
                    <img src={verticleLine} alt="" />
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <div className='right-nav'>
                <div className='nav-items' style={{cursor:"pointer"}}>
                    <img src={Delete} alt="" />
                    <span>Delete</span>
                </div>
                <div className='nav-items' style={{cursor:"pointer"}}>
                    <img src={Import} alt="" />
                    <span>Import</span>
                </div>
                <div className='nav-items'>
                    <img src={Export} alt="" />
                    <span>Export</span>
                </div>
            </div>
        </div>
    )
}

export default TableNav