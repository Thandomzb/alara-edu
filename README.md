# Alara Education

A private, stigma-free web app delivering merit-based ASRHR education to teens in South Africa...

Alara Education
Technical Documentation
FNB Hackathon 2025 Submission

🔗 Live Application
Web App: https://alara-edu-9b790.web.app
Demo Video: https://youtu.be/BmVxxZexi98
📁 Source Code
GitHub Repository: https://github.com/thandomazibuko/alara-edu

🏗️ System Architecture
Alara is a privacy-first, mobile-optimized web application built for adolescents in high-stigma environments across South Africa and the SADC region.
Architecture Diagram
1.User (Mobile Browser)
      ↓
2.Firebase Hosting (HTTPS, Global CDN)
      ↓
3.Firebase Authentication (Phone OTP)
      ↓
4.Cloud Firestore (User progress & rewards)
Key Design Principles
Zero backend server → reduced attack surface
Client-side logic only → fast, lightweight, works on 3G
No app install required → lowers access barrier
Safe Exit button → one-tap redirect to neutral site (e.g., google)

⚙️ Tech Stack




Frontend
HTML5, CSS3, JavaScript
Authentication
Firebase Authentication (Phone OTP)
Database
Cloud Firestore
Hosting
Firebase Hosting
Security
HTTPS, Firestore Rules, No Third-Party Scripts
Deployment
Manual upload via Firebase Console

Why this stack?
Built for low-literacy, shared-device, data-constrained contexts without compromising safety or impact.

🔒 Security & Privacy (SSDLC)
1. Security Requirements
Goal: Protect teens from stigma, exposure, and data misuse
Data Minimization: Only store phone (hashed), lesson progress, reward redemptions
No PII: Quiz answers, gender, location, or school never collected
2. Threat Modelling (STRIDE)
Spoofing: Mitigated by official *.web.app domain
Information Disclosure: Prevented by Safe Exit, no analytics, no logs
Elevation of Privilege: Firestore rules enforce user isolation
3. Secure Coding Practices
No eval(), innerHTML, or dangerous JS patterns
All assets served locally
Phone input sanitized
HTTPS enforced by Firebase Hosting
4. Security Testing
Manual privacy testing (no PII in DevTools)
Safe Exit verified on shared devices
Auth flow tested with demo credentials (0821234567 / 123456)
5. Compliance
Aligned with POPIA (South Africa) and UNICEF ASRHR Guidelines
No data monetization, no third-party sharing

🧪 How to Test (For Judges)
Visit: https://alara-edu-9b790.web.app
Use demo login:
Phone: 0821234567
OTP: 123456
Complete the Consent lesson → redeem a reward

📈 Future Roadmap
Integrate MTN Airtime API and FNB Youth onboarding
Add local language support (Zulu, Xhosa)
Implement production Firestore Security Rules
Conduct POPIA-compliant DPIA before national scale

 Contact
Developer: Thando Mazibuko
Email: thandomazibuko@example.com
GitHub: @thandomazibuko
“Alara collects almost no data because for teens in high-stigma environments, privacy isn’t a feature, it’s the foundation of trust.”
