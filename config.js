const env = process.env;
export const nodeEnv = env.NODE_ENV || "development";

export const logStars = function (messge) {
  console.info("********");
  console.info(messge);
  console.info("*******");
};

export default {
  port: env.PORT || 8080,
};
//this port read from env.PORT and default to 8080
//This way we can control the port from the process
