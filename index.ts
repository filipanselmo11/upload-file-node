import  Express  from "express";
import { storage } from "./multerConfig";
import multer from "multer";

const upload =  multer({ storage: storage });

const app = Express();

app.use('/files', Express.static('uploads'));

app.post('/upload', upload.single('file'), (request, response) => {
    return response.json(request.file?.filename);
});

app.listen(3000);