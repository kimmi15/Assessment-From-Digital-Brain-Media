const router = require("express").Router();

const user = require("../controllers/auth");
const todo = require("../controllers/todo");
const auth = require("../middleware/auth");

router.post("/create-user", user.createUser);
router.post("/login", user.login);

//todo
router.post("/create-todo", auth.authantication, todo.createTodo);
router.post("/update-status", auth.authantication, todo.updateStatus);
router.post("/update-todo", auth.authantication, todo.updateTodo);
router.post("/delete-todo", auth.authantication, todo.deleteTodo);
router.get("/get-todo-data", auth.authantication, todo.getTodo);

module.exports = router;
