// index.ts
import express from "express";
import { Server } from "socket.io";

// mongo.ts
import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();
var client = new MongoClient(process.env.MONGO_STRING);
(async () => {
  try {
    await client.connect();
    console.log("\nConnected to the Database");
    console.log("======================================");
  } catch (e2) {
    console.error(e2);
  }
})();
var db = client.db("persona");

// io/index.ts
import { ObjectId } from "mongodb";
var users = db.collection("users");
var messages = db.collection("messages");
function IOHandler(io2) {
  io2.on("connection", async (socket) => {
    socket.on("login", async (token, callback) => {
      let user = await users.findOne({ token });
      if (!user)
        return;
      await users.updateOne({ token }, { $set: { online: true } });
      await callback(user);
      console.log(`${user.username} (${user._id.toString()}) joined the website`);
      socket.emit("retrieve_messages", await doRetrieveMessages());
      async function doRetrieveMessages() {
        let allMessages = await messages.find().toArray();
        let parsedAllmessages = [];
        for (let msg of allMessages) {
          if (msg.targetId) {
            if (user._id.equals(msg.targetId)) {
              parsedAllmessages.push(msg);
            }
          } else
            parsedAllmessages.push(msg);
        }
        return parsedAllmessages;
      }
      socket.on("message", async (content, target) => {
        if (!content)
          return;
        await messages.insertOne({
          createdAt: Date.now(),
          userId: user._id,
          content,
          targetId: target ? target._id : null
        });
        for (let [id, socket2] of io2.sockets.sockets) {
          socket2.emit("retrieve_messages", await doRetrieveMessages());
        }
      });
      socket.on("get_messages", async (callback2) => {
        await callback2(await doRetrieveMessages());
      });
      socket.on("disconnect", async () => {
        console.log(`${user.username} (${user._id.toString()}) left the website`);
        await users.updateOne({ token: user.token }, { $set: { online: false } });
      });
      if (user.admin) {
        socket.on("dashbord", () => {
          socket.on("get_users", async (callback2) => {
            callback2(await users.find().toArray());
          });
          socket.on("delete_user", async (userId, message) => {
            let u = await users.findOne({ _id: new ObjectId(userId) });
            if (u?.admin) {
              message("Can't delete an admin user");
            } else
              await users.deleteOne({ _id: u?._id });
          });
        });
      }
    });
  });
}

// api/index.ts
import e, { Router as Router5 } from "express";

// api/routes/users.ts
import { Router } from "express";

// api/auth.ts
var collection = db.collection("users");
var auth = async (req, res, next) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  if (!token)
    return res.status(403).json({ message: "Authorization not provided" });
  let user = await collection.findOne({ token });
  if (user) {
    next();
  } else {
    res.clearCookie("token");
    res.status(403).json({ message: "Invalid authorization" });
  }
};
var auth_default = auth;

// api/routes/users.ts
import { compareSync, hashSync } from "bcrypt";
import dayjs from "dayjs";
import passwordValidator from "password-validator";
import * as EmailValidator from "email-validator";
import { ObjectId as ObjectId2 } from "mongodb";
import multer from "multer";

// api/plugins/imgurUpload.ts
import { Client as ImgurClient } from "@rmp135/imgur";
import { readFileSync, rmSync } from "fs";
var imgur = new ImgurClient({
  client_id: process.env.IMGUR_ID,
  client_secret: process.env.IMGUR_SECRET,
  access_token: process.env.IMGUR_ACCESS,
  refresh_token: process.env.IMGUR_REFRESH
});
async function upload(file, name) {
  let res = { updated: false };
  try {
    let result = await imgur.Image.upload(readFileSync(file.path, { encoding: "base64" }), {
      name: file.filename
    });
    rmSync(file.path);
    res.url = result.data.link;
    res.updated = true;
    return res;
  } catch (e2) {
    console.log(e2);
    res.updated = true;
    return res;
  }
}

// api/websiteRequest.ts
var websiteRequest = async (req, res, next) => {
  if (req.headers["referer"] && req.headers["referer"].includes("persona-db.xyz"))
    next();
  else
    res.status(403).json({ message: "this request is only allowed on the website" });
};
var websiteRequest_default = websiteRequest;

