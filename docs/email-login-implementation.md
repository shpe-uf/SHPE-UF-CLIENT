# Email/Username Login Implementation

## Overview
This document describes the implementation of email-based login functionality as an alternative to username-only login. Users can now log in using either their username or email address while maintaining full backward compatibility with existing mobile applications.

---

## Implementation Date
February 22, 2026

---

## Changes Made

### 1. Frontend (SHPE-UF-CLIENT)

#### File: `src/pages/public/Login.js`
**Lines Modified:** 76, 146, 216

**Changes:**
- Updated the login form input label from `"Username"` to `"Username or Email"` across all three responsive layouts:
  - Desktop/Computer view (width: 8 columns)
  - Tablet view (width: 12 columns)  
  - Mobile view (width: 16 columns)

**Code Change:**
```javascript
// Before:
<Form.Input
  type="text"
  label="Username"
  name="username"
  // ...
/>

// After:
<Form.Input
  type="text"
  label="Username or Email"
  name="username"
  // ...
/>
```

**Note:** The `name` attribute remains as `"username"` to maintain API compatibility with mobile apps.

---

### 2. Backend (SHPE-UF-SERVER)

#### File: `graphql/resolvers/users.js`
**Lines Modified:** 331-336

**Changes:**
- Added email detection logic to the `login` mutation resolver
- The resolver now checks if the input contains an `@` symbol to determine if it's an email
- Queries the database by email or username accordingly

**Code Change:**
```javascript
// Before:
const user = await User.findOne({
  username,
});

// After:
// Check if the input is an email or username
const isEmail = username.includes('@');

// Query by email or username accordingly
const user = await User.findOne(
  isEmail ? { email: username } : { username }
);
```

---

## How It Works

### User Experience Flow
1. User navigates to the login page
2. Sees the input field labeled "Username or Email"
3. Can enter either:
   - Their username (e.g., `johndoe`)
   - Their email address (e.g., `johndoe@ufl.edu`)
4. Submits the form with their password
5. System authenticates using the appropriate field

### Technical Flow
1. **Client Side:**
   - User input is collected from the form
   - GraphQL mutation `login` is called with parameters:
     - `username`: Contains either username or email
     - `password`: User's password
     - `remember`: Boolean for session duration

2. **Server Side:**
   - Input is converted to lowercase for case-insensitive matching
   - System detects if input contains `@` symbol
   - If `@` present → Query database by `email` field
   - If no `@` → Query database by `username` field
   - Password verification proceeds as normal
   - JWT token generated and returned

3. **Database Query:**
   ```javascript
   // Email login
   User.findOne({ email: "johndoe@ufl.edu" })
   
   // Username login
   User.findOne({ username: "johndoe" })
   ```

---

## API Compatibility

### ✅ Mobile App Compatibility Maintained
- **GraphQL Mutation Signature:** UNCHANGED
- **Parameter Names:** UNCHANGED (`username`, `password`, `remember`)
- **Return Type:** UNCHANGED (`User` object with token)

### Mobile apps can continue using the existing implementation:
```graphql
mutation {
  login(
    username: "johndoe"
    password: "password123"
    remember: "false"
  ) {
    id
    username
    email
    token
    permission
  }
}
```

**Important:** Mobile apps do NOT need to be updated. They can continue sending usernames in the `username` parameter. The server-side logic handles both cases transparently.

---

## Testing

### Test Cases

#### 1. Login with Username
```
Input: "johndoe"
Password: "YourPassword123!"
Expected: Successful login
```

#### 2. Login with Email
```
Input: "johndoe@ufl.edu"
Password: "YourPassword123!"
Expected: Successful login
```

#### 3. Case Insensitivity
```
Input: "JOHNDOE@UFL.EDU" or "JOHNDOE"
Password: "YourPassword123!"
Expected: Successful login (input converted to lowercase)
```

#### 4. Error Handling
```
Input: "nonexistent@example.com"
Expected: "User not found." error

Input: "johndoe@ufl.edu" with wrong password
Expected: "Wrong credentials." error
```

### Testing Environment Setup

**Backend Server:**
```bash
cd /Users/jav/Projects/SHPE-UF-SERVER
PORT=5001 /opt/homebrew/opt/node@20/bin/node index.js
```
Server runs on: `http://localhost:5001/`

**Frontend Client:**
```bash
cd /Users/jav/Projects/SHPE-UF-CLIENT
npm start
```
Client runs on: `http://localhost:3000/`

---

## Database Schema

The implementation relies on the existing User model fields:

```javascript
{
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // ... other fields
}
```

Both `username` and `email` are:
- Required fields
- Automatically converted to lowercase
- Unique in the database

---

## Security Considerations

1. **Input Sanitization:** All inputs are converted to lowercase before database queries
2. **No Breaking Changes:** Existing authentication logic (password hashing, JWT generation) remains unchanged
3. **Email Validation:** The system uses a simple `@` check for detection. The email format is validated during registration, not login
4. **Case Insensitivity:** Prevents issues with inconsistent capitalization

---

## Deployment Notes

### Prerequisites
- Node.js 20.x for backend server (due to dependencies)
- MongoDB connection configured in `.env` file
- Environment variables set properly

### Environment Variables Required

**Backend (.env):**
```
URI=mongodb+srv://...
SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:3000
SENDGRID_API_KEY=...
EMAIL=...
PORT=5001
```

**Frontend (.env):**
```
REACT_APP_API_KEY=...
REACT_APP_SERVER_ORIGIN=http://localhost:5001
```

### Production Deployment
When deploying to production:
1. Update `CLIENT_ORIGIN` in backend to production URL
2. Update `REACT_APP_SERVER_ORIGIN` in frontend to production backend URL
3. Ensure both mobile apps are tested against the new backend
4. No mobile app code changes required

---

## Rollback Plan

If issues arise, rollback is simple:

**Frontend:**
```javascript
// Revert label back to "Username"
label="Username"
```

**Backend:**
```javascript
// Revert to original query
const user = await User.findOne({ username });
```

Both changes are isolated and can be reverted independently without affecting other functionality.

---

## Future Enhancements

Potential improvements for future iterations:

1. **Enhanced Email Validation:** Add regex validation for email format
2. **Login Analytics:** Track whether users prefer username vs email login
3. **Phone Number Support:** Extend to support phone number as third login method
4. **OAuth Integration:** Add social login options (Google, Apple)
5. **Rate Limiting:** Add login attempt limits for security

---

## References

### Previous Work
- **Branch:** `loginc` (created by Leo, previous senior developer)
- **Commits:** 
  - `5f17b82`: "FEAT: Login with Email or Username"
  - `ebc1b68`: Reverted changes
  - `df27ac1`: "Changed Username text in login to Username or Email"

This implementation builds upon Leo's previous work with improvements to the backend logic.

### Related Files
- Frontend: `/src/pages/public/Login.js`
- Backend: `/graphql/resolvers/users.js`
- User Model: `/models/User.js`
- Type Definitions: `/graphql/typeDefs.js`

---

## Support & Questions

For questions or issues:
- Contact: Marvin or Hector (Development Team Leads)
- Repository: https://github.com/shpe-uf/SHPE-UF-CLIENT
- Repository: https://github.com/shpe-uf/SHPE-UF-SERVER

---

## Summary

✅ Users can now log in with username OR email  
✅ Mobile apps remain fully compatible  
✅ No API parameter changes  
✅ Backward compatible with existing systems  
✅ Simple, maintainable implementation  
✅ Tested and working in development environment
