import React from "react";
import { Link } from "react-router-dom";

function Students(props) {
    return (
        <div>

            <div className="StudentsHead">
                <h1>Students Details</h1>
                <Link to="/Students/Details" className="StudentsButton">Add New Student</Link>
            </div>

            <table className="table">
                <tr className="tableRow">
                    <th>Name</th>
                    <th>Age </th>
                    <th>Course </th>
                    <th>Batch</th>
                    <th>Change Details</th>
                </tr>

                <tr>
                    <td>Neelesh Ranja</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Jeevesh Tewatia</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Bhashkar singh</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Arpana Kumari</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Vinayak Kailas Patil</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Asutosh Nayak</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Shashi Bhusan</td>
                    <td>24</td>
                    <td>Elevation Academy</td>
                    <td>EA13</td>
                    <td>Edit</td>
                </tr>








            </table>
        </div>
    )
}

export default Students;