// api/routes/users.ts
var schema = new passwordValidator().is().min(8).is().max(30).has().uppercase().has().lowercase().has().digits().has().not().spaces().is().not().oneOf(["Passw0rd", "Password123"]);
var collection2 = db.collection("users");
function randomToken() {
  let len = 100;
  let ret = "";
  let chars = "abcdefghijklmnopqrstuvwxyz1234567890.-";
  for (let i = 0; i < len; i++) {
    ret += chars[Math.floor(Math.random() * chars.length)];
  }
  return ret;
}
var route = Router();
route.get("/:id?", async (req, res) => {
  if (req.params.id) {
    let user = null;
    if (req.params.id.startsWith("@")) {
      let username = req.params.id.replace("@", "");
      user = await collection2.findOne({ username });
    } else {
      user = await collection2.findOne({ _id: new ObjectId2(req.params.id) });
    }
    if (!user)
      return res.status(404).json({ message: "couldn't find user" });
    else {
      return res.json({
        username: user.username,
        _id: user._id,
        avatar: user.avatar,
        createdAt: user.createdAt,
        online: user.online
      });
    }
  } else {
    let users4 = [];
    let mongoUsers = await collection2.find().toArray();
    for (let user of mongoUsers) {
      users4.push({
        username: user.username,
        _id: user._id,
        avatar: user.avatar,
        createdAt: user.createdAt,
        online: user.online
      });
    }
    res.json(users4);
  }
});
route.post("/", websiteRequest_default, async (req, res) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(500).json({
      message: "account creation must have: username, email and password."
    });
  let u = await collection2.findOne({ username }) || await collection2.findOne({ email });
  if (u)
    return res.status(500).json({ message: "account already exists with email or username" });
  if (!schema.validate(password)) {
    res.status(500).json({
      message: "Must be secure password, must have at least, 1 digit, 1 uppercase, 1 lowercase, must not contain spaces"
    });
    return;
  }
  if (!EmailValidator.validate(email)) {
    res.status(500).json({
      message: "Must be a valid email"
    });
    return;
  }
  let token = randomToken();
  let hashedPassword = hashSync(password, 10);
  let result = await collection2.insertOne({
    username,
    email,
    token,
    password: hashedPassword,
    createdAt: Date.now(),
    ip: req.headers["x-forwarded-for"]
  });
  res.cookie("token", token);
  return res.json({
    message: "OK",
    token,
    _id: result.insertedId
  });
});
route.delete("/", auth_default, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let result = await collection2.updateOne({ token }, { $set: { suspendedAt: Date.now() } });
  res.json({
    message: "account suspended. Will be deleted in 30 days.",
    _id: result.upsertedId
  });
});
var singlerMulter = multer({ dest: "./files" }).single("file");
route.put("/", auth_default, singlerMulter, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let u = await collection2.findOne({ token });
  if (u.suspendedAt) {
    const date1 = dayjs(u.suspendedAt);
    const date2 = dayjs();
    let hours = date2.diff(date1, "hours");
    const days = Math.floor(hours / 24);
    hours = hours - days * 24;
    res.status(403).json({
      message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
    });
    return;
  }
  let { username, email, password, bio } = req.body;
  let updateObject = {};
  let errorNotUpdated = [];
  if (username) {
    let u2 = await collection2.findOne({ username });
    if (!u2)
      updateObject.username = username;
    else
      errorNotUpdated.push("username");
  }
  if (email)
    updateObject.email = email;
  if (bio)
    updateObject.bio = bio;
  if (password)
    updateObject.password = hashSync(password, 10);
  let isFileUpdated = false;
  if (req.file) {
    let uploadResult = await upload(req.file, u.name);
    if (uploadResult.url)
      updateObject.avatar = uploadResult.url;
    isFileUpdated = uploadResult.updated;
  }
  await collection2.updateOne({ token: req.cookies["token"] }, { $set: updateObject });
  if (errorNotUpdated.length > 0) {
    if (errorNotUpdated.includes("username") && isFileUpdated) {
      res.json({
        message: "Username already exists. Avatar has been updated! <a href='/profile'>Reload</a>"
      });
    }
    if (errorNotUpdated.includes("username") && !isFileUpdated) {
      res.status(500).json({ message: "Username already exists." });
    }
  } else
    res.json({ message: "It has been updated! <a href='/profile'>Reload</a>" });
});
route.post("/login", async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password)
    return res.status(500).json({ message: "Username or password not provided" });
  let u = await collection2.findOne({ username });
  if (!u || !compareSync(password, u.password))
    return res.status(404).json({ message: "Cannot find account with username and password" });
  if (u.suspendedAt) {
    const date1 = dayjs(u.suspendedAt);
    const date2 = dayjs();
    let hours = date2.diff(date1, "hours");
    const days = Math.floor(hours / 24);
    hours = hours - days * 24;
    res.status(403).json({
      message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
    });
    return;
  }
  res.cookie("token", u.token);
  res.json({ message: "Logged in", token: u.token });
});
route.post("/exchange", auth_default, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let u = await collection2.findOne({ token });
  if (u.suspendedAt) {
    const date1 = dayjs(u.suspendedAt);
    const date2 = dayjs();
    let hours = date2.diff(date1, "hours");
    const days = Math.floor(hours / 24);
    hours = hours - days * 24;
    res.status(403).json({
      message: `account suspended, ask the support to recover within ${days} days and ${hours} hours.`
    });
    return;
  }
  res.json({ ...u, message: "OK" });
});
var users_default = route;

