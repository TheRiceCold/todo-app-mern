import mongoose from "mongoose";
import { Request, Response } from "expres";
 
class BaseController {
  model: mongoose.Model<any, any>
  modelName: string

  constructor(model: mongoose.Model<any, any>) {
    this.model = model;
    this.modelName = model.modelName;
  }

  post = async(req: Request, res: Response) => {
    try {
      const data = req.body;
      const dbData = await this.model.create(data);
      res.status(200).send(dbData);
    } catch(error: any) {
      res.status(400).send(`Error in POST ${this.modelName}`);
    }
  }

  get = async(req: Request, res: Response) => {
    try {
      const dbData = await this.model.find();
      res.status(200).send(dbData);
    } catch(error: any) {
      res.status(200).send(`Error in GET ${this.modelName}`);
    }
  }

  getById = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const dbData = await this.model.find({ _id: id });
      res.status(200).send(dbData);
    } catch (error: any) {
      res.status(400).send(`Error in GET ${this.modelName}`);
    }
  }
}

export default BaseController;
