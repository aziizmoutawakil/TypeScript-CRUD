import express  from "express"
import employeeControllers from "../Controllers/employeeControllers"

const router = express.Router()

router.get('/employe',employeeControllers.getAllEmployee )
router.get('/employe/:id',employeeControllers.getEmployee )
router.post('/employe',employeeControllers.CreatEmployee)
router.patch('/employe/:id',employeeControllers.updateEmployee)
router.delete('/employe/:id',employeeControllers.DeleteEmployee)

export default router;