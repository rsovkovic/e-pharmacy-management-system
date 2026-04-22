// import express from 'express';
// import cors from 'cors';
// import pino from 'pino-http';
// import 'dotenv/config';

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(cors());
// app.use(express.json());
// app.use(
//   pino({
//     level: 'info',
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true,
//         translateTime: 'HH:MM:ss',
//         ignore: 'pid,hostname',
//         messageFormat:
//           '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
//         hideObject: true,
//       },
//     },
//   }),
// );

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Pharmacy API is running...' });
// });

// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//   console.error(err);

//   const isProd = process.env.NODE_ENV === 'production';

//   res.status(500).json({
//     message: isProd
//       ? 'Something went wrong. Please try again later.'
//       : err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
// import pino from 'pino-http';
import { pinoHttp } from 'pino-http';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(
  pinoHttp({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat:
          '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Pharmacy API is running...' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
