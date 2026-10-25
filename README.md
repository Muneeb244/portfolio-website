Live Demo: https://muneeb-portfolio-tau.vercel.app/

## Contact form email

The contact form sends email from the server using Nodemailer and Gmail SMTP.
Set `EMAIL_USER` to the Gmail account used to send messages and
`EMAIL_APP_PASSWORD` to that account's Google App Password. Do not use your
regular Gmail password or expose either value with a `NEXT_PUBLIC_` prefix.

For local development, copy `.env.example` to `.env.local` and fill in the
values. For deployment, add both variables to the hosting provider's
environment-variable settings and redeploy.
