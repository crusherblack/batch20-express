const express = require("express");
const router = express.Router();

const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todos");

const {
  getPosts,
  getPostsById,
  addPost,
  editPost,
  deletePost,
} = require("../controllers/post");

const { getEmployees, getEmails } = require("../controllers/employeeEmail");

const {
  getProgrammers,
  getSkills,
} = require("../controllers/programmerSkills");

const { getBooks, getAuthors } = require("../controllers/authorBook");

router.get("/todos", getTodos);
router.post("/todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

router.get("/posts", getPosts);
router.get("/post/:id", getPostsById);
router.post("/post", addPost);
router.patch("/post/:id", editPost);
router.delete("/post/:id", deletePost);

// relasi One-To-One || HasOne & BelongsTo
router.get("/employees", getEmployees);
router.get("/emails", getEmails);

// relasi One-To-Many || HasMany & BelongsTo
router.get("/programmers", getProgrammers);
router.get("/skills", getSkills);

// relasi Many-To-Many || BelongsToMany & BelongsToMany
router.get("/books", getBooks);
router.get("/authors", getAuthors);

module.exports = router;
