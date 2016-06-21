function ensureAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  } else {
    req.flash('messages', {
      status: 'success',
      value: 'You need to sign in before continuing.'
    });
    return res.redirect('/auth/log_in');
  }
}

function ensureVerified(req, res, next) {
  if (req.user.verified) {
    return next();
  } else {
    req.flash('messages', {
      status: 'success',
      value: 'Please verify your account.'
    });
    return res.redirect('/auth/log_in');
  }
}

function ensureAdmin(req, res, next) {
  if (req.user) {
    if (req.user.admin) {
      return next();
    }
  }
  req.flash('messages', {
    status: 'success',
    value: 'You do not have permission to view that page.'
  });
  return res.redirect('/auth/log_in');
}

function loginRedirect(req, res, next) {
  if (req.user) {
    return res.redirect('/');
  } else {
    return next();
  }
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  ensureAdmin: ensureAdmin,
  loginRedirect: loginRedirect
};
