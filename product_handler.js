module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log(req.body)

    dbInstance.creating(req.body.name, req.body.description, req.body.price, req.body.imageurl)
                .then(()=> res.status(200).send())
                .catch(()=> res.status(500).send())
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.readItem([req.params.id])
                .then((product) => res.status(200).send(product))
                .catch(()=> res.status(500).send())
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.reading()
                .then((products)=> res.status(200).send(products))
                .catch(()=> res.status(500).send())
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.updating([req.params.id, req.query.desc ])
                .then(() => res.status(200).send())
                .catch(()=> res.status(500).send())
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.deleting([ req.params.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )
  }
};
