// tableau d'utilisateurs
const users = [
  {
    id: 1,
    username: 'Anas',
    email: 'anas@gmail.com',
    password: '1234',
  },
  {
    id: 2,
    username: 'User',
    email: 'test@example.com',
    password: 'password',
  },
];

export const login = async (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        return { token: `fake-token-${user.id}`, user };
    } else {
        throw new Error('Invalid credentials');
    }
};

export const register = async (email, password, username) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        throw new Error('Utilisateur déjà existant');
    } else {
        users.push({ id: users.length + 1, email, password, username });
        return { id: users.length + 1, email, password, username };
    }
};
