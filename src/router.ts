import { Router } from "express";

const router = Router();

/**
 * PRODUCTS
 */
// Get all
router.get("/product", (req, res) => {
  res.json({ message: "No products to show" });
});
// Get one
router.get("/product/:id", (req, res) => {});
// Create new
router.post("/product", (req, res) => {});
// Update one
router.put("/product/:id", (req, res) => {});
// Delete one
router.delete("/product/:id", (req, res) => {});


/**
 * UPDATES
 */
// Get all
router.get("/update", (req, res) => {});
// Get one
router.get("/update/:id", (req, res) => {});
// Create new
router.post("/update", (req, res) => {});
// Update one
router.put("/update/:id", (req, res) => {});
// Delete one
router.delete("/update/:id", (req, res) => {});


/**
 * UPDATE POINTS
 */
// Get all
router.get("/updatepoint", (req, res) => {});
// Get one
router.get("/updatepoint/:id", (req, res) => {});
// Create new
router.post("/updatepoint", (req, res) => {});
// Update one
router.put("/updatepoint/:id", (req, res) => {});
// Delete one
router.delete("/updatepoint/:id", (req, res) => {});


export default router;
