import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

function autenticarUsuario(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization
    if (!authorization)
        return res.status(403).json({ status: "Não está autorizado para acessar essa rota!!" })

    const [metodo, token] = authorization.split(" ")

    if (metodo.toLowerCase() !== "bearer")
        return res.status(403).json({ status: "Não trabalhamos com esse método de autenticação!!" })
    
    console.log(token)    
    try {
        jwt.verify(token, process.env.JWT_KEY ?? "")
    } catch (e) {
        return res.status(403).json({ status: "Token inválido!!!" })
    }
    next()
}

export { autenticarUsuario }