// api/routes/characters.ts
import { Router as Router2 } from "express";
import { ObjectId as ObjectId3 } from "mongodb";
function generateID() {
  let res = "";
  let len = 6;
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (let i = 0; i < len; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}
var collection3 = db.collection("characters");
var users2 = db.collection("users");
var route2 = Router2();
route2.get("/:code?", async (req, res) => {
  if (req.params.code) {
    let chara = await collection3.findOne({ code: req.params.code });
    if (chara) {
      res.json(chara);
    } else {
      res.status(404).json({ message: "couldn't find chara with code" });
    }
  } else {
    let charas = await collection3.find().toArray();
    res.json(charas);
  }
});
route2.post("/", auth_default, async (req, res) => {
  let { name, description, stats, tags, icon, refsheet } = req.body;
  if (!name || !description)
    return res.status(500).json({
      message: "character creation must have: name, description."
    });
  if (await collection3.findOne({ name })) {
    res.status(500).json({ message: "character already exists with name" });
    return;
  }
  let now = Date.now();
  let code = generateID();
  let owner = await users2.findOne({ token: req.cookies["token"] });
  let result = await collection3.insertOne({
    ownerId: owner._id,
    name,
    code,
    description,
    editedAt: now,
    createdAt: now,
    stats,
    tags,
    icon,
    refsheet
  });
  return res.json({
    message: "OK",
    code,
    _id: result.insertedId
  });
});
route2.delete("/:id", auth_default, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let u = await users2.findOne({ token });
  if (!req.params.id)
    return res.status(500).json({ message: "must provide character _id" });
  let chara = await collection3.findOne({ _id: new ObjectId3(req.params.id) });
  if (!u._id.equals(chara.ownerId)) {
    res.status(403).json({ message: "you are not the owner" });
    return;
  }
  let result = await collection3.deleteOne({
    _id: new ObjectId3(req.params.id)
  });
  res.json({
    message: "character deleted",
    isOk: result.acknowledged
  });
});
route2.put("/", auth_default, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let u = await users2.findOne({ token });
  let { _id, description, name, stats, tags, icon, refsheet } = req.body;
  if (!_id)
    return res.status(500).json({ message: "must provide character _id" });
  let chara = await collection3.findOne({ _id: new ObjectId3(_id) });
  if (!u._id.equals(chara.ownerId)) {
    res.status(403).json({ message: "you are not the owner" });
    return;
  }
  let updateObj = {};
  if (description)
    updateObj.description = description;
  if (name)
    updateObj.name = name;
  if (stats)
    updateObj.stats = stats;
  if (tags)
    updateObj.tags = tags;
  if (icon)
    updateObj.icon = icon;
  if (refsheet)
    updateObj.refsheet = refsheet;
  let result = await collection3.updateOne({ _id: chara._id }, { $set: updateObj });
  res.json({ message: "character updated", _id: result.upsertedId });
});
var characters_default = route2;

// api/routes/upload.ts
import { Router as Router3 } from "express";
import multer2 from "multer";
var route3 = Router3();
var single = multer2({ dest: "./files" }).single("image");
route3.post("/", single, async (req, res) => {
  if (req.file) {
    try {
      let result = await upload(req.file);
      if (result.url) {
        res.json({ url: result.url });
      } else {
        res.status(500).json({ message: "error while uploading image" });
      }
    } catch (e2) {
      console.log(e2);
    }
  } else {
    res.status(500).json({ message: "no file provided" });
  }
});
var upload_default = route3;

