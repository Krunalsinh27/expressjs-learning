import express from 'express';
import path from 'path';

const app = express();

const staticPath = path.join(import.meta.dirname, 'public');

app.use(express.static(staticPath));

app.listen(3000, (req, res) => {
    console.log("Server on starting on port 3000 ");    
});
