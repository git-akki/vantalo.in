# Vantalo - AI-Powered Web & Social Media Agency

This is the official repository for Vantalo, a premier AI-based Web and Social Media Agency. We build modern SaaS-style websites and automate social media growth using cutting-edge AI technology.

## Technologies Used

- **Vite**: Build tool and development server.
- **React**: UI library.
- **TypeScript**: Static typing.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animations.
- **Shadcn UI**: Reusable components.
- **Supabase**: Backend database for form submissions.
- **Resend**: Email delivery service.

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/git-akki/vantalo.in.git
    cd vantalo.in
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    - Copy `.env.example` to `.env`.
    - Fill in your Supabase and Resend credentials.

4.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Add the environment variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`).
4.  Deploy!
