import { ErrorMapCtx, z } from 'zod'

const customErrorMap = (issue: any, ctx: ErrorMapCtx) => {
  console.log(issue)
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      if(issue.minimum === 1) {
        return { message: "入力必須項目です" }
      }
      return { message: `${issue.minimum}以上入力してください` }
    case z.ZodIssueCode.invalid_string:
      if(issue.validation === "url") {
        return { message: "url が不正な値です" }
      }
      if(issue.validation === "email") {
        return { message: "email が不正な値です" }
      }
      if(issue.validation === "uuid") {
        return { message: "uuid が不正な値です" }
      }
    default: 
      return { message: ctx.defaultError }
  }
}

export default z.setErrorMap(customErrorMap)
