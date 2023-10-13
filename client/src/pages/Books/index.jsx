import './styles.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'
import React from 'react'

import logoImage from '../../assets/logo.svg'

export default function Books(){
    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio" />
                <span>Welcome, <strong>Leandro</strong>!</span>
                <Link className="button" to="book/new">Add new book</Link>
                <button type='button'>
                    <FiPower size={18} color='#251fc5'/>
                </button>
            </header>

            <h1>Registered Books</h1>
            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Pouton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date:</strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button> 
                    <button type='button'>
                        <FiTrash2 size={20} color='#251FC5'/>
                    </button> 
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Pouton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date:</strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button> 
                    <button type='button'>
                        <FiTrash2 size={20} color='#251FC5'/>
                    </button> 
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Pouton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date:</strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button> 
                    <button type='button'>
                        <FiTrash2 size={20} color='#251FC5'/>
                    </button> 
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Pouton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date:</strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button> 
                    <button type='button'>
                        <FiTrash2 size={20} color='#251FC5'/>
                    </button> 
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel Pouton</p>
                    <strong>Price:</strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date:</strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button> 
                    <button type='button'>
                        <FiTrash2 size={20} color='#251FC5'/>
                    </button> 
                </li>
            </ul>
        </div>
    )
}