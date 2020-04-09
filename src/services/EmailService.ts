interface IMailTo {
  name: string,
  email: string,
}

interface IMailMessage {
  subject: string,
  body: string,
  attachament?: Array<string>;
}

interface MessageDTO {
  to: IMailTo,
  message: IMailMessage,
}

class EmailService {
  send({ to, message }: MessageDTO) {
    console.log(`Email sent to ${to.email}: ${message.subject}`);
  }
}

export default EmailService;