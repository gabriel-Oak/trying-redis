import MailService from "../services/mail-service";

const RegistrationMailJob = {
  key: 'RegistrationMail',
  handler: async ({ data }) => {
    const { user } = data;

    await MailService.sendMail({
      from: 'Redis/Queue Test <gabriel@oak.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Bem vindo!',
      html: `Ola <strong>${user.name}</strong>, seja bem vindo à fila!`,
    });
  },
}

export default RegistrationMailJob;