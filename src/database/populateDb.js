require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");


const populateDb = async () => {
  try {
    const pool = getPool();

    console.log("Insertando datos de users...");

    await pool.query(`
        INSERT INTO users (email, password, name) VALUES 
        ("Fernando@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Fernando"),
        ("Pilar@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Pilar"),
        ("Paula@email.com", "${await bcrypt.hash(
          "123456",
          10
        )}", "Paula"),
        ("Pablo@email.com", "${await bcrypt.hash(
            "123456",
            10
          )}", "Pablo")
    `);

    console.log("Insertando datos de posts...");

    await pool.query(`
        INSERT INTO posts (image, description, userId) VALUES 
        ("12345.jpeg", "Ruta por Gredos. Precioso día rodeado de amigos", 1),
        ("12345.jpeg", "Italia. Gran país para disfrutar de sus monumentos", 2),
        ("12345.jpeg", "Formigal. Bonito lugar para hacer deporte y disfrutar de la naturaleza", 3),
        ("12345.jpeg", "Crucero por el Nilo. Impresionante viaje en barco", 4)

    `);

    console.log("Insertando datos de likes...");

    await pool.query(`
        INSERT INTO likes (postId, userId) VALUES 
        (1, 2),
        (1, 3),
        (2, 1)
    `);
    
    console.log("¡Datos insertados! 🥳");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
