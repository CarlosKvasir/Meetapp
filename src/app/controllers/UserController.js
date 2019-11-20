import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExits = await User.findOne({ where: { email: req.body.email } });

    if (userExits)
      return res.status(403).json({ error: 'This user already exists. 😢' });

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    console.log(req.userId);

    return res.json({ ok: true });
  }
}

export default new UserController();
