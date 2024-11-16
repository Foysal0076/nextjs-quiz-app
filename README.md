# Quiz App [A Next.js Quiz Platform]

## Getting Started

### First fill up this .env.local variable

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET = your_secret_here
SITE_URL=http://localhost:3000
```

### Install dependencies and run the development server

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Login credentials (Please, feel free to register with your own email)

```bash
ADMIN USER
email: admin@test.com
password: admin

GENERAL USER
email: johndoe@test.com
password: Test1234

```

## Feature List

- [x] User Authentication

  - [x] Register
  - [x] Login
  - [x] Logout
  - [x] Protected Routes

- [x] Quiz Management

  - [x] Create Questions
  - [x] Edit Questions
  - [x] Delete Questions
  - [x] Multiple Choice Options (2-4 options) (Optional)
  - [x] Set Correct Answers

- [x] Quiz Taking

  - [x] Submit Responses
  - [x] View Submissions with History
  - [x] Track Participants

- [x] Others
  - [x] Form Validation with Zod
  - [x] Modal System
  - [x] Responsive Design
  - [x] Dark Mode | Light Mode
  - [x] Testing with React Testing Library
  - [x] Type Safety with TypeScript

## Tools and Technologies

- [Next.js](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Next Themes](https://www.npmjs.com/package/next-themes)
- [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge)
- [Class Variance Authority](https://www.npmjs.com/package/class-variance-authority)

### Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [Jest DOM](https://testing-library.com/docs/jest-dom/)

### Code organization and quality

- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [lint-staged](https://github.com/okonet/lint-staged)
