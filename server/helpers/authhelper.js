const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    const saltRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

exports.comparePassword = async (password, hashedPasswordAtlas) => {
  return bcrypt.compare(password, hashedPasswordAtlas);
};
