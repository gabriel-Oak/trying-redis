import QueueService from "../../services/queue-service";

export const store = async (req, res) => {
  const { name, email, password } = req.body;

  // Simulating model creation
  const user = { name, email, password };

  QueueService.add('RegistrationMail', { user });
  QueueService.add('UserReport', { user });
  return res.json(user);
}