import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Your name", email: "your_email@domain.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async sendEmail(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.send({
      to: { name: "Your name", email: "your_email@domain.com" },
      message: { subject: "Welcome to the system", body: "Be welcome!" },
    });

    return res.send("OK");
  },
};
