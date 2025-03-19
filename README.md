# MeetMe - Your Smart Meeting Companion

MeetMe is a modern web application designed to simplify meeting scheduling with seamless Google Calendar integration. Built using cutting-edge technologies, MeetMe offers an intuitive interface, robust backend architecture, and user-centric features to streamline collaboration.

##  Features

✅ **Google Calendar Integration:** Effortlessly sync and manage your meetings directly from MeetMe.\
✅ **Secure Authentication:** Powered by Clerk for seamless sign-in and data protection.\
✅ **User-friendly Interface:** Designed with ShadCN for a clean and modern UI.\
✅ **Real-time Data Sync:** Ensures instant updates without page refresh using Next.js features.\
✅ **Flexible Availability Management:** Easily set your available time slots for efficient scheduling.\
✅ **Intelligent Notifications:** Get notified for upcoming meetings and changes.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 with App Router
- **UI Framework:** ShadCN (TailwindCSS)
- **Authentication:** Clerk
- **Database:** NeonDB (Serverless PostgreSQL)
- **Backend:** Prisma ORM + Next.js API Routes

## 📂 Project Structure

```
/ (Root)
├── /app
│   ├── /dashboard
│   ├── /meetings
│   ├── /availability
│   ├── /api (Server Routes)
├── /components (Reusable UI Components)
├── /lib (Utility Functions)
├── /prisma (Database Models)
├── /public (Assets & Images)
├── /styles (Global Styles)
```

##  Installation & Setup

1. **Clone the Repository:**

```bash
git clone https://github.com/yourusername/meetme.git
cd meetme
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Environment Variables:** Create a `.env` file in the root directory and include:

```
DATABASE_URL=your_neondb_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_CALENDAR_API_KEY=your_google_calendar_key
```

4. **Run the Development Server:**

```bash
npm run dev
```

5. **Visit ****`http://localhost:3000`** to explore MeetMe.

##  Key Highlights

🔹 Utilized Next.js 14's App Router for optimized routing and improved server actions.\
🔹 Integrated Prisma ORM for streamlined database management with NeonDB.\
🔹 Enhanced performance by adopting best practices in Next.js and TailwindCSS.\
🔹 Developed secure user authentication with Clerk, ensuring data protection.

##  Deployment

It will be hosted on **Vercel** for fast, scalable, and secure deployment.

##  Future Enhancements

- 👨🏼‍💻 AI enabled prediction of common availability time spots.
- ⏲️ Enhanced scheduling features with time zone support.
- 📧 Email and in-app notifications for reminders.
- 📊 Meeting analytics and insights for better productivity.

##  Contribution

Contributions are welcome! If you'd like to improve MeetMe, feel free to fork the repository and submit a pull request.

## 📫 Contact

If you have any questions or suggestions, feel free to reach out via [LinkedIn](https://linkedin.com/in/theabhishekbaranwal) or email at **[cachedabhi@gmail.com](mailto\:cachedabhi@gmail.com)**.

---

⭐ If you like this project, don't forget to give it a star on GitHub!

