


'use client';

import { useEffect, useState } from 'react';
import { getShops } from '@/app/api/clientApi';
import { ShopType } from '@/types/types';

export default function ShopsPage() {
    const [shops, setShops] = useState<ShopType[]>([]);
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShops()
      .then((data) => {
        setShops(Array.isArray(data) ? data : []);
      })
          .catch(err => console.error(err))
       .finally(() => setLoading(false));
  }, []);
    
      if (loading) return <p>Завантаження...</p>;

  return (
    <div>
      <h1>Список аптек</h1>
      <div style={{ display: 'grid', gap: '10px' }}>
        {shops.map((shop, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{shop.shopName}</h3>
            <p>Адреса: {shop.street}, {shop.city}</p>
            <p>Рейтинг: ⭐ {shop.rating}</p>
            {shop.hasDelivery && <span>🚚 Є доставка</span>}
          </div>
        ))}
      </div>
    </div>
  );
}







