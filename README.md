# Node API Template

This API is developed using **NodeJS** 🟦, **TypeScript** 🟨, **Fastify** ⚡, **Drizzle ORM** 🌧️, and **Jest** 🧪.

## 🛠️ Requirements

To run this project, ensure you have the following installed:

- **npm** (Node Package Manager)
- **Docker**
- **Docker Compose**

## 🚀 Setup

To set up and start the application, follow these steps:

1. Create the .env file:

   ```bash
   cp .env.example .env
   ```

2. Start the database container:

   ```bash
   docker-compose up -d db
   ```

3. Start the API container:

   ```bash
   docker-compose up -d api-dev
   ```

4. Access the API container shell:

   ```bash
   docker exec -it node-fastify-drizzle-template-api-dev-1 sh
   ```

5. Install dependencies:

   ```bash
   npm install
   ```

6. Run migrations to set up the database schema:
   ```bash
   npx drizzle-kit migrate
   ```

Once these steps are complete, the app will be running at:

- **App**: 🌐 [http://localhost:3000](http://localhost:3000)
- **API Documentation**: 📄 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 🛠️ Migrations

### 🔄 Generate a migration based on your schemas:

```bash
npx drizzle-kit generate
```

### ✅ Apply migrations:

```bash
npx drizzle-kit migrate
```

## 🔍 Code Quality and Pre-commit Checks

This project uses Husky 🐶 for pre-commit hooks. Before committing changes, ensure the following steps are performed:

1. Format the code: 🎨

   ```bash
   npm run prettier
   ```

2. Lint the code: 🧹

   ```bash
   npm run lint
   ```

3. Run tests: ✅
   ```bash
   npm run test
   ```

These steps will help maintain code quality 💯 and ensure consistency across the project.
