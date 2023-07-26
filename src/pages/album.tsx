import Image from 'next/image';
import React from 'react';

export default function album() {
  return (
    <div>
      <h1>Album</h1>
      <img
        src='https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80'
        height={200}
        width={300}
        alt=''
      />
      <Image
        src='https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80'
        height={200}
        width={300}
        alt=''
        layout='responsive'
      />
    </div>
  );
}
