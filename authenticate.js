const  passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: '67945913425-ghuhq6adupoisltkp9o8q60hp76i4lua.apps.googleusercontent.com',
    clientSecret: '46jfABEG8w0sONGxuqzuUTll',
    callbackURL: "http://localhost:5000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Register user here.
    console.log(profile);
    cb(null, profile);
  }
));