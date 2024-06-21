import { NextApiResponse } from "next"
import nextConnect from "next-connect"
import multiparty from "multiparty"
import EditorRequest from "../types/api/EditorRequest"

const middleware = nextConnect()

middleware.use<EditorRequest, NextApiResponse>(async (req, res, next) => {
  const form = new multiparty.Form()

  await form.parse(req, function (err, fields, files) {
    req.body = fields
    req.files = files
    next()
  })
})

export default middleware
