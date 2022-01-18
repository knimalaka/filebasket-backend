'use stirct'

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {multipleFileUpload,
     getAllMultipleFiles} = require('../controllers/fileUploaderController');
const router = express.Router();

router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getMultipleFiles', getAllMultipleFiles);

module.exports = {
    routes: router
}