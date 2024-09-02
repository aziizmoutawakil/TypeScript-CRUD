import express  from "express";
import { EmployeeModel } from "../Data/Employee";

class EmployeeControllers{
    
    getAllEmployee = async (request: express.Request, response:express.Response)=>{
        try {
            const employees = await EmployeeModel.find()
            return response.status(200).json({data:employees})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    getEmployee = async (request: express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            const employee = await EmployeeModel.findById(id)
            return response.status(200).json({data:employee})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    CreatEmployee =  async (request: express.Request, response:express.Response)=>{
            
        try {
            const {name,email,mobile,dod,doj} = request.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dod,
                doj
            })
            
            await employee.save()
            return response.status(201).json({message:"employee created", data:employee})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    updateEmployee =  async (request: express.Request, response:express.Response)=>{
        try {
            const {id} = request.params
            const {name,email,mobile,dod,doj} = request.body;
            const employee = await EmployeeModel.findById(id)
    
            if(employee){
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dod = dod;
                employee.doj = doj;
                await employee.save()
                return response.status(200).json({message:"employee updated", data:employee})
            }
            return response.sendStatus(400).json("employee not find");
    
        } catch (error) {
            return response.sendStatus(400);
        }
    }


    DeleteEmployee = async (request: express.Request, response:express.Response)=>{
        try {
            const {id} = request.params;
            await EmployeeModel.findByIdAndDelete({_id:id})
            return response.status(200).json({message: "Emploi deleted"})
        } catch (error) {
            return response.sendStatus(400);
        }
    }
    
}
export default new EmployeeControllers
