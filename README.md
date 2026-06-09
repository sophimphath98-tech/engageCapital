# Engage Capital - Digital Lending Platform

Engage Capital Cambodia Co., Ltd. is a licensed digital lending platform making credit accessible to every Cambodian — individuals, SMEs, and entrepreneurs — through a fast, paperless, and fully online experience.

This repository contains the Next.js frontend and integrated backend services that power the landing page, dynamic loan calculators, and application intake flows.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Custom CSS variables
- **Animations:** Framer Motion
- **Database / ORM:** PostgreSQL & Prisma
- **Icons:** Lucide React

---

## 🏗️ Project Structure

We follow a modular, feature-based architecture within the `src/` directory to ensure high maintainability and clean separation of concerns.

```text
engageCapital/
├── CODE_CONVENTIONS.md      # Standardized documentation rules for files & functions
├── prisma/                  # Database schema definitions and migrations
└── src/
    ├── app/                 # Next.js App Router core (pages, layouts, API routes)
    ├── components/          
    │   ├── layout/          # Root level structures (Navbar, Footer)
    │   ├── features/        # Domain-specific UI sections (Hero, About, LoanProducts)
    │   └── shared/          # Reusable UI elements (Calculator, ContactForm, StatsCounter)
    ├── constants/           # Static data arrays and configuration definitions
    ├── hooks/               # Custom React hooks (e.g., useSmoothScroll)
    ├── services/            # Data access layer (Prisma interactions)
    └── types/               # Global TypeScript domain interfaces (LoanProduct, etc.)
```

---

## 🚀 Developer Setup (First Clone)

Follow these instructions to get the application running locally on your machine for the first time.

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **PostgreSQL** database (Local instance or cloud provider like Supabase/Neon)

### 2. Install Dependencies
Clone the repository and install all required NPM packages:
```bash
git clone <repository-url>
cd engageCapital
npm install
```

### 3. Database Configuration

You must provide a PostgreSQL database for Prisma to connect to. You can choose one of three common methods to host your database:

**Option A: Local PostgreSQL (Homebrew / Postgres.app)**
1. Ensure PostgreSQL is installed and running locally (`brew services start postgresql`).
2. Create a local database named `engage_capital`.
3. Your connection string will typically be: `postgresql://localhost:5432/engage_capital?schema=public`

**Option B: Docker / Docker Compose**
If you have Docker installed, you can quickly spin up a Postgres container:
```bash
docker run --name engage-pg -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=engage_capital -p 5432:5432 -d postgres
```
Your connection string will be: `postgresql://postgres:mysecretpassword@localhost:5432/engage_capital?schema=public`

**Option C: Cloud Provider (Supabase, Neon, Railway)**
1. Create a free tier PostgreSQL database on a cloud provider.
2. Copy the provided connection string (Transaction connection pooler).

**Set your Environment Variable**
Once you have your connection string from the steps above, create a `.env` file in the root directory:
```bash
# .env
DATABASE_URL="<your-postgresql-connection-string-here>"
```

### 4. Database Initialization
Use Prisma to push the schema to your database and generate the Prisma Client. 

If this is the first time running migrations:
```bash
npx prisma migrate dev --name init
```
Alternatively, to just push the schema without tracking migration history:
```bash
npx prisma db push
```

### 5. Seed the Database
Populate your database with the default mock loan products so the UI has data to render:
```bash
npm run seed
```

### 6. Start the Development Server
Run the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📜 Coding Conventions
Please review the `CODE_CONVENTIONS.md` file located at the root of the project before contributing. It dictates the required header blocks for files, React components, and major functions to keep the codebase traceable and well-documented. All new code must follow the Atonnydev standard.
