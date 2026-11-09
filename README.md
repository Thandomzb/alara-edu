# Alara Education

A privacy-first, mobile-optimised web prototype that gives South African adolescents (13–18) private, stigma-free sexual and reproductive health and rights (ASRHR) education, with rewards for learning. Built for the FNB App of the Year Hackathon 2025.

**Live prototype:** https://alara-edu-9b790.web.app
**Demo video:** https://youtu.be/BmVxxZexi98
**Source code:** https://github.com/Thandomzb/alara-edu

## Project status

- Working prototype. It has not yet been tested with learners.
- Reward redemption is simulated. Integration with real reward providers is planned.
- A 100-learner pilot is planned, with clinician and youth-educator review of all content beforehand.
- Local language support (isiZulu, isiXhosa) and a grounded AI assistant are planned and not yet built.

## Architecture

1. User (mobile browser)
2. Firebase Hosting (HTTPS, global CDN)
3. Firebase Authentication (phone OTP)
4. Cloud Firestore (lesson progress and reward redemptions)

Design principles:
- No custom backend server, which reduces the attack surface
- Client-side logic only: fast, lightweight, designed for low-bandwidth connections
- No app install required
- Safe Exit button: one-tap redirect to a neutral site

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Authentication | Firebase Authentication (phone OTP) |
| Database | Cloud Firestore |
| Hosting | Firebase Hosting |
| Security | HTTPS, Firestore security rules, no third-party scripts |

## Security and privacy design

**Data minimisation.** We do not ask for a name, email or ID. Phone verification is handled by Firebase Authentication. We store only lesson progress and reward redemptions. We do not collect quiz answers, gender, location or school, and we use no analytics or third-party trackers.

**Threat modelling (STRIDE):**
- Spoofing: official `*.web.app` domain
- Information disclosure: Safe Exit button, no analytics
- Elevation of privilege: Firestore security rules designed to isolate each user's data (production rules and testing are on the roadmap)

**Secure coding:** no `eval()` or `innerHTML`, all assets served locally, phone input sanitised, HTTPS enforced by Firebase Hosting.

**Testing so far (manual):** privacy checks in browser dev tools, Safe Exit verification, authentication flow tested with demo credentials.

**Compliance intent:** designed around POPIA data-minimisation principles and UNICEF ASRHR guidance. A full Data Protection Impact Assessment is planned before any wider rollout.

## How to test

1. Visit https://alara-edu-9b790.web.app
2. Log in with the demo account (Firebase test number): phone `0821234567`, OTP `123456`
3. Complete the Consent lesson and redeem a reward (simulated)

## Roadmap

- Clinician and youth-educator review of all content
- Real reward provider integrations (airtime and data) and real phone verification
- Production Firestore security rules with automated testing
- Local language support (isiZulu, isiXhosa)
- Grounded AI assistant that answers only from reviewed content, does not store conversations, and refers users in crisis to verified services
- Independent security review and DPIA
- 100-learner pilot with pre- and post-lesson measurement

## License

Code: MIT License, see the `LICENSE` file.
Lesson content: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/).

## Contact

Thando Mazibuko
Email: thirtyonecommunications@gmail.com
GitHub: @Thandomzb

> "Alara collects almost no data because for teens in high-stigma environments, privacy isn't a feature, it's the foundation of trust."
“Alara collects almost no data because for teens in high-stigma environments, privacy isn’t a feature, it’s the foundation of trust.”
