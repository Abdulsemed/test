import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import '../style.css'

const TestWithMockData = ({data}) => {
 return (
 <div className="container names">
 <ul className="list-group names">
 {data.map(item => (
 <li key={item.id} className="list-group-item d-flex align-items-center">
<div className="center">
    <FaUserCircle size={80} color="#007bff" />
</div>
 <div className="ms-3">
    <div className='center'>
        <h5 className="mb-0">{item.first_name} {item.last_name}</h5>
    </div>
 <p className="mb-0"><BsEnvelope /> {item.email}</p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 )
}

export default TestWithMockData