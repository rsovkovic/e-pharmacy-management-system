// import mongoose from 'mongoose';
// import { Product } from '../src/models/product';
// import { Shop } from '../src/models/shop';

// const seed = async () => {
//   await mongoose.connect(
//     'mongodb+srv://rsovkovic_db_user:J28kzQhpWvB9BCiR@cluster0.7g0a2do.mongodb.net/pharmacy',
//   );

//   const allShops = await Shop.find();
//   const allProducts = await Product.find();

//   await Product.updateMany({}, { $unset: { shopId: '' } });

//   for (const shop of allShops) {
//     const selected = allProducts.sort(() => 0.5 - Math.random()).slice(0, 10);

//     const copies = selected.map((p) => ({
//       name: p.name,
//       photo: p.photo,
//       suppliers: p.suppliers,
//       stock: p.stock,
//       price: p.price,
//       category: p.category,
//       shopId: shop._id,
//     }));

//     await Product.insertMany(copies);
//   }

//   console.log('✅ Готово');
//   mongoose.connection.close();
// };

// seed();

//////////////////////////////////////////////////////////

// @ts-nocheck
// import mongoose from 'mongoose';
// import { Product } from '../src/models/product';
// import { Shop } from '../src/models/shop';

// const seed = async () => {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://rsovkovic_db_user:J28kzQhpWvB9BCiR@cluster0.7g0a2do.mongodb.net/pharmacy',
//     );

//     const allShops = await Shop.find();

//     const baseProducts = await Product.find({ shopId: { $exists: false } });

//     await Product.deleteMany({ shopId: { $exists: true } });

//     for (const shop of allShops) {
//       const randomSet = baseProducts
//         .sort(() => 0.5 - Math.random())
//         .slice(0, 12);

//       const itemsToInsert = randomSet.map((p) => ({
//         name: p.name,
//         photo: p.photo,
//         suppliers: p.suppliers,
//         stock: p.stock,
//         price: p.price,
//         category: p.category,
//         shopId: shop._id,
//       }));

//       await Product.insertMany(itemsToInsert);
//     }

//     console.log('✅ База заповнена по 12 товарів на аптеку!');
//   } catch (e) {
//     console.error(e);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// seed();
