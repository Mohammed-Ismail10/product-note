import { connecction } from "../../../database/connection.js";



export const addUser = (req, res) => {
  const { name, email, password, age } = req.body;
  console.log(name, email, password, age)
  const query = `select * from users where email='${email}'`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    if (result.length) {
      return res.json({ message: "email is exist" });
    }
    const query = `insert into users (name,email,password,age) values ('${name}', '${email}','${password}','${age}')`;
    connecction.execute(query, (error, result, fields) => {
      if (error) {
        return res.json({ message: "query error", error });
      }
      return res.json({ message: "success", result });
    });
  });
}

export const updateUser = (req, res) => {
  const { name, password, age } = req.body;
  const { id } = req.params;
  const query = `update users set name='${name}',password='${password}',age='${age}' where id=${id}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return result.affectedRows ? res.json({ message: "success" }) : res.json({ message: "invalid id" });
  });

}

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = `delete from users where id=${id}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return result.affectedRows ? res.json({ message: "success" }) : res.json({ message: "invalid id" });
  });
}

export const specificSearch = (req, res) => {
  const { startName, age } = req.query;
  const query = `select * from users where name like '${startName}%' and age < ${age}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: 'success', result });
  });
}

export const specificSearchById = (req, res) => {
  console.log(req.query.id)
  const query = `select * from users where id in (${req.query.id})`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: "success", result });
  });
}

export const getAllUsers = (req, res) => {
  const query = `select * from users `;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: 'success', result });
  });
}

export const getUsersAndProducts = (req, res) => {
  const query = `select users.name, products.pName, products.price, products.pDescription from users join products on users.id = products.createdby`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: 'success', result });
  });
}