import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {name: 'Lucas Gabriel', email: 'lg.technus@gmail.com'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async sendEmail(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.send(
      { name: 'Lucas Gabriel', email: 'lg.technus@gmail.com' },
      { subject: 'Welcome to the system', body: 'Be welcome!'}
    );

    return res.send('OK');
  }
};