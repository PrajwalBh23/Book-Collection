import Book from '../model/Book.js';
import multer from "multer";

export const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message: "No message found" });
    }
    return res.status(200).json({ books });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads'); // Specify the directory to save uploaded files
  },
  filename: function (req, file, cb) {
    const originalFileName = file.originalname;
    cb(null, originalFileName); // Save the file with the original filename
  },
});

const upload = multer({ storage: storage });

export const addBooks = async (req, res, next) => {
  try {
    upload.single('image')(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: 'File upload error' });
      } else if (err) {
        console.log(err); // Log the error for debugging
        return res.status(500).json({ message: 'Internal server error' });
      }

      const { name, author, description, price, available } = req.body;
      const imageFilename = req.file.filename; 

      const book = new Book({
        name,
        author,
        description,
        price,
        available,
        image: imageFilename, 
      });

      try {
        // Save the book to the database
        const savedBook = await book.save();
        return res.status(201).json({ book: savedBook });
      } catch (validationError) {
        console.log(validationError);
        return res.status(400).json({ message: 'Validation error', errors: validationError.errors });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getbyID = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: "No book Found" });
    }
    return res.json({ book });
};

export const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        }, { new: true });
        book = await book.save();
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update" });
    }
    return res.status(200).json({ book });
}

export const delectBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update" });
    }
    return res.status(200).json({ message: "Successsfully removed" });
}