export const store = async (req, res) => {
  const { name, email, password } = req.body;

  // Simulating model creation
  const user = { name, email, password };
  return res.json(user);
}