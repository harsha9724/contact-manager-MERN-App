import React from 'react'
import { useContext } from 'react'
import { context } from '../ContextApi/context'
import Edit from "../../Images/Edit-Pen.png"
import DeleteBin from "../../Images/Delete-Bin.png"
import "./Table.css"
import ReactTooltip from "react-tooltip";

const Table = () => {
    const { contacts } = useContext(context)
    console.log(contacts);

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
                    {contacts.map((item) => {
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
        </div>
    )
}

export default Table