var push = require("web-push");

let vapidkeys = {
  publicKey:
    "BFEEQKd6gDZNqDwn2oozEMcDAD5BiFs921YSSdolcdYBEdn232X6pBUtVYAYRxiB2qICDutws5ycyF1JtT-8__k",
  privateKey: "UmnZ3XuW2ettpPQq4dFkPwL1V-HRvuICIdtuRwMEw6E",
};

push.setVapidDetails(
  "mailto:shankhar87@gmail.com",
  vapidkeys.publicKey,
  vapidkeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
