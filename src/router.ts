import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { getProducts,
        getOneProduct,
        createProduct,
        updateProduct,
        deleteProduct } from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";


const router = Router();


/*** PRODUCTS ***/
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.post("/product",
    body('name').isString(),
    handleInputErrors,
    createProduct);

router.put("/product/:id",
    body('name').isString(),
    handleInputErrors,
    updateProduct);

router.delete("/product/:id", deleteProduct);


/*** UPDATES ***/
router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.post("/update",
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    handleInputErrors,
    createUpdate);

router.put("/update/:id",
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('status').isIn([
        "IN_PROGRESS",
        "LIVE",
        "DEPRECATED",
        "ARCHIVED",
    ]).optional(),
    body('version').optional(),
    handleInputErrors,
    updateUpdate);

router.delete("/update/:id", deleteUpdate);


/*** UPDATE POINTS ***/
router.get("/updatepoint");

router.get("/updatepoint/:id");

router.post("/updatepoint",
    body('name').exists().isString(),
    body('description').exists().isString(),
    body('updateId').exists().isString(),
    handleInputErrors);

router.put("/updatepoint/:id",
    body('name').optional().isString(),
    body('description').optional().isString(),
    handleInputErrors);

router.delete("/updatepoint/:id");


// API Error Handler
router.use((err, req, res, next) => {
    console.log(err);
    if (err.type === 'PrismaClientKnownRequestError') {
        res.status(400);
        res.json({message: `${err.dataModel} does not exist and/or user is not authorized to access`})
    } else {
        res.status(500);
        res.json({message: "Server Error"});
    }
})

export default router;
