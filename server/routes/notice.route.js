import express from 'express';
import { create, getAllNotices } from '../controllers/notice.controller.js';

const noticeRouter = express.Router();

noticeRouter.post("/create", create)

noticeRouter.get("/", getAllNotices);

export default noticeRouter;