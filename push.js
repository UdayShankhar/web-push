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

let sub = {
  endpoint:
    "https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAAFV2GDtCaWLrI2yAeVTV6hXWjCnqtgLZDxXV797CpGbHhuAr1ELer8OymTDxjqflGGXENJbVHl5m2pfezw008%2fepJlVLZkl%2bPNhqfA4%2fLYQXgwCMEWB8qZ%2bTwvqEq7NXNJMFQmLPMEVMOSHSyaypTu1RaUgpSMC%2fOQXr3niUHKKoCY2K0n6BIJtVmYm%2bsjRiyYuQ7niHtJ8xNBq0H6Im37OpapJ%2bQ6MOhkLxjpkuImPgUSEBTbnVU6O%2fCDww9%2bp27Q8x6sUIhaV7L5yVFMuJhnVGy9CHHu%2b3mzK%2b1MpJoNzqZtK7HbhkNLeAfT7u2colciE%2bwsyhBvehJ6SjLEq38QKMey2DesLH6DfwdY65yvSg%3d%3d",
  expirationTime: null,
  keys: {
    p256dh:
      "BB1u0fYu7zNhmk1pzZV_5-IUB5wo24F3u3ybYrW95PC2tfCD3MT1yR4jc7_4pPJf3y2EvWy000HRjK9HhOHobw4",
    auth: "4B6lW8j27f0ZSvcMpNgk6A",
  },
};
push.sendNotification(sub, "test message");
