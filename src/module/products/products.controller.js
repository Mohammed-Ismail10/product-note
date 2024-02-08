import { connecction } from "../../../database/connection.js";


export const addProduct = (req, res) => {
  const { pName, price, pDescription, createdby } = req.body;
  const query = `insert into products (pName,price,pDescription,createdby) values ('${pName}','${price}','${pDescription}','${createdby}')`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: "success", result });
  });
}

export const deleteProduct = (req, res) => {
  const { createdby } = req.body;
  const { id } = req.params;
  const query = `delete from products where id=${id} AND createdby=${createdby}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return result.affectedRows ? res.json({ message: "success" }) : res.json({ message: "invalid id" });
  });
}

export const updateProduct = (req, res) => {
  const { pName, price, pDescription, createdby } = req.body;
  const { id } = req.params;
  const query = `update products set pName='${pName}', price='${price}', pDescription='${pDescription}' where id=${id} AND createdby=${createdby}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return result.affectedRows ? res.json({ message: "success", result }) : res.json({ message: "invalid id", result });
  });


}

export const getAllProducts = (req, res) => {
  const query = `select * from products`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: "success", result });
  });
}

export const search = (req, res) => {
  const { price } = req.body;
  const query = `select * from products where price > ${price}`;
  connecction.execute(query, (error, result, fields) => {
    if (error) {
      return res.json({ message: "query error", error });
    }
    return res.json({ message: "success", result });
  });
} 