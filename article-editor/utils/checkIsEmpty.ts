import isEmpty from "lodash/isEmpty"

const checkIsEmptyString = (string: string) => isEmpty(string) || string === "﻿"

export default checkIsEmptyString
