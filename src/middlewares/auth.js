const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) res.status(401).send("unauthorized request");
  else {
    console.log("admin authorized");
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyzabc";
  const isAuthorized = token === "xyzabc";
  if (!isAuthorized) res.status(401).send("unauthorized request");
  else {
    console.log("user authorized");
    next();
  }
};

module.exports = { adminAuth, userAuth };
