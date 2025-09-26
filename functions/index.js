const { setGlobalOptions, logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// Optional: set defaults (region + cost guard)
setGlobalOptions({ region: "us-central1", maxInstances: 10 });

// HTTP test: open in browser to verify Functions are working
exports.helloWorld = onRequest((req, res) => {
  logger.info("helloWorld hit");
  res.send("Hello from BigJavaEO Functions!");
});

// Firestore trigger test: logs whenever a doc is created in 'submissions'
exports.awardPointsOnCreate = onDocumentCreated("submissions/{docId}", (event) => {
  const data = event.data?.data();
  logger.info("New submission created:", data);
  // put your points logic here later
  return;
});
