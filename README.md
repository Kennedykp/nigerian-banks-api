# Nigerian Banks API 🏦

A production-ready REST API for Nigerian banks and microfinance institutions.

## Features
- 📋 List all Nigerian banks with logos, codes, and details
- 🔍 Filter by type (commercial, microfinance, fintech)
- 🔐 Admin endpoints protected by API key
- ⚡ Fast and lightweight

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your Supabase credentials

# Seed the database
npm run seed

# Start the server
npm start
```

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/banks` | Get all banks |
| GET | `/api/v1/banks?type=commercial` | Filter by type |
| GET | `/api/v1/banks/:id` | Get bank by ID |

### Admin (requires `x-api-key` header)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/banks` | Create a bank |
| PUT | `/api/v1/banks/:id` | Update a bank |
| DELETE | `/api/v1/banks/:id` | Deactivate a bank |

## Tech Stack
- Node.js + Express
- Supabase (PostgreSQL)
- CORS, Helmet, Morgan

## License
MIT