// api/routes/changelogs.ts
import { Router as Router4 } from "express";

// api/adminAuth.ts
var collection4 = db.collection("users");
var adminAuth = async (req, res, next) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  if (!token)
    return res.status(403).json({ message: "Authorization not provided" });
  let user = await collection4.findOne({ token });
  if (user) {
    if (user.admin)
      next();
    else {
      res.status(403).json({ message: "Admin users can only perform that action" });
    }
  } else {
    res.clearCookie("token");
    res.status(403).json({ message: "Invalid authorization" });
  }
};
var adminAuth_default = adminAuth;

// api/routes/changelogs.ts
var collection5 = db.collection("changelogs");
var users3 = db.collection("users");
var route4 = Router4();
route4.post("/", adminAuth_default, async (req, res) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let user = await users3.findOne({ token });
  let { content } = req.body;
  collection5.insertOne({
    createdAt: Date.now(),
    userId: user?._id.toString(),
    content
  });
  res.json({ message: "ok" });
});
route4.get("/", async (req, res) => {
  res.json(await collection5.find().toArray());
});
var changelogs_default = route4;

// api/index.ts
import cookieParser from "cookie-parser";

// api/logger.ts
var collection6 = db.collection("users");
var logger = async (req, res, next) => {
  let token = req.cookies["token"] || req.headers["authorization"];
  let userData = token ? await collection6.findOne({ token }) : null;
  let userStr = userData ? `${userData.username} (${userData._id.toString()})` : "anonymous";
  console.log(
    `${req.method.toUpperCase()} ${req.path} ${userStr} (${req.headers["x-forwarded-for"]})`
  );
  next();
};
var logger_default = logger;

// api/index.ts
import path from "node:path";
import cookieSession from "cookie-session";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var route5 = Router5();
function APIHandler(app2, server2) {
  app2.use((req, res, next) => {
    console.log(req.headers);
    res.header("Access-Control-Allow-Origin", req.headers.origin || req.headers["host"]);
    let blockedIps = ["54.66.245.129", "146.190.197.169", "172.104.41.253"];
    let block = false;
    for (let ip of blockedIps) {
      if (req.headers["x-forwarded-for"]?.includes(ip)) {
        block = true;
        console.log(`Blocked`);
      }
    }
    if (block)
      res.send("blocked");
    else
      next();
  });
  route5.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin || req.headers["host"]);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    next();
  });
  route5.use("/files", e.static(path.join(__dirname, "files")));
  route5.use(e.json());
  route5.use(e.urlencoded());
  route5.use(cookieParser());
  route5.use(
    cookieSession({
      secret: randomUUID(),
      httpOnly: false,
      sameSite: "strict",
      path: "/",
      domain: "persona-db.xyz",
      maxAge: Date.now() + 2592e6
    })
  );
  route5.use(logger_default);
  route5.get("/", (req, res) => {
    res.send("Hello World");
  });
  route5.use("/characters", characters_default);
  route5.use("/users", users_default);
  route5.use("/upload", upload_default);
  route5.use("/changelogs", changelogs_default);
  return route5;
}
var api_default = { APIHandler };

// index.ts
import { handler } from '../build/handler.js';
import dotenv from "dotenv";
import http from "node:http";
dotenv.config();
var app = express();
var server = http.createServer(app);
var io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
var route6 = api_default.APIHandler(app, server);
app.use("/api", route6);
app.use(handler);
IOHandler(io);
server.listen(process.env.PORT, () => {
  console.log(
    `
__________                                            _________                                
\\______   \\ ___________  __________   ____ _____     /   _____/ ______________  __ ___________ 
 |     ___// __ \\_  __ \\/  ___/  _ \\ /    \\\\__  \\    \\_____  \\_/ __ \\_  __ \\  \\/ // __ \\_  __ \\
 |    |   \\  ___/|  | \\/\\___ (  <_> )   |  \\/ __ \\_  /        \\  ___/|  | \\/\\   /\\  ___/|  | \\/
 |____|    \\___  >__|  /____  >____/|___|  (____  / /_______  /\\___  >__|    \\_/  \\___  >__|   
               \\/           \\/           \\/     \\/          \\/     \\/                 \\/       
`
  );
  console.log(`Server is listening
`);
  console.log(`- Local : http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map