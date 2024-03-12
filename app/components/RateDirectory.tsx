'use client';

import React, { useState } from 'react';
import { RATES } from '../constants/rates';

const RatesDirectory = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRates = RATES.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(RATES.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {currentRates.map((rate) => (
              <tr key={rate.currency}>
                <td>{rate.currency}</td>
                <td>{rate.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination flex  w-[200px] justify-evenly'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active font-extrabold' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RatesDirectory;
