import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from '../ContextApi/context'
import Edit from "../../Images/Edit-Pen.png"
import DeleteBin from "../../Images/Delete-Bin.png"
import "./Table.css"
import ReactTooltip from "react-tooltip";

const Table = () => {
    const { contacts } = useContext(context);
    const [pageNo, setPageNo] = useState(1)
    let limit = 2;
    let pages = Math.ceil(contacts.length / limit);
    let pagesArray = new Array(pages).fill(0);
    const start = (pageNo - 1) * limit;
    const end = pageNo * limit;
    const contactperpage = contacts.slice(start, end);
    const left = "<"
    const right = ">"
    const handlepageClick = (e) => {
        console.log((e.target.value));
        setPageNo(parseInt(e.target.value))
    }

    return (
        <div>
            <table id="myTable" className="table table-hover">
                <thead>
                    <input type="checkbox" id="checkAll" />
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Company</th>
                    <th scope="col">Industry</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col">Action</th>
                </thead>
                <tbody className='table-body'>
                    {contactperpage.map((item) => {
                        if (item.name !== "") {
                            return (
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                        />
                                    </th>
                                    <td>{item.Name}</td>
                                    <td>{item.Designation}</td>
                                    <td>{item.Company}</td>
                                    <td>{item.Industry}</td>
                                    <td id="email">{item.Email}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>{item.Country}</td>
                                    <td>
                                        <img src={Edit} alt="" />
                                        <img src={DeleteBin} alt="" />
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>

            <div className='page-no'>
                {(pageNo > pages) ? null : <button onClick={() => 
                {
                    if(pageNo>1){
                        setPageNo(pageNo - 1)
                    }
                }
                    }> {left} </button>}

                {
                    pagesArray.map((item, i) => {
                        return (<button value={i + 1} onClick={handlepageClick}>{i + 1}</button>)
                    })
                }
                {(pageNo > pages ) ? null : <button onClick={() => {
                    if (pageNo !== pages) {
                        setPageNo(pageNo + 1)
                    }
                }
                }> {right} </button>}
            </div>



        </div>
    )
}

export default